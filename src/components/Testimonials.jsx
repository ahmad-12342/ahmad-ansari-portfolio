import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
    {
        name: "Mahad Khan",
        role: "Client",
        content: "Ahmad's work exceeded my expectations! He delivered a high-quality, modern website with excellent attention to detail. I'm very happy with the results and would definitely recommend him.",
        rating: 5
    },
    {
        name: "Hassan Khan",
        role: "Client",
        content: "Working with Ahmad was a great experience. He understood my requirements perfectly and delivered outstanding results. Very satisfied with his professional approach and quality work.",
        rating: 5
    },
    {
        name: "Shoaib",
        role: "Client",
        content: "Excellent developer! Ahmad created exactly what I needed with great attention to detail. The final product was beyond my expectations and I'm extremely happy with his work.",
        rating: 5
    }
];

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Client <span className="text-gradient">Success Stories</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Don't just take my word for it. Here's what my clients have to say about working with me.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((test, index) => (
                        <motion.div
                            key={test.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="glass p-8 rounded-3xl border border-white/10 relative group"
                        >
                            <div className="absolute top-6 right-8 text-white/5 group-hover:text-primary-500/10 transition-colors">
                                <Quote size={60} />
                            </div>

                            <div className="flex gap-1 mb-4">
                                {[...Array(test.rating)].map((_, i) => (
                                    <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <p className="text-gray-300 mb-6 italic leading-relaxed">"{test.content}"</p>

                            <div>
                                <h4 className="text-white font-bold text-lg">{test.name}</h4>
                                <p className="text-primary-400 text-sm font-medium">{test.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
