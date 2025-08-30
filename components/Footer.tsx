import React from 'react';
import { socialLinks, contactInfo, logoUrl } from '../data.ts';
import { InstagramIcon, FacebookIcon, PhoneIcon, EmailIcon, ClockIcon } from './Icons.tsx';
import { handleSmoothScroll } from '../utils/helpers.ts';

export const Footer = () => (
    <footer id="contact" className="relative bg-neutral-900">
        <div className="absolute top-0 left-0 w-full h-[1px] bg-fire-gradient"></div>
        <div className="container mx-auto px-4 py-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                <div className="flex flex-col items-center md:items-start">
                    <div className="p-[2px] bg-fire-gradient rounded-full mb-4 inline-block">
                        <img src={logoUrl} alt="Dem Boyz BBQ" className="h-16 w-16 rounded-full object-cover" />
                    </div>
                    <h3 className="text-xl font-bold mb-4 text-primary-yellow">Dem Boyz BBQ</h3>
                    <p className="text-neutral-400">Southern Grillin' with an Island Twist</p>
                    <div className="flex space-x-4 mt-4">
                        <a href={socialLinks.instagram} target="_blank" rel="noopener noreferrer" className="text-white p-2 rounded-full bg-gradient-to-br from-pink-500 via-red-500 to-yellow-500 transition-transform hover:scale-110 duration-300">
                            <InstagramIcon />
                        </a>
                        <a href={socialLinks.facebook} target="_blank" rel="noopener noreferrer" className="text-white p-2 rounded-full bg-blue-600 transition-transform hover:scale-110 duration-300">
                            <FacebookIcon />
                        </a>
                    </div>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Contact Us</h3>
                    <ul className="space-y-2 text-neutral-400">
                        <li className="transition-colors duration-300 hover:text-white">
                            <a href={`tel:${contactInfo.phone}`} className="inline-flex items-center justify-center md:justify-start">
                                <PhoneIcon />
                                <span>{contactInfo.phone}</span>
                            </a>
                        </li>
                        <li className="transition-colors duration-300 hover:text-white">
                            <a href={`mailto:${contactInfo.email}`} className="inline-flex items-center justify-center md:justify-start">
                                <EmailIcon />
                                <span>{contactInfo.email}</span>
                            </a>
                        </li>
                        <li className="flex items-center justify-center md:justify-start">
                            <ClockIcon />
                            <span>{contactInfo.hours}</span>
                        </li>
                    </ul>
                </div>
                <div>
                    <h3 className="text-xl font-bold mb-4 text-white">Quick Links</h3>
                    <ul className="space-y-2 text-neutral-400">
                        <li><a href="#menu" onClick={handleSmoothScroll} className="hover:text-primary-yellow">Menu</a></li>
                        <li><a href="#locations" onClick={handleSmoothScroll} className="hover:text-primary-yellow">Locations</a></li>
                        <li><a href="#catering" onClick={handleSmoothScroll} className="hover:text-primary-yellow">Catering</a></li>
                    </ul>
                </div>
            </div>
            <div className="text-center text-neutral-500 mt-10 pt-6 border-t border-neutral-800">
                <p>&copy; {new Date().getFullYear()} Dem Boyz BBQ. All Rights Reserved.</p>
            </div>
        </div>
    </footer>
);