import React from 'react';
import { socialLinks, contactInfo } from '../data.ts';
import { InstagramIcon, FacebookIcon } from './Icons.tsx';
import { SectionTitle } from './SectionTitle.tsx';

export const Locations = () => (
    <section id="locations" className="py-20 bg-neutral-900 border-y border-accent-orange/20">
        <div className="container mx-auto px-4 text-center">
            <SectionTitle>Find Us</SectionTitle>
            <p className="text-2xl font-bold mb-2">We're a Restaurant on Wheels!</p>
            <p className="text-lg text-neutral-300 max-w-3xl mx-auto mb-6">Our locations change daily. For the most up-to-date information on where to find us, follow our social media pages. We post our location every morning!</p>
            <div className="flex justify-center space-x-4 mb-8">
                <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 text-white font-bold py-2 px-5 sm:py-3 sm:px-6 rounded-full transition-transform hover:scale-105 duration-300">
                    <InstagramIcon /> <span className="ml-2">Instagram</span>
                </a>
                <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-blue-600 text-white font-bold py-2 px-5 sm:py-3 sm:px-6 rounded-full transition-transform hover:scale-105 duration-300">
                    <FacebookIcon /> <span className="ml-2">Facebook</span>
                </a>
            </div>
            <p className="text-xl font-semibold text-primary-yellow">{contactInfo.hours}</p>
        </div>
    </section>
);