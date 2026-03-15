import React, { useEffect, useMemo, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollFloat.css';

gsap.registerPlugin(ScrollTrigger);

interface ScrollFloatProps {
    children: string;
    scrollContainerRef?: React.RefObject<HTMLElement | null>;
    containerClassName?: string;
    textClassName?: string;
    animationDuration?: number;
    ease?: string;
    scrollStart?: string;
    scrollEnd?: string;
    stagger?: number;
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

const ScrollFloat: React.FC<ScrollFloatProps> = ({
    children,
    scrollContainerRef,
    containerClassName = '',
    textClassName = '',
    animationDuration = 0.8,
    ease = 'back.out(2)',
    scrollStart = 'top 90%',
    scrollEnd = 'top 50%',
    stagger = 0.04,
    as: Tag = 'h2'
}) => {
    const containerRef = useRef<HTMLHeadingElement>(null);

    const splitText = useMemo(() => {
        const text = typeof children === 'string' ? children : '';
        const words = text.split(' ');

        return words.map((word, wordIndex) => (
            <React.Fragment key={wordIndex}>
                <span className="word" style={{ display: 'inline-block', whiteSpace: 'nowrap', overflow: 'hidden', paddingBottom: '0.1em', marginBottom: '-0.1em' }}>
                    {word.split('').map((char, charIndex) => (
                        <span className="char" key={charIndex}>
                            {char}
                        </span>
                    ))}
                </span>
                {wordIndex !== words.length - 1 && (
                    <span className="char" style={{ display: 'inline-block' }}>
                        {'\u00A0'}
                    </span>
                )}
            </React.Fragment>
        ));
    }, [children]);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;

        const charElements = el.querySelectorAll('.char');

        const ctx = gsap.context(() => {
            const isMobile = window.matchMedia('(max-width: 768px)').matches;

            gsap.fromTo(
                charElements,
                {
                    willChange: 'opacity, transform',
                    opacity: 0,
                    yPercent: 120,
                    scaleY: 2.3,
                    scaleX: 0.7,
                    transformOrigin: '50% 0%'
                },
                {
                    duration: animationDuration,
                    ease: ease,
                    opacity: 1,
                    yPercent: 0,
                    scaleY: 1,
                    scaleX: 1,
                    stagger: stagger,
                    scrollTrigger: {
                        trigger: el,
                        scroller,
                        start: isMobile ? 'top 95%' : scrollStart,
                        end: isMobile ? 'top 75%' : scrollEnd,
                        scrub: isMobile ? 0.5 : 1,
                        toggleActions: 'play none none reverse'
                    }
                }
            );
        }, el);

        return () => ctx.revert();
    }, [scrollContainerRef, animationDuration, ease, scrollStart, scrollEnd, stagger]);

    return (
        <Tag ref={containerRef} className={`scroll-float ${containerClassName}`}>
            <span className={`scroll-float-text ${textClassName}`}>{splitText}</span>
        </Tag>
    );
};

export default ScrollFloat;
