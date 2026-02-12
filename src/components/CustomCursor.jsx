import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    // 1. Mouse Position (Direct Value) - No Lag
    const mouseX = useMotionValue(-100);
    const mouseY = useMotionValue(-100);

    // 2. Ring Position (Spring Physics) - Smooth Lag
    // Damping: Higher = less oscillation. Stiffness: Higher = faster.
    const springConfig = { damping: 20, stiffness: 150, mass: 0.8 };
    const ringX = useSpring(mouseX, springConfig);
    const ringY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveCursor = (e) => {
            // Update raw mouse values directly
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);

            // Check interactivity
            const target = e.target;
            const isInteractive = target.closest('a, button, input, textarea, .cursor-pointer, [role="button"]');
            setIsHovering(!!isInteractive);

            if (!isVisible) setIsVisible(true);
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, [mouseX, mouseY, isVisible]);

    return (
        <>
            {/* Primary Dot - Instantly follows mouse (Precision) */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-primary-500 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: mouseX,
                    y: mouseY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 1 : 0
                }}
            />

            {/* Trailing Ring - Smooth Spring Follow (Fluidity) */}
            <motion.div
                className="fixed top-0 left-0 border border-primary-500 rounded-full pointer-events-none z-[9999] hidden md:block"
                style={{
                    x: ringX,
                    y: ringY,
                    translateX: '-50%',
                    translateY: '-50%',
                    opacity: isVisible ? 0.6 : 0,
                }}
                animate={{
                    width: isHovering ? 40 : 18,
                    height: isHovering ? 40 : 18,
                    backgroundColor: isHovering ? 'var(--primary-glow)' : 'transparent',
                    borderColor: isHovering ? 'transparent' : 'var(--primary)',
                }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            />
        </>
    );
};

export default CustomCursor;
