import React from 'react';

export const SectionTitle = ({ children, className }: { children: React.ReactNode, className?: string }) => (
    <h2 className={`text-4xl sm:text-5xl font-bold text-center uppercase mb-12 bg-fire-gradient text-transparent bg-clip-text ${className || ''}`}>{children}</h2>
);