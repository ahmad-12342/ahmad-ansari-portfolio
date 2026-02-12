import React, { useState } from 'react';
import { Mail, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const Newsletter = () => {
    const [email, setEmail] = useState('');
    const [status, setStatus] = useState('idle');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('loading');
        try {
            await addDoc(collection(db, 'subscribers'), {
                email,
                subscribedAt: serverTimestamp(),
            });
            setStatus('success');
            setEmail('');
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="newsletter" className="py-24 relative overflow-hidden">
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="glass p-12 rounded-[3rem] border border-white/10 text-center relative overflow-hidden group shadow-2xl"
                >
                    {/* Background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 via-purple-500/5 to-transparent opacity-50 group-hover:opacity-80 transition-opacity"></div>

                    <div className="relative z-10">
                        <div className="w-20 h-20 bg-primary-500/10 rounded-3xl flex items-center justify-center mx-auto mb-8 transform group-hover:rotate-12 transition-transform duration-500 border border-primary-500/20">
                            <Mail className="text-primary-500" size={36} strokeWidth={1.5} />
                        </div>

                        <h2 className="text-3xl md:text-5xl font-black mb-6 tracking-tight">Stay in the <span className="text-gradient">Loop</span></h2>
                        <p className="opacity-60 max-w-lg mx-auto mb-10 text-lg font-medium leading-relaxed">
                            Subscribe to my newsletter for the latest design trends, tech insights, and project updates.
                        </p>

                        <form onSubmit={handleSubmit} className="max-w-md mx-auto relative group">
                            <div className="flex flex-col sm:flex-row gap-3">
                                <div className="relative flex-1">
                                    <input
                                        type="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter your email"
                                        className="w-full bg-primary-500/5 border border-inherit/10 rounded-2xl px-6 py-4.5 text-sm focus:outline-none focus:border-primary-500 transition-all font-bold placeholder:opacity-30 placeholder:uppercase placeholder:tracking-widest"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    disabled={status === 'loading'}
                                    className="px-8 py-4.5 bg-primary-500 hover:bg-primary-600 text-white rounded-2xl font-black uppercase tracking-widest text-xs flex items-center justify-center gap-3 transition-all transform hover:scale-105 active:scale-95 shadow-xl shadow-primary-500/20 disabled:opacity-50"
                                >
                                    {status === 'loading' ? (
                                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                    ) : (
                                        <>
                                            Subscribe <Send size={16} strokeWidth={2.5} />
                                        </>
                                    )}
                                </button>
                            </div>

                            {/* Status Message */}
                            <AnimatePresence>
                                {status === 'success' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-green-500 mt-6 font-bold text-sm uppercase tracking-widest bg-green-500/10 py-3 rounded-xl border border-green-500/20"
                                    >
                                        Welcome to the community!
                                    </motion.p>
                                )}
                                {status === 'error' && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className="text-red-500 mt-6 font-bold text-sm uppercase tracking-widest bg-red-500/10 py-3 rounded-xl border border-red-500/20"
                                    >
                                        Something went wrong. Try again.
                                    </motion.p>
                                )}
                            </AnimatePresence>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Newsletter;

