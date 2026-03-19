import React from "react";
import { FiCalendar, FiSearch, FiCheckCircle, FiUser } from "react-icons/fi";

const ServiceProcessHausmeister = () => {
    const steps = [
        { number: "01", title: "Besichtigung", icon: <FiUser />, text: "Wir sichten das Objekt und besprechen die nötigen Intervalle oder Reparaturen direkt vor Ort." },
        { number: "02", title: "Angebot", icon: <FiSearch />, text: "Sie erhalten einen transparenten Kostenvoranschlag für Einzelaufträge oder regelmäßigen Service." },
        { number: "03", title: "Planung", icon: <FiCalendar />, text: "Wir takten die Einsätze so ein, dass der laufende Betrieb oder Ihr Alltag nicht gestört wird." },
        { number: "04", title: "Pflege", icon: <FiCheckCircle />, text: "Zuverlässige Ausführung aller Arbeiten mit lückenloser Dokumentation für Ihren Werterhalt." }
    ];

    return (
        <section className="py-24">
            <div className="mb-20">
                <span className="text-[#2AA34D] uppercase tracking-widest text-sm font-bold">Ablauf</span>
                <h2 className="font-heading mt-4 text-[2.5rem] font-extrabold text-[#083224] md:text-[4rem]">Ihr Weg zum <span className="text-[#2AA34D]">gepflegten Objekt</span></h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {steps.map((step, i) => (
                    <div key={i} className="group relative bg-white p-8 shadow-sm transition-all hover:shadow-xl">
                        <span className="absolute right-4 top-2 text-[5rem] font-black text-[#083224]/5 transition-colors group-hover:text-[#2AA34D]/10">{step.number}</span>
                        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#D7F2DD] text-[#2AA34D] group-hover:bg-[#2AA34D] group-hover:text-white transition-all text-2xl">{step.icon}</div>
                        <h3 className="font-heading mb-4 text-xl font-bold text-[#083224]">{step.title}</h3>
                        <p className="text-[#42514A]">{step.text}</p>
                        <div className="absolute bottom-0 left-0 h-1 w-0 bg-[#2AA34D] transition-all group-hover:w-full" />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ServiceProcessHausmeister;