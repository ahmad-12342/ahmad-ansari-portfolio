import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Code, Layout, Cpu, Database, Figma, Smartphone } from 'lucide-react';

const services = [
    { icon: Code, key: 'web_dev', color: 'blue' },
    { icon: Smartphone, key: 'responsive', color: 'purple' },
    { icon: Cpu, key: 'react_apps', color: 'blue' },
    { icon: Database, key: 'firebase', color: 'orange' },
    { icon: Figma, key: 'ui_ux', color: 'pink' },
];

const Services = () => {
    const { t } = useTranslation();

    return (
        <section id="services" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl font-bold mb-4"
                    >
                        {t('services.title')}
                    </motion.h2>
                    <p className="opacity-60 max-w-2xl mx-auto">
                        Providing high-quality solutions for all your digital needs. From concept to deployment.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="p-8 glass rounded-3xl group transition-all border border-inherit/5 hover:border-primary-500/30"
                        >
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-primary-500/10 text-primary-500 group-hover:scale-110 transition-transform`}>
                                {React.createElement(service.icon, { size: 28 })}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{t(`services.${service.key}`)}</h3>
                            <p className="opacity-70 text-sm leading-relaxed">
                                Expert solutions using the latest industry standards and best practices to ensure your project stands out.
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
