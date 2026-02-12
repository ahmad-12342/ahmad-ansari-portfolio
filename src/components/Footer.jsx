import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Github, Linkedin, Twitter, Heart, Mail, Phone, MapPin } from 'lucide-react';

import Logo from './Logo';

const Footer = () => {
    const navigate = useNavigate();

    const handleLogoClick = () => {
        navigate('/');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="pt-24 pb-12 relative overflow-hidden border-t border-inherit/10">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/3 opacity-50"></div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
                    {/* Brand Section */}
                    <div className="space-y-8">
                        <div
                            className="flex items-center gap-3 cursor-pointer select-none group"
                            onClick={handleLogoClick}
                        >
                            <div className="w-10 h-10 flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                                <Logo />
                            </div>
                            <div>
                                <div className="text-xl font-black text-gradient tracking-tighter leading-none">
                                    AHMAD
                                </div>
                                <div className="text-[10px] font-bold text-primary-500 uppercase tracking-[0.3em] leading-none opacity-60 group-hover:opacity-100 transition-opacity">
                                    ANSARI
                                </div>
                            </div>
                        </div>
                        <p className="opacity-60 text-sm leading-relaxed max-w-xs font-medium">
                            Frontend Developer specialized in building premium, high-performance web applications with a focus on modern UI/UX design.
                        </p>
                        <div className="flex gap-4">
                            {[
                                { icon: Github, href: "https://github.com/muhammadansariahmad323" },
                                { icon: Linkedin, href: "https://www.linkedin.com/in/ahmad-ansari" },
                                { icon: Twitter, href: "#" }
                            ].map((social, i) => (
                                <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="w-10 h-10 glass rounded-xl flex items-center justify-center opacity-60 hover:opacity-100 hover:text-primary-500 hover:scale-110 transition-all border border-inherit/10">
                                    <social.icon size={18} strokeWidth={2.5} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Quick Links</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            {['Home', 'About Me', 'Experience', 'Contact'].map((link) => (
                                <li key={link}>
                                    <a href={`#${link.toLowerCase().replace(' ', '')}`} className="opacity-60 hover:opacity-100 hover:text-primary-500 transition-all flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-[1.5px] bg-primary-500 transition-all duration-300"></span>
                                        {link}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Expertise</h4>
                        <ul className="space-y-4 text-sm font-bold">
                            {[
                                { name: 'Web Development', href: '#services' },
                                { name: 'React Applications', href: '#services' },
                                { name: 'UI/UX Design', href: '#services' },
                                { name: 'Firebase Engine', href: '#services' }
                            ].map((item) => (
                                <li key={item.name}>
                                    <a href={item.href} className="opacity-60 hover:opacity-100 hover:text-primary-500 transition-all flex items-center gap-2 group">
                                        <span className="w-0 group-hover:w-3 h-[1.5px] bg-primary-500 transition-all duration-300"></span>
                                        {item.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-8">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] opacity-40">Connect</h4>
                        <ul className="space-y-5 text-sm font-bold">
                            <li className="flex items-start gap-4 group">
                                <div className="p-2 bg-primary-500/5 rounded-lg text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-inner">
                                    <Mail size={16} strokeWidth={2.5} />
                                </div>
                                <span className="opacity-60 group-hover:opacity-100 transition-opacity break-all mt-1">muhammadansariahmad323@gmail.com</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-primary-500/5 rounded-lg text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-inner">
                                    <Phone size={16} strokeWidth={2.5} />
                                </div>
                                <span className="opacity-60 group-hover:opacity-100 transition-opacity">+92 325 2207294</span>
                            </li>
                            <li className="flex items-center gap-4 group">
                                <div className="p-2 bg-primary-500/5 rounded-lg text-primary-500 group-hover:bg-primary-500 group-hover:text-white transition-all shadow-inner">
                                    <MapPin size={16} strokeWidth={2.5} />
                                </div>
                                <span className="opacity-60 group-hover:opacity-100 transition-opacity">Karachi, Pakistan</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-inherit/5 flex justify-center items-center">
                    <p className="opacity-40 text-xs font-black uppercase tracking-widest text-center">
                        © {new Date().getFullYear()} Ahmad Ansari. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
