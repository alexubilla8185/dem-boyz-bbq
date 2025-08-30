import React from 'react';
import { logoUrl } from '../data.ts';
import { handleSmoothScroll } from '../utils/helpers.ts';

export const Hero = () => (
    <section id="hero" className="h-screen flex items-center justify-center text-center bg-black" style={{ backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)", backgroundSize: "20px 20px" }}>
        <div className="container mx-auto px-4">
            <img src={logoUrl} alt="Dem Boyz BBQ Logo - Southern Grillin' with an Island Twist" className="mx-auto h-48 w-48 md:h-64 md:w-64 shadow-2xl shadow-primary-yellow/20" />
            <h1 className="text-4xl md:text-6xl font-black uppercase mt-6 text-glow text-primary-yellow">Dem Boyz BBQ</h1>
            <p className="text-lg md:text-2xl mt-4 font-semibold bg-fire-gradient text-transparent bg-clip-text">Southern Grillin' with an Island Twist</p>
            <a href="#menu" onClick={handleSmoothScroll} className="mt-8 inline-block bg-fire-gradient text-black font-bold py-3 px-8 rounded-full text-lg uppercase transition-transform hover:scale-105 duration-300">
                View Our Menu
            </a>
        </div>
    </section>
);