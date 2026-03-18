import React from "react";

// Importe der verschiedenen Bildgrößen
import Innenanstrich_Mobilequery from "../media/MalerBilder_AVIF/Maler_Innenanstrich.avif";
import Innenanstrich_Tablet_Querformat from "../media/MalerBilder_AVIF/Maler_Innenanstrich.avif";
import MalerInnenAnstrich_XL_Query from "../media/MalerBilder_AVIF/Maler_Innenanstrich.avif";

// Components
import MalerFAQ from "./MalerComponents/MalerFAQ";
import MalerArbeitsablauf from "./MalerComponents/MalerArbeitsablauf";

// Deine neuen AVIF Importe zur WANDGESTALLTUNG
import PhoneQuery_Avif from "../media/MalerBilder_AVIF/Mobile_Query_Wandgestalltung.avif";
import LargePhoneQuery_Avif from "../media/MalerBilder_AVIF/Large_MobileQuery_Phone_Wandgestalltung.avif";
import Tabletquery_Avif from "../media/MalerBilder_AVIF/Tablet_Query_Wandgestalltung.avif";
import LargeTabletQuery_Avif from "../media/MalerBilder_AVIF/Large_Tabletquery_Wandgestalltung.avif";
import DesktopQuery_Avif from "../media/MalerBilder_AVIF/Desktop_Query_Wandgestalltung.avif";
import LargeDesktopQuery_Avif from "../media/MalerBilder_AVIF/Large_DesktopQuery_Wandgestalltung.avif";
import UltraLargeMediaQuery_Avif from "../media/MalerBilder_AVIF/4kMedia_Query_Wandgestalltung.avif";


// Neuer Import für Außenfassade 4k Query Quadratformat
import New_Quadratformat_4k_Mediaquery_Außenfassade from '../media/MalerBilder_AVIF/New_4k_Media_Query_Außenfassade (1).avif';

// meine neuen Importe
import AllgeminemalerHilfe from "../media/MalerBilder_AVIF/Allgemeine_Malerhilfe.avif";
import Denkenansctrich from "../media/MalerBilder_AVIF/Deckenanstrich.avif";
import Außenfassade from "../media/MalerBilder_AVIF/4kMediaquery_Außenfassade.avif";
import malenBanner_XL_Query_Ausbesserung from "../media/MalerBilder_AVIF/Ausbesserungsarbeiten.avif";


function MalerLeistungenGrid() {
    const leistungen = [
        {
            title: "Innenanstriche",
            text: (
                <>
                    Wir realisieren saubere und gleichmäßige Anstriche für Ihre
                    Wohnräume, Flure und Geschäftsflächen mit Fokus auf höchste
                    Deckkraft und Umweltverträglichkeit. Durch den Einsatz
                    hochwertiger Dispersions- oder Silikatfarben sorgen wir für
                    eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        frische Raumwirkung
                    </span>{" "}
                    und ein sichtbar{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        ordentliches Ergebnis
                    </span>
                    . Unser Fokus liegt auf langlebigen Oberflächen und einer
                    fachgerechten Untergrundvorbehandlung, damit Ihre Immobilie
                    langfristig gepflegt, modern und einladend wirkt. Wir garantieren Ihnen eine 
                    <span className="font-semibold text-[#2AA34D]"> streifenfreie Ausführung </span> 
                    und eine saubere Baustelle nach jedem Arbeitstag.
                </>
            ),
            imageComponent: (
                <picture className="block h-full w-full">
                    <source
                        media="(min-width: 1921px)"
                        srcSet={MalerInnenAnstrich_XL_Query}
                    />
                    <source
                        media="(min-width: 1025px)"
                        srcSet={MalerInnenAnstrich_XL_Query}
                    />
                    <source
                        media="(min-width: 768px)"
                        srcSet={Innenanstrich_Tablet_Querformat}
                    />
                    <img
                        src={Innenanstrich_Mobilequery}
                        alt="Professionelle Innenanstriche Düsseldorf"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-[1.03]"
                    />
                </picture>
            ),
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight:
                "h-64 md:h-[380px] lg:h-[420px] xl:h-[480px] 2xl:h-[580px] min-[1921px]:h-[680px]",
            titleSize:
                "text-[1.55rem] md:text-[1.95rem] lg:text-[2.25rem] xl:text-[2.55rem] 2xl:text-[2.85rem] min-[2200px]:text-[3.15rem]",
        },
        {
            title: "Wandgestaltung",
            text: (
                <>
                    Individuelle Unterstützung bei der kreativen Farbberatung
                    und der präzisen handwerklichen Umsetzung Ihrer Wandflächen.
                    Wir setzen Akzente durch <span className="font-semibold text-[#2AA34D]">moderne Maltechniken</span> und
                    hochwertige Materialien. Von dekorativen Lasuren bis hin zu exklusiven 
                    <span className="font-semibold text-[#2AA34D]"> Akzentwänden</span> – wir verwandeln Ihre Räume in echte Unikate mit Charakter.
                </>
            ),
            imageComponent: (
                <picture className="block h-full w-full">
                    {/* 4K & Ultra Large Displays */}
                    <source
                        media="(min-width: 1921px)"
                        srcSet={UltraLargeMediaQuery_Avif}
                    />
                    {/* Large Desktop / XL Screens */}
                    <source
                        media="(min-width: 1441px)"
                        srcSet={LargeDesktopQuery_Avif}
                    />
                    {/* Standard Desktop / Laptops */}
                    <source
                        media="(min-width: 1025px)"
                        srcSet={DesktopQuery_Avif}
                    />
                    {/* Tablets Querformat / Large Tablets */}
                    <source
                        media="(min-width: 821px)"
                        srcSet={LargeTabletQuery_Avif}
                    />
                    {/* Tablets Hochformat */}
                    <source
                        media="(min-width: 481px)"
                        srcSet={Tabletquery_Avif}
                    />
                    {/* Große Smartphones */}
                    <source
                        media="(min-width: 381px)"
                        srcSet={LargePhoneQuery_Avif}
                    />
                    {/* Standard Mobile Fallback & SEO Optimierung */}
                    <img
                        src={PhoneQuery_Avif}
                        alt="Kreative Wandgestaltung und exklusive Maltechniken Düsseldorf"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </picture>
            ),
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
        {
            title: "Außenanstriche",
            text: (
                <>
                    Professionelle Fassadenanstriche dienen nicht nur der
                    Verschönerung, sondern primär dem <span className="font-semibold text-[#2AA34D]">Schutz Ihrer Immobilie</span> vor
                    Witterung, Algenbefall und UV-Strahlung. Wir verwenden ausschließlich 
                    <span className="font-semibold text-[#2AA34D]"> hochwertige Fassadenfarben</span>, die atmungsaktiv sind und den Wert Ihres Gebäudes nachhaltig steigern.
                </>
            ),
            imageComponent: (
                <picture className="block h-full w-full">
                    <source media="(min-width: 1921px)" srcSet={New_Quadratformat_4k_Mediaquery_Außenfassade} />
                    <source media="(min-width: 1441px)" srcSet={Außenfassade} />
                    <source media="(min-width: 1025px)" srcSet={Außenfassade} />
                    <source media="(min-width: 821px)" srcSet={Außenfassade} />
                    <source media="(min-width: 481px)" srcSet={Außenfassade} />
                    <source media="(min-width: 381px)" srcSet={Außenfassade} />
                    <img
                        src={Außenfassade}
                        alt="Professionelle Außenanstriche und Fassadengestaltung"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </picture>
            ),
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
        {
            title: "Ausbesserungsarbeiten",
            text: (
                <>
                    Kleine Mängel beeinträchtigten oft das Gesamtbild – wir
                    bieten gezielte Korrekturen und <span className="font-semibold text-[#2AA34D]">fachgerechte Spachtelarbeiten</span> an beanspruchten Wänden. 
                    Ob Risse, Löcher oder Abnutzungen: Wir sorgen für eine 
                    <span className="font-semibold text-[#2AA34D]"> glatte Oberflächenstruktur</span>, die bereit für den perfekten Neuanstrich ist.
                </>
            ),
            image: malenBanner_XL_Query_Ausbesserung,
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight:
                "h-56 md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[440px] min-[2200px]:h-[480px]",
            titleSize:
                "text-[1.3rem] md:text-[1.6rem] lg:text-[1.92rem] xl:text-[2.18rem] 2xl:text-[2.42rem] min-[2200px]:text-[2.66rem]",
        },
        {
            title: "Deckenanstriche",
            text: (
                <>
                    Schwer zugängliche Deckenflächen und hohe Räume streichen
                    wir fachgerecht, gleichmäßig und absolut <span className="font-semibold text-[#2AA34D]">streifenfrei</span> für
                    ein helles, gepflegtes Raumgefühl. Mit speziellen Rolltechniken und 
                    <span className="font-semibold text-[#2AA34D]"> hochwertigen Deckenfarben</span> vermeiden wir unschöne Schattenbildung und Ansätze.
                </>
            ),
            imageComponent: (
                <picture className="block h-full w-full">
                    <source
                        media="(min-width: 1921px)"
                        srcSet={Denkenansctrich}
                    />
                    <source
                        media="(min-width: 1441px)"
                        srcSet={Denkenansctrich}
                    />
                    <source
                        media="(min-width: 1025px)"
                        srcSet={Denkenansctrich}
                    />
                    <source
                        media="(min-width: 821px)"
                        srcSet={Denkenansctrich}
                    />
                    <source
                        media="(min-width: 481px)"
                        srcSet={Denkenansctrich}
                    />
                    <source
                        media="(min-width: 381px)"
                        srcSet={Denkenansctrich}
                    />
                    <img
                        src={Denkenansctrich}
                        alt="Fachgerechte Deckenanstriche"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </picture>
            ),
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
        {
            title: "Allgemeine Malerhilfe",
            text: (
                <>
                    Flexible Unterstützung bei aufwendigen Abklebearbeiten und
                    dem <span className="font-semibold text-[#2AA34D]">Schutz von Bodenbelägen</span> und Möbeln während Ihrer
                    Renovierungsprojekte. Wir übernehmen die 
                    <span className="font-semibold text-[#2AA34D]"> professionelle Vorbereitung</span>, damit Sie sich ganz auf die Gestaltung Ihres Zuhauses konzentrieren können.
                </>
            ),
            imageComponent: (
                <picture className="block h-full w-full">
                    <source
                        media="(min-width: 1921px)"
                        srcSet={AllgeminemalerHilfe}
                    />
                    <source
                        media="(min-width: 1441px)"
                        srcSet={AllgeminemalerHilfe}
                    />
                    <source
                        media="(min-width: 1025px)"
                        srcSet={AllgeminemalerHilfe}
                    />
                    <source
                        media="(min-width: 821px)"
                        srcSet={AllgeminemalerHilfe}
                    />
                    <source
                        media="(min-width: 481px)"
                        srcSet={AllgeminemalerHilfe}
                    />
                    <source
                        media="(min-width: 381px)"
                        srcSet={AllgeminemalerHilfe}
                    />
                    <img
                        src={AllgeminemalerHilfe}
                        alt="Allgemeine Malerhilfe und Unterstützung"
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                </picture>
            ),
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
    ];

    return (
        <section className="relative mx-auto w-full max-w-[100%] overflow-hidden bg-white px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:max-w-[1700px] xl:px-16 xl:py-24 2xl:max-w-[1900px] 2xl:px-20 min-[2200px]:max-w-[2200px] min-[2200px]:px-24">
            <div className="relative z-10">
                <div className="max-w-4xl xl:max-w-[1100px] 2xl:max-w-[1220px]">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#2AA34D] md:text-sm">
                        Unsere Leistungen
                    </span>
                    <h2 className="font-heading mt-4 text-[2rem] font-extrabold uppercase leading-[0.95] text-[#083224] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.4rem]">
                        Malerarbeiten im Überblick
                    </h2>
                    <p className="mt-5 max-w-[860px] font-sans text-[1rem] leading-7 text-[#42514A] md:text-[1.15rem]">
                        Erstklassige Malerleistungen für ein schönes, modernes
                        und wertbeständiges Zuhause in Düsseldorf und Umgebung.
                    </p>
                </div>

                <div className="mt-10 grid gap-x-6 gap-y-8 md:grid-cols-2 lg:gap-x-10">
                    {leistungen.map((item, index) => (
                        <article
                            key={index}
                            className={`group flex h-full flex-col overflow-hidden bg-white ${item.wrapper}`}
                        >
                            <div
                                className={`relative overflow-hidden ${item.imageHeight}`}
                            >
                                {item.imageComponent ? (
                                    item.imageComponent
                                ) : (
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        loading="lazy"
                                        decoding="async"
                                        className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                                    />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            <div className="flex flex-1 flex-col justify-between pt-4 md:pt-6 lg:min-h-[400px]">
                                <div>
                                    <h3
                                        className={`font-heading font-bold text-[#083224] ${item.titleSize}`}
                                    >
                                        {item.title}
                                    </h3>
                                    <p className="mt-3 font-sans text-[#42514A] leading-7 md:text-[1.1rem]">
                                        {item.text}
                                    </p>
                                </div>
                                <a
                                    href={item.link}
                                    className="font-sans mt-6 inline-block w-fit bg-[#2AA34D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#238A40] lg:text-[1rem] xl:px-8 xl:py-4"
                                >
                                    Anfragen
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <MalerArbeitsablauf />
            <MalerFAQ />
        </section>
    );
}

export default MalerLeistungenGrid;