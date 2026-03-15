import React from "react";
import { FiCheckCircle, FiSend, FiPhoneCall, FiCoffee, FiZap } from "react-icons/fi";

const WorkflowStep = ({ number, icon, title, desc }) => (
    <div className="relative flex flex-col items-center text-center group">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-xl shadow-[#2AA34D]/10 text-[#2AA34D] transition-all duration-500 group-hover:scale-110 group-hover:bg-[#2AA34D] group-hover:text-white lg:h-20 lg:w-20">
            {icon}
        </div>
        <div className="mt-6">
            <span className="font-sans text-[10px] font-bold uppercase tracking-[0.2em] text-[#2AA34D]">Schritt {number}</span>
            <h4 className="mt-2 font-heading text-xl font-bold text-[#083224]">{title}</h4>
            <p className="mt-3 text-sm leading-relaxed text-[#42514A] lg:text-base">{desc}</p>
        </div>
        {/* Verbindungsline für Desktop */}
        <div className="absolute left-[70%] top-10 hidden w-full border-t-2 border-dashed border-[#D9E7DC] lg:block last:hidden" />
    </div>
);

function BewerbungWorkflow() {
    const steps = [
        {
            icon: <FiSend size={28} />,
            title: "Kurzbewerbung",
            desc: "Sende uns deine PDF-Dokumente einfach über das Formular oben – dauert keine 2 Minuten."
        },
        {
            icon: <FiPhoneCall size={28} />,
            title: "Erstgespräch",
            desc: "Wir rufen dich kurz an, um uns gegenseitig kennenzulernen und offene Fragen zu klären."
        },
        {
            icon: <FiCoffee size={28} />,
            title: "Persönliches Treffen",
            desc: "Wir treffen uns auf einen Kaffee, tauschen uns aus und besprechen alle Details zur Zusammenarbeit."
        },
        {
            icon: <FiCheckCircle size={28} />,
            title: "Start im Team",
            desc: "Willkommen an Bord! Wir kümmern uns um ein reibungsloses Onboarding."
        }
    ];

    return (
        <div className="w-full py-24">
            <div className="mx-auto max-w-[1700px] px-6 md:px-12 lg:px-20">
                
                {/* Header Sektion */}
                <div className="mb-20 text-center">
                    <h2 className="font-heading text-3xl font-extrabold text-[#083224] md:text-4xl lg:text-5xl">
                        Dein Weg in unser <span className="text-[#2AA34D]">Team</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-2xl text-[#42514A]">
                        Wir hassen komplizierte Prozesse genauso wie du. Deshalb ist unser Bewerbungsablauf schnell, transparent und auf Augenhöhe.
                    </p>
                </div>

                {/* Schritte Grid */}
                <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
                    {steps.map((step, index) => (
                        <WorkflowStep 
                            key={index} 
                            number={index + 1} 
                            icon={step.icon} 
                            title={step.title} 
                            desc={step.desc} 
                        />
                    ))}
                </div>

                {/* WOW-EFFEKT: Speed-Dating Karte */}
                <div className="mt-24 overflow-hidden  bg-[#083224] p-8 shadow-2xl md:p-12 lg:p-16 relative">
                    {/* Dekorative Elemente */}
                    <div className="absolute top-0 right-0 p-10 opacity-10">
                        <FiZap size={200} className="text-white" />
                    </div>

                    <div className="relative z-10 flex flex-col items-center justify-between gap-10 lg:flex-row">
                        <div className="max-w-2xl text-center lg:text-left">
                            <div className="inline-flex items-center gap-2 rounded-full bg-[#2AA34D]/20 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2AA34D]">
                                <FiZap className="animate-pulse" /> Keine Lust auf PDFs?
                            </div>
                            <h3 className="mt-6 font-heading text-3xl font-bold text-white md:text-4xl">
                                Nutze unser 60-Sekunden <br /> <span className="text-[#2AA34D]">WhatsApp-Express</span>
                            </h3>
                            <p className="mt-6 text-lg text-slate-300">
                                Du bist gerade unterwegs und hast keinen Lebenslauf zur Hand? Kein Problem. Schreib uns einfach direkt per WhatsApp und wir klären alles Weitere.
                            </p>
                        </div>
                        
                        <a 
                            href="https://wa.me/4915753137765" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="group flex h-20 items-center justify-center gap-4 bg-[#2AA34D] px-10 text-lg font-bold uppercase tracking-widest text-white transition-all hover:scale-105 hover:bg-[#238c41] active:scale-95 shadow-xl shadow-[#2AA34D]/20"
                        >
                            Express-Chat <FiZap />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BewerbungWorkflow;