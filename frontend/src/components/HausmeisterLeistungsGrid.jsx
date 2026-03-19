import React from "react";
import ServiceProcessHausmeister from './HausmeisterComponents/ServiceProcessHausmeister.jsx';
import FAQSectionHausmeister from "./HausmeisterComponents/FAQSectionHausmeister.jsx";

// Import der AVIF-Bilder
import Instanthaltung_XL from '../media/Hausmeister_AVIF/Instanthaltung_XL.avif';
import Gewerbebetreuung_XL_Querformat from '../media/Hausmeister_AVIF/Gewerbebetreuung_XL_Querformat.avif';
import Reperaturservice_XL_Quadratformat from '../media/Hausmeister_AVIF/Reperaturservice_XL_Quadratform (1).avif';
import Objektüberwachung_XL_Quadrat from '../media/Hausmeister_AVIF/Objektüberwachung_XL_Quadratform.avif';

function HausmeisterLeistungenGrid() {
    const leistungen = [
        {
            title: "Technische Instandhaltung",
            text: (
                <>
                    Regelmäßige <span className="text-[#2AA34D] font-semibold">Objektbegehungen</span> zur Sicherung der Betriebsbereitschaft. 
                    Wir führen die <span className="text-[#2AA34D] font-semibold">Heizungskontrolle</span> durch, prüfen den Wasserdruck und entlüften Heizkörper, 
                    um den <span className="text-[#2AA34D] font-semibold">Werterhalt</span> Ihrer Immobilie langfristig zu garantieren.
                </>
            ),
            wrapper: "md:col-span-2",
            imageHeight: "h-64 md:h-[450px]",
            titleSize: "text-[1.8rem] md:text-[3rem]",
            alt: "Hausmeister bei der technischen Instandhaltung und Heizungskontrolle in einem Wohnobjekt",
            image: Instanthaltung_XL // AVIF-Bild
        },
        {
            title: "Reparaturservice",
            text: (
                <>
                    Schnelle Hilfe bei Defekten im Alltag: Wir übernehmen den fachgerechten <span className="text-[#2AA34D] font-semibold">Leuchtmittelwechsel</span>, 
                    beheben klemmende Schlösser und führen <span className="text-[#2AA34D] font-semibold">Kleinreparaturen</span> an Türen, Fenstern 
                    und Sanitärobjekten proaktiv aus.
                </>
            ),
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[340px]",
            titleSize: "text-[1.4rem] md:text-[2.2rem]",
            alt: "Handwerker beim Austausch von Leuchtmitteln und Durchführung von Kleinreparaturen",
            image: Reperaturservice_XL_Quadratformat // AVIF-Bild
        },
        {
            title: "Objektüberwachung",
            text: (
                <>
                    Sorgfältige Kontrolle der <span className="text-[#2AA34D] font-semibold">Hausordnung</span> und Sauberkeit. 
                    Wir überwachen Gemeinschaftsflächen, halten Fluchtwege frei und dienen als zuverlässiger <span className="text-[#2AA34D] font-semibold">Ansprechpartner vor Ort</span> 
                    für Mieter und Eigentümer in Düsseldorf.
                </>
            ),
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[340px]",
            titleSize: "text-[1.4rem] md:text-[2.2rem]",
            alt: "Hausmeister bei der Begehung und Kontrolle der Hausordnung im Treppenhaus",
            image: Objektüberwachung_XL_Quadrat // AVIF-Bild
        },
        {
            title: "Gewerbebetreuung",
            text: (
                <>
                    Repräsentativer Service für Büros und Ladenlokale. Von der <span className="text-[#2AA34D] font-semibold">Müllentsorgung</span> bis zur 
                    Überprüfung technischer Anlagen sorgen wir dafür, dass Ihr <span className="text-[#2AA34D] font-semibold">Geschäftsstandort</span> 
                    jederzeit einen gepflegten und einladenden Eindruck hinterlässt.
                </>
            ),
            wrapper: "md:col-span-2",
            imageHeight: "h-56 md:h-[400px]",
            titleSize: "text-[1.5rem] md:text-[2.5rem]",
            alt: "Professionelle Gewerbebetreuung und Objektservice für Bürogebäude in Düsseldorf",
            image: Gewerbebetreuung_XL_Querformat // AVIF-Bild
        }
    ];

    return (
        <section className="mx-auto w-full max-w-[1700px] px-5 py-12 md:px-12">
            <div className="max-w-4xl">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#2AA34D]">Zuverlässiger Objektservice</span>
                <h2 className="font-heading mt-4 text-[2.2rem] font-extrabold uppercase text-[#083224] md:text-[4.2rem]">
                    Hausmeisterleistungen <br />
                    <span className="text-[#2AA34D]">in Düsseldorf</span>
                </h2>
                <p className="mt-6 text-[#42514A] text-lg leading-relaxed max-w-2xl">
                    Wir kümmern uns um die Details, damit Sie sich auf das Wesentliche konzentrieren können. 
                    Professionelle <span className="text-[#2AA34D] font-semibold">Immobilienpflege</span> für Privat und Gewerbe.
                </p>
            </div>

            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:gap-12">
                {leistungen.map((item, idx) => (
                    <article key={idx} className={`group flex flex-col overflow-hidden ${item.wrapper}`}>
                        <div className={`relative overflow-hidden bg-gray-100 rounded-sm ${item.imageHeight}`}>
                            {/* <picture>-Tag mit AVIF-Quelle und Fallback-Bild */}
                            <picture>
                                <source srcSet={item.image} type="image/avif" />
                                <img
                                    src={item.image} // Fallback-Bild (z.B. JPG, falls AVIF nicht unterstützt wird - HIER WIRD AVIF IMPORTIERT, FALLBACK SOLLTE EIN ANDERES FORMAT SEIN)
                                    alt={item.alt}
                                    className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" // Bildstyling
                                    loading="lazy" // SEO-Tipp: Lazy Loading
                                />
                            </picture>
                        </div>
                        <div className="pt-6">
                            <h3 className={`font-heading font-bold text-[#083224] group-hover:text-[#2AA34D] transition-colors ${item.titleSize}`}>
                                {item.title}
                            </h3>
                            <p className="mt-4 text-[#42514A] lg:text-[1.15rem] leading-relaxed">
                                {item.text}
                            </p>
                            <div className="mt-8">
                                <a 
                                    href="/kontakt" 
                                    className="inline-block bg-[#2AA34D] px-8 py-4 text-sm font-bold uppercase text-white hover:bg-[#083224] transition-all shadow-md hover:shadow-lg"
                                >
                                    Jetzt Service anfragen
                                </a>
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