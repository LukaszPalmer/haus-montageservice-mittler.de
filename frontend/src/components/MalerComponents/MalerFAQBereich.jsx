import React, { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";

const MalerFAQBereich = () => {
    const [open, setOpen] = useState(null);
    const fragen = [
        {
            q: "Verwenden Sie für die Malerarbeiten Profi-Farben?",
            a: (
                <>
                    Absolut. Wir verwenden ausschließlich{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        hochwertige Dispersions- und Silikatfarben
                    </span>{" "}
                    namhafter Hersteller, die eine exzellente Deckkraft und
                    Abriebfestigkeit garantieren. Dies sorgt nicht nur für ein{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        ästhetisches Endergebnis
                    </span>
                    , sondern schützt Ihre Wände auch langfristig vor
                    Verschmutzungen und Feuchtigkeit.
                    
                </>
            ),
        },
        {
            q: "Wie sieht der Schutz von Möbeln und Böden aus?",
            a: (
                <>
                    Sauberkeit ist unser oberstes Gebot. Bevor wir mit dem
                    Anstrich beginnen, führen wir umfassende{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Abdeckarbeiten
                    </span>{" "}
                    durch. Wir nutzen spezielles Vlies für die Böden und
                    hochwertige Folien für Ihr Inventar. Nach Abschluss der{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Renovierungsarbeiten in Düsseldorf
                    </span>{" "}
                    hinterlassen wir Ihre Räumlichkeiten besenrein und
                    ordentlich.
                </>
            ),
        },
        {
            q: "Können Sie auch tapezieren oder Spachtelarbeiten durchführen?",
            a: (
                <>
                    Ja, unser Service umfasst die gesamte{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Untergrundvorbereitung
                    </span>
                    . Wir führen professionelle Spachtelarbeiten (Q1 bis Q4)
                    aus, entfernen alte Tapeten und verlegen neue Wandbeläge wie{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Vliestapeten oder Malervlies
                    </span>
                    . Eine glatte Wand ist die Basis für jeden perfekten
                    Anstrich.
                </>
            ),
        },
        {
            q: "Führen Sie auch Lackierarbeiten im Außenbereich durch?",
            a: (
                <>
                    Unser Team ist bestens geschult für{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Lackierungen an Fenstern, Türen und Zäunen
                    </span>
                    . Wir nutzen wetterfeste Lacke und Lasuren, die Ihre Holz-
                    oder Metallelemente vor Witterungseinflüssen schützen.
                    Besonders in der{" "}
                    <span className="text-[#2AA34D] font-semibold">
                        Außenrenovierung
                    </span>{" "}
                    achten wir auf langlebige Materialien für maximalen
                    Wetterschutz.
                </>
            ),
        },
    ];

    return (
        <section className="bg-white px-5 py-24 md:px-12 lg:py-32 xl:px-16">
            <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[1fr_1.5fr] xl:gap-24 2xl:max-w-[2000px]">
                <div className="flex flex-col justify-start">
                    <div className="sticky top-10">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-sm">
                            Expertise
                        </span>
                        <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] text-[#083224] md:text-[4rem] xl:text-[4.5rem]">
                            Häufige <br />
                            <span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-slate-500">
                            Antworten zu Ihrem{" "}
                            <span className="text-[#2AA34D] font-medium">
                                Malerprojekt
                            </span>
                            . Wir beraten Sie fachgerecht zu Farben, Techniken
                            und Abläufen in Düsseldorf.
                        </p>
                        <div className="mt-12 hidden h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] lg:flex border border-[#2AA34D]/20">
                            <FiMessageCircle size={32} />
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    {fragen.map((f, i) => (
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
                                    className={`font-heading text-lg font-bold md:text-xl ${
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

export default MalerFAQBereich;
