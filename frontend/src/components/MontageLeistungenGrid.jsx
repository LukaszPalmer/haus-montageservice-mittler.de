import Montage_Küche_XL_Query_Quadratformat from '../media/Montage_AVIF/KüchenMontage_XL_Query_QuadratFormat.avif';
import New_Montage_Büro_Einrichtung_Querformat_XL_Query from '../media/Montage_AVIF/XL_QUERY_QUERFORMAT_BÜROEINRICHTUNG.avif';
import Badezimmer_Montage_XL_Query_Quadrat_Format from '../media/Montage_AVIF/Banezimmermontage_XL_Query_Quadratformat.avif';
import Wohnzimmer_Montage_XL_Query_Quadrat_Format from '../media/Montage_AVIF/Wohnzimmer_Montage_XL_Query_Quadrat_Format.avif';
import Klein_Montage_XL_Query_Quadrat_Format from '../media/Montage_AVIF/Kleinmontage_XL_Query_Quadratform.avif';
import Möbelmontage_XL_Query_Querformat from '../media/Montage_AVIF/Möbel_Montage_XL_Query_Querformat.avif';

import ServiceProcess from '../components/HausmeisterComponents/ServiceProcess.jsx';
import FAQSection from "./HausmeisterComponents/FAQSection.jsx";

function MontageLeistungenGrid() {
    const leistungen = [
        {
            title: "Möbelmontage",
            text: (
                <>
                    Wir bieten Ihnen fachgerechte Unterstützung bei der{" "}
                    <span className="font-semibold text-[#2AA34D]">Montage von Möbeln</span> in Düsseldorf. Von komplexen Schranksystemen bis hin zu Büroausstattungen sorgen wir für eine{" "}
                    <span className="font-semibold text-[#2AA34D]">stabile Ausführung</span> und ein perfektes Ergebnis nach Herstellervorgaben.
                </>
            ),
            image: Möbelmontage_XL_Query_Querformat,
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight: "h-64 md:h-[400px] lg:h-[450px] xl:h-[500px] 2xl:h-[580px] min-[2200px]:h-[650px]",
            titleSize: "text-[1.8rem] md:text-[2.2rem] lg:text-[2.6rem] xl:text-[3rem] 2xl:text-[3.5rem] min-[2200px]:text-[4rem]",
        },
        {
            title: "Kleinstmontagen",
            text: (
                <>
                    Unser Team übernimmt die Befestigung von Spiegeln, Bildern, Regalen oder Lampen. Wir garantieren eine{" "}
                    <span className="font-semibold text-[#2AA34D]">sichere Verankerung</span> in jedem Untergrund und sorgen für ein optisch einwandfreies Gesamtbild Ihrer Räume.
                </>
            ),
            image: Klein_Montage_XL_Query_Quadrat_Format,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize: "text-[1.4rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] min-[2200px]:text-[2.8rem]",
        },
        {
            title: "Küchenmontage",
            text: (
                <>
                    Professionelle Unterstützung beim Aufbau oder Umbau Ihrer Küchenelemente. Wir achten auf{" "}
                    <span className="font-semibold text-[#2AA34D]">millimetergenaue Ausrichtung</span> und sorgen dafür, dass alle Komponenten funktional und optisch perfekt integriert werden.
                </>
            ),
            image: Montage_Küche_XL_Query_Quadratformat,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize: "text-[1.4rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] min-[2200px]:text-[2.8rem]",
        },
        {
            title: "Büro- & Objekteinrichtung",
            text: (
                <>
                    Effiziente Montage ganzer Arbeitswelten. Wir übernehmen die Aufstellung von Schreibtischsystemen, Trennwänden und Akustikelementen. Durch eine{" "}
                    <span className="font-semibold text-[#2AA34D]">strukturierte Arbeitsweise</span> minimieren wir Ausfallzeiten in Ihrem Betrieb und garantieren höchste Belastbarkeit.
                </>
            ),
            image: New_Montage_Büro_Einrichtung_Querformat_XL_Query,
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight: "h-56 md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[440px] min-[2200px]:h-[480px]",
            titleSize: "text-[1.5rem] md:text-[1.9rem] lg:text-[2.2rem] xl:text-[2.5rem] 2xl:text-[2.8rem] min-[2200px]:text-[3.2rem]",
        },
        {
            title: "Wohnzimmermontage",
            text: (
                <>
                    Ihre Experten für die{" "}
                    <span className="font-semibold text-[#2AA34D]">Installation von Wohnwänden</span>, TV-Halterungen und Designermöbeln. Wir schaffen durch{" "}
                    <span className="font-semibold text-[#2AA34D]">präzise Montagearbeit</span> eine harmonische Wohnatmosphäre und sicheren Halt für Ihre hochwertige Einrichtung.
                </>
            ),
            image: Wohnzimmer_Montage_XL_Query_Quadrat_Format,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize: "text-[1.4rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] min-[2200px]:text-[2.8rem]",
        },
        {
            title: "Badezimmermontage",
            text: (
                <>
                    Fachgerechte Montage von Badmöbeln, Spiegelschränken und Zubehör. Unser Team garantiert eine{" "}
                    <span className="font-semibold text-[#2AA34D]">saubere Installation</span> unter Berücksichtigung der Bausubstanz, um Ihre{" "}
                    <span className="font-semibold text-[#2AA34D]">Bad-Ausstattung</span> perfekt und langlebig zu integrieren.
                </>
            ),
            image: Badezimmer_Montage_XL_Query_Quadrat_Format,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight: "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize: "text-[1.4rem] md:text-[1.7rem] lg:text-[1.9rem] xl:text-[2.2rem] 2xl:text-[2.5rem] min-[2200px]:text-[2.8rem]",
        },
    ];

    return (
        <section className="relative mx-auto w-full max-w-[100%] overflow-hidden bg-white px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:max-w-[1700px] xl:px-16 xl:py-24 2xl:max-w-[1900px] 2xl:px-20 2xl:py-28 min-[2200px]:max-w-[2200px] min-[2200px]:px-24 min-[2200px]:py-32 min-[2560px]:max-w-[2400px] min-[2560px]:px-28">
            <div className="absolute left-[-10%] top-[10%] -z-0 h-[500px] w-[500px] rounded-full bg-[#2AA34D]/[0.02] blur-[120px]" />

            <div className="relative z-10">
                <div className="max-w-4xl xl:max-w-[1100px] 2xl:max-w-[1220px] min-[2200px]:max-w-[1340px]">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.2em] text-[#2AA34D] md:text-sm md:tracking-[0.24em] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.06rem] min-[2200px]:text-[1.12rem]">
                        Qualität & Präzision
                    </span>

                    <h2 className="font-heading mt-4 text-[2.2rem] font-extrabold uppercase leading-[1] tracking-[-0.03em] text-[#083224] md:text-[3.5rem] lg:text-[4.2rem] xl:text-[4.8rem] 2xl:text-[5.4rem] min-[2200px]:text-[6rem]">
                        Fachgerechte<br />
                        Montagearbeiten
                    </h2>

                    <p className="mt-6 max-w-[860px] font-sans text-[1.1rem] leading-relaxed text-[#42514A] md:text-[1.25rem] lg:text-[1.35rem] xl:max-w-[1000px] xl:text-[1.45rem] 2xl:text-[1.6rem] min-[2200px]:max-w-[1200px] min-[2200px]:text-[1.8rem]">
                        Präzision aus Meisterhand: Entdecken Sie unsere spezialisierten Leistungen für professionelle Montagen und fachgerechte Installationen für private und gewerbliche Objekte in Düsseldorf.
                    </p>
                </div>

                <div className="mt-16 grid gap-x-8 gap-y-12 md:mt-20 md:grid-cols-2 lg:gap-x-12 lg:gap-y-16 xl:gap-x-14 xl:gap-y-20 2xl:gap-x-16 2xl:gap-y-24">
                    {leistungen.map((item) => (
                        <article
                            key={item.title}
                            className={`group flex h-full flex-col overflow-hidden transition-all duration-500 ${item.wrapper}`}
                        >
                            <div className={`relative overflow-hidden rounded-sm ${item.imageHeight}`}>
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#083224]/30 via-transparent to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
                            </div>

                            <div className="flex flex-1 flex-col justify-between pt-6 md:pt-8 lg:pt-10">
                                <div>
                                    <h3 className={`font-heading font-bold leading-tight text-[#083224] transition-colors duration-300 group-hover:text-[#2AA34D] ${item.titleSize}`}>
                                        {item.title}
                                    </h3>
                                    <p className="mt-4 max-w-[98%] font-sans text-[1rem] leading-relaxed text-[#42514A] md:text-[1.1rem] lg:text-[1.15rem] xl:text-[1.25rem] 2xl:text-[1.35rem] min-[2200px]:text-[1.5rem]">
                                        {item.text}
                                    </p>
                                </div>
                                <div className="mt-8 md:mt-10 lg:mt-12">
                                    <a
                                        href={item.link}
                                        className="relative inline-flex items-center justify-center overflow-hidden bg-[#2AA34D] px-8 py-4 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-[#083224] hover:shadow-xl hover:shadow-[#2AA34D]/20 md:text-base lg:px-10 lg:py-5 lg:text-[1rem] xl:text-[1.1rem]"
                                    >
                                        <span className="relative z-10">Anfragen</span>
                                    </a>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <ServiceProcess/>
            <FAQSection/>
        </section>
    );
}

export default MontageLeistungenGrid;