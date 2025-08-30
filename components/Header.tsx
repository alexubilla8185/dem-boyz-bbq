import React, { useState, useEffect } from 'react';
import { socialLinks, logoUrl } from '../data.ts';
import { InstagramIcon, FacebookIcon, MenuIcon, CloseIcon, ShareIcon } from './Icons.tsx';
import { handleSmoothScroll } from '../utils/helpers.ts';

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [shareStatus, setShareStatus] = useState<'idle' | 'copied'>('idle');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { href: '#menu', label: 'Menu' },
        { href: '#locations', label: 'Locations' },
        { href: '#catering', label: 'Catering' },
        { href: '#contact', label: 'Contact' },
    ];

    const handleShare = async () => {
        const shareData = {
            title: "Dem Boyz BBQ | Southern Grillin' with an Island Twist",
            text: "Check out Dem Boyz BBQ! The best Southern Grillin' with an Island Twist.",
            url: window.location.href,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.error('Error sharing:', error);
            }
        } else {
            // Fallback for browsers that don't support Web Share API
            navigator.clipboard.writeText(window.location.href);
            setShareStatus('copied');
            setTimeout(() => setShareStatus('idle'), 2000);
        }
    };


    return (
        <header className={`relative sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-black/80 backdrop-blur-sm' : 'bg-transparent'}`}>
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    <a href="#" className="flex-shrink-0">
                        <div className="p-[2px] bg-fire-gradient rounded-full">
                            <img className="h-12 w-12 md:h-16 md:w-16 rounded-full object-cover" src={logoUrl} alt="Dem Boyz BBQ" />
                        </div>
                    </a>
                    <div className="hidden md:flex md:items-center md:space-x-8">
                        {navLinks.map((link) => (
                            <a key={link.href} href={link.href} onClick={handleSmoothScroll} className="text-primary-yellow hover:text-white transition-colors duration-300 font-semibold">{link.label}</a>
                        ))}
                    </div>
                    <div className="hidden md:flex items-center space-x-4">
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center text-white rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 transition-transform hover:scale-110 duration-300">
                            <InstagramIcon />
                        </a>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="h-10 w-10 flex items-center justify-center text-white rounded-full bg-blue-600 transition-transform hover:scale-110 duration-300">
                            <FacebookIcon />
                        </a>
                        <button
                            onClick={handleShare}
                            aria-label="Share this page"
                            className="relative h-10 w-10 flex items-center justify-center transition-transform hover:scale-110 duration-300"
                        >
                            <ShareIcon id="desktop-share" className="h-7 w-7" />
                            {shareStatus === 'copied' && (
                                <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-neutral-800 text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap">
                                    Link Copied!
                                </span>
                            )}
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-primary-yellow focus:outline-none">
                            {isOpen ? <CloseIcon id="mobile-close" /> : <MenuIcon id="mobile-open" />}
                        </button>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className="md:hidden bg-black/90 backdrop-blur-sm">
                    <div className="px-4 pt-4 pb-5 space-y-3 sm:px-6 flex flex-col items-center">
                        {navLinks.map((link) => (
                             <a key={link.href} href={link.href} onClick={(e) => { handleSmoothScroll(e); setIsOpen(false); }} className="text-primary-yellow block px-4 py-3 rounded-md text-lg font-medium hover:bg-fire-gradient hover:text-black transition-all duration-200 w-full text-center">{link.label}</a>
                        ))}
                        <div className="flex items-center space-x-6 pt-6">
                            <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white p-3 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 transition-transform hover:scale-110 duration-300">
                                <InstagramIcon />
                            </a>
                            <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white p-3 rounded-full bg-blue-600 transition-transform hover:scale-110 duration-300">
                                <FacebookIcon />
                            </a>
                             <button
                                onClick={handleShare}
                                aria-label="Share this page"
                                className="relative text-white p-3 rounded-full bg-neutral-700 transition-transform hover:scale-110 duration-300"
                            >
                                <ShareIcon id="mobile-share" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            )}
             <div className="absolute bottom-0 left-0 w-full h-[1px] bg-fire-gradient" />
        </header>
    );
};