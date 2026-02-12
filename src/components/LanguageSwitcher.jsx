import React, { useState, useMemo, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, Check, Search } from 'lucide-react';

const LanguageSwitcher = ({ isOpen, setIsOpen }) => {
    const { i18n } = useTranslation();
    const [searchTerm, setSearchTerm] = useState('');
    const [allLangs, setAllLangs] = useState([]);
    const [visibleCount, setVisibleCount] = useState(50);
    const [isLoading, setIsLoading] = useState(false);

    // Load huge database
    const loadBigData = async () => {
        if (allLangs.length > 0) return;
        setIsLoading(true);
        try {
            const module = await import('iso-639-3');
            const iso6393 = module.iso6393 || module.default || module;
            const ISO6391 = (await import('iso-639-1')).default;

            const nativeMap = {};
            ISO6391.getAllCodes().forEach(code => {
                nativeMap[code] = ISO6391.getNativeName(code);
            });

            const processed = iso6393.map((lang, idx) => ({
                id: lang.iso6393 + idx,
                code: lang.iso6391 || lang.iso6393,
                name: lang.name,
                native: (lang.iso6391 && nativeMap[lang.iso6391]) || lang.name,
            })).sort((a, b) => a.name.localeCompare(b.name));

            // Priority languages at top
            const priority = [
                { id: 'p1', code: 'en', name: 'English', native: 'English' },
                { id: 'p2', code: 'ur', name: 'Urdu', native: 'اردو' },
                { id: 'p3', code: 'ar', name: 'Arabic', native: 'العربية' },
                { id: 'p4', code: 'hi', name: 'Hindi', native: 'हिन्दी' }
            ];

            setAllLangs([...priority, ...processed]);
        } catch (e) {
            console.error("Could not load full language list", e);
        } finally {
            setIsLoading(false);
        }
    };

    const filteredLanguages = useMemo(() => {
        const term = searchTerm.toLowerCase().trim();
        if (!term) return allLangs.slice(0, visibleCount);

        return allLangs.filter(lang =>
            lang.name.toLowerCase().includes(term) ||
            lang.native.toLowerCase().includes(term) ||
            lang.code.toLowerCase().includes(term)
        ).slice(0, 100);
    }, [searchTerm, allLangs, visibleCount]);

    const handleScroll = (e) => {
        const { scrollTop, scrollHeight, clientHeight } = e.currentTarget;
        if (scrollHeight - scrollTop <= clientHeight + 100 && !searchTerm) {
            setVisibleCount(prev => prev + 50);
        }
    };

    useEffect(() => {
        if (isOpen) loadBigData();
    }, [isOpen]);

    return (
        <div className="fixed bottom-20 md:bottom-24 right-4 md:right-8 z-[110]">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="absolute bottom-20 right-0 w-[calc(100vw-2rem)] md:w-[320px] glass border border-inherit/10 rounded-[2rem] shadow-2xl flex flex-col h-[450px] overflow-hidden z-[110]"
                    >
                        {/* Compact Header */}
                        <div className="p-4 bg-inherit/5 border-b border-inherit/10 backdrop-blur-md relative z-20">
                            <div className="flex items-center gap-2 mb-3 px-1">
                                <Globe size={16} className="text-primary-500" />
                                <span className="text-xs font-black uppercase tracking-wider opacity-80">System Language</span>
                            </div>
                            <div className="relative group/search">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-500 opacity-50 group-hover/search:opacity-100 transition-all duration-300" size={14} />
                                <input
                                    type="text"
                                    placeholder="Search 7,000+ languages..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full bg-white/5 border border-white/10 rounded-2xl pl-11 pr-4 py-3 text-xs focus:outline-none focus:border-primary-500/50 focus:bg-white/10 focus:ring-4 focus:ring-primary-500/5 transition-all font-bold placeholder:text-inherit placeholder:opacity-30 text-white"
                                />
                            </div>
                        </div>

                        {/* Vertical Scrollable List */}
                        <div
                            onScroll={handleScroll}
                            className="flex-1 overflow-y-auto p-2 space-y-1 no-scrollbar bg-inherit/50 relative z-10"
                        >
                            {isLoading || allLangs.length === 0 ? (
                                <div className="flex flex-col items-center justify-center h-full gap-3 opacity-50">
                                    <div className="w-5 h-5 border-2 border-primary-500 border-t-transparent rounded-full animate-spin"></div>
                                    <span className="text-[10px] uppercase font-bold tracking-widest">Accessing Repository...</span>
                                </div>
                            ) : (
                                <>
                                    {filteredLanguages.map((lang) => (
                                        <button
                                            key={lang.id}
                                            onClick={() => {
                                                const localLangs = ['en', 'ur', 'ar', 'fr'];
                                                const code = lang.code.toLowerCase();

                                                if (localLangs.includes(code)) {
                                                    i18n.changeLanguage(code);
                                                    localStorage.setItem('i18nextLng', code);
                                                    window.location.reload(); // Refresh to apply all translations properly
                                                } else {
                                                    const cookieValue = `/en/${code}`;
                                                    document.cookie = `googtrans=${cookieValue}; path=/`;
                                                    document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
                                                    window.location.reload();
                                                }
                                                setIsOpen(false);
                                            }}
                                            className={`w-full flex items-center justify-between px-3 py-3 rounded-xl transition-all border group ${i18n.language === lang.code
                                                ? 'bg-primary-500 text-white border-primary-500 shadow-lg shadow-primary-500/20'
                                                : 'hover:bg-white/10 border-transparent hover:border-white/5'
                                                }`}
                                        >
                                            <div className="flex flex-col items-start truncate pr-2 w-full">
                                                <div className="flex items-center gap-2 w-full truncate">
                                                    <span className={`text-[11px] font-black truncate ${i18n.language === lang.code ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{lang.native}</span>
                                                    <span className={`text-[8px] px-1.5 py-0.5 rounded border font-mono uppercase shrink-0 font-bold ${i18n.language === lang.code ? 'bg-white/20 border-white/20 text-white' : 'bg-white/5 border-white/10 opacity-40'}`}>{lang.code}</span>
                                                </div>
                                                <span className={`text-[9px] truncate font-bold uppercase tracking-wider ${i18n.language === lang.code ? 'text-white/60' : 'opacity-40'}`}>{lang.name}</span>
                                            </div>
                                            {i18n.language === lang.code && (
                                                <Check size={14} strokeWidth={4} className="text-white shrink-0" />
                                            )}
                                        </button>
                                    ))}
                                </>
                            )}
                        </div>

                        {/* Footer Status */}
                        <div className="px-4 py-2 bg-inherit/5 border-t border-inherit/10 flex items-center justify-between text-[8px] font-bold uppercase tracking-widest opacity-60 backdrop-blur-md relative z-20">
                            <span>ISO-Standard</span>
                            <span className="text-primary-500">{allLangs.length.toLocaleString()} Active</span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Toggle Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 bg-gradient-to-br from-primary-600 to-indigo-600 text-white rounded-full flex items-center justify-center shadow-xl z-[110] cursor-pointer group relative overflow-hidden"
            >
                <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <Globe size={24} className="relative z-10" />
            </motion.button>
        </div>
    );
};

export default LanguageSwitcher;
