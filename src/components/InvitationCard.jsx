import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Star, Sparkles, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';

const InvitationCard = ({ isOpen, onClose, userName }) => {
    const [flipped, setFlipped] = useState(false);

    useEffect(() => {
        if (isOpen) {
            // Trigger confetti
            const duration = 3000;
            const end = Date.now() + duration;

            const frame = () => {
                confetti({
                    particleCount: 5,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ['#0ea5e9', '#6366f1', '#a855f7']
                });
                confetti({
                    particleCount: 5,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ['#0ea5e9', '#6366f1', '#a855f7']
                });

                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            };
            frame();
        } else {
            setFlipped(false);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md"
                >
                    <div className="relative w-full max-w-sm aspect-[3/4] perspective-1000 group cursor-pointer" onClick={() => setFlipped(!flipped)}>
                        <motion.div
                            initial={{ rotateY: 90 }}
                            animate={{ rotateY: 0 }}
                            transition={{ type: "spring", damping: 20 }}
                            className="w-full h-full relative"
                        >
                            {/* FLIP CONTAINER */}
                            <motion.div
                                animate={{ rotateY: flipped ? 180 : 0 }}
                                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                                className="w-full h-full transform-style-3d relative"
                            >
                                {/* FRONT SIDE */}
                                <div className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden glass border border-white/20 shadow-2xl flex flex-col items-center justify-center text-center p-8 bg-gradient-to-br from-white/10 to-white/5 z-20">
                                    <div className="absolute top-4 right-4 z-50">
                                        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-white/40 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors">
                                            <X size={20} />
                                        </button>
                                    </div>
                                    {/* Golden/Premium Border */}
                                    <div className="absolute inset-2 border border-primary-500/30 rounded-2xl"></div>
                                    <div className="absolute inset-0 bg-gradient-to-b from-primary-500/10 to-transparent opacity-50"></div>

                                    <motion.div
                                        animate={{ rotate: [0, 10, -10, 0] }}
                                        transition={{ repeat: Infinity, duration: 5 }}
                                        className="mb-6 relative"
                                    >
                                        <div className="absolute inset-0 bg-primary-500 blur-2xl opacity-40"></div>
                                        <Sparkles size={48} className="text-primary-400 relative z-10" />
                                    </motion.div>

                                    <h2 className="text-2xl font-black uppercase tracking-widest text-white mb-2">Status</h2>
                                    <h3 className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400 mb-8 tracking-tighter">SENT</h3>

                                    <div className="w-16 h-1 bg-white/20 rounded-full mb-8"></div>

                                    <p className="text-white/80 text-sm font-bold uppercase tracking-widest mb-2">Successfully</p>
                                    <div className="text-[10px] text-white/40 uppercase tracking-[0.3em]">CONFIRMED</div>

                                    {/* Floating decorations */}
                                    <div className="absolute top-10 right-10 w-20 h-20 bg-primary-500/20 blur-2xl rounded-full"></div>
                                    <div className="absolute bottom-10 left-10 w-20 h-20 bg-purple-500/20 blur-2xl rounded-full"></div>
                                </div>

                                {/* BACK SIDE (Pre-rotated 180deg so it appears correct when container flips) */}
                                <div
                                    className="absolute inset-0 backface-hidden rounded-3xl overflow-hidden bg-[#0f172a] border border-primary-500/30 shadow-2xl flex flex-col items-center justify-between p-8 text-center z-10"
                                    style={{ transform: 'rotateY(180deg)' }}
                                >
                                    <div className="w-full flex justify-end">
                                        <button onClick={(e) => { e.stopPropagation(); onClose(); }} className="text-white/40 hover:text-white p-2">
                                            <X size={20} />
                                        </button>
                                    </div>

                                    <div>
                                        <div className="w-20 h-20 mx-auto bg-green-500/10 rounded-full flex items-center justify-center mb-6 border border-green-500/20">
                                            <Check size={32} className="text-green-500" strokeWidth={3} />
                                        </div>
                                        <h3 className="text-white font-bold text-xl mb-2">Message Sent!</h3>
                                        <p className="text-gray-400 text-sm mb-6">High priority access granted to {userName || 'Guest'}.</p>
                                    </div>

                                    <div className="space-y-3 w-full">
                                        <button
                                            onClick={(e) => { e.stopPropagation(); onClose(); }}
                                            className="w-full py-4 bg-green-500/10 hover:bg-green-500/20 text-green-500 border border-green-500/20 rounded-xl font-bold text-sm uppercase tracking-widest transition-all mt-4 flex items-center justify-center gap-2"
                                        >
                                            Sent Successfully <Check size={16} strokeWidth={3} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default InvitationCard;
