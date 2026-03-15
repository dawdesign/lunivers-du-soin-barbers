import React, { useRef, useState } from 'react';
import { motion, useSpring, useTransform } from 'motion/react';
import './TiltedCard.css';

interface TiltedCardProps {
    imageSrc: string;
    altText: string;
    captionText?: string;
    containerHeight?: string;
    containerWidth?: string;
    imageHeight?: string;
    imageWidth?: string;
    rotateAmplitude?: number;
    scaleOnHover?: number;
    showMobileAlert?: boolean;
    showCaption?: boolean;
}

export const TiltedCard: React.FC<TiltedCardProps> = ({
    imageSrc,
    altText,
    captionText,
    containerHeight = '300px',
    containerWidth = '100%',
    imageHeight = '300px',
    imageWidth = '100%',
    rotateAmplitude = 15,
    scaleOnHover = 1.05,
    showMobileAlert = true,
    showCaption = true,
}) => {
    const [isMobile, setIsMobile] = useState(false);
    const ref = useRef<HTMLDivElement>(null);
    const x = useSpring(0, { stiffness: 300, damping: 30 });
    const y = useSpring(0, { stiffness: 300, damping: 30 });
    const opacity = useSpring(0);
    const scale = useSpring(1);

    const rotateX = useTransform(y, [-0.5, 0.5], [rotateAmplitude, -rotateAmplitude]);
    const rotateY = useTransform(x, [-0.5, 0.5], [-rotateAmplitude, rotateAmplitude]);

    const captionX = useTransform(x, [-0.5, 0.5], [10, -10]);
    const captionY = useTransform(y, [-0.5, 0.5], [10, -10]);

    React.useEffect(() => {
        const checkMobile = () => setIsMobile(window.innerWidth < 1024);
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    const handleMove = (e: React.MouseEvent<HTMLDivElement> | React.TouchEvent<HTMLDivElement>) => {
        if (!ref.current) return;

        let clientX = 0;
        let clientY = 0;

        if ('touches' in e) {
            clientX = e.touches[0].clientX;
            clientY = e.touches[0].clientY;
        } else {
            clientX = e.clientX;
            clientY = e.clientY;
        }

        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = clientX - rect.left;
        const mouseY = clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(xPct);
        y.set(yPct);
    };

    const handleEnter = () => {
        scale.set(scaleOnHover);
        opacity.set(1);
    };

    const handleLeave = () => {
        x.set(0);
        y.set(0);
        scale.set(1);
        opacity.set(0);
    };

    return (
        <figure
            className="tilted-card-figure"
            style={{ height: containerHeight, width: containerWidth, touchAction: 'pan-y' }}
            onMouseMove={handleMove}
            onMouseEnter={handleEnter}
            onMouseLeave={handleLeave}
            onTouchMove={handleMove}
            onTouchStart={handleEnter}
            onTouchEnd={handleLeave}
            onTouchCancel={handleLeave}
        >
            {showMobileAlert && isMobile && (
                <div className="tilted-card-mobile-alert">
                    {captionText || altText}
                </div>
            )}

            <motion.div
                ref={ref}
                className="tilted-card-inner"
                style={{
                    rotateX: rotateX,
                    rotateY: rotateY,
                    scale,
                    width: imageWidth,
                    height: imageHeight,
                }}
            >
                <motion.img
                    src={imageSrc}
                    alt={altText}
                    className="tilted-card-img"
                    style={{
                        width: imageWidth,
                        height: imageHeight,
                    }}
                />

                {showCaption && (captionText || altText) && (
                    <motion.div
                        className="tilted-card-caption font-display uppercase"
                        style={{
                            opacity: opacity,
                            x: captionX,
                            y: captionY,
                            position: 'absolute',
                            top: '20px',
                            left: '20px',
                            transform: 'none',
                        }}
                    >
                        {captionText || altText}
                    </motion.div>
                )}
            </motion.div>
        </figure>
    );
};
