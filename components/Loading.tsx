import React from 'react';

const SkeletonBlock = ({ className }: { className?: string }) => (
    <div className={`bg-neutral-800 rounded animate-pulse ${className || ''}`} />
);

export const MenuSkeletonLoader = () => {
    const categoryCardStyles = [
        'border-primary-red',
        'border-primary-yellow',
        'border-accent-orange',
        'border-accent-green',
    ];

    return (
        <div className="space-y-8">
            {[...Array(2)].map((_, index) => (
                <div key={index} className={`bg-neutral-900 rounded-xl border-2 shadow-lg shadow-black/30 ${categoryCardStyles[index % categoryCardStyles.length]}`}>
                    <div className="p-6 sm:p-8 flex justify-between items-center">
                        <SkeletonBlock className="h-12 sm:h-14 w-3/5" />
                        <SkeletonBlock className="h-8 w-8 sm:h-10 sm:w-10 rounded-full" />
                    </div>
                    <div className="px-6 sm:px-8 pb-6 sm:pb-8">
                         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[...Array(3)].map((_, itemIndex) => (
                                <div key={itemIndex} className="bg-black/40 rounded-lg p-4 sm:p-6 border border-neutral-700">
                                    <div className="flex justify-between items-start gap-4">
                                        <SkeletonBlock className="h-6 w-1/2" />
                                        <SkeletonBlock className="h-6 w-1/4" />
                                    </div>
                                    <SkeletonBlock className="h-4 w-full mt-4" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
