import React, { useState, useEffect } from "react";
import { FiArrowUp } from "react-icons/fi";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);
    const [progress, setProgress] = useState(0);

    // Logik für Sichtbarkeit und Fortschrittsbalken
    useEffect(() => {
        const toggleVisibility = () => {
            const scrolled = window.scrollY;
            const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
            
            if (scrolled > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            if (scrollHeight > 0) {
                setProgress((scrolled / scrollHeight) * 100);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <div 
            // Abstände nach rechts (right) wurden minimiert:
            // Mobile S/M/L: right-2 (ca. 8px)
            // Tablet/Laptop: md:right-4 (ca. 16px)
            // 4K: xl:right-6 (ca. 24px)
            className={`fixed z-[120] bottom-4 right-2 sm:right-3 md:bottom-6 md:right-4 lg:bottom-8 lg:right-5 xl:bottom-10 xl:right-6 2xl:bottom-12 transition-all duration-500 ease-in-out ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            }`}
        >
            <button
                onClick={scrollToTop}
                aria-label="Nach oben scrollen"
                className="group relative flex items-center justify-center rounded-full bg-[#083224] text-white shadow-2xl transition-transform hover:scale-110 active:scale-90 h-10 w-10 sm:h-12 sm:w-12 md:h-12 md:w-12 lg:h-14 lg:w-14 xl:h-14 xl:w-14 2xl:h-16 2xl:w-16"
            >
                <svg className="absolute inset-0 h-full w-full -rotate-90">
                    <circle
                        cx="50%"
                        cy="50%"
                        r="calc(50% - 2px)"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="2"
                    />
                    <circle
                        cx="50%"
                        cy="50%"
                        r="calc(50% - 2px)"
                        fill="none"
                        stroke="#2AA34D"
                        strokeWidth="3"
                        strokeDasharray="100"
                        strokeDashoffset={100 - progress}
                        strokeLinecap="round"
                        className="transition-all duration-150"
                    />
                </svg>

                <FiArrowUp 
                    className="relative z-10 transition-transform group-hover:-translate-y-1 text-lg sm:text-xl md:text-xl lg:text-2xl xl:text-2xl 2xl:text-3xl" 
                />

                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#2AA34D] opacity-0 group-hover:opacity-20"></span>
            </button>
        </div>
    );
}

export default ScrollToTop;