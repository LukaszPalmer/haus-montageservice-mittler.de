import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import multer from "multer";
import { Resend } from "resend";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

const resend = new Resend(process.env.RESEND_API_KEY);

const parseAllowedOrigins = () => {
    const raw = process.env.ALLOWED_ORIGINS || "";
    return raw
        .split(",")
        .map((origin) => origin.trim())
        .filter(Boolean);
};

const allowedOrigins = parseAllowedOrigins();

app.use(
    cors({
        origin(origin, callback) {
            if (!origin) {
                return callback(null, true);
            }

            if (
                allowedOrigins.length === 0 ||
                allowedOrigins.includes(origin)
            ) {
                return callback(null, true);
            }

            return callback(new Error("CORS blockiert diese Origin."));
        },
    })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 7 * 1024 * 1024,
    },
    fileFilter: (req, file, cb) => {
        const isPdfMime = file.mimetype === "application/pdf";
        const isPdfExtension = file.originalname.toLowerCase().endsWith(".pdf");

        if (isPdfMime || isPdfExtension) {
            return cb(null, true);
        }

        return cb(new Error("Es sind nur PDF-Dateien erlaubt."));
    },
});

const getMailTarget = () => process.env.MAIL_TO;
const getFromAddress = () => process.env.RESEND_FROM;

const buildContactHtml = ({ name, telefon, email, betreff, nachricht }) => `
  <h2>Neue Kontaktanfrage</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Telefon:</strong> ${telefon}</p>
  <p><strong>E-Mail:</strong> ${email}</p>
  <p><strong>Betreff:</strong> ${betreff}</p>
  <p><strong>Nachricht:</strong><br/>${(nachricht || "-").replace(
      /\n/g,
      "<br/>"
  )}</p>
`;

const buildCareerHtml = ({ name, telefon, email, bereich, nachricht }) => `
  <h2>Neue Kurzbewerbung</h2>
  <p><strong>Name:</strong> ${name}</p>
  <p><strong>Telefon:</strong> ${telefon}</p>
  <p><strong>E-Mail:</strong> ${email}</p>
  <p><strong>Bereich:</strong> ${bereich}</p>
  <p><strong>Nachricht / Erfahrung:</strong><br/>${(nachricht || "-").replace(
      /\n/g,
      "<br/>"
  )}</p>
`;

app.get("/", (req, res) => {
    res.status(200).send("Backend läuft.");
});

app.get("/api/health", (req, res) => {
    res.status(200).json({ ok: true, message: "Backend läuft." });
});

app.post("/api/contact", upload.none(), async (req, res) => {
    try {
        const { Name, Telefon, email, Betreff, Nachricht } = req.body;

        if (!Name || !Telefon || !email || !Betreff) {
            return res.status(400).json({
                success: false,
                message: "Bitte alle Pflichtfelder ausfüllen.",
            });
        }

        if (
            !process.env.RESEND_API_KEY ||
            !getFromAddress() ||
            !getMailTarget()
        ) {
            return res.status(500).json({
                success: false,
                message: "Server-Konfiguration für E-Mail fehlt.",
            });
        }

        const { error } = await resend.emails.send({
            from: getFromAddress(),
            to: [getMailTarget()],
            replyTo: email,
            subject: `Neue Kontaktanfrage: ${Betreff}`,
            text: [
                "Neue Kontaktanfrage",
                `Name: ${Name}`,
                `Telefon: ${Telefon}`,
                `E-Mail: ${email}`,
                `Betreff: ${Betreff}`,
                `Nachricht: ${Nachricht || "-"}`,
            ].join("\n"),
            html: buildContactHtml({
                name: Name,
                telefon: Telefon,
                email,
                betreff: Betreff,
                nachricht: Nachricht,
            }),
        });

        if (error) {
            console.error("Resend-Fehler bei /api/contact:", error);
            return res.status(500).json({
                success: false,
                message: "E-Mail konnte nicht versendet werden.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Kontaktanfrage erfolgreich versendet.",
        });
    } catch (error) {
        console.error("Fehler bei /api/contact:", error);
        return res.status(500).json({
            success: false,
            message: "E-Mail konnte nicht versendet werden.",
        });
    }
});

app.post(
    "/api/career",
    upload.fields([
        { name: "Lebenslauf", maxCount: 1 },
        { name: "Anschreiben", maxCount: 1 },
    ]),
    async (req, res) => {
        try {
            const { Name, Telefon, email, Bereich, Nachricht } = req.body;
            const lebenslauf = req.files?.Lebenslauf?.[0];
            const anschreiben = req.files?.Anschreiben?.[0];

            if (!Name || !Telefon || !email || !Bereich || !lebenslauf) {
                return res.status(400).json({
                    success: false,
                    message:
                        "Bitte alle Pflichtfelder inklusive Lebenslauf ausfüllen.",
                });
            }

            if (
                !process.env.RESEND_API_KEY ||
                !getFromAddress() ||
                !getMailTarget()
            ) {
                return res.status(500).json({
                    success: false,
                    message: "Server-Konfiguration für E-Mail fehlt.",
                });
            }

            const attachments = [
                {
                    filename: lebenslauf.originalname,
                    content: lebenslauf.buffer,
                    contentType: lebenslauf.mimetype,
                },
            ];

            if (anschreiben) {
                attachments.push({
                    filename: anschreiben.originalname,
                    content: anschreiben.buffer,
                    contentType: anschreiben.mimetype,
                });
            }

            const { error } = await resend.emails.send({
                from: getFromAddress(),
                to: [getMailTarget()],
                replyTo: email,
                subject: `Neue Bewerbung: ${Name} (${Bereich})`,
                text: [
                    "Neue Kurzbewerbung",
                    `Name: ${Name}`,
                    `Telefon: ${Telefon}`,
                    `E-Mail: ${email}`,
                    `Bereich: ${Bereich}`,
                    `Nachricht / Erfahrung: ${Nachricht || "-"}`,
                    `Lebenslauf: ${lebenslauf.originalname}`,
                    `Anschreiben: ${
                        anschreiben
                            ? anschreiben.originalname
                            : "Nicht vorhanden"
                    }`,
                ].join("\n"),
                html: buildCareerHtml({
                    name: Name,
                    telefon: Telefon,
                    email,
                    bereich: Bereich,
                    nachricht: Nachricht,
                }),
                attachments,
            });

            if (error) {
                console.error("Resend-Fehler bei /api/career:", error);
                return res.status(500).json({
                    success: false,
                    message: "Bewerbung konnte nicht versendet werden.",
                });
            }

            return res.status(200).json({
                success: true,
                message: "Bewerbung erfolgreich versendet.",
            });
        } catch (error) {
            console.error("Fehler bei /api/career:", error);
            return res.status(500).json({
                success: false,
                message: "Bewerbung konnte nicht versendet werden.",
            });
        }
    }
);

app.use((error, req, res, next) => {
    if (error instanceof multer.MulterError) {
        return res.status(400).json({
            success: false,
            message: "Datei zu groß oder Upload ungültig.",
        });
    }

    if (error) {
        console.error("Globaler Fehler:", error);
        return res.status(400).json({
            success: false,
            message: error.message || "Ungültige Anfrage.",
        });
    }

    return next();
});

app.listen(PORT, () => {
    console.log(`Server läuft auf Port ${PORT}`);
});
