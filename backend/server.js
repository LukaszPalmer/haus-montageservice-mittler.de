import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

// --- DEBUG: Umgebungsvariablen-Check beim Start ---
console.log("=== SERVER START ===");
console.log("Erwarteter Port:", process.env.PORT || 5000);

// --- ROBUSTE CORS KONFIGURATION ---
const allowedOrigins = [
    "http://localhost:5173",
    "https://haus-montageservice-mittler.de",
    "https://www.haus-montageservice-mittler.de",
    "https://haus-montageservice-mittler-de.vercel.app" // Deine Vercel Test-URL
];

app.use(
    cors({
        origin: function (origin, callback) {
            // Erlaube Anfragen ohne Origin (Postman, Server-to-Server)
            if (!origin) return callback(null, true);

            // Prüfe, ob die Origin in unserer Liste ist (wir ignorieren Slashes am Ende)
            const isAllowed = allowedOrigins.some(allowedDomain => 
                origin.startsWith(allowedDomain)
            );

            if (isAllowed) {
                return callback(null, true);
            } else {
                console.error(`[CORS FEHLER] Origin blockiert: ${origin}`);
                return callback(new Error("CORS-Richtlinie verweigert den Zugriff."), false);
            }
        },
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());

// Umgebungsvariablen laden
const smtpHost = (process.env.IONOS_SMTP_HOST || "smtp.ionos.de").trim();
const smtpPort = Number((process.env.IONOS_SMTP_PORT || "587").trim()); // Standardmäßig auf 587
const smtpUser = (process.env.EMAIL_USER || "").trim();
const smtpPass = (process.env.EMAIL_PASS || "").trim();
const mailReceiver = (process.env.EMAIL_RECEIVER || smtpUser).trim();

if (!smtpUser || !smtpPass) {
    console.error("🚨 FEHLER: E-Mail Benutzer oder Passwort fehlen in der .env Datei!");
}

// Transporter-Konfiguration (Optimiert für IONOS & mit DEBUG-Modus)
const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465, // WICHTIG: Port 465 = true, Port 587 = false!
    auth: {
        user: smtpUser,
        pass: smtpPass,
    },
    logger: true, // <--- GIBT JEDEN SCHRITT IM LOG AUS
    debug: true,  // <--- ZEIGT UNS GENAU, WO ES HÄNGT
    connectionTimeout: 10000, 
    greetingTimeout: 10000,
    socketTimeout: 10000,
    tls: {
        rejectUnauthorized: false 
    }
});

// Verbindung beim Start prüfen
transporter
    .verify()
    .then(() => console.log("✅ SMTP-Verbindung zu IONOS erfolgreich."))
    .catch((err) => console.error("❌ SMTP Verifizierungsfehler:", err));

// --- ROUTEN ---

// Test-Route
app.get("/", (req, res) => {
    console.log("[GET /] Health-Check wurde aufgerufen.");
    res.send("<h1>Backend läuft!</h1><p>Der E-Mail-Server ist bereit.</p>");
});

// Haupt-Route für den E-Mail Versand
app.post("/api/send-email", upload.array("attachments"), async (req, res) => {
    console.log("\n=== NEUE ANFRAGE: /api/send-email ===");
    console.log("Body Daten (Formular):", req.body);
    
    const uploadedFiles = req.files || [];
    console.log(`Anzahl hochgeladener Dateien: ${uploadedFiles.length}`);

    try {
        const { name, email, phone, subject, message, type } = req.body;

        const mailOptions = {
            from: smtpUser,
            to: mailReceiver,
            replyTo: email,
            subject: `[${type}] Neue Nachricht von ${name}`,
            text: `Anfrage-Typ: ${type}\nName: ${name}\nE-Mail: ${email}\nTel: ${phone}\nBetreff/Bereich: ${subject}\n\nNachricht:\n${message || ""}`,
            attachments: uploadedFiles.map((file) => ({
                filename: file.originalname,
                path: file.path,
            })),
        };

        console.log("Sende E-Mail an:", mailReceiver, "...");
        const info = await transporter.sendMail(mailOptions);
        console.log("✅ E-Mail erfolgreich gesendet! Message-ID:", info.messageId);

        return res.status(200).json({
            success: true,
            message: "E-Mail erfolgreich gesendet!",
        });
    } catch (error) {
        console.error("❌ Fehler beim Senden der E-Mail:", error);
        return res.status(500).json({
            success: false,
            error: "Server-Fehler beim Senden: " + error.message,
        });
    } finally {
        // Dateien nach Versand löschen
        if (uploadedFiles.length > 0) {
            console.log("Räume temporäre Dateien auf...");
            await Promise.all(
                uploadedFiles.map(async (file) => {
                    try {
                        await fs.unlink(file.path);
                    } catch (e) {
                        console.error(`❌ Konnte Datei nicht löschen: ${file.path}`, e);
                    }
                })
            );
            console.log("Aufräumen beendet.");
        }
    }
});

// Fallback für Server-Abstürze
app.use((err, req, res, next) => {
    console.error("🚨 Unerwarteter Server-Fehler:", err.stack);
    res.status(500).json({ success: false, message: "Ein unerwarteter Fehler ist aufgetreten." });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`🚀 Backend Server läuft lokal auf: http://localhost:${PORT}`);
});