import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: 'en',
        debug: false,
        interpolation: {
            escapeValue: false,
        },
        resources: {
            en: {
                translation: {
                    nav: {
                        home: 'Home',
                        about: 'About',
                        services: 'Services',
                        skills: 'Skills',
                        experience: 'Experience',
                        contact: 'Contact',
                    },
                    hero: {
                        greeting: "Hi, I'm",
                        role: 'Frontend Developer',
                        tagline: 'Crafting premium digital experiences with modern web technologies.',
                        cta_hire: 'Hire Me',
                        cta_contact: 'Contact',
                    },
                    about: {
                        title: 'About Me',
                        bio: 'I am a passionate Frontend Developer specialized in building high-performance, responsive, and visually stunning web applications. With a deep love for modern UI/UX and a keen eye for detail, I transform complex ideas into elegant digital solutions.',
                        experience_years: '1 Year Experience',
                        clients: 'Clients Globally',
                        satisfaction: 'Client Satisfaction',
                    },
                    services: {
                        title: 'My Services',
                        web_dev: 'Web Development',
                        responsive: 'Responsive Design',
                        react_apps: 'React Applications',
                        firebase: 'Firebase Integration',
                        ui_ux: 'UI/UX Design',
                    },
                    skills: {
                        title: 'My Skills',
                    },
                    contact: {
                        title: 'Get In Touch',
                        name: 'Name',
                        email: 'Email',
                        message: 'Message',
                        send: 'Send Message',
                        success: 'Message sent successfully!',
                        error_name: 'Name is required',
                        error_email: 'Invalid email address',
                        error_message: 'Message is required',
                    },
                    chatbot: {
                        welcome: 'Hi! I am Ahmad AI. How can I help you today?',
                        placeholder: 'Ask me anything...',
                    }
                }
            },
            es: {
                translation: {
                    nav: { home: 'Inicio', about: 'Sobre mí', services: 'Servicios', skills: 'Habilidades', experience: 'Experiencia', contact: 'Contacto' },
                    hero: { greeting: 'Hola, soy', role: 'Desarrollador Frontend', tagline: 'Cualquier cosa es posible con el código correcto.', cta_hire: 'Contrátame', cta_contact: 'Contacto' },
                    about: { title: 'Sobre Mí', bio: 'Soy un desarrollador frontend apasionado por crear interfaces hermosas y funcionales.', experience_years: '2+ Años de Experiencia' },
                    services: { title: 'Mis Servicios', web_dev: 'Desarrollo Web', responsive: 'Diseño Responsivo', react_apps: 'Aplicaciones React', firebase: 'Integración Firebase', ui_ux: 'Diseño UI/UX' },
                    skills: { title: 'Mis Habilidades' },
                    contact: { title: 'Contacto', name: 'Nombre', email: 'Correo', message: 'Mensaje', send: 'Enviar', success: '¡Mensaje enviado!', error_name: 'Nombre es requerido', error_email: 'Correo inválido', error_message: 'Mensaje es requerido' },
                    chatbot: { welcome: '¡Hola! Soy Ahmad AI. ¿Cómo puedo ayudarte?', placeholder: 'Pregúntame algo...' }
                }
            },
            ar: {
                translation: {
                    nav: { home: 'الرئيسية', about: 'عني', services: 'خدماتي', skills: 'مهاراتي', experience: 'خبرتي', contact: 'اتصل بي' },
                    hero: { greeting: 'مرحباً، أنا', role: 'مطور واجهات أمامية', tagline: 'صناعة تجارب رقمية متميزة باستخدام تقنيات الويب الحديثة.', cta_hire: 'وظفني', cta_contact: 'اتصل' },
                    about: { title: 'عن نفسي', bio: 'أنا مطور واجهات أمامية شغوف متخصص في بناء تطبيقات ويب عالية الأداء ومتجاوبة وجذابة بصرياً.', experience_years: 'سنة واحدة من الخبرة' },
                    services: { title: 'خدماتي', web_dev: 'تطوير الويب', responsive: 'تصميم متجاوب', react_apps: 'تطبيقات React', firebase: 'دمج Firebase', ui_ux: 'تصميم واجهة المستخدم/تجربة المستخدم' },
                    skills: { title: 'مهاراتي' },
                    contact: { title: 'تواصل معي', name: 'الاسم', email: 'البريد الإلكتروني', message: 'الرسالة', send: 'إرسال الرسالة', success: 'تم إرسال الرسالة بنجاح!', error_name: 'الاسم مطلوب', error_email: 'البريد الإلكتروني غير صالح', error_message: 'الرسالة مطلوبة' },
                    chatbot: { welcome: 'مرحباً! أنا أحمد AI. كيف يمكنني مساعدتك اليوم؟', placeholder: 'اسألني أي شيء...' }
                }
            },
            ur: {
                translation: {
                    nav: { home: 'ہوم', about: 'میرے بارے میں', services: 'خدمات', skills: 'مہارتیں', experience: 'تجربہ', contact: 'رابطہ' },
                    hero: { greeting: 'ہیلو، میں ہوں', role: 'فرنٹ اینڈ ڈویلپر', tagline: 'جدید ویب ٹیکنالوجیز کے ساتھ بہترین ڈیجیٹل تجربات بنانا۔', cta_hire: 'مجھے ہائر کریں', cta_contact: 'رابطہ' },
                    about: { title: 'میرے بارے میں', bio: 'میں ایک پرجوش فرنٹ اینڈ ڈویلپر ہوں جو اعلیٰ کارکردگی، ریسپانسیو اور بصری طور پر شاندار ویب ایپلیکیشنز بنانے میں مہارت رکھتا ہوں۔', experience_years: '1 سال کا تجربہ', clients: 'عالمی گاہک', satisfaction: 'گاہکوں کا اطمینان' },
                    services: { title: 'میری خدمات', web_dev: 'ویب ڈویلپمنٹ', responsive: 'ریسپانسیو ڈیزائن', react_apps: 'ری ایکٹ ایپلیکیشنز', firebase: 'فائر بیس انٹیگریشن', ui_ux: 'UI/UX ڈیزائن' },
                    skills: { title: 'میری مہارتیں' },
                    contact: { title: 'رابطہ کریں', name: 'نام', email: 'ای میل', message: 'پیغام', send: 'پیغام بھیجیں', success: 'پیغام کامیابی سے بھیجا گیا!', error_name: 'نام درکار ہے', error_email: 'ای میل درست نہیں ہے', error_message: 'پیغام درکار ہے' },
                    chatbot: { welcome: 'ہیلو! میں احمد AI ہوں۔ میں آج آپ کی کیسے مدد کر سکتا ہوں؟', placeholder: 'کچھ بھی پوچھیں...' }
                }
            },
            fr: {
                translation: {
                    nav: { home: 'Accueil', about: 'À propos', services: 'Services', skills: 'Compétences', experience: 'Expérience', contact: 'Contact' },
                    hero: { greeting: 'Salut, je suis', role: 'Développeur Frontend', tagline: 'Création d\'expériences numériques premium avec les technologies web modernes.', cta_hire: 'Engagez-moi', cta_contact: 'Contact' },
                    about: { title: 'À propos de moi', bio: 'Je suis un développeur Frontend passionné, spécialisé dans la création d\'applications web performantes, réactives et visuellement époustouflantes.', experience_years: '1 an d\'expérience' },
                    services: { title: 'Mes services', web_dev: 'Développement Web', responsive: 'Design Réactif', react_apps: 'Applications React', firebase: 'Intégration Firebase', ui_ux: 'Conception UI/UX' },
                    skills: { title: 'Mes compétences' },
                    contact: { title: 'Contactez-moi', name: 'Nom', email: 'E-mail', message: 'Message', send: 'Envoyer le message', success: 'Message envoyé avec succès !', error_name: 'Le nom est requis', error_email: 'E-mail invalide', error_message: 'Le message est requis' },
                    chatbot: { welcome: 'Salut ! Je suis Ahmad AI. Comment puis-je vous aider aujourd\'hui ?', placeholder: 'Posez-moi n\'importe quelle question...' }
                }
            }
        }
    });

export default i18n;
