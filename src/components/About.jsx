import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const About = () => {
    const { t } = useTranslation();

    return (
        <section id="about" className="py-24 overflow-hidden relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="relative"
                    >
                        <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
                            <img
                                src="/ahmad-portrait.webp"
                                alt="Ahmad Ansari"
                                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-6 left-6 right-6 p-4 glass rounded-2xl border border-white/10 z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                                <div className="flex items-center gap-4">
                                    <div className="w-10 h-10 rounded-full bg-primary-500 flex items-center justify-center text-white font-bold">
                                        <span className="text-sm">1</span>
                                    </div>
                                    <div>
                                        <div className="text-xs font-bold uppercase tracking-widest opacity-60">Experience</div>
                                        <div className="font-bold text-white">Professional Developer</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Elements */}
                        <div className="absolute -z-10 top-10 -left-10 w-full h-full border-2 border-inherit/10 rounded-[2.5rem]"></div>
                        <div className="absolute -z-20 top-20 -left-20 w-40 h-40 bg-primary-500/10 blur-[80px] rounded-full"></div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-4xl font-bold mb-6">
                            {t('about.title')}
                        </h2>
                        <p className="opacity-70 text-lg leading-relaxed mb-8">
                            {t('about.bio')}
                        </p>

                        <div className="grid grid-cols-2 gap-6 mb-10">
                            <div className="p-6 glass rounded-2xl">
                                <div className="text-3xl font-bold text-white mb-1">20+</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{t('about.clients')}</div>
                            </div>
                            <div className="p-6 glass rounded-2xl">
                                <div className="text-3xl font-bold text-white mb-1">100%</div>
                                <div className="text-sm text-gray-400 uppercase tracking-wider font-semibold">{t('about.satisfaction')}</div>
                            </div>
                        </div>

                        <button className="text-white font-bold flex items-center gap-2 group">
                            READ MORE
                            <span className="w-12 h-px bg-primary-500 group-hover:w-16 transition-all"></span>
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
