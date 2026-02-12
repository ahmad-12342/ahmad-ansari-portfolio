import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { db } from '../firebase/config';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import InvitationCard from './InvitationCard';

const Contact = () => {
    const { t } = useTranslation();
    const { register, handleSubmit, reset, formState: { errors, isSubmitting }, watch } = useForm();
    const [showInvitation, setShowInvitation] = useState(false);
    const [submitError, setSubmitError] = useState('');

    // Watch the name field for the invitation card
    const userName = watch("name");

    const onSubmit = async (data) => {
        setSubmitError('');
        console.log("Submitting Contact form:", data);
        try {
            // 1. Await Firestore request
            await addDoc(collection(db, "messages"), {
                ...data,
                timestamp: serverTimestamp()
            });
            console.log("Contact document created!");

            // 2. Show success immediately
            setShowInvitation(true);
            reset();
        } catch (e) {
            console.error("Message send error:", e);
            setSubmitError(`Database Error (${e.code || 'unknown'}): ${e.message}`);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <InvitationCard
                isOpen={showInvitation}
                onClose={() => setShowInvitation(false)}
                userName={userName}
            />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8">{t('contact.title')}</h2>
                        <p className="opacity-60 mb-12 text-lg leading-relaxed max-w-lg">
                            Have a project in mind? Let's talk about how we can work together to build something amazing.
                        </p>

                        <div className="space-y-6">
                            {[
                                { icon: Mail, label: 'Email', value: 'muhammadansariahmad323@gmail.com', color: 'text-primary-500' },
                                { icon: Phone, label: 'Phone', value: '+92 325 2207294', color: 'text-purple-500' },
                                { icon: MapPin, label: 'Location', value: 'Karachi, Pakistan', color: 'text-pink-500' }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center gap-5 p-6 glass rounded-3xl group hover:border-primary-500/30 transition-all shadow-sm">
                                    <div className={`w-14 h-14 bg-primary-500/5 rounded-2xl flex items-center justify-center ${item.color} group-hover:bg-primary-500 group-hover:text-white transition-all shadow-inner`}>
                                        <item.icon size={26} />
                                    </div>
                                    <div>
                                        <div className="text-[10px] opacity-40 font-black uppercase tracking-[0.2em] mb-1">{item.label}</div>
                                        <div className="font-bold text-lg tracking-tight">{item.value}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="p-10 glass rounded-[2.5rem] border transition-shadow hover:shadow-2xl shadow-sm"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            <div className="grid gap-8">
                                <div>
                                    <label className="block text-xs font-bold opacity-50 mb-3 uppercase tracking-widest">{t('contact.name')}</label>
                                    <input
                                        {...register("name", { required: t('contact.error_name') })}
                                        className={`w-full px-6 py-4 bg-primary-500/5 border ${errors.name ? 'border-red-500' : 'border-inherit/10'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all font-medium placeholder:opacity-30`}
                                        placeholder="Your Name"
                                    />
                                    {errors.name && <span className="text-red-500 text-[10px] mt-2 block font-bold uppercase">{errors.name.message}</span>}
                                </div>
                                <div>
                                    <label className="block text-xs font-bold opacity-50 mb-3 uppercase tracking-widest">{t('contact.email')}</label>
                                    <input
                                        {...register("email", {
                                            required: t('contact.error_email'),
                                            pattern: { value: /^\S+@\S+$/i, message: t('contact.error_email') }
                                        })}
                                        className={`w-full px-6 py-4 bg-primary-500/5 border ${errors.email ? 'border-red-500' : 'border-inherit/10'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all font-medium placeholder:opacity-30`}
                                        placeholder="name@example.com"
                                    />
                                    {errors.email && <span className="text-red-500 text-[10px] mt-2 block font-bold uppercase">{errors.email.message}</span>}
                                </div>
                            </div>
                            <div>
                                <label className="block text-xs font-bold opacity-50 mb-3 uppercase tracking-widest">{t('contact.message')}</label>
                                <textarea
                                    {...register("message", { required: t('contact.error_message') })}
                                    rows="5"
                                    className={`w-full px-6 py-4 bg-primary-500/5 border ${errors.message ? 'border-red-500' : 'border-inherit/10'} rounded-2xl focus:outline-none focus:border-primary-500 transition-all font-medium placeholder:opacity-30 resize-none`}
                                    placeholder="How can I help you?"
                                />
                                {errors.message && <span className="text-red-500 text-[10px] mt-2 block font-bold uppercase">{errors.message.message}</span>}
                            </div>
                            {submitError && (
                                <div className="p-4 bg-red-500/10 border border-red-500/20 text-red-500 rounded-2xl text-xs font-bold uppercase tracking-widest text-center">
                                    {submitError}
                                </div>
                            )}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full py-5 bg-gradient-to-r from-primary-600 to-indigo-600 hover:from-primary-500 hover:to-indigo-500 disabled:opacity-50 text-white rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-3 transition-all shadow-xl shadow-primary-500/20"
                            >
                                {isSubmitting ? (
                                    <div className="flex items-center gap-1">
                                        Sending
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut", times: [0, 0.5, 1] }}
                                        >.</motion.span>
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.2, ease: "easeInOut", times: [0, 0.5, 1] }}
                                        >.</motion.span>
                                        <motion.span
                                            animate={{ opacity: [0, 1, 0] }}
                                            transition={{ repeat: Infinity, duration: 1.5, delay: 0.4, ease: "easeInOut", times: [0, 0.5, 1] }}
                                        >.</motion.span>
                                    </div>
                                ) : (
                                    <>
                                        {t('contact.send')} <Send size={20} strokeWidth={2.5} />
                                    </>
                                )}
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
