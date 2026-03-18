import Rasenpflege from "../media/Garten_AVIF/Rasenpflege.avif";
import Hecken_Strauchschnitt from "../media/Garten_AVIF/Hecken_Strauchschnitt.avif";
import Laub_Grünflächenpflege from "../media/Garten_AVIF/Laub_Grünflächenpflege.avif";
import Unkrautentfernung from "../media/Garten_AVIF/New_Querformat_Unkrautentfernung_4kQuery.avif";
import Saisonarbeiten from "../media/Garten_AVIF/Saisonarbeiten.avif";
import Allgemeine_Gartenhilfe from "../media/Garten_AVIF/Allgemeine_Gartenhilfe.avif";

import Footer from "../components/MobileFooter.jsx";

import GartenArbeitsablauf from "./GartenArbeiten/GartenArbeitsablauf.jsx";
import GartenFAQ from "./GartenArbeiten/GartenFAQ.jsx";
import GartenFAQSection from "./GartenArbeiten/GartenFAQSection.jsx";
import GartenServiceProcess from "./GartenArbeiten/GartenServiceProcess.jsx";

function GartenLeistungenGrid() {
    const leistungen = [
        {
            title: "Rasenpflege",
            text: (
                <>
                    Professionelle Rasenpflege ist der Schlüssel zu einem dichten, sattgrünen Rasen. Neben dem regelmäßigen Rasenmähen kümmern wir uns um exakte Rasenkanten, fachgerechtes Vertikutieren und die optimale Nährstoffversorgung durch Düngen. Wir sorgen für eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        makellose Optik
                    </span>{" "}
                    und eine dauerhaft{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        zuverlässige Grünflächenpflege
                    </span>
                    . So bleibt Ihre Rasenfläche widerstandsfähig gegen Unkraut und Moos, und Ihre Außenanlagen hinterlassen stets einen repräsentativen, einladenden Eindruck.
                </>
            ),
            image: Rasenpflege,
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight:
                "h-64 md:h-[380px] lg:h-[420px] xl:h-[460px] 2xl:h-[520px] min-[2200px]:h-[580px]",
            titleSize:
                "text-[1.55rem] md:text-[1.95rem] lg:text-[2.25rem] xl:text-[2.55rem] 2xl:text-[2.85rem] min-[2200px]:text-[3.15rem]",
        },
        {
            title: "Hecken- & Strauchschnitt",
            text: (
                <>
                    Ein fachgerechter Hecken- und Strauchschnitt ist unerlässlich für das gesunde Wachstum und die Formschönheit Ihrer Pflanzen. Wir übernehmen den präzisen Form- und Pflegeschnitt sowie den radikalen Verjüngungsschnitt zum optimalen Zeitpunkt. Durch unsere{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        professionelle Ausführung
                    </span>{" "}
                    und schonende Arbeitstechniken fördern wir die Vitalität Ihrer Gehölze. Genießen Sie ein harmonisches Gesamtbild, klare Grundstücksgrenzen und eine{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        perfekt gepflegte Struktur
                    </span>{" "}
                    rund um Ihre Immobilie – inklusive fachgerechter Entsorgung des Schnittguts.
                </>
            ),
            image: Hecken_Strauchschnitt,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
        {
            title: "Laub- & Grünflächenpflege",
            text: (
                <>
                    Besonders im Herbst, aber auch ganzjährig, erfordert die Laub- und Grünflächenpflege viel Zeit. Wir übernehmen die gründliche Laubentfernung von Rasenflächen, Gehwegen und Zufahrten, um Rutschgefahren zu vermeiden und Ihren Rasen vor Fäulnis zu schützen. Wir unterstützen Sie dabei, Ihre privaten oder gewerblichen Außenbereiche dauerhaft{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        sauber
                    </span>{" "}
                    und{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        verkehrssicher
                    </span>{" "}
                    zu halten. Profitieren Sie von unserer zuverlässigen Gartenpflege für einen rundum strukturierten und gepflegten ersten Eindruck zu jeder Jahreszeit.
                </>
            ),
            image: Laub_Grünflächenpflege,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
        {
            title: "Unkrautentfernung",
            text: (
                <>
                    Hartnäckiges Unkraut trübt schnell das Erscheinungsbild der schönsten Gartenanlagen. Wir bieten eine effektive und nachhaltige Unkrautentfernung für Blumenbeete, Pflastersteine, Gehwege und Randbereiche. Durch unsere regelmäßige und{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        wurzeltiefe Reinigung
                    </span>{" "}
                    verhindern wir die schnelle Neubildung von Wildkräutern. Ihre gepflasterten Flächen und Grünanlagen bleiben langfristig{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        ordentlich
                    </span>
                    , gepflegt und optisch hochwertig – ganz ohne störenden Wildwuchs und umweltschonend umgesetzt.
                </>
            ),
            image: Unkrautentfernung,
            link: "/kontakt",
            wrapper: "md:col-span-2",
            imageHeight:
                "h-56 md:h-[320px] lg:h-[360px] xl:h-[400px] 2xl:h-[440px] min-[2200px]:h-[480px]",
            titleSize:
                "text-[1.3rem] md:text-[1.6rem] lg:text-[1.92rem] xl:text-[2.18rem] 2xl:text-[2.42rem] min-[2200px]:text-[2.66rem]",
        },
        {
            title: "Saisonarbeiten",
            text: (
                <>
                    Jeder Garten hat im Jahresverlauf unterschiedliche Bedürfnisse. Unsere umfassenden Garten-Saisonarbeiten bereiten Ihre Beete und Rasenflächen optimal vor: Vom Frühjahrsputz im Garten über die intensive Bewässerung und Pflege im Sommer bis hin zur Vorbereitung auf die kalte Jahreszeit durch gezielten Winterschutz. Wir übernehmen diese saisonalen Aufgaben mit{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        kompetenter Unterstützung
                    </span>{" "}
                    und schaffen ein ganzjährig{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        perfekt gepflegtes Gesamtbild
                    </span>{" "}
                    für Ihren Außenbereich, damit Pflanzen gesund bleiben und optimal gedeihen.
                </>
            ),
            image: Saisonarbeiten,
            link: "/kontakt",
            wrapper: "md:col-span-1",
            imageHeight:
                "h-56 md:h-[300px] lg:h-[340px] xl:h-[380px] 2xl:h-[420px] min-[2200px]:h-[460px]",
            titleSize:
                "text-[1.3rem] md:text-[1.56rem] lg:text-[1.86rem] xl:text-[2.1rem] 2xl:text-[2.34rem] min-[2200px]:text-[2.56rem]",
        },
        {
            title: "Allgemeine Gartenhilfe",
            text: (
                <>
                    Ob Urlaubsvertretung für die Gartenpflege, das Umgraben von Beeten, das Einpflanzen neuer Blumen oder das Bewegen von schwerem Material – unsere allgemeine Gartenhilfe bietet Ihnen tatkräftige Unterstützung. Wir helfen flexibel und zuverlässig genau dort, wo Sie bei der Gartenarbeit{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        Entlastung
                    </span>{" "}
                    benötigen. Lagern Sie anstrengende Gartenarbeiten einfach aus und freuen Sie sich auf einen{" "}
                    <span className="font-semibold text-[#2AA34D]">
                        wunderschönen Außenbereich
                    </span>
                    , der zum Entspannen einlädt, während wir die schwere Arbeit für Sie fachmännisch erledigen.
                </>
            ),
            image: Allgemeine_Gartenhilfe,
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
                        Gartenarbeiten
                        <br />
                        im Überblick
                    </h2>

                    <p className="mt-5 max-w-[860px] font-sans text-[1rem] leading-7 text-[#42514A] md:mt-6 md:text-[1.15rem] md:leading-9 lg:text-[1.24rem] lg:leading-9 xl:max-w-[980px] xl:text-[1.38rem] xl:leading-10 2xl:max-w-[1080px] 2xl:text-[1.5rem] min-[2200px]:max-w-[1180px] min-[2200px]:text-[1.62rem] min-[2200px]:leading-[2.9rem]">
                        Entdecken Sie unsere professionellen Gartenbau- und Pflegedienstleistungen für makellos gepflegte Außenbereiche. Von der regelmäßigen Rasenpflege über den fachgerechten Heckenschnitt bis hin zur kompletten Grünanlagenpflege bieten wir Ihnen maßgeschneiderte Lösungen und zuverlässige Unterstützung rund um Ihr Haus und Ihren Garten.
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
            <GartenArbeitsablauf/>
            <GartenFAQ/>
            <GartenServiceProcess/>
            <GartenFAQSection/>
            <Footer />
        </section>
    );
}

export default GartenLeistungenGrid;