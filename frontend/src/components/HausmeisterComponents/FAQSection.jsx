import React, { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";

const FAQSection = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
        {
            q: "Welche Werkzeuge bringen Sie für die Montage mit?",
            a: (
                <>
                    Unser Team rückt grundsätzlich mit <span className="text-[#2AA34D] font-semibold">voll ausgestattetem Profi-Equipment</span> an. Von Akku-Schlagschraubern über Laser-Messgeräte bis hin zu speziellen Schwerlastdübeln führen wir alles mit, um eine <span className="text-[#2AA34D] font-semibold">fachgerechte Möbelmontage</span> und sichere Installationen in Ihrem Objekt zu garantieren. Sie müssen keinerlei Werkzeug bereitstellen.
                </>
            ),
        },
        {
            q: "Bieten Sie auch regelmäßige Objektbetreuung in Düsseldorf an?",
            a: (
                <>
                    Ja, wir sind spezialisiert auf die <span className="text-[#2AA34D] font-semibold">langfristige Werterhaltung von Immobilien</span>. Neben Einzelaufträgen bieten wir maßgeschneiderte Wartungsverträge für Hausverwaltungen und Gewerbebetriebe an. Dies umfasst die regelmäßige <span className="text-[#2AA34D] font-semibold">Kontrolle der Haustechnik</span>, kleine Instandsetzungen und den allgemeinen Objektservice für ein stets gepflegtes Erscheinungsbild.
                </>
            ),
        },
        {
            q: "Wie kurzfristig ist ein Termin für Hausmeisterarbeiten möglich?",
            a: (
                <>
                    Durch unsere lokale Ansässigkeit in <span className="text-[#2AA34D] font-semibold">Düsseldorf und Umgebung</span> sind wir sehr flexibel. Kleinere Reparaturen oder dringende Montagen können wir meist innerhalb von <span className="text-[#2AA34D] font-semibold">24 bis 48 Stunden</span> realisieren. Für größere Projektplanungen empfehlen wir eine Vorlaufzeit von etwa einer Woche, um eine reibungslose Logistik sicherzustellen.
                </>
            ),
        },
        {
            q: "Sind die Anfahrtskosten bei Montageeinsätzen inklusive?",
            a: (
                <>
                    Wir setzen auf <span className="text-[#2AA34D] font-semibold">maximale Kostentransparenz</span>. Innerhalb des Stadtgebiets Düsseldorf berechnen wir faire Anfahrtspauschalen, die oft bereits im Angebot inkludiert sind. Für Einsätze im Umland kalkulieren wir die Fahrtwege effizient und weisen diese <span className="text-[#2AA34D] font-semibold">vorab ohne versteckte Gebühren</span> in Ihrem persönlichen Kostenvoranschlag aus.
                </>
            ),
        },
    ];

    return (
        <section className="bg-white px-5 py-24 md:px-12 lg:py-32 xl:px-16">
            <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[1fr_1.5fr] xl:gap-24 2xl:max-w-[2000px] min-[2200px]:max-w-[2300px]">
                
                {/* Linke Seite: Branding & Headline */}
                <div className="flex flex-col justify-start">
                    <div className="sticky top-10">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-sm">
                            Wissenswertes
                        </span>
                        <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] text-[#083224] md:text-[4rem] xl:text-[4.5rem]">
                            Häufige <br />
                            <span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-slate-500">
                            Wir legen Wert auf <span className="text-[#2AA34D] font-medium">höchste Transparenz</span>. Hier finden Sie professionelle Antworten auf die wichtigsten Fragen zu unserem <span className="text-[#2AA34D] font-medium">Hausmeister- und Montageservice</span>.
                        </p>

                        <div className="mt-12 hidden h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] lg:flex border border-[#2AA34D]/20">
                            <FiMessageCircle size={32} />
                        </div>
                    </div>
                </div>

                {/* Rechte Seite: Accordions mit Grid-Animation gegen Lags */}
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div
                            key={i}
                            className={`transition-all duration-300 border rounded-xl overflow-hidden ${
                                open === i
                                    ? "border-[#2AA34D] bg-[#F9FAFB] shadow-md"
                                    : "border-slate-100 bg-white hover:border-slate-200"
                            }`}
                        >
                            <button
                                onClick={() => setOpen(open === i ? null : i)}
                                className="flex w-full items-center justify-between p-6 text-left transition-all md:p-8"
                            >
                                <span
                                    className={`font-heading text-lg font-bold md:text-xl transition-colors ${
                                        open === i
                                            ? "text-[#083224]"
                                            : "text-[#42514A]"
                                    }`}
                                >
                                    {f.q}
                                </span>
                                <div
                                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                                        open === i
                                            ? "rotate-45 bg-[#2AA34D] border-[#2AA34D] text-white"
                                            : "text-slate-400 border-slate-200"
                                    }`}
                                >
                                    <FiPlus />
                                </div>
                            </button>

                            {/* Die Grid-Animation sorgt für absolut ruckelfreies Öffnen auf Mobile */}
                            <div
                                className={`grid transition-all duration-500 ease-in-out ${
                                    open === i
                                        ? "grid-rows-[1fr] opacity-100"
                                        : "grid-rows-[0fr] opacity-0"
                                }`}
                            >
                                <div className="overflow-hidden">
                                    <div className="px-6 pb-8 md:px-8 md:pb-10">
                                        <div className="h-[1px] w-full bg-slate-200 mb-6" />
                                        <p className="font-sans text-[1.1rem] leading-relaxed text-slate-600">
                                            {f.a}
                                        
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default FAQSection;