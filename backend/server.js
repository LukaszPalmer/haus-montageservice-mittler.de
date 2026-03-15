import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import multer from "multer";
import dotenv from "dotenv";
import fs from "fs/promises";

dotenv.config();

const app = express();
const upload = multer({ dest: "uploads/" });

const allowedOrigins = [
    "http://localhost:5173",
    "https://haus-objectservice-mittler.netlify.app",
    "https://haus-montageservice-mittler.de",
    "https://www.haus-montageservice-mittler.de",
    process.env.FRONTEND_URL,
    process.env.FRONTEND_URL_WWW,
].filter(Boolean);

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin || allowedOrigins.includes(origin)) {
                return callback(null, true);
            }
            return callback(new Error("CORS blockiert diese Origin: " + origin));
        },
        methods: ["GET", "POST", "OPTIONS"],
        credentials: true,
    })
);

app.use(express.json());

const smtpHost = process.env.IONOS_SMTP_HOST || "smtp.ionos.com";
const smtpPort = Number(process.env.IONOS_SMTP_PORT || 587);
const smtpUser = process.env.EMAIL_USER || process.env.IONOS_SMTP_USER;
const smtpPass = process.env.EMAIL_PASS || process.env.IONOS_SMTP_PASS;
const mailReceiver = process.env.EMAIL_RECEIVER || process.env.MAIL_TO;

const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: smtpPort,
    secure: smtpPort === 465,
    auth: {
        user: smtpUser,
        pass: smtpPass,
    },
    tls: {
        rejectUnauthorized: false,
    },
});

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
        await Promise.all(
            uploadedFiles.map(async (file) => {
                try {
                    await fs.unlink(file.path);
                } catch {
                }
            })
        );
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Backend läuft auf Port ${PORT}`);
});