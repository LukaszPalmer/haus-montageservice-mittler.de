import React from "react";
import { MessageCircle } from "lucide-react";

const PutzFAQBereich = () => {
    const fragen = [
        {
            question: "Bringen Sie die Reinigungsmittel selbst mit?",
            answer: "Ja, wir nutzen professionelle und umweltschonende Reinigungsmittel sowie modernes Equipment, um optimale Ergebnisse zu erzielen.",
        },
        {
            question: "Reinigen Sie auch Fenster und Glasflächen?",
            answer: "Selbstverständlich. Wir bieten Glas- und Rahmenreinigungen als Einzelleistung oder im Rahmen einer regelmäßigen Reinigung an.",
        },
        {
            question: "Sind Sie für Schäden versichert?",
            answer: "Ja, unser Betrieb ist umfassend haftpflichtversichert. Sollte trotz aller Sorgfalt einmal etwas passieren, sind Sie abgesichert.",
        },
        {
            question: "Können die Termine flexibel angepasst werden?",
            answer: "Wir bemühen uns immer, auf Terminänderungswünsche einzugehen. Bitte geben Sie uns dafür rechtzeitig (idealerweise 48h vorher) Bescheid.",
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
                            Sauberkeit ist Vertrauenssache. Hier finden Sie
                            Details zu unserem Reinigungs- und Putzservice für
                            Düsseldorf und Umgebung.
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

export default PutzFAQBereich;
