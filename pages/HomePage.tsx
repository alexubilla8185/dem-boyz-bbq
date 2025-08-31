import React from 'react';
import { Hero } from '../components/Hero.tsx';
import { Menu } from '../components/Menu.tsx';
import { Locations } from '../components/Locations.tsx';
import { Catering } from '../components/Catering.tsx';

interface HomePageProps {
    isCateringModalOpen: boolean;
    setIsCateringModalOpen: (isOpen: boolean) => void;
}

export const HomePage = ({ isCateringModalOpen, setIsCateringModalOpen }: HomePageProps) => {
    return (
        <>
            <Hero />
            <Menu />
            <Locations />
            <Catering isModalOpen={isCateringModalOpen} setIsModalOpen={setIsCateringModalOpen} />
        </>
    );
};
