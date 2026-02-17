import { useEffect, useState } from "react";

export const useScrollY = (): number => {
    const [scrollY, setScrollY] = useState(0);

    useEffect(() => {
        if (typeof window === "undefined") return;

        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    setScrollY(window.scrollY);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return scrollY;
};
