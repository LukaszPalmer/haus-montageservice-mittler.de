import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import multer from 'multer';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import path from 'path';

dotenv.config();

const app = express();
const upload = multer({ dest: 'uploads/' });

// CORS angepasst für deine Live-Domain
app.use(cors({
    origin: ["https://haus-montageservice-mittler.de", "https://www.haus-montageservice-mittler.de", "http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true
}));

app.use(express.json());

// IONOS SMTP Konfiguration - Optimiert für Port 587
const transporter = nodemailer.createTransport({
    host: "smtp.ionos.de",
    port: 587,
    secure: false, // false für Port 587 (STARTTLS)
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
    tls: {
        rejectUnauthorized: false // Verhindert Timeout-Probleme in Cloud-Umgebungen
    }
});

app.post('/api/send-email', upload.array('attachments'), async (req, res) => {
    try {
        const { name, email, phone, subject, message, type } = req.body;

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_RECEIVER,
            replyTo: email,
            subject: `[${type}] Neue Nachricht von ${name}`,
            text: `Anfrage-Typ: ${type}\nName: ${name}\nE-Mail: ${email}\nTel: ${phone}\n\nNachricht:\n${message}`,
            attachments: req.files ? req.files.map(file => ({
                filename: file.originalname,
                path: file.path
            })) : []
        };

        await transporter.sendMail(mailOptions);
        res.status(200).json({ success: true, message: "E-Mail erfolgreich gesendet!" });
    } catch (error) {
        console.error("Fehler:", error);
        res.status(500).json({ success: false, error: "Server-Fehler beim Senden." });
    }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Backend läuft auf Port ${PORT}`));