import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, User, LogOut } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/config';
import { onAuthStateChanged, signOut } from 'firebase/auth';

import ThemeToggle from './ThemeToggle';
import Logo from './Logo';

const Navbar = () => {
    const { t } = useTranslation();
    const navigate = useNavigate();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [user, setUser] = useState(null);
    const [showUserMenu, setShowUserMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);

        // Auth state listener
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
            unsubscribe();
        };
    }, []);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            navigate('/login');
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    const navLinks = [
        { name: t('nav.home'), href: '#home' },
        { name: t('nav.about'), href: '#about' },
        { name: t('nav.services'), href: '#services' },
        { name: t('nav.experience'), href: '#experience' },
        { name: t('nav.skills'), href: '#skills' },
        { name: t('nav.contact'), href: '#contact' },
    ];

    const UserAvatar = () => (
        <div className="relative">
            <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="w-10 h-10 rounded-full border-2 border-primary-500/30 overflow-hidden hover:border-primary-500 transition-all active:scale-95 shadow-lg shadow-primary-500/10"
            >
                {user.photoURL ? (
                    <img src={user.photoURL} alt={user.displayName} className="w-full h-full object-cover" />
                ) : (
                    <div className="w-full h-full bg-primary-500 flex items-center justify-center text-white font-black text-sm uppercase">
                        {user.displayName ? user.displayName.charAt(0) : user.email.charAt(0)}
                    </div>
                )}
            </button>

            <AnimatePresence>
                {showUserMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        className="absolute right-0 mt-2 w-48 glass rounded-2xl border border-white/10 shadow-2xl overflow-hidden z-[60]"
                    >
                        <div className="p-4 border-b border-white/5 bg-white/5">
                            <div className="text-[10px] font-black uppercase text-primary-500 tracking-widest mb-1">Logged In As</div>
                            <div className="text-xs font-bold truncate opacity-90">{user.displayName || 'User'}</div>
                        </div>
                        <button
                            onClick={handleLogout}
                            className="w-full p-4 flex items-center gap-3 text-xs font-bold text-red-400 hover:bg-red-500/10 transition-all uppercase tracking-widest"
                        >
                            <LogOut size={14} /> Logout
                        </button>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled || isOpen ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div
                    className="flex items-center gap-3 cursor-pointer select-none group"
                    onClick={() => {
                        navigate('/');
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
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

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    <div className="flex items-center gap-6">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-xs font-bold text-inherit opacity-60 hover:opacity-100 hover:text-primary-500 transition-all uppercase tracking-[0.15em] relative group"
                            >
                                {link.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 group-hover:w-full transition-all duration-300"></span>
                            </a>
                        ))}
                    </div>
                    <div className="pl-6 border-l border-inherit/10 flex items-center gap-3">
                        <ThemeToggle />
                        {user ? (
                            <UserAvatar />
                        ) : (
                            <button
                                onClick={() => navigate('/login')}
                                className="bg-primary-500 hover:bg-primary-600 text-white px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-primary-500/20 active:scale-95 flex items-center gap-2"
                            >
                                <User size={14} strokeWidth={2.5} /> Login
                            </button>
                        )}
                    </div>
                </div>


                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-3">
                    <ThemeToggle />
                    {user ? (
                        <UserAvatar />
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-primary-500/10 text-primary-500 p-2.5 rounded-full hover:bg-primary-500 hover:text-white transition-all"
                        >
                            <User size={20} strokeWidth={2.5} />
                        </button>
                    )}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-primary-500 p-2 hover:bg-primary-500/10 rounded-xl transition-colors"
                    >
                        {isOpen ? <X size={28} /> : <Menu size={28} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t border-inherit/10 bg-inherit/95 backdrop-blur-xl overflow-hidden"
                    >
                        <div className="flex flex-col p-6 space-y-2">
                            {navLinks.map((link) => (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-sm font-bold text-inherit opacity-70 hover:opacity-100 hover:text-primary-500 hover:pl-2 transition-all py-3 border-b border-inherit/5 uppercase tracking-widest"
                                >
                                    {link.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
