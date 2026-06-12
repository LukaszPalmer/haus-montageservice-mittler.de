import React from "react";

const Impressum = () => {
    return (
        <div className="mx-auto max-w-4xl px-6 py-20 font-sans text-[#556963] leading-relaxed selection:bg-[#2AA34D]/20">
            <h1 className="mb-10 text-3xl font-extrabold text-[#173C2E] md:text-5xl">
                Impressum
            </h1>

            <section className="space-y-10">
                {/* Angaben gemäß § 5 TMG */}
                <div>
                    <h2 className="mb-4 text-xl font-bold text-[#2AA34D] uppercase tracking-wider">
                        Angaben gemäß § 5 TMG
                    </h2>
                    <div className="text-lg text-[#173C2E]">
                        <p className="font-bold">Niklas Mittler</p>
                        <p>Haus & Montageservice Mittler</p>
                        <p>Steinweg 24</p>
                        <p>40625 Düsseldorf</p>
                    </div>
                </div>

                {/* Kontakt */}
                <div>
                    <h2 className="mb-4 text-xl font-bold text-[#2AA34D] uppercase tracking-wider">
                        Kontakt
                    </h2>
                    <div className="space-y-2 text-lg">
                        <p flex items-center gap-2>
                            <span className="font-bold text-[#173C2E]">
                                Telefon:
                            </span>
                            <a
                                href="tel:015753137765"
                                className="hover:text-[#2AA34D] transition-colors"
                            >
                                {" "}
                                01575 3137765
                            </a>
                        </p>
                        <p>
                            <span className="font-bold text-[#173C2E]">
                                E-Mail:
                            </span>
                            <a
                                href="mailto:info@haus-montageservice-mittler.de"
                                className="hover:text-[#2AA34D] transition-colors"
                            >
                                {" "}
                                info@haus-montageservice-mittler.de
                            </a>
                        </p>
                    </div>
                </div>

                {/* Redaktionell verantwortlich */}
                <div>
                    <h2 className="mb-4 text-xl font-bold text-[#2AA34D] uppercase tracking-wider">
                        Redaktionell verantwortlich
                    </h2>
                    <div className="text-lg text-[#173C2E]">
                        <p>Niklas Mittler</p>
                        <p>Steinweg 24</p>
                        <p>40625 Düsseldorf</p>
                    </div>
                </div>

                <hr className="border-[#D9E7DC]" />

                {/* EU-Streitschlichtung */}
                <div className="space-y-4 text-[0.95rem]">
                    <h2 className="text-xl font-bold text-[#173C2E]">
                        EU-Streitschlichtung
                    </h2>
                    <p>
                        Die Europäische Kommission stellt eine Plattform zur
                        Online-Streitbeilegung (OS) bereit:
                        <a
                            href="https://ec.europa.eu/consumers/odr/"
                            target="_blank"
                            rel="noreferrer"
                            className="ml-1 text-[#2AA34D] underline underline-offset-4"
                        >
                            https://ec.europa.eu/consumers/odr/
                        </a>
                        . Unsere E-Mail-Adresse finden Sie oben im Impressum.
                    </p>
                </div>

                {/* Verbraucherstreitbeilegung */}
                <div className="space-y-4 text-[0.95rem]">
                    <h2 className="text-xl font-bold text-[#173C2E]">
                        Verbraucherstreitbeilegung/Universalschlichtungsstelle
                    </h2>
                    <p>
                        Wir sind nicht bereit oder verpflichtet, an
                        Streitbeilegungsverfahren vor einer
                        Verbraucherschlichtungsstelle teilzunehmen.
                    </p>
                </div>

                {/* Haftung für Inhalte */}
                <div className="space-y-4 text-[0.9rem] border-t border-[#D9E7DC] pt-8">
                    <p>
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für
                        eigene Inhalte auf diesen Seiten nach den allgemeinen
                        Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir
                        als Diensteanbieter jedoch nicht verpflichtet,
                        übermittelte oder gespeicherte fremde Informationen zu
                        überwachen oder nach Umständen zu forschen, die auf eine
                        rechtswidrige Tätigkeit hinweisen.
                    </p>
                    <p>
                        Verpflichtungen zur Entfernung oder Sperrung der Nutzung
                        von Informationen nach den allgemeinen Gesetzen bleiben
                        hiervon unberührt. Eine diesbezügliche Haftung ist
                        jedoch erst ab dem Zeitpunkt der Kenntnis einer
                        konkreten Rechtsverletzung möglich. Bei Bekanntwerden
                        von entsprechenden Rechtsverletzungen werden wir diese
                        Inhalte umgehend entfernen.
                    </p>
                    <p>
                        Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:
                        DE123456789
                    </p>
                </div>
            </section>
        </div>
    );
};

export default Impressum;
