import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Sparkles } from 'lucide-react';

const ThemeToggle = () => {
    const [isLight, setIsLight] = useState(() => {
        // Load theme from localStorage on initial render
        const savedTheme = localStorage.getItem('theme');
        return savedTheme === 'light';
    });

    useEffect(() => {
        // Apply theme to document
        if (isLight) {
            document.documentElement.classList.add('light');
            localStorage.setItem('theme', 'light');
        } else {
            document.documentElement.classList.remove('light');
            localStorage.setItem('theme', 'dark');
        }
    }, [isLight]);

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsLight(!isLight)}
            className="relative w-14 h-14 glass rounded-2xl flex items-center justify-center overflow-hidden group shadow-lg"
            title={isLight ? "Switch to Dark Excellence" : "Switch to Luxury Light"}
        >
            {/* Background Glow */}
            <div className={`absolute inset-0 transition-colors duration-500 ${isLight ? 'bg-amber-400/10' : 'bg-primary-500/10'}`} />

            <AnimatePresence mode="wait">
                <motion.div
                    key={isLight ? 'sun' : 'moon'}
                    initial={{ y: 20, opacity: 0, rotate: -45 }}
                    animate={{ y: 0, opacity: 1, rotate: 0 }}
                    exit={{ y: -20, opacity: 0, rotate: 45 }}
                    transition={{ duration: 0.3, ease: "backOut" }}
                    className="relative z-10"
                >
                    {isLight ? (
                        <div className="text-amber-500 relative">
                            <Sun size={24} strokeWidth={2.5} />
                            <motion.div
                                animate={{ opacity: [0, 1, 0] }}
                                transition={{ repeat: Infinity, duration: 2 }}
                                className="absolute -top-1 -right-1"
                            >
                                <Sparkles size={12} />
                            </motion.div>
                        </div>
                    ) : (
                        <div className="text-primary-400">
                            <Moon size={24} strokeWidth={2.5} />
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>

            {/* Hover Indicator */}
            <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary-500/20 rounded-2xl transition-all duration-300" />
        </motion.button>
    );
};

export default ThemeToggle;
