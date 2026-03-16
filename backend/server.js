import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

// Konfiguration der erlaubten Origins für CORS
const allowedOrigins = [
    "http://localhost:5173",
    "https://haus-objectservice-mittler.netlify.app",
    "https://haus-montageservice-mittler.de",
    "https://www.haus-montageservice-mittler.de",
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_WWW,
]
    .filter(Boolean)
    .map((value) => value.trim());

app.use(
    cors({
        origin: (origin, callback) => {
            // Erlaubt Anfragen ohne Origin (wie Postman) oder von erlaubten Domains
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            console.error("CORS blockiert: ", origin);
            return callback(new Error("CORS blockiert diese Origin: " + origin));
        },
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());

// Umgebungsvariablen laden
const smtpHost = (process.env.IONOS_SMTP_HOST || "smtp.ionos.de").trim();
const smtpPort = Number((process.env.IONOS_SMTP_PORT || "465").trim());
const smtpUser = (process.env.EMAIL_USER || "").trim();
const smtpPass = (process.env.EMAIL_PASS || "").trim();
const mailReceiver = (process.env.EMAIL_RECEIVER || smtpUser).trim();

// Transporter-Konfiguration (Optimiert für IONOS)
const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: true, // Port 465 nutzt TLS
    auth: {
        user: smtpUser,
        pass: smtpPass,
        type: 'login' // Wichtig für IONOS
    },
    tls: {
        rejectUnauthorized: false // Verhindert Probleme mit Railway-Zertifikaten
    }
});

// Verbindung beim Start prüfen
transporter
    .verify()
    .then(() => console.log("SMTP-Verbindung erfolgreich."))
    .catch((err) => console.error("SMTP verify fehlgeschlagen:", err));

// --- ROUTEN ---

// NEU: Test-Route (Einfach im Browser die Railway-URL aufrufen)
app.get("/", (req, res) => {
    res.send("<h1>Backend läuft!</h1><p>Der E-Mail-Server ist bereit.</p>");
});

// Haupt-Route für den E-Mail Versand
app.post("/api/send-email", upload.array("attachments"), async (req, res) => {
    const uploadedFiles = req.files || [];

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

        await transporter.sendMail(mailOptions);
        console.log("E-Mail erfolgreich gesendet an:", mailReceiver);

        return res.status(200).json({
            success: true,
            message: "E-Mail erfolgreich gesendet!",
        });
    } catch (error) {
        console.error("Fehler beim Senden:", error);
        return res.status(500).json({
            success: false,
            error: "Server-Fehler beim Senden.",
        });
    } finally {
        // Dateien nach Versand löschen
        await Promise.all(
            uploadedFiles.map(async (file) => {
                try {
                    await fs.unlink(file.path);
                } catch (e) {
                    console.error("Konnte Datei nicht löschen:", file.path);
                }
            })
        );
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend läuft auf Port ${PORT}`);
});