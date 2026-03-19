import React from "react";
import ServiceProcessHausmeister from './HausmeisterComponents/ServiceProcessHausmeister.jsx';
import FAQSectionHausmeister from "./HausmeisterComponents/FAQSectionHausmeister.jsx";

function HausmeisterLeistungenGrid() {
    const leistungen = [
        {
            title: "Instandhaltung",
            text: "Regelmäßige Kontrolle der Haustechnik und proaktive Pflege, um den Wert Ihrer Immobilie langfristig zu sichern.",
            wrapper: "md:col-span-2",
            imageHeight: "h-64 md:h-[450px]",
            titleSize: "text-[1.8rem] md:text-[3rem]",
        },
        {
            title: "Kleinreparaturen",
            text: "Schnelle Behebung von Defekten, wie klemmende Türen, Leuchtmittelwechsel oder Ausbesserungen im Innenbereich.",
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[340px]",
            titleSize: "text-[1.4rem] md:text-[2.2rem]",
        },
        {
            title: "Objektservice",
            text: "Sorgfältige Überwachung der Ordnung und Sicherheit in Treppenhäusern, Kellern und Gemeinschaftsflächen.",
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[340px]",
            titleSize: "text-[1.4rem] md:text-[2.2rem]",
        },
        {
            title: "Gewerbebetreuung",
            text: "Spezieller Service für Ladenlokale und Büros – wir sorgen dafür, dass Ihr Geschäftsstandort immer repräsentativ bleibt.",
            wrapper: "md:col-span-2",
            imageHeight: "h-56 md:h-[400px]",
            titleSize: "text-[1.5rem] md:text-[2.5rem]",
        }
    ];

    return (
        <section className="mx-auto w-full max-w-[1700px] px-5 py-12 md:px-12">
            <div className="max-w-4xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2AA34D]">Objektpflege</span>
                <h2 className="font-heading mt-4 text-[2.2rem] font-extrabold uppercase text-[#083224] md:text-[4.2rem]">Hausmeisterarbeiten</h2>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
                {leistungen.map((item, idx) => (
                    <article key={idx} className={`group flex flex-col overflow-hidden ${item.wrapper}`}>
                        <div className={`relative overflow-hidden bg-gray-100 rounded-sm ${item.imageHeight}`}>
                            <div className="absolute inset-0 flex items-center justify-center text-gray-400">Bild Hausmeister {idx + 1}</div>
                        </div>
                        <div className="pt-6">
                            <h3 className={`font-heading font-bold text-[#083224] group-hover:text-[#2AA34D] transition-colors ${item.titleSize}`}>{item.title}</h3>
                            <p className="mt-4 text-[#42514A] lg:text-[1.15rem]">{item.text}</p>
                            <div className="mt-8">
                                <a href="/kontakt" className="bg-[#2AA34D] px-8 py-4 text-sm font-bold uppercase text-white hover:bg-[#083224] transition-all">Anfragen</a>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <ServiceProcessHausmeister />
            <FAQSectionHausmeister />
        </section>
    );
}

export default HausmeisterLeistungenGrid;