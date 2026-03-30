import React from "react";
import { Search, FileText, Calendar, Paintbrush } from "lucide-react";

const MalerServiceAblauf = () => {
    const schritte = [
        {
            number: "01",
            title: "Besichtigung",
            text: (
                <>
                    Wir begutachten die Flächen{" "}
                    <span className="text-[#2AA34D] font-semibold">vor Ort in Düsseldorf</span>{" "}
                    und besprechen Ihre Farbwünsche und den Renovierungsumfang.
                </>
            ),
            icon: <Search className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "02",
            title: "Angebot",
            text: (
                <>
                    Sie erhalten ein{" "}
                    <span className="text-[#2AA34D] font-semibold">transparentes Angebot</span>{" "}
                    für Ihre Renovierungsarbeiten – inklusive aller Material- und Lohnkosten.
                </>
            ),
            icon: <FileText className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "03",
            title: "Vorbereitung",
            text: (
                <>
                    Wir vereinbaren einen passenden Termin. Wir kümmern uns um das{" "}
                    <span className="text-[#2AA34D] font-semibold">Abkleben und den Schutz</span>{" "}
                    Ihrer Möbel.
                </>
            ),
            icon: <Calendar className="w-6 h-6 text-[#2AA34D]" />,
        },
        {
            number: "04",
            title: "Anstrich",
            text: (
                <>
                    <span className="text-[#2AA34D] font-semibold">Fachgerechte Ausführung</span>{" "}
                    mit hochwertigen Farben und eine saubere Übergabe der frisch renovierten Räume.
                </>
            ),
            icon: <Paintbrush className="w-6 h-6 text-[#2AA34D]" />,
        },
    ];

    return (
        <section className="py-20 bg-white">
            {/* Max-width etwas reduziert für bessere Zentrierung im 2er Grid */}
            <div className="max-w-[1200px] mx-auto px-6 md:px-12">
                <div className="mb-16">
                    <span className="text-[#2AA34D] font-bold uppercase tracking-[0.2em] text-sm">
                        Der Ablauf
                    </span>
                    <h2 className="text-[2.5rem] md:text-[3.5rem] font-extrabold text-[#083224] leading-tight mt-2 uppercase">
                        In 4 Schritten zu Ihrem <br />
                        <span className="text-[#2AA34D]">
                            frischen Anstrich
                        </span>
                    </h2>
                    <div className="h-1 w-32 bg-[#2AA34D] mt-6"></div>
                </div>

                {/* Änderung hier: 
                   - grid-cols-1 (Mobile)
                   - md:grid-cols-2 (Tablet & Laptop 1024px / 1440px) -> 2 Kacheln nebeneinander
                   - xl:max-w-7xl sorgt dafür, dass es auch auf großen Monitoren edel aussieht
                */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {schritte.map((item) => (
                        <div
                            key={item.number}
                            className="relative p-8 md:p-12 rounded-sm transition-all hover:shadow-xl bg-[#FBFBFB] border border-gray-100 flex flex-col items-start"
                        >
                            {/* Die Nummer im Hintergrund */}
                            <span className="absolute top-6 right-10 text-8xl font-black text-black/5 pointer-events-none">
                                {item.number}
                            </span>
                            
                            {/* Icon Box */}
                            <div className="mb-8 inline-block p-5 bg-white shadow-sm border border-gray-50 rounded-sm">
                                {item.icon}
                            </div>
                            
                            <h3 className="text-2xl font-bold text-[#083224] mb-4 uppercase tracking-wide">
                                {item.title}
                            </h3>
                            
                            <p className="text-[#42514A] leading-relaxed text-lg max-w-[90%]">
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