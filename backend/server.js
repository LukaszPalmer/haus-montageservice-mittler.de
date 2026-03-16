import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs/promises";
import { existsSync, mkdirSync } from "fs"; // WICHTIG FÜR RAILWAY

dotenv.config();

// --- FIX 1: UPLOADS ORDNER AUTOMATISCH ERSTELLEN ---
// Verhindert den Server-Absturz auf Railway, wenn der Ordner fehlt.
const uploadDir = "uploads/";
if (!existsSync(uploadDir)) {
    mkdirSync(uploadDir, { recursive: true });
}

const app = express();
const upload = multer({ dest: uploadDir });

console.log("=== SERVER START ===");
console.log("Erwarteter Port:", process.env.PORT || 5000);

// --- FIX 2: ROBUSTE CORS KONFIGURATION ---
// Da keine Cookies gesendet werden, erlauben wir pauschal alle Zugriffe.
// Das verhindert CORS-Blockaden zwischen Vercel und Railway.
app.use(
    cors({
        origin: "*",
        methods: ["GET", "POST", "OPTIONS"],
    })
);

app.use(express.json());

const smtpHost = (process.env.IONOS_SMTP_HOST || "smtp.ionos.de").trim();
// Fallback auf 465, falls die Env-Variable mal leer ist
const smtpPort = Number((process.env.IONOS_SMTP_PORT || "465").trim());
const smtpUser = (process.env.EMAIL_USER || "").trim();
const smtpPass = (process.env.EMAIL_PASS || "").trim();
const mailReceiver = (process.env.EMAIL_RECEIVER || smtpUser).trim();

if (!smtpUser || !smtpPass) {
    console.error("🚨 FEHLER: E-Mail Benutzer oder Passwort fehlen!");
}

const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // Port 465 = true (SSL), 587 = false (STARTTLS)
    auth: {
        user: smtpUser,
        pass: smtpPass,
    },
    logger: true,
    debug: true,
});

transporter
    .verify()
    .then(() => console.log("✅ SMTP-Verbindung zu IONOS erfolgreich."))
    .catch((err) => console.error("❌ SMTP Verifizierungsfehler:", err));

app.get("/", (req, res) => {
    res.send("<h1>Backend läuft!</h1><p>Der E-Mail-Server ist bereit.</p>");
});

app.post("/api/send-email", upload.array("attachments"), async (req, res) => {
    console.log("\n=== NEUE ANFRAGE: /api/send-email ===");

    const uploadedFiles = req.files || [];
    console.log(`Anzahl hochgeladener Dateien: ${uploadedFiles.length}`);

    try {
        const { name, email, phone, subject, message, type } = req.body;

        const mailOptions = {
            from: smtpUser, // IONOS erfordert, dass Absender = Login-Mail ist
            to: mailReceiver,
            replyTo: email, // Damit du auf die E-Mail direkt antworten kannst
            subject: `[${type}] Neue Nachricht von ${name} - ${subject}`,
            text: `Neue Anfrage über die Webseite:\n\nTyp: ${type}\nName: ${name}\nE-Mail: ${email}\nTelefon: ${phone}\nBereich: ${subject}\n\nNachricht:\n${
                message || "Keine Nachricht hinterlassen."
            }`,
            attachments: uploadedFiles.map((file) => ({
                filename: file.originalname,
                path: file.path,
            })),
        };

        const info = await transporter.sendMail(mailOptions);
        console.log(
            "✅ E-Mail erfolgreich gesendet! Message-ID:",
            info.messageId
        );

        return res.status(200).json({
            success: true,
            message: "E-Mail erfolgreich gesendet!",
        });
    } catch (error) {
        console.error("❌ Fehler beim Senden:", error);
        return res.status(500).json({
            success: false,
            error: "Fehler beim Senden der E-Mail.",
        });
    } finally {
        if (uploadedFiles.length > 0) {
            await Promise.all(
                uploadedFiles.map(async (file) => {
                    try {
                        await fs.unlink(file.path);
                    } catch (e) {
                        console.error(
                            `❌ Konnte Datei nicht löschen: ${file.path}`,
                            e
                        );
                    }
                })
            );
        }
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Backend Server läuft auf Port: ${PORT}`);
});
