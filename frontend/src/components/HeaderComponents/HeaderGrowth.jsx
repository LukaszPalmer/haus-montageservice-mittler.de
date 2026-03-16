/* eslint-disable react-hooks/purity */
import React, { useState, useEffect, useMemo, useRef } from "react";

function HeaderGrowth() {
    const [scrollY, setScrollY] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);
    const scrollTimeout = useRef(null);

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
            setIsScrolling(true);

            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
            scrollTimeout.current = setTimeout(() => setIsScrolling(false), 150);
        };

        
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
            window.removeEventListener("scroll", handleScroll);
            if (scrollTimeout.current) clearTimeout(scrollTimeout.current);
        };
    }, []);

    // Wir generieren eine "Windwelle" aus Blättern
    const leafWave = useMemo(() => {
        const count = 30; 
        const items = [];
        for (let i = 0; i < count; i++) {
            items.push({
                id: i,
                // Startpositionen horizontal gestaffelt
                startX: -200 - (i * 40), 
                // Zufällige vertikale Verteilung im Header
                y: 10 + Math.random() * 80,
                size: 15 + Math.random() * 25,
                rotation: Math.random() * 360,
                speed: 1.2 + Math.random() * 0.8, // Schneller als der Standard
                opacity: 0.4 + Math.random() * 0.5,
                color: i % 2 === 0 ? "#2AA34D" : "#083224"
            });
        }
        return items;
    }, []);

    const active = isScrolling && scrollY > 10;

    return (
        <div className="pointer-events-none absolute inset-0 z-0 hidden overflow-hidden lg:block">
            <div className="relative h-full w-full">
                {leafWave.map((leaf) => {
                    // Die Blätter bewegen sich von links nach rechts basierend auf Scroll
                    const currentX = leaf.startX + (scrollY * leaf.speed);

                    return (
                        <div
                            key={leaf.id}
                            className="absolute"
                            style={{
                                left: 0,
                                top: `${leaf.y}%`,
                                width: `${leaf.size}px`,
                                height: `${leaf.size}px`,
                                opacity: active ? leaf.opacity : 0,
                                transform: `translate3d(${currentX}px, 0, 0) rotate(${leaf.rotation + scrollY * 0.5}deg) scale(${active ? 1 : 0.5})`,
                                // Übergänge: Geschmeidig beim Scrollen, Blitzschnell beim Stoppen
                                transition: active 
                                    ? "transform 400ms cubic-bezier(0.2, 0, 0.2, 1), opacity 300ms" 
                                    : "opacity 150ms ease-in, transform 150ms ease-in",
                                transformOrigin: "center"
                            }}
                        >
                            <svg viewBox="0 0 45 35" fill="none">
                                <defs>
                                    <filter id={`shadow-${leaf.id}`}>
                                        <feDropShadow dx="0" dy="1" stdDeviation="1.5" floodOpacity="0.2" />
                                    </filter>
                                    <linearGradient id={`grad-${leaf.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stopColor={leaf.color} />
                                        <stop offset="100%" stopColor="#051a13" />
                                    </linearGradient>
                                </defs>
                                <path
                                    d="M0,17.5 C0,0 22.5,0 45,17.5 C22.5,35 0,35 0,17.5"
                                    fill={`url(#grad-${leaf.id})`}
                                    filter={`url(#shadow-${leaf.id})`}
                                />
                                <path
                                    d="M4,17.5 L40,17.5"
                                    stroke="white"
                                    strokeOpacity="0.2"
                                    strokeWidth="1.2"
                                />
                            </svg>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default HeaderGrowth;