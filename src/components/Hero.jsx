import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
    const { t } = useTranslation();

    return (
        <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-gradient-mesh">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 className="text-primary-400 font-semibold tracking-wide uppercase mb-4">
                        {t('hero.greeting')}
                    </h2>
                    <h1 className="text-6xl md:text-8xl font-black text-inherit mb-6 leading-none">
                        Ahmad <br />
                        <span className="text-gradient">Ansari</span>
                    </h1>
                    <div className="text-2xl font-bold text-primary-500 mb-4 uppercase tracking-widest">
                        {t('hero.role')}
                    </div>
                    <p className="text-xl opacity-70 mb-10 max-w-lg leading-relaxed">
                        {t('hero.tagline')}
                    </p>
                    <div className="flex flex-wrap gap-4">
                        <a
                            href="#contact"
                            className="px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white rounded-full font-bold flex items-center gap-2 transition-all transform hover:scale-105 shadow-xl shadow-primary-500/20"
                        >
                            {t('hero.cta_hire')} <ArrowRight size={20} />
                        </a>
                        <a
                            href="/ahmad-ansari-cv.pdf"
                            download="Ahmad_Ansari_CV.pdf"
                            className="px-8 py-4 glass text-white rounded-full font-bold flex items-center gap-2 hover:bg-white/10 hover:border-white/30 transition-all border border-white/5"
                        >
                            Download CV <Download size={20} />
                        </a>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="relative hidden md:block"
                >
                    <div className="absolute inset-0 bg-primary-500/20 blur-[120px] rounded-full"></div>
                    <div className="relative glass rounded-3xl p-8 border-white/20 aspect-square flex items-center justify-center overflow-hidden">
                        {/* Placeholder for professional portrait or abstract 3D element */}
                        <div className="w-full h-full bg-gradient-to-br from-primary-400/20 to-purple-500/20 flex items-center justify-center">
                            <span className="text-8xl opacity-10 font-bold">AA</span>
                        </div>

                        {/* Floating elements */}
                        <motion.div
                            animate={{ y: [0, -20, 0] }}
                            transition={{ duration: 4, repeat: Infinity }}
                            className="absolute top-10 right-10 p-4 glass rounded-2xl shadow-2xl"
                        >
                            <div className="text-primary-400 font-bold">1 Year</div>
                            <div className="text-xs text-gray-400">Experience</div>
                        </motion.div>

                        <motion.div
                            animate={{ y: [0, 20, 0] }}
                            transition={{ duration: 5, repeat: Infinity, delay: 1 }}
                            className="absolute bottom-10 left-10 p-4 glass rounded-2xl shadow-2xl"
                        >
                            <div className="text-purple-400 font-bold">10+ Projects</div>
                            <div className="text-xs text-gray-400">Completed</div>
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
