import React from "react";
import { Search, FileText, Calendar, Paintbrush } from "lucide-react";

const MalerServiceAblauf = () => {
    const schritte = [
        {
            number: "01",
            title: "Erstberatung",
            text: "Wir begutachten die Flächen vor Ort in Düsseldorf und besprechen Ihre Farbwünsche sowie den Renovierungsumfang.",
            icon: <Search className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "02",
            title: "Angebot",
            text: "Sie erhalten ein transparentes Angebot für Ihre Malerarbeiten – inklusive aller Material- und Lohnkosten.",
            icon: <FileText className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "03",
            title: "Vorbereitung",
            text: "Wir vereinbaren einen passenden Termin. Wir kümmern uns um das Abkleben und den Schutz Ihrer Möbel.",
            icon: <Calendar className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "04",
            title: "Anstrich",
            text: "Fachgerechte Ausführung mit hochwertigen Farben und eine saubere Übergabe der frisch renovierten Räume.",
            icon: <Paintbrush className="w-6 h-6 text-[#2AA34D]" />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            <div className="max-w-[1700px] mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <span className="text-[#2AA34D] font-bold uppercase tracking-[0.2em] text-sm">
                        Der Ablauf
                    </span>
                    <h2 className="text-[2.8rem] md:text-[3.5rem] font-extrabold text-[#083224] leading-tight mt-2 uppercase">
                        In 4 Schritten zu Ihrem <br />
                        <span className="text-[#2AA34D]">
                            frischen Anstrich
                        </span>
                        
                    </h2>
                    <div className="h-1 w-32 bg-[#2AA34D] mt-6"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {schritte.map((item) => (
                        <div
                            key={item.number}
                            className="relative p-10 rounded-sm transition-all hover:shadow-lg"
                        >
                            <span className="absolute top-4 right-8 text-6xl font-black text-black/5">
                                {item.number}
                            </span>
                            <div className="mb-8 inline-block p-4 bg-white shadow-sm rounded-sm">
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold text-[#083224] mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#42514A] leading-relaxed text-[0.95rem]">
                                {item.text}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MalerServiceAblauf;
