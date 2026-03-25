import React from "react";

const Datenschutz = () => {
    return (
        <div className="mx-auto max-w-5xl px-6 py-20 font-sans text-[#556963] leading-relaxed selection:bg-[#2AA34D]/20">
            <h1 className="mb-8 text-3xl font-extrabold text-[#173C2E] md:text-5xl lg:mb-12">
                Datenschutzerklärung
            </h1>

            <div className="space-y-12">
                {/* Präambel */}
                <section>
                    <h2
                        id="m716"
                        className="mb-4 text-2xl font-bold text-[#2AA34D]"
                    >
                        Präambel
                    </h2>
                    <p className="mb-4">
                        Mit der folgenden Datenschutzerklärung möchten wir Sie
                        darüber aufklären, welche Arten Ihrer personenbezogenen
                        Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir
                        zu welchen Zwecken und in welchem Umfang verarbeiten.
                        Die Datenschutzerklärung gilt für alle von uns
                        durchgeführten Verarbeitungen personenbezogener Daten,
                        sowohl im Rahmen der Erbringung unserer Leistungen als
                        auch insbesondere auf unseren Webseiten, in mobilen
                        Applikationen sowie innerhalb externer Onlinepräsenzen,
                        wie z. B. unserer Social-Media-Profile (nachfolgend
                        zusammenfassend bezeichnet als "Onlineangebot").
                    </p>
                    <p className="mb-4 italic">
                        Die verwendeten Begriffe sind nicht
                        geschlechtsspezifisch.
                    </p>
                    <p className="font-semibold text-[#173C2E]">
                        Stand: 25. März 2026
                    </p>
                </section>

                {/* Inhaltsübersicht */}
                <section className="rounded-2xl bg-[#F8FCF9] p-8 border border-[#D9E7DC]">
                    <h2 className="mb-6 text-xl font-bold text-[#173C2E]">
                        Inhaltsübersicht
                    </h2>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-[0.95rem]">
                        {[
                            { id: "m716", title: "Präambel" },
                            { id: "m3", title: "Verantwortlicher" },
                            {
                                id: "mOverview",
                                title: "Übersicht der Verarbeitungen",
                            },
                            {
                                id: "m2427",
                                title: "Maßgebliche Rechtsgrundlagen",
                            },
                            { id: "m27", title: "Sicherheitsmaßnahmen" },
                            {
                                id: "m25",
                                title: "Übermittlung von personenbezogenen Daten",
                            },
                            {
                                id: "m24",
                                title: "Internationale Datentransfers",
                            },
                            {
                                id: "m12",
                                title: "Allgemeine Informationen zur Datenspeicherung und Löschung",
                            },
                            {
                                id: "m10",
                                title: "Rechte der betroffenen Personen",
                            },
                            { id: "m317", title: "Geschäftliche Leistungen" },
                            {
                                id: "m225",
                                title: "Bereitstellung des Onlineangebots und Webhosting",
                            },
                            {
                                id: "m182",
                                title: "Kontakt- und Anfrageverwaltung",
                            },
                            { id: "m638", title: "Werbliche Kommunikation" },
                            { id: "m264", title: "Onlinemarketing" },
                            {
                                id: "m136",
                                title: "Präsenzen in sozialen Netzwerken",
                            },
                            { id: "m15", title: "Änderung und Aktualisierung" },
                            { id: "m42", title: "Begriffsdefinitionen" },
                        ].map((item) => (
                            <li key={item.id}>
                                <a
                                    href={`#${item.id}`}
                                    className="hover:text-[#2AA34D] transition-colors underline decoration-[#D9E7DC] hover:decoration-[#2AA34D]"
                                >
                                    {item.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                {/* Verantwortlicher */}
                <section id="m3">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Verantwortlicher
                    </h2>
                    <div className="text-lg">
                        <p className="font-bold text-[#173C2E]">
                            Niklas Mittler
                        </p>
                        <p>Steinweg 24</p>
                        <p>40625 Düsseldorf</p>
                        <p className="mt-4">
                            E-Mail-Adresse:{" "}
                            <a
                                href="mailto:info@haus-montageservice-mittler.de"
                                className="text-[#2AA34D] font-medium underline underline-offset-4"
                            >
                                info@haus-montageservice-mittler.de
                            </a>
                        </p>
                    </div>
                </section>

                {/* Übersicht der Verarbeitungen */}
                <section id="mOverview">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Übersicht der Verarbeitungen
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-bold text-[#173C2E] mb-2 text-lg italic">
                                Arten der verarbeiteten Daten
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Bestandsdaten, Zahlungsdaten, Kontaktdaten,
                                    Inhaltsdaten, Vertragsdaten, Nutzungsdaten,
                                    Meta-, Kommunikations- und Verfahrensdaten,
                                    Protokolldaten.
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="font-bold text-[#173C2E] mb-2 text-lg italic">
                                Zwecke der Verarbeitung
                            </h3>
                            <ul className="list-disc pl-5 space-y-1">
                                <li>
                                    Erbringung vertraglicher Leistungen,
                                    Kommunikation, Sicherheitsmaßnahmen,
                                    Direktmarketing, Reichweitenmessung,
                                    Tracking, Büro- und Organisationsverfahren,
                                    Zielgruppenbildung, Feedback, Marketing.
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                {/* Rechtsgrundlagen */}
                <section id="m2427">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Maßgebliche Rechtsgrundlagen
                    </h2>
                    <p className="mb-4 text-sm uppercase tracking-wider font-bold text-[#173C2E]">
                        Maßgebliche Rechtsgrundlagen nach der DSGVO:
                    </p>
                    <ul className="space-y-4">
                        <li className="p-4 bg-white border border-[#D9E7DC] rounded-lg">
                            <strong>
                                Einwilligung (Art. 6 Abs. 1 S. 1 lit. a) DSGVO)
                            </strong>
                        </li>
                        <li className="p-4 bg-white border border-[#D9E7DC] rounded-lg">
                            <strong>
                                Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b)
                                DSGVO)
                            </strong>
                        </li>
                        <li className="p-4 bg-white border border-[#D9E7DC] rounded-lg">
                            <strong>
                                Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1
                                lit. c) DSGVO)
                            </strong>
                        </li>
                        <li className="p-4 bg-white border border-[#D9E7DC] rounded-lg">
                            <strong>
                                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit.
                                f) DSGVO)
                            </strong>
                        </li>
                    </ul>
                </section>

                {/* Sicherheitsmaßnahmen */}
                <section id="m27">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Sicherheitsmaßnahmen
                    </h2>
                    <p>
                        Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter
                        Berücksichtigung des Stands der Technik geeignete
                        technische und organisatorische Maßnahmen. Zu den
                        Maßnahmen gehören insbesondere die Sicherung der
                        Vertraulichkeit, Integrität und Verfügbarkeit von Daten.
                        Wir setzen auf TLS-/SSL-Verschlüsselungstechnologie
                        (HTTPS) für sichere Online-Verbindungen.
                    </p>
                </section>

                {/* Internationale Datentransfers */}
                <section id="m24">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Internationale Datentransfers
                    </h2>
                    <p>
                        Für Datenübermittlungen in die USA stützen wir uns
                        vorrangig auf das Data Privacy Framework (DPF), welches
                        durch einen Angemessenheitsbeschluss der EU-Kommission
                        als sicherer Rechtsrahmen anerkannt wurde.
                    </p>
                </section>

                {/* Aufbewahrung */}
                <section id="m12">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Datenspeicherung und Löschung
                    </h2>
                    <p className="mb-4">
                        Folgende allgemeine Fristen gelten nach deutschem Recht:
                    </p>
                    <ul className="list-disc pl-5 space-y-2">
                        <li>
                            <strong>10 Jahre:</strong> Bücher, Aufzeichnungen,
                            Jahresabschlüsse (§ 147 AO).
                        </li>
                        <li>
                            <strong>8 Jahre:</strong> Buchungsbelege wie
                            Rechnungen (§ 14b UStG).
                        </li>
                        <li>
                            <strong>6 Jahre:</strong> Übrige
                            Geschäftsunterlagen.
                        </li>
                        <li>
                            <strong>3 Jahre:</strong> Gewährleistungsansprüche
                            (§§ 195, 199 BGB).
                        </li>
                    </ul>
                </section>

                {/* Rechte */}
                <section
                    id="m10"
                    className="bg-[#173C2E] p-8 rounded-2xl text-white"
                >
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Rechte der betroffenen Personen
                    </h2>
                    <ul className="space-y-4">
                        <li>
                            <strong>Widerspruchsrecht:</strong> Sie haben das
                            Recht, jederzeit gegen die Verarbeitung Widerspruch
                            einzulegen.
                        </li>
                        <li>
                            <strong>Widerrufsrecht:</strong> Erteilte
                            Einwilligungen können jederzeit widerrufen werden.
                        </li>
                        <li>
                            <strong>Auskunft & Berichtigung:</strong> Sie haben
                            das Recht auf Auskunft über Ihre Daten sowie deren
                            Berichtigung oder Löschung.
                        </li>
                    </ul>
                </section>

                {/* Geschäftliche Leistungen */}
                <section id="m317">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Geschäftliche Leistungen
                    </h2>
                    <p>
                        Wir verarbeiten Daten unserer Kunden zur Durchführung
                        von Verträgen. Dies umfasst Stammdaten, Kontaktdaten,
                        Zahlungsdaten und Vertragsdaten. Die Rechtsgrundlage ist
                        Art. 6 Abs. 1 lit. b) DSGVO.
                    </p>
                </section>

                {/* Webhosting */}
                <section id="m225">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Bereitstellung des Onlineangebots und Webhosting
                    </h2>
                    <p>
                        Zum Betrieb unserer Website nutzen wir
                        Webhosting-Dienste. Hierbei werden IP-Adressen in
                        Server-Logfiles für maximal 30 Tage gespeichert, um die
                        Sicherheit und Stabilität zu gewährleisten.
                    </p>
                </section>

                {/* Social Media */}
                <section id="m136">
                    <h2 className="mb-4 text-2xl font-bold text-[#2AA34D]">
                        Präsenzen in sozialen Netzwerken (Social Media)
                    </h2>
                    <div className="space-y-4">
                        <p>
                            Wir unterhalten Profile auf Instagram, Facebook und
                            LinkedIn. Bei Besuch dieser Profile können
                            Nutzerdaten durch die Anbieter (z.B. Meta) außerhalb
                            der EU verarbeitet werden.
                        </p>
                    </div>
                </section>

                {/* Begriffsdefinitionen */}
                <section id="m42" className="border-t border-[#D9E7DC] pt-12">
                    <h2 className="mb-6 text-2xl font-bold text-[#2AA34D]">
                        Begriffsdefinitionen
                    </h2>
                    <dl className="space-y-6 text-[0.9rem]">
                        <div>
                            <dt className="font-bold text-[#173C2E]">
                                Personenbezogene Daten:
                            </dt>
                            <dd>
                                Alle Informationen, die sich auf eine
                                identifizierte oder identifizierbare natürliche
                                Person beziehen.
                            </dd>
                        </div>
                        <div>
                            <dt className="font-bold text-[#173C2E]">
                                Verarbeitung:
                            </dt>
                            <dd>
                                Jeder Vorgang im Zusammenhang mit Daten
                                (Erheben, Speichern, Löschen, etc.).
                            </dd>
                        </div>
                        <div>
                            <dt className="font-bold text-[#173C2E]">
                                Verantwortlicher:
                            </dt>
                            <dd>
                                Die Person oder Stelle, die über Zwecke und
                                Mittel der Verarbeitung entscheidet.
                            </dd>
                        </div>
                    </dl>
                </section>

                {/* Footer Link */}
                <div className="pt-10 text-xs text-[#8EA098]">
                    <a
                        href="https://datenschutz-generator.de/"
                        target="_blank"
                        rel="noopener noreferrer nofollow"
                        className="hover:text-[#2AA34D]"
                    >
                        Erstellt mit kostenlosem Datenschutz-Generator.de von
                        Dr. Thomas Schwenke
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Datenschutz;
