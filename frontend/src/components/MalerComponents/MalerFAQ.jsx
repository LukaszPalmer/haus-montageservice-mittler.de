import React, { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";

const MalerFAQ = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
        { 
            q: "Verwenden Sie für die Malerarbeiten Profi-Farben?", 
            a: (
                <>
                    Ja, wir nutzen ausschließlich <span className="text-[#2AA34D] font-semibold">hochwertige Dispersions- und Silikatfarben</span> namhafter Hersteller. Diese garantieren eine exzellente Deckkraft, sind <span className="text-[#2AA34D] font-semibold">emissionsarm und langlebig</span>. Falls Sie bereits eine spezifische Wunschfarbe bereitgestellt haben, verarbeiten wir diese selbstverständlich ebenso fachgerecht und präzise.
                </>
            )
        },
        { 
            q: "Wie werden Möbel und Böden vor Farbspritzern geschützt?", 
            a: (
                <>
                    Sauberkeit ist unser höchster Anspruch. Vor dem ersten Pinselstrich führen wir umfassende <span className="text-[#2AA34D] font-semibold">Abdeckarbeiten mit Profi-Vlies</span> und Klebeband durch. Wir rücken schwere Möbelstücke nach Absprache zur Seite und hüllen diese in Schutzfolie ein, sodass Ihr Inventar während der gesamten <span className="text-[#2AA34D] font-semibold">Renovierungsphase in Düsseldorf</span> optimal geschützt bleibt.
                </>
            )
        },
        { 
            q: "Wie lange dauert ein Zimmeranstrich inklusive Trocknung?", 
            a: (
                <>
                    Ein Standardzimmer ist inklusive aller Vorarbeiten wie Spachteln und Abkleben meist innerhalb von <span className="text-[#2AA34D] font-semibold">einem Arbeitstag</span> fertiggestellt. Dank moderner, schnelltrocknender Materialien sind die Räume oft schon am Abend wieder voll nutzbar. Wir garantieren eine <span className="text-[#2AA34D] font-semibold">zeitnahe und saubere Übergabe</span> Ihrer frisch renovierten Räumlichkeiten.
                </>
            )
        },
        { 
            q: "Bieten Sie auch Fassaden- und Außenanstriche an?", 
            a: (
                <>
                    Unser Service umfasst das gesamte Spektrum. Wir übernehmen <span className="text-[#2AA34D] font-semibold">witterungsbeständige Fassadenanstriche</span>, Lackierungen von Zäunen sowie Holzbeschichtungen im Außenbereich. Dabei achten wir besonders auf den <span className="text-[#2AA34D] font-semibold">Langzeitschutz Ihrer Immobilie</span> gegen Umwelteinflüsse und sorgen für eine ästhetische Aufwertung Ihres Objekts in Düsseldorf und Umgebung.
                </>
            )
        }
    ];

    return (
        <section className="bg-white px-5 py-24 md:px-12 lg:py-32 xl:px-16">
            <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[1fr_1.5fr] xl:gap-24 2xl:max-w-[2000px] min-[2200px]:max-w-[2300px]">
                
                {/* Linke Seite: Branding & Headline */}
                <div className="flex flex-col justify-start">
                    <div className="sticky top-10">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-sm">
                            FAQ Malerarbeiten
                        </span>
                        <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] text-[#083224] md:text-[4rem] xl:text-[4.5rem]">
                            Häufige <br /><span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-slate-500">
                            Wir sorgen für <span className="text-[#2AA34D] font-medium">klare Verhältnisse</span> vor dem ersten Pinselstrich. Hier finden Sie professionelle Details zu unserem Malerservice und unseren Qualitätsstandards.
                        </p>
                        <div className="mt-12 hidden h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] lg:flex border border-[#2AA34D]/20">
                            <FiMessageCircle size={32} />
                        </div>
                    </div>
                </div>

                {/* Rechte Seite: Accordions mit Grid-Animation für 0 Lags */}
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
                                className="flex w-full items-center justify-between p-6 text-left md:p-8"
                            >
                                <span className={`font-heading text-lg font-bold md:text-xl transition-colors ${
                                    open === i ? 'text-[#083224]' : 'text-[#42514A]'
                                }`}>
                                    {f.q}
                                </span>
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-500 ${
                                    open === i 
                                        ? "rotate-45 bg-[#2AA34D] border-[#2AA34D] text-white" 
                                        : "text-slate-400 border-slate-200"
                                }`}>
                                    <FiPlus />
                                </div>
                            </button>

                            {/* Die Grid-Technik verhindert das Laggen auf Mobile */}
                            <div className={`grid transition-all duration-500 ease-in-out ${
                                open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                            }`}>
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

export default MalerFAQ;