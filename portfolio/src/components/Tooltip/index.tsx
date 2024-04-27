import React, { useState, useEffect } from 'react';
import clsx from 'clsx';

interface TooltipProps {
    children: React.ReactNode;
    text: string;
    position?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
}

const Tooltip: React.FC<TooltipProps> = ({
    children,
    text,
    position = 'bottom',
    delay = 100,
}) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const handleMouseEnter = () => {
        setShowTooltip(true);
        setTimeout(() => {
            setIsVisible(true);
        }, delay);
    };

    const handleMouseLeave = () => {
        setIsVisible(false);
        setTimeout(() => {
            setShowTooltip(false);
        }, 300);
    };

    const tooltipClasses = clsx(
        'absolute bg-highlight px-5 py-1.5 text-sm text-black rounded-lg whitespace-nowrap',
        'transition-opacity duration-300 ease-in-out',
        {
            'opacity-0': !isVisible,
            'opacity-100': isVisible,
            'bottom-full mb-2': position === 'top',
            'top-full mt-2': position === 'bottom',
            'left-full -ml-2': position === 'left',
            'right-full mr-2': position === 'right',
        }
    );

    const arrowClasses = clsx(
        'absolute w-3 h-3 bg-highlight transform rotate-45',
        {
            'top-full -mt-2': position === 'top',
            'bottom-full translate-y-[8px] -translate-x-2': position === 'bottom',
            'left-full -ml-1': position === 'left',
            'right-full mr-1': position === 'right',
        }
    );

    return (
        <div
            className="relative inline-block"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && (
                <div className={tooltipClasses}>
                    {text}
                    <div className={arrowClasses} />
                </div>
            )}
        </div>
    );
};

export default Tooltip;