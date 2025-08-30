import React, { useState, useEffect } from 'react';
import { ArrowUpIcon } from './Icons.tsx';

interface BackToTopButtonProps {
    isCateringModalOpen: boolean;
}

export const BackToTopButton = ({ isCateringModalOpen }: BackToTopButtonProps) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const shouldBeVisible = isVisible && !isCateringModalOpen;

    return (
        <button
            type="button"
            onClick={scrollToTop}
            className={`fixed bottom-20 right-4 md:right-6 md:bottom-6 z-50 p-2 md:p-3 rounded-full bg-fire-gradient text-black shadow-lg transition-all duration-300 ease-in-out hover:scale-110 active:scale-115 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-primary-yellow ${
                shouldBeVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'
            }`}
            aria-label="Scroll to top"
            aria-hidden={!shouldBeVisible}
            tabIndex={shouldBeVisible ? 0 : -1}
        >
            <ArrowUpIcon className="h-5 w-5 md:h-6 md:w-6" />
        </button>
    );
};