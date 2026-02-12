import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Volume2, VolumeX } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ISO6391 from 'iso-639-1';

const Translator = ({ isOpen, setIsOpen }) => {
    const { i18n } = useTranslation();
    const [voices, setVoices] = useState([]);

    // Initialize voices
    useEffect(() => {
        const loadVoices = () => {
            const v = window.speechSynthesis.getVoices();
            if (v.length > 0) setVoices(v);
        };
        loadVoices();
        if (window.speechSynthesis.onvoiceschanged !== undefined) {
            window.speechSynthesis.onvoiceschanged = loadVoices;
        }
        return () => window.speechSynthesis.cancel();
    }, []);

    // Get the actual active language (Handles i18n and Google Translate)
    const getActiveLang = () => {
        const cookieMatch = document.cookie.match(/googtrans=\/en\/([^;]+)/);
        if (cookieMatch && cookieMatch[1]) return cookieMatch[1];
        return i18n.language.split('-')[0] || 'en';
    };

    // Unified Female AI Voice System
    const speakText = (text, langCode) => {
        if (!window.speechSynthesis) return;
        window.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);

        const findFemaleVoice = () => {
            const allVoices = window.speechSynthesis.getVoices();
            const langVoices = allVoices.filter(v => v.lang.startsWith(langCode));

            const femaleNames = ['zira', 'samantha', 'victoria', 'google female', 'microsoft heera', 'female', 'soft', 'natural'];

            // 1. Try female voice for specific language
            let voice = langVoices.find(v =>
                femaleNames.some(name => v.name.toLowerCase().includes(name))
            ) || langVoices[0];

            if (voice) return voice;

            // 2. Global Female Fallback
            return allVoices.find(v =>
                femaleNames.some(name => v.name.toLowerCase().includes(name))
            ) || allVoices[0];
        };

        const voice = findFemaleVoice();
        if (voice) {
            utterance.voice = voice;
            utterance.lang = voice.lang;
        }

        utterance.rate = 1.0;
        utterance.pitch = 1.4;
        utterance.volume = 1;

        utterance.onstart = () => setIsOpen(true);
        utterance.onend = () => setIsOpen(false);
        utterance.onerror = () => setIsOpen(false);

        window.speechSynthesis.speak(utterance);
    };

    const handleAIAssistant = () => {
        if (window.speechSynthesis.speaking || isOpen) {
            window.speechSynthesis.cancel();
            setIsOpen(false);
            return;
        }

        const currentLang = getActiveLang();

        const intros = {
            en: "Ahmad's assistant here. Portfolio synchronization complete.",
            ur: "احمد کی مددگار حاضر ہے۔ پورٹ فولیو کی ہم آہنگی مکمل ہو گئی ہے۔",
            ar: "مساعدة أحمد هنا. اكتملت مزامنة المحفظة.",
            fr: "L'assistante de Ahmad est là. La synchronisation du portfolio est terminée.",
            hi: "अहमद की सहायक यहाँ है। पोर्टफोलियो सिंक्रनाइज़ेशन पूरा हुआ।"
        };

        const intro = intros[currentLang] || intros['en'];

        // DYNAMIC CONTENT READING: Get everything from the page
        const contentElements = document.querySelectorAll('h1, h2, h3, p');
        const allText = Array.from(contentElements)
            .map(el => el.innerText)
            .filter(text => text.length > 5 && !text.includes('System') && !text.includes('Sync'))
            .slice(0, 5) // Get first 5 meaningful sections to avoid too much text
            .join('. ');

        speakText(`${intro}. ${allText}`, currentLang);

        // Sync Google Translate Cookie - This part is now handled by getActiveLang for reading, no need to set here.
        // const cookieValue = `/en/${currentLang}`;
        // document.cookie = `googtrans=${cookieValue}; path=/`;
        // document.cookie = `googtrans=${cookieValue}; path=/; domain=${window.location.hostname}`;
    };

    return (
        <div className="fixed bottom-36 md:bottom-40 right-4 md:right-8 z-[110]">
            <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleAIAssistant}
                className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl cursor-pointer group relative overflow-hidden transition-all duration-300 ${isOpen ? 'bg-red-500 shadow-red-500/50' : 'bg-green-600 shadow-green-500/40 hover:bg-green-500'
                    }`}
            >
                {isOpen && (
                    <motion.div
                        animate={{ scale: [1, 1.5, 1], opacity: [0.3, 0, 0.3] }}
                        transition={{ repeat: Infinity, duration: 1 }}
                        className="absolute inset-0 bg-white"
                    />
                )}

                {isOpen ? (
                    <VolumeX size={28} className="relative z-10 text-white" />
                ) : (
                    <Volume2 size={28} className="relative z-10 text-white" />
                )}

                {/* AI Badge */}
                <div className="absolute -top-1 -right-1 w-5 h-5 bg-white text-green-600 rounded-full flex items-center justify-center text-[10px] font-black border-2 border-inherit shadow-xl z-20">
                    AI
                </div>

                {/* Tooltip */}
                <div className="absolute right-full mr-4 px-3 py-1.5 glass bg-inherit/80 text-inherit text-[10px] font-bold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase border border-inherit/10 tracking-widest leading-none shadow-xl">
                    {isOpen ? 'Stop System' : 'Sync & Speak'}
                </div>
            </motion.button>
        </div>
    );
};

export default Translator;
