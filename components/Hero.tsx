import React from 'react';
import { logoUrl, contactInfo } from '../data.ts';
import { handleSmoothScroll } from '../utils/helpers.ts';

export const Hero = () => (
    <section id="hero" className="h-screen flex items-center justify-center text-center bg-black" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div className="container mx-auto px-4 flex flex-col items-center">
            <div className="relative inline-block mx-auto p-[2px] bg-fire-gradient rounded-full">
                 <img src={logoUrl} alt="Dem Boyz BBQ Logo - Southern Grillin' with an Island Twist" className="h-64 w-64 md:h-80 md:w-80 rounded-full object-cover" />
            </div>
            <h1 className="text-5xl md:text-6xl font-black uppercase mt-4 text-glow text-primary-yellow">Dem Boyz BBQ</h1>
            <p className="text-xl md:text-2xl mt-2 font-semibold bg-fire-gradient text-transparent bg-clip-text">Southern Grillin' with an Island Twist</p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md">
                <a href="#menu" onClick={handleSmoothScroll} className="w-full sm:w-auto text-center bg-fire-gradient text-black font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform hover:scale-105 duration-300">
                    View Our Menu
                </a>
                <a href={`tel:${contactInfo.phone.replace(/\D/g, '')}`} className="w-full sm:w-auto text-center border-2 border-primary-yellow text-primary-yellow font-bold py-3 px-8 rounded-full text-lg uppercase transition-all duration-300 hover:bg-primary-yellow hover:text-black">
                    Call to Order
                </a>
            </div>
        </div>
    </section>
);