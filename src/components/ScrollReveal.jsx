import React from 'react';
import useScrollAnimation from '../hooks/useScrollAnimation';

const ScrollReveal = ({ children, direction = 'up', delay = 0, className = '' }) => {
    const [ref, isVisible] = useScrollAnimation();

    const getAnimationClass = () => {
        switch (direction) {
            case 'left':
                return 'animate-slide-left';
            case 'right':
                return 'animate-slide-right';
            case 'up':
                return 'animate-slide-up';
            default:
                return 'animate-slide-up';
        }
    };

    return (
        <div
            ref={ref}
            className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'
                } ${isVisible ? getAnimationClass() : ''} ${className}`}
            style={{ animationDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

export default ScrollReveal;
