import React from "react";
import { MessageCircle } from "lucide-react";

const GartenFAQSection = () => {
    const faqs = [
        {
            question: "Bringen Sie die notwendigen Gartengeräte mit?",
            answer: "Ja, unser Team ist voll ausgestattet. Von Rasenmähern über Heckenscheren bis hin zu professionellen Schnittwerkzeugen bringen wir alles mit.",
        },
        {
            question: "Entsorgen Sie auch den anfallenden Grünschnitt?",
            answer: "Selbstverständlich. Nach getaner Arbeit nehmen wir den Grünschnitt auf Wunsch mit und entsorgen ihn fachgerecht für Sie.",
        },
        {
            question: "Bieten Sie auch regelmäßige Ganzjahrespflege an?",
            answer: "Ja, wir bieten sowohl einmalige Einsätze als auch Dauerpflegeverträge an, damit Ihr Garten das ganze Jahr über in Bestform bleibt.",
        },
        {
            question: "Führen Sie auch Arbeiten im Winter durch?",
            answer: "Im Winter konzentrieren wir uns auf den Winterschnitt von Gehölzen sowie auf die allgemeine Objektreinigung und Vorbereitung für das Frühjahr.",
        },
    ];

    return (
        <section className="py-20">
            <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Linke Seite */}
                    <div>
                        <span className="text-[#2AA34D] font-bold uppercase tracking-widest text-sm">
                            FAQ Gartenarbeiten
                        </span>
                        <h2 className="text-[3.5rem] font-extrabold text-[#083224] leading-tight mt-4">
                            Häufige <br />
                            <span className="text-[#2AA34D]">Fragen.</span>
                        </h2>
                        <p className="text-[#42514A] text-lg mt-8 max-w-md">
                            Wir sorgen für klare Verhältnisse vor dem ersten
                            Spatenstich. Hier finden Sie Details zu unserem
                            Gartenservice.
                        </p>
                        <div className="mt-10 p-4 bg-[#E8F3EA] inline-block rounded-full">
                            <MessageCircle className="w-8 h-8 text-[#2AA34D]" />
                        </div>
                    </div>

                    {/* Rechte Seite (Fragenliste) */}
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white border border-black/5 p-6 rounded-sm flex justify-between items-center group cursor-pointer hover:border-[#2AA34D]/30 transition-all"
                            >
                                <h3 className="font-bold text-[#083224] pr-4">
                                    {faq.question}
                                </h3>
                                <span className="text-[#2AA34D] text-2xl font-light transition-transform group-hover:scale-110">
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

export default GartenFAQSection;
