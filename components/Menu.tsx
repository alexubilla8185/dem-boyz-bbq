import React, { useState } from 'react';
import { menuItems } from '@/data';
import { SectionTitle } from '@/components/SectionTitle';
import { ChevronDownIcon } from '@/components/Icons';

export const Menu = () => {
    const [openCategoryIndex, setOpenCategoryIndex] = useState<number | null>(0);

    const handleToggle = (index: number) => {
        setOpenCategoryIndex(openCategoryIndex === index ? null : index);
    };

    const categoryCardStyles = [
        'border-primary-red',
        'border-primary-yellow',
        'border-accent-orange',
        'border-accent-green',
    ];

    return (
        <section id="menu" className="py-20 bg-black">
            <div className="container mx-auto px-4">
                <SectionTitle>Our Menu</SectionTitle>
                <div className="space-y-8">
                    {menuItems.map((category, index) => {
                        const isOpen = openCategoryIndex === index;
                        return (
                            <div
                                key={category.category}
                                className={`bg-neutral-900 rounded-xl border-2 shadow-lg shadow-black/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 ${categoryCardStyles[index % categoryCardStyles.length]}`}
                            >
                                <button
                                    onClick={() => handleToggle(index)}
                                    className="w-full flex justify-between items-center text-left p-6 sm:p-8"
                                    aria-expanded={isOpen}
                                    aria-controls={`category-content-${index}`}
                                >
                                    <h3 className="text-4xl sm:text-5xl font-bold bg-fire-gradient text-transparent bg-clip-text">{category.category}</h3>
                                    <span className="text-primary-yellow ml-4 flex-shrink-0">
                                        <ChevronDownIcon className={`w-8 h-8 sm:w-10 sm:h-10 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                                    </span>
                                </button>
                                
                                <div
                                    id={`category-content-${index}`}
                                    className={`transition-all duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-[2500px]' : 'max-h-0'}`}
                                >
                                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                                        {category.notes && (
                                            <div className="text-center text-neutral-300 mb-8 max-w-2xl mx-auto">
                                                {category.notes.map((note, noteIndex) => (
                                                    <p key={noteIndex} className="italic">{note}</p>
                                                ))}
                                            </div>
                                        )}
                                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                            {category.items.map((item) => (
                                                <div key={item.name} className="bg-black/40 rounded-lg p-4 sm:p-6 border border-neutral-700 transition-all duration-300 hover:border-primary-yellow hover:bg-black/60 hover:scale-[1.03] flex flex-col">
                                                    <div className="flex justify-between items-start gap-4 flex-grow">
                                                        <h4 className="text-lg sm:text-xl font-bold text-primary-yellow">{item.name}</h4>
                                                        {item.price.includes(' | ') ? (
                                                            <div className="text-right flex-shrink-0">
                                                                {item.price.split(' | ').map((pricePart, priceIndex) => (
                                                                    <p key={priceIndex} className="text-base sm:text-lg font-bold text-accent-green leading-tight">{pricePart}</p>
                                                                ))}
                                                            </div>
                                                        ) : (
                                                            <p className="text-base sm:text-lg font-bold text-accent-green text-right flex-shrink-0">{item.price}</p>
                                                        )}
                                                    </div>
                                                    {item.description && <p className="text-neutral-400 mt-2 text-sm sm:text-base">{item.description}</p>}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
