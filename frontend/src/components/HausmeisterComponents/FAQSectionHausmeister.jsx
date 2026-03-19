import React, { useState } from "react";
import { FiPlus } from "react-icons/fi";

const FAQSectionHausmeister = () => {
    const [open, setOpen] = useState(null);
    const faqs = [
        { q: "Bieten Sie auch Notfalldienste an?", a: "Für Vertragskunden bieten wir schnelle Reaktionszeiten bei dringenden Problemen wie Rohrverstopfungen oder Stromausfällen." },
        { q: "Übernehmen Sie die regelmäßige Treppenhausreinigung?", a: "Ja, im Rahmen unseres Hausmeisterservices bieten wir auch die Pflege von Gemeinschaftsflächen an." },
        { q: "Sind die Materialkosten im Preis enthalten?", a: "Kleinteile sind oft inkludiert, größere Materialmengen werden vorab transparent mit Ihnen abgestimmt." }
    ];

    return (
        <section className="py-24">
            <div className="grid lg:grid-cols-[1fr_1.5fr] gap-16">
                <div>
                    <span className="text-[#2AA34D] uppercase font-bold tracking-widest text-sm">FAQ</span>
                    <h2 className="font-heading mt-6 text-[3rem] font-extrabold text-[#083224]">Häufige <span className="text-[#2AA34D]">Fragen.</span></h2>
                </div>
                <div className="space-y-4">
                    {faqs.map((f, i) => (
                        <div key={i} className="border rounded-xl overflow-hidden bg-white">
                            <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between p-6 text-left font-bold text-[#083224]">
                                <span>{f.q}</span>
                                <FiPlus className={`transition-transform ${open === i ? "rotate-45" : ""}`} />
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 p-6 pt-0 opacity-100" : "max-h-0 opacity-0"}`}>
                                <p className="text-slate-600">{f.a}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQSectionHausmeister;