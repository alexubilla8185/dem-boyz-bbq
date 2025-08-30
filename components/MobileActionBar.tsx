import React from 'react';
import { contactInfo } from '../data.ts';
import { handleSmoothScroll } from '../utils/helpers.ts';
import { PhoneIconForBar, BookOpenIcon } from './Icons.tsx';

export const MobileActionBar = () => {
    return (
        <div className="fixed bottom-0 left-0 right-0 bg-black/80 backdrop-blur-sm z-40 md:hidden">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-fire-gradient"></div>
            <div className="container mx-auto px-4">
                <div className="flex justify-around items-center h-16">
                    <a 
                        href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} 
                        className="flex flex-col items-center text-center text-neutral-200 hover:text-primary-yellow transition-colors duration-200 p-2"
                        aria-label="Call Dem Boyz BBQ"
                    >
                        <PhoneIconForBar />
                        <span className="text-xs font-medium">Call Us</span>
                    </a>
                    <a 
                        href="#menu" 
                        onClick={handleSmoothScroll} 
                        className="flex flex-col items-center text-center text-neutral-200 hover:text-primary-yellow transition-colors duration-200 p-2"
                        aria-label="View our menu"
                    >
                        <BookOpenIcon />
                        <span className="text-xs font-medium">Our Menu</span>
                    </a>
                </div>
            </div>
        </div>
    );
};