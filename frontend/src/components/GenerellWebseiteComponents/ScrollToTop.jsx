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
            
            // Sichtbarkeit ab 300px
            if (scrolled > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }

            // Fortschritt in Prozent berechnen
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
            className={`fixed bottom-6 right-6 z-[120] transition-all duration-500 ease-in-out md:bottom-10 md:right-10 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
            }`}
        >
            <button
                onClick={scrollToTop}
                aria-label="Nach oben scrollen"
                className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#083224] text-white shadow-2xl transition-transform hover:scale-110 active:scale-90 md:h-14 md:w-14 lg:h-16 lg:w-16"
            >
                {/* SVG Ring für den Scroll-Fortschritt */}
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

                {/* Pfeil Icon mit Schweb-Effekt */}
                <FiArrowUp 
                    className="relative z-10 text-xl transition-transform group-hover:-translate-y-1 md:text-2xl" 
                />

                {/* Pulsierender Effekt im Hintergrund beim Hover */}
                <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-[#2AA34D] opacity-0 group-hover:opacity-20"></span>
            </button>
        </div>
    );
}

export default ScrollToTop;