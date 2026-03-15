import React, { useState } from "react";
import { FiPlus, FiMessageCircle } from "react-icons/fi";

const MalerFAQ = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
        { q: "Muss ich die Farbe selbst kaufen?", a: "Nein, wir bringen hochwertige Profi-Farben mit hoher Deckkraft mit. Falls Sie jedoch bereits Wunschfarbe haben, verarbeiten wir diese natürlich auch fachgerecht." },
        { q: "Verrücken und schützen Sie die Möbel?", a: "Ja, im Rahmen unserer Vorbereitungen decken wir Böden und Möbel sorgfältig ab und rücken schwere Teile nach Absprache zur Seite." },
        { q: "Wie lange dauert ein Zimmeranstrich?", a: "Ein Standardzimmer inkl. Vorarbeiten und Trocknungszeit ist meist innerhalb eines Arbeitstages fertiggestellt und bezugsfertig." },
        { q: "Streichen Sie auch im Außenbereich?", a: "Ja, wir übernehmen auch Fassadenanstriche, Zaunanstriche oder Holzbeschichtungen im Außenbereich Ihres Objekts." }
    ];

    return (
        <section className="bg-white px-5 py-24 md:px-12 lg:py-32 xl:px-16">
            <div className="mx-auto grid max-w-[1700px] gap-16 lg:grid-cols-[1fr_1.5fr] xl:gap-24 2xl:max-w-[2000px] min-[2200px]:max-w-[2300px]">
                
                {/* Linke Seite: Headline */}
                <div className="flex flex-col justify-start">
                    <div className="sticky top-10">
                        <span className="font-sans text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] md:text-sm">FAQ Malerarbeiten</span>
                        <h2 className="font-heading mt-6 text-[2.8rem] font-extrabold leading-[1.1] text-[#083224] md:text-[4rem] xl:text-[4.5rem]">
                            Häufige <br /><span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="mt-8 max-w-md font-sans text-lg leading-relaxed text-slate-500">
                            Wir sorgen für klare Verhältnisse vor dem ersten Pinselstrich. Hier finden Sie Details zu unserem Malerservice.
                        </p>
                        <div className="mt-12 hidden h-20 w-20 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] lg:flex">
                            <FiMessageCircle size={32} />
                        </div>
                    </div>
                </div>

                {/* Rechte Seite: Accordions */}
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className={`transition-all duration-300 border rounded-xl overflow-hidden ${open === i ? "border-[#2AA34D] bg-[#F9FAFB] shadow-md" : "border-slate-100 bg-white"}`}>
                            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left md:p-8">
                                <span className={`font-heading text-lg font-bold md:text-xl ${open === i ? 'text-[#083224]' : 'text-[#42514A]'}`}>{f.q}</span>
                                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all ${open === i ? "rotate-45 bg-[#2AA34D] border-[#2AA34D] text-white" : "text-slate-400 border-slate-200"}`}>
                                    <FiPlus />
                                </div>
                            </button>
                            <div className={`transition-all duration-500 ease-in-out ${open === i ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 overflow-hidden"}`}>
                                <div className="px-6 pb-8 md:px-8 md:pb-10">
                                    <div className="h-[1px] w-full bg-slate-200 mb-6" />
                                    <p className="font-sans text-[1.1rem] leading-relaxed text-slate-600">{f.a}</p>
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