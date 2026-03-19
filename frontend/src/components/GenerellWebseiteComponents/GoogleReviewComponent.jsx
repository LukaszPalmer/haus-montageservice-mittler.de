import React, { useState } from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const StarIcon = ({ filled, isHovered }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill={filled ? "#FFD700" : "none"}
        stroke={filled ? "#FFD700" : "#E5E7EB"}
        className={`w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 transition-all duration-300 ease-out transform ${
            isHovered ? "scale-110" : "scale-100"
        }`}
    >
        <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={filled ? 1 : 1.5}
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.385a.563.563 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
        />
    </svg>
);

function GoogleReviewComponent() {
    const [hoverRating, setHoverRating] = useState(0);
    const [selectedRating, setSelectedRating] = useState(0);
    const [reviewText, setReviewText] = useState("");

    const googleReviewUrl = "DEIN_GOOGLE_REVIEW_LINK_HIER";

    const handleStarClick = (rating) => {
        setSelectedRating(rating);
    };

    const currentRating = hoverRating || selectedRating;

    const getFeedbackMessage = (rating) => {
        switch (rating) {
            case 5: return "Herausragend! Das freut uns riesig. Danke!";
            case 4: return "Klasse! Fast perfekt. Was fehlte zum 5. Stern?";
            case 3: return "Solide. Wir wollen lernen: Wo drückt der Schuh?";
            case 2: return "Oje. Das entspricht nicht unserem Anspruch.";
            case 1: return "Das tut uns leid. Wir müssen das klären.";
            default: return "";
        }
    };

    return (
        <section className="relative overflow-hidden py-12 sm:py-20 lg:py-32 bg-white">
            <div className="container mx-auto max-w-[1600px] px-4 sm:px-6 lg:px-12">
                <div className="relative z-10 grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16 xl:gap-24">
                    
                    {/* LEFT CONTENT AREA */}
                    <div className="lg:col-span-7 xl:col-span-7">
                        <div className="flex items-center gap-3">
                            <span className="h-[2px] w-8 bg-[#2AA34D]" />
                            <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#2AA34D] sm:text-sm">
                                Feedback & Qualität
                            </span>
                        </div>

                        <h2 className="mt-6 text-[2.2rem] font-black leading-[1.1] uppercase text-[#083224] sm:text-[3.5rem] md:text-[4rem] xl:text-[5rem]">
                            Ihre Meinung <br />
                            <span className="text-[#2AA34D]">stärkt unser</span> <br />
                            Handwerk.
                        </h2>

                        <p className="mt-8 max-w-2xl text-lg leading-relaxed text-[#42514A] sm:text-xl lg:text-2xl">
                            Zufrieden mit unseren Hausmeister- & Montageleistungen in Düsseldorf? 
                            Helfen Sie uns, noch besser zu werden, indem Sie Ihre Erfahrung teilen.
                        </p>

                        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:items-center lg:mt-16">
                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm border border-gray-50">
                                <img
                                    src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
                                    alt="Google"
                                    className="h-5 w-auto"
                                />
                            </div>
                            <div className="flex flex-col">
                                <span className="text-base font-bold text-[#083224]">Verifiziertes Feedback</span>
                                <span className="text-sm text-[#42514A]">In weniger als 60 Sekunden auf Google bewerten.</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT INTERACTIVE MODULE - CLEAN VERSION (No Border, No Shadow) */}
                    <div className="lg:col-span-5 xl:col-span-5">
                        <div className="relative p-2 sm:p-4 lg:p-6 bg-white">
                            
                            <div className="mb-10 text-center lg:text-left">
                                <h4 className="text-xl font-extrabold text-[#083224] lg:text-2xl uppercase tracking-tight">
                                    Sterne vergeben
                                </h4>
                                <div className="mt-2 h-1 w-12 rounded-full bg-[#2AA34D]/20 lg:mx-0 mx-auto" />
                            </div>

                            <div
                                className="mb-10 flex justify-center lg:justify-start gap-1 sm:gap-2"
                                onMouseLeave={() => setHoverRating(0)}
                            >
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <button
                                        key={star}
                                        type="button"
                                        className="focus:outline-none transition-all"
                                        onMouseEnter={() => setHoverRating(star)}
                                        onClick={() => handleStarClick(star)}
                                        aria-label={`${star} von 5 Sternen`}
                                    >
                                        <StarIcon 
                                            filled={currentRating >= star} 
                                            isHovered={hoverRating === star}
                                        />
                                    </button>
                                ))}
                            </div>

                            <div className="mb-10 min-h-[80px] flex items-center justify-center lg:justify-start">
                                <SwitchTransition mode="out-in">
                                    <CSSTransition
                                        key={selectedRating}
                                        timeout={300}
                                        classNames="fade"
                                        unmountOnExit
                                    >
                                        {selectedRating > 0 ? (
                                            <div className="text-center lg:text-left">
                                                <p className="text-3xl font-black text-[#2AA34D]">
                                                    {selectedRating} / 5
                                                </p>
                                                <p className="mt-1 text-base font-bold text-[#42514A]">
                                                    {getFeedbackMessage(selectedRating)}
                                                </p>
                                            </div>
                                        ) : (
                                            <p className="text-sm tracking-[0.2em] text-gray-300 uppercase font-bold">Wählen Sie Ihr Rating</p>
                                        )}
                                    </CSSTransition>
                                </SwitchTransition>
                            </div>

                            <div className="space-y-4">
                                <label className="text-xs font-black uppercase tracking-widest text-[#083224]/40">
                                    Ihre Nachricht (Optional)
                                </label>
                                <textarea
                                    className="w-full rounded-xl bg-gray-50/50 p-6 text-base text-[#083224] placeholder:text-gray-400 focus:bg-white focus:outline-none focus:ring-1 focus:ring-[#2AA34D]/20 transition-all resize-none"
                                    rows="4"
                                    placeholder="Wie können wir uns verbessern?"
                                    value={reviewText}
                                    onChange={(e) => setReviewText(e.target.value)}
                                />
                            </div>

                            <div className="mt-10">
                                <a
                                    href={googleReviewUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group relative flex w-full items-center justify-center gap-4 bg-[#2AA34D] py-6 text-base font-black uppercase tracking-[0.15em] text-white transition-all hover:bg-[#083224]"
                                >
                                    <span className="relative z-10">Jetzt bewerten</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="h-5 w-5 transition-transform group-hover:translate-x-1">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <style jsx global>{`
                .fade-enter { opacity: 0; transform: translateY(5px); }
                .fade-enter-active { opacity: 1; transform: translateY(0); transition: all 300ms ease; }
                .fade-exit { opacity: 1; transform: translateY(0); }
                .fade-exit-active { opacity: 0; transform: translateY(-5px); transition: all 300ms ease; }
            `}</style>
        </section>
    );
}

export default GoogleReviewComponent;