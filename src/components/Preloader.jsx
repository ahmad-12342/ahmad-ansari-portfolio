import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from './Logo';

const Preloader = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {loading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] bg-[#0f172a] flex items-center justify-center overflow-hidden"
                >
                    {/* Background glowing effects */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary-500/10 blur-[120px] rounded-full"></div>

                    <div className="relative">
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="flex flex-col items-center"
                        >
                            <div className="w-24 h-24 mb-8">
                                <Logo />
                            </div>

                            <div className="flex flex-col items-center">
                                <motion.div
                                    className="text-2xl font-black text-white tracking-widest uppercase mb-2"
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.2 }}
                                >
                                    Ahmad <span className="text-primary-500 font-black">Ansari</span>
                                </motion.div>

                                <div className="w-48 h-1 bg-white/5 rounded-full overflow-hidden relative">
                                    <motion.div
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "0%" }}
                                        transition={{ duration: 1.5, ease: "easeInOut" }}
                                        className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-500"
                                    ></motion.div>
                                </div>
                                <div className="mt-3 text-[10px] uppercase font-black tracking-[0.3em] text-primary-500/60">
                                    Initializing Experience
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
