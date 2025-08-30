import React from 'react';

export const SectionTitle = ({ children }: { children: React.ReactNode }) => (
    <h2 className="text-3xl md:text-4xl font-black text-center uppercase text-glow mb-10">{children}</h2>
);
