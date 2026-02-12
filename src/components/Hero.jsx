import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-mesh">
            <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="md:flex-1 text-center md:text-left flex flex-col items-center md:items-start"
                >
                    <h2 className="text-primary-400 font-semibold tracking-wide uppercase mb-4">
                        {t('hero.greeting')}
                    </h2>
                    <h1 className="text-5xl md:text-8xl font-black text-white mb-6 leading-tight md:leading-none">
                        Ahmad <br />
                        <span className="text-gradient">Ansari</span>
                    </h1>
                    <div className="text-xl md:text-2xl font-bold text-primary-500 mb-4 uppercase tracking-widest">
                        {t('hero.role')}
                    </div>
                    <p className="text-lg md:text-xl opacity-70 mb-10 max-w-lg leading-relaxed text-white">
                        {t('hero.tagline')}
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-primary-500/20"
                        >
                            {t('hero.cta_hire')} <ArrowRight size={20} />
                        </a>
                        <a
                            href="/ahmad-ansari-cv.pdf"
                            download="Ahmad_Ansari_CV.pdf"
                            className="px-6 md:px-8 py-4 glass text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all border border-white/5"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative w-full max-w-[340px] md:max-w-none md:flex-1 order-first md:order-last"
                >
                    <div className="absolute inset-0 bg-primary-500/20 blur-[80px] md:blur-[120px] rounded-full"></div>
                    <div className="relative glass rounded-[2.5rem] p-3 md:p-4 border-white/20 aspect-square flex items-center justify-center overflow-hidden shadow-2xl">
                        <img
                            src="/ahmad-portrait.webp"
                            alt="Ahmad Ansari"
                            className="w-full h-full object-cover object-top rounded-[2rem] shadow-2xl transition-transform duration-700 hover:scale-105"
                        />

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-6 right-6 md:top-10 md:right-10 p-3 md:p-4 glass rounded-2xl shadow-2xl"
                        >
                            <div className="text-primary-400 font-bold text-sm md:text-base">1 Year</div>
                            <div className="text-[10px] md:text-xs text-gray-400">Experience</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-6 left-6 md:bottom-10 md:left-10 p-3 md:p-4 glass rounded-2xl shadow-2xl"
                        >
                            <div className="text-purple-400 font-bold text-sm md:text-base">10+ Projects</div>
                            <div className="text-[10px] md:text-xs text-gray-400">Completed</div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Decorative background circles */}
            <div className="absolute top-1/4 -left-20 w-96 h-96 bg-primary-600/10 blur-[100px] rounded-full"></div>
            <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/10 blur-[100px] rounded-full"></div>
        </section>
    );
};

export default Hero;
