import React from "react";
import malerBanner_XL_Query_Innenanstrich from "../media/MalerBanner_XL_Querys.png";
import maleBanner_XL_Query_Wandgestalltung from '../media/Untitled (1071 x 768 px).avif'
import malenPlaceholder3 from "../media/MalerBannerAußenanstriche_XL_Query.png"; 
import malenBanner_XL_Query_Ausbesserung from "../media/Malen_Banner_XL_Querys_Ausbesserung.png";
import malenBanner_Deckenanstrich_XL_Query from "../media/Maler_Banner_Deckenanstrich_XL_Query.png";
import Allgemeine_Malerhilfe from '../media/Allgemeine_Malerhilfe.png';
import MalerFAQ from "./MalerComponents/MalerFAQ";
import MalerArbeitsablauf from "./MalerComponents/MalerArbeitsablauf";

function MalerLeistungenGrid() {
    const leistungen = [
        {
            title: "Innenanstriche",
            text: (
                <>
                    Wir realisieren saubere und gleichmäßige Anstriche für Ihre Wohnräume, Flure und Geschäftsflächen mit Fokus auf höchste Deckkraft und Umweltverträglichkeit. Durch den Einsatz hochwertiger Dispersions- oder Silikatfarben sorgen wir für eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        frische Raumwirkung
                    </span>{" "}
                    und ein sichtbar{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        ordentliches Ergebnis
                    </span>
                    . Unser Fokus liegt auf langlebigen Oberflächen und einer fachgerechten Untergrundvorbehandlung, damit Ihre Immobilie langfristig gepflegt, modern und einladend wirkt – für ein gesundes Raumklima und brillante Farbergebnisse.
                </>
            ),
            image: malerBanner_XL_Query_Innenanstrich,
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight:
                "h-64 md:h-[380px] lg:h-[420px] xl:h-[460px] 2xl:h-[520px] min-[2200px]:h-[580px]",
            titleSize:
                "text-[1.55rem] md:text-[1.95rem] lg:text-[2.25rem] xl:text-[2.55rem] 2xl:text-[2.85rem] min-[2200px]:text-[3.15rem]",
        },
        {
            title: "Wandgestaltung",
            text: (
                <>
                    Individuelle Unterstützung bei der kreativen Farbberatung und der präzisen handwerklichen Umsetzung Ihrer Wandflächen. Wir setzen Akzente durch moderne Maltechniken und hochwertige Materialien, um eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        harmonische Optik
                    </span>{" "}
                    zu erzielen. Dabei kombinieren wir zeitlose Ästhetik mit einer funktionalen,{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        hochwertigen Wirkung
                    </span>{" "}
                    für ein einzigartiges Wohnambiente, das genau auf Ihre Einrichtung und die Lichtverhältnisse in jedem Raum abgestimmt ist.
                </>
            ),
            image: maleBanner_XL_Query_Wandgestalltung,
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
                    Professionelle Fassadenanstriche dienen nicht nur der Verschönerung, sondern primär dem Schutz Ihrer Immobilie vor Witterung, Algenbefall und UV-Strahlung. Wir garantieren einen{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        nachhaltigen Werterhalt
                    </span>{" "}
                    durch atmungsaktive und selbstreinigende Anstrichsysteme. Unsere{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        wetterfeste Ausführung
                    </span>{" "}
                    sorgt für eine langlebige Bausubstanz und eine ästhetische Aufwertung Ihrer Außenfassade – ideal für einen repräsentativen und wertsteigernden ersten Eindruck Ihres Gebäudes.
                </>
            ),
            image: malenPlaceholder3,
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
                    Kleine Mängel beeinträchtigen oft das Gesamtbild – wir bieten gezielte Korrekturen und fachgerechte Spachtelarbeiten an beanspruchten Wänden und Oberflächen. Durch unsere{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        präzise Ausführung
                    </span>{" "}
                    werden Risse, Bohrlöcher und Gebrauchsspuren so{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        ordentlich angeglichen
                    </span>
                    , dass nach dem Überstreichen ein vollkommen makelloses und einheitliches Gesamtbild entsteht. Wir sorgen für die perfekte Vorbereitung der Untergründe für nachfolgende Renovierungsschritte – schnell, sauber und effektiv.
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
                    Schwer zugängliche Deckenflächen und hohe Räume streichen wir fachgerecht, gleichmäßig und absolut streifenfrei für ein perfektes Lichtspiel ohne Schattenbildung. Wir sorgen für eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        ruhige Flächenwirkung
                    </span>{" "}
                    und ein helles,{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        gepflegtes Raumgefühl
                    </span>
                    . Durch die Verwendung von speziellen Deckenfarben mit hoher Deckkraft unterstreichen wir die Architektur Ihrer Räume und lassen sie optisch höher und freundlicher wirken.
                </>
            ),
            image: malenBanner_Deckenanstrich_XL_Query,
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
                    Flexible Unterstützung bei aufwendigen Abklebearbeiten, dem Schutz von Bodenbelägen und Möbeln sowie allen vorbereitenden Maßnahmen Ihrer Renovierungsprojekte. Wir bieten eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        saubere Entlastung
                    </span>{" "}
                    und garantieren durch unsere professionelle Zuarbeit einen reibungslosen und effizienten Arbeitsfluss. So sichern wir einen{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        stimmigen Gesamteindruck
                    </span> bei allen Maler- und Renovierungsvorhaben und sorgen dafür, dass die eigentlichen Anstricharbeiten zügig und präzise durchgeführt werden können.
                </>
            ),
            image: Allgemeine_Malerhilfe,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
    ];

    return (
        <section className="relative mx-auto w-full max-w-[100%] overflow-hidden bg-white px-5 py-12 md:px-8 md:py-16 lg:px-12 lg:py-20 xl:max-w-[1700px] xl:px-16 xl:py-24 2xl:max-w-[1900px] 2xl:px-20 2xl:py-28 min-[2200px]:max-w-[2200px] min-[2200px]:px-24 min-[2200px]:py-32 min-[2560px]:max-w-[2400px] min-[2560px]:px-28">
            <div className="relative z-10">
                <div className="max-w-4xl xl:max-w-[1100px] 2xl:max-w-[1220px] min-[2200px]:max-w-[1340px]">
                    <span className="font-sans text-xs font-semibold uppercase tracking-[0.18em] text-[#2AA34D] md:text-sm md:tracking-[0.24em] lg:text-[0.95rem] xl:text-[1rem] 2xl:text-[1.06rem] min-[2200px]:text-[1.12rem]">
                        Unsere Leistungen
                    </span>

                    <h2 className="font-heading mt-4 text-[2rem] font-extrabold uppercase leading-[0.95] tracking-[-0.03em] text-[#083224] md:text-[3rem] lg:text-[3.8rem] xl:text-[4.4rem] 2xl:text-[4.9rem] min-[2200px]:text-[5.4rem]">
                        Malerarbeiten
                        <br />
                        im Überblick
                    </h2>

                    <p className="mt-5 max-w-[860px] font-sans text-[1rem] leading-7 text-[#42514A] md:mt-6 md:text-[1.15rem] md:leading-9 lg:text-[1.24rem] lg:leading-9 xl:max-w-[980px] xl:text-[1.38rem] xl:leading-10 2xl:max-w-[1080px] 2xl:text-[1.5rem] min-[2200px]:max-w-[1180px] min-[2200px]:text-[1.62rem] min-[2200px]:leading-[2.9rem]">
                        Vom präzisen Innenanstrich bis hin zum schützenden Fassadenanstrich – wir bieten erstklassige Malerleistungen und handwerkliche Perfektion für ein schönes, modernes und wertbeständiges Zuhause in Düsseldorf und Umgebung.
                    </p>
                </div>

                <div className="mt-10 grid gap-x-6 gap-y-8 md:mt-12 md:grid-cols-2 md:gap-x-8 md:gap-y-10 xl:gap-x-10 xl:gap-y-14 2xl:gap-x-12 2xl:gap-y-16 min-[2200px]:gap-x-14 min-[2200px]:gap-y-18">
                    {leistungen.map((item) => (
                        <article
                            key={item.title}
                            className={`group flex h-full flex-col overflow-hidden bg-white ${item.wrapper}`}
                        >
                            <div
                                className={`relative overflow-hidden ${item.imageHeight}`}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    loading="lazy"
                                    decoding="async"
                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
                            </div>

                            <div className="flex min-h-[320px] flex-1 flex-col justify-between bg-white pt-4 md:min-h-[380px] md:pt-5 lg:min-h-[430px] lg:pt-6 xl:min-h-[480px] xl:pt-7 2xl:min-h-[530px] 2xl:pt-8 min-[2200px]:min-h-[570px]">
                                <div>
                                    <h3
                                        className={`font-heading font-bold leading-tight text-[#083224] ${item.titleSize} min-h-[52px] md:min-h-[72px] lg:min-h-[88px] xl:min-h-[104px] 2xl:min-h-[116px]`}
                                    >
                                        {item.title}
                                    </h3>

                                    <p className="mt-3 max-w-[96%] font-sans text-sm leading-7 text-[#42514A] md:text-[1rem] md:leading-8 lg:text-[1.08rem] lg:leading-8 xl:text-[1.18rem] xl:leading-9 2xl:text-[1.28rem] min-[2200px]:text-[1.36rem] min-[2200px]:leading-10">
                                        {item.text}
                                    </p>
                                </div>

                                <a
                                    href={item.link}
                                    className="font-sans mt-6 inline-block w-fit bg-[#2AA34D] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#238A40] md:text-base lg:px-7 lg:py-3.5 lg:text-[1rem] xl:px-8 xl:py-4 xl:text-[1.08rem] 2xl:px-9 2xl:text-[1.16rem] min-[2200px]:px-10 min-[2200px]:py-4.5 min-[2200px]:text-[1.22rem]"
                                >
                                    Anfragen
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
            <MalerArbeitsablauf/>
            <MalerFAQ/>
        </section>
    );
}

export default MalerLeistungenGrid;