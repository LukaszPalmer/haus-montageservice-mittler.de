import React from "react";
import { FiEdit3, FiSearch, FiCalendar, FiCheckCircle } from "react-icons/fi";

const MalerArbeitsablauf = () => {
    const steps = [
        { 
            number: "01", 
            title: "Besichtigung", 
            icon: <FiSearch />, 
            text: "Wir begutachten die Flächen vor Ort in Düsseldorf und besprechen Ihre Farbwünsche und den Renovierungsumfang." 
        },
        { 
            number: "02", 
            title: "Angebot", 
            icon: <FiEdit3 />, 
            text: "Sie erhalten ein transparentes Angebot für Ihre Malerarbeiten – inklusive aller Material- und Lohnkosten." 
        },
        { 
            number: "03", 
            title: "Vorbereitung", 
            icon: <FiCalendar />, 
            text: "Wir vereinbaren einen passenden Termin. Wir kümmern uns um das Abkleben und den Schutz Ihrer Möbel." 
        },
        { 
            number: "04", 
            title: "Anstrich", 
            icon: <FiCheckCircle />, 
            text: "Fachgerechte Ausführung mit hochwertigen Farben und eine saubere Übergabe der frisch renovierten Räume." 
        },
    ];

    return (
        <div className=" py-20 px-5 md:px-12 lg:py-32 border-b border-slate-100">
            <div className="mx-auto max-w-[1700px] xl:px-16 2xl:max-w-[1900px] min-[2200px]:max-w-[2200px]">
                <span className="font-sans text-xs font-bold uppercase tracking-[0.2em] text-[#2AA34D] md:text-sm">Schritt für Schritt</span>
                <h2 className="font-heading mt-4 text-[2.5rem] font-extrabold text-[#083224] md:text-[3.5rem] lg:text-[4.5rem] tracking-[-0.03em]">Saubere <span className="text-[#2AA34D]">Planung</span>.</h2>
                
                <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {steps.map((s, i) => (
                        <div key={i} className="group relative bg-white p-10 shadow-sm transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border-b-4 border-transparent hover:border-[#2AA34D]">
                            <span className="absolute right-6 top-4 text-6xl font-black text-[#083224]/5 group-hover:text-[#2AA34D]/10 transition-colors">{s.number}</span>
                            <div className="mb-8 flex h-16 w-16 items-center justify-center bg-[#D7F2DD] text-[#2AA34D] group-hover:bg-[#2AA34D] group-hover:text-white transition-all duration-300 text-2xl">
                                {s.icon}
                            </div>
                            <h3 className="font-heading text-xl font-bold text-[#083224] mb-4 lg:text-2xl">{s.title}</h3>
                            <p className="font-sans text-slate-600 leading-relaxed text-[1.05rem]">{s.text}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default MalerArbeitsablauf;