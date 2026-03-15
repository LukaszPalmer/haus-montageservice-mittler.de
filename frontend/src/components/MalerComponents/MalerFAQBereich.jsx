import React from "react";
import { MessageCircle } from "lucide-react";

const MalerFAQBereich = () => {
    const fragen = [
        {
            question: "Muss ich die Farbe selbst kaufen?",
            answer: "Nein, wir bringen hochwertige Profi-Farben mit, die eine hohe Deckkraft und Langlebigkeit garantieren. Auf Wunsch verarbeiten wir aber auch von Ihnen gestellte Materialien.",
        },
        {
            question: "Verrücken und schützen Sie die Möbel?",
            answer: "Ja, im Rahmen unserer Vorbereitung decken wir Böden und Möbel fachgerecht ab. Große Möbelstücke rücken wir nach Absprache zur Seite.",
        },
        {
            question: "Wie lange dauert ein Zimmeranstrich?",
            answer: "In der Regel benötigen wir für ein Standard-Zimmer inklusive Vorbereitung und Trocknung einen Arbeitstag.",
        },
        {
            question: "Streichen Sie auch im Außenbereich?",
            answer: "Ja, unser Team übernimmt auch Fassadenanstriche sowie das Streichen von Zäunen, Toren und Gartenhäusern.",
        },
    ];

    return (
        <section className="py-24">
            <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
                    {/* Linker Titel-Block */}
                    <div>
                        <span className="text-[#2AA34D] font-bold uppercase tracking-widest text-sm">
                            Wissenswertes
                        </span>
                        <h2 className="text-[3.5rem] font-extrabold text-[#083224] leading-[1.1] mt-4">
                            Häufige <br />
                            <span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="text-[#42514A] text-[1.1rem] mt-8 max-w-md leading-relaxed">
                            Wir legen Wert auf Transparenz. Hier finden Sie
                            Antworten zu unserem Maler- und Renovierungsservice
                            in Düsseldorf.
                        </p>
                        <div className="mt-12 p-5 bg-[#E8F3EA] inline-block rounded-full shadow-inner">
                            <MessageCircle className="w-8 h-8 text-[#2AA34D]" />
                        </div>
                    </div>

                    {/* Rechte FAQ-Liste */}
                    <div className="space-y-5">
                        {fragen.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-black/5 p-8 rounded-sm flex justify-between items-center group cursor-pointer hover:border-[#2AA34D]/40 transition-all shadow-sm"
                            >
                                <h3 className="font-bold text-[#083224] text-lg pr-6">
                                    {faq.question}
                                </h3>
                                <span className="text-[#2AA34D] text-3xl font-light transition-transform group-hover:rotate-90">
                                    +
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MalerFAQBereich;
