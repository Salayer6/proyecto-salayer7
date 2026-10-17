/**
 * i18n.js — Internacionalización del Portfolio de Ignacio Salas Vega
 * Idiomas soportados: es (base), en (completo), de, ja, ru
 * Detección jerárquica: URL (?lang=xx) -> localStorage -> navigator.language -> fallback (es)
 */

const translations = {
    es: {
        // Navegación
        nav_headline: "Ing. Mecánico Automotriz",
        nav_profile: "Perfil",
        nav_experience: "Experiencia",
        nav_education: "Formación",
        nav_skills: "Skills",
        nav_contact: "Contacto",
        export_pdf: "Descargar CV",
        export_pdf_short: "Descargar CV",
        export_harvard: "Formato Harvard",

        // Títulos y Subtítulos
        subtitle: "Mantenimiento Electromecánico de Flotas & Confiabilidad de Activos | Transformación Digital | Control de Gestión (FEN-UCHILE) & KPIs Operacionales",
        subtitle_controller: "Mantenimiento Electromecánico de Flotas & Confiabilidad de Activos | Transformación Digital | Control de Gestión (FEN-UCHILE) & KPIs Operacionales",
        subtitle_conductor: "Conductor Profesional Bilingüe | Licencias A2 / A4 / B / C | Traslado Ejecutivo & Logística de Distribución",
        contact_title: "Información de contacto",
        contact_email_label: "Email",
        contact_phone_label: "Teléfono",
        cv_summary_title: "Resumen Profesional",

        // Perfil y Hero
        profile_name: "Ignacio Antonio<br/>Salas Vega",
        profile_title: "Sobre Ignacio",
        profile_summary: "Ingeniero en Maquinaria, Vehículos Automotores y Autatrónica, con Diplomado en Control de Gestión (FEN-UCHILE), especializado en la convergencia entre el mantenimiento electromecánico de flotas, la confiabilidad de activos y la transformación digital.",
        profile_desc: "Ingeniero en Maquinaria, Vehículos Automotores y Autatrónica, con Diplomado en Control de Gestión (FEN-UCHILE), especializado en la convergencia entre el mantenimiento electromecánico de flotas, la confiabilidad de activos y la transformación digital. Mi perfil integra la rigurosidad técnica operacional con el control de gestión estratégico. Me enfoco en optimizar KPIs operacionales, garantizar la continuidad operativa en faena/planta e implementar soluciones tecnológicas que incrementan la disponibilidad de flota, reducen costos de ciclo de vida y modernizan las operaciones industriales.",
        profile_location: "Santiago, Chile",
        status_available: "DISPONIBLE · BÚSQUEDA ACTIVA",

        hero_label: "Perfil Técnico Profesional",
        hero_headline: "Mantenimiento<br/><span class=\"text-primary\">Electro-Mecánico</span><br/>&amp; Confiabilidad",
        hero_sub: "Ingeniero en Mecánica Automotriz y Autotrónica con Diplomado FEN en Control de Gestión. Orientado a KPIs operativos, continuidad de faena y transformación digital de operaciones.",
        hero_cta: "Contáctame",
        hero_cta2: "Ver Experiencia",

        // Métricas de Perfil / Vitals
        vitals_title: "Telemetría Operativa / Status",
        vitals_desc: "Disponibilidad operacional, confiabilidad de activos y capacidades analíticas y tecnológicas",
        gauges_title: "Métricas de Perfil",
        gauge_availability: "Disponibilidad Operacional",
        gauge_data_stack: "Stack Data &amp; BI",
        gauge_management: "Control de Gestión",
        gauge_english: "Inglés Técnico",
        gauge_terminal: "Seguridad & SSOMA",
        gauge_analytics: "Control de Gestión",
        gauge_automation: "Python & DataOps",
        gauge_powerbi: "BI & SQL Dashboards",
        gauge_p6: "Planificación P6",
        gauge_genai: "IA Generativa",
        gauge_maintenance: "Mant. Electro-Mecánico",
        gauge_bilingual: "Inglés Técnico",
        gauge_alignment: "Continuidad Operativa",

        telem_years: "Años exp.",
        telem_fleet: "Equipos gestionados",
        telem_certs: "Certificaciones",
        skills_title: "Competencias Clave",

        // Experiencia Profesional
        exp_title: "Trayectoria Profesional",
        exp1_title: "Growth Hacking Developer &amp; Controller de Gestión",
        exp1_b1: "Dashboards directivos en Power BI (DAX), modelos en Airtable e integración de IA Generativa para Mercado Público.",
        exp1_b2: "Arquitectura de solución agencial inteligente (Vercel + Claude + n8n) para monitoreo de licitaciones.",
        exp1_b3: "Auditorías SEO &amp; GA4, automatización de flujos operativos.",
        exp1_date: "Jun 2024 – Actual",

        exp2_title: "Técnico Mantenimiento Electro-Mecánico de Flotas",
        exp2_b1: "Planes de mantenimiento preventivo y correctivo para más de 200 equipos electro-mecánicos críticos.",
        exp2_b2: "Administración de OT y ciclo de vida de repuestos vía ERP MAXIMO.",
        exp2_b3: "Diagnóstico técnico de fallas en sistemas eléctricos, mecánicos e hidráulicos.",
        exp2_date: "Feb 2019 – Feb 2020",

        exp3_title: "Técnico Mecánico – SALFA (Salinas y Fabres)",
        exp3_b1: "Pautas de mantenimiento preventivo: frenos, suspensión, dirección, transmisiones.",
        exp3_b2: "Diagnóstico electrónico y resolución sistemática de fallas.",
        exp3_date: "2015",

        // Formación & Educación
        edu_title: "Formación &amp; Certificaciones",
        edu_comp_title: "Formación Complementaria &amp; Especializada",
        specialized_title: "Formación autónoma complementaria",

        // Mapa 3D & Leyenda
        map_title: "Mapa 3D de Habilidades",
        map_hint: "Arrastra para orbitar",
        map_hint_mobile: "Toca y arrastra · Pellizca para zoom",
        skillmap_title: "Radar de Habilidades & Criticidad",
        skillmap_desc: "Medidor radial de criticidad · <strong>Centro:</strong> Alta criticidad e intervenciones de alto riesgo operacional (ej. Mantención Electro-Mecánica, ERP MAXIMO, P6) → <strong>Periferia:</strong> Habilidades tácticas y estructurales continuas.",
        legend_soft: "Habilidades Blandas",
        legend_hybrid: "Híbridas",
        legend_hard: "Habilidades Duras",

        // Footer
        footer_copy: "© 2025 Ignacio Salas Vega · Todos los derechos reservados",
        footer_status: "Sistema Operativo",

        // Perfil Conductor Profesional
        profile_title_conductor: "Perfil Profesional de Conducción & Logística",
        profile_desc_conductor: "Conductor profesional bilingüe (Español nativo, Inglés C2) con licencias A2, A4, B y C sin anotaciones. Amplia experiencia en logística de distribución urbana de alimentos cárnicos en la ciudad de Santiago (<strong>Susaron</strong>), traslado bilingüe de dignatarios y autoridades VIP en los <strong>Juegos Panamericanos y Parapanamericanos Santiago 2023</strong>, y transporte privado de pasajeros alcanzando la categoría máxima <strong>Nivel Platino en Uber</strong>. Titulado de <strong>Ingeniería en Mecánica Automotriz y Autotrónica (Duoc UC)</strong>, lo que otorga un respaldo técnico único en diagnóstico preventivo, física de operación, gestión de flotas y seguridad vial.",

        // Badges Conductor
        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Bilingüe",
        tech_uber: "Nivel Platino",
        tech_panam: "Dignatarios 2023",
        tech_susaron: "Carga Cárnica Susaron",
        tech_mech: "Ing. Duoc UC",
        tech_safety: "Conducción Defensiva",
        tech_fleet: "IBM Maximo",

        // Badges Controller
        tech_p6: "Planificación & CPM",
        tech_pbi: "Dashboards & KPIs",
        tech_excel: "Avanzado / Modelado",
        tech_bq: "Consultas & ETL",
        tech_m: "Transformación",
        tech_dax: "Medidas Avanzadas",
        tech_py: "Data & Automatización",
        tech_genai: "Prompt Engineering",
        tech_bash: "CLI & Scripts",
        tech_r: "Analítica Inferencial",
        tech_js: "Integraciones & DOM",
        tech_html: "Arquitectura Web"
    },

    en: {
        // Navigation
        nav_headline: "Automotive Mech. Eng.",
        nav_profile: "Profile",
        nav_experience: "Experience",
        nav_education: "Education",
        nav_skills: "Skills",
        nav_contact: "Contact",
        export_pdf: "Download CV",
        export_pdf_short: "Download CV",
        export_harvard: "Harvard Format",

        // Titles & Subtitles
        subtitle: "Fleet Electro-Mechanical Maintenance & Asset Reliability | Digital Transformation | Management Control & Operational KPIs",
        subtitle_controller: "Fleet Electro-Mechanical Maintenance & Asset Reliability | Digital Transformation | Management Control & Operational KPIs",
        subtitle_conductor: "Bilingual Professional Driver | Class A2 / A4 / B / C | VIP Dignitary Transport & Logistics",
        contact_title: "Contact Information",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        cv_summary_title: "Professional Summary",

        // Profile & Hero
        profile_name: "Ignacio Antonio<br/>Salas Vega",
        profile_title: "About Ignacio",
        profile_summary: "Automotive & Autatronics Engineer with a Postgraduate Diploma in Management Control (FEN), specialized in the convergence of electro-mechanical fleet maintenance, asset reliability, and digital transformation.",
        profile_desc: "Automotive & Autatronics Engineer with a Postgraduate Diploma in Management Control (FEN), specialized in the convergence of electro-mechanical fleet maintenance, asset reliability, and digital transformation. My background bridges technical operational rigor with strategic business control. I focus on optimizing operational KPIs, ensuring site continuity, and implementing technology-driven solutions that improve fleet availability, lower operating costs, and modernize maintenance management.",
        profile_location: "Santiago, Chile",
        status_available: "AVAILABLE · ACTIVE SEARCH",

        hero_label: "Technical Professional Profile",
        hero_headline: "Electro-Mechanical<br/><span class=\"text-primary\">Maintenance</span><br/>&amp; Reliability",
        hero_sub: "Automotive and Autatronics Engineer with FEN Postgraduate Diploma in Management Control. Focused on operational KPIs, site continuity, and digital transformation of operations.",
        hero_cta: "Contact Me",
        hero_cta2: "View Experience",

        // Profile Metrics / Vitals
        vitals_title: "Operational Telemetry / Status",
        vitals_desc: "Operational availability, asset reliability, and advanced analytical and technological capabilities",
        gauges_title: "Profile Metrics",
        gauge_availability: "Operational Availability",
        gauge_data_stack: "Data &amp; BI Stack",
        gauge_management: "Management Control",
        gauge_english: "Technical English",
        gauge_terminal: "Safety & SSOMA",
        gauge_analytics: "Management Control",
        gauge_automation: "Python & DataOps",
        gauge_powerbi: "BI & SQL Dashboards",
        gauge_p6: "Planning & P6",
        gauge_genai: "Generative AI",
        gauge_maintenance: "Electro-Mechanical Maint.",
        gauge_bilingual: "Technical English",
        gauge_alignment: "Operational Continuity",

        telem_years: "Years exp.",
        telem_fleet: "Managed units",
        telem_certs: "Certifications",
        skills_title: "Core Competencies",

        // Professional Experience
        exp_title: "Professional Experience",
        exp1_title: "Growth Hacking Developer &amp; Management Controller",
        exp1_b1: "Executive dashboards in Power BI (DAX), Airtable data models, and Generative AI integration for Public Procurement.",
        exp1_b2: "Intelligent agentic architecture (Vercel + Claude + n8n) for automated tender monitoring.",
        exp1_b3: "SEO &amp; GA4 audits, end-to-end operational workflow automation.",
        exp1_date: "Jun 2024 – Present",

        exp2_title: "Fleet Electro-Mechanical Maintenance Technician",
        exp2_b1: "Preventive and corrective maintenance programs for 200+ mission-critical electro-mechanical equipment units.",
        exp2_b2: "Work order (WO) administration and spare parts lifecycle management via IBM MAXIMO ERP.",
        exp2_b3: "Technical fault diagnostics across electrical, mechanical, and hydraulic systems.",
        exp2_date: "Feb 2019 – Feb 2020",

        exp3_title: "Mechanical Technician – SALFA (Salinas y Fabres)",
        exp3_b1: "Preventive maintenance protocols: braking systems, suspension, steering, and transmissions.",
        exp3_b2: "Electronic diagnostics and systematic fault resolution.",
        exp3_date: "2015",

        // Education
        edu_title: "Education &amp; Certifications",
        edu_comp_title: "Specialized &amp; Complementary Training",
        specialized_title: "Complementary & Specialized Training",

        // 3D Map & Legend
        map_title: "3D Skills Radar Map",
        map_hint: "Drag to orbit",
        map_hint_mobile: "Touch &amp; drag · Pinch to zoom",
        skillmap_title: "Skills & Criticality Radar",
        skillmap_desc: "Radial criticality meter · <strong>Center:</strong> High criticality & operational precision tasks (e.g. Electro-Mechanical Maint., ERP MAXIMO, P6) → <strong>Periphery:</strong> Continuous tactical and structural skills.",
        legend_soft: "Soft Skills",
        legend_hybrid: "Hybrid",
        legend_hard: "Hard Skills",

        // Footer
        footer_copy: "© 2025 Ignacio Salas Vega · All rights reserved",
        footer_status: "System Operational",

        // Professional Driver Profile
        profile_title_conductor: "Professional Driving & Logistics Profile",
        profile_desc_conductor: "Bilingual professional driver (Native Spanish, C2 English) holding Chilean professional licenses A2, A4, B, and C with clean record. Extensive experience in urban cold-chain distribution of meat products in Santiago (<strong>Susaron</strong>), bilingual dignitary and VIP delegation transport during the Santiago 2023 Pan American and Parapan American Games, and top-rated private passenger transport achieving <strong>Uber Platinum Status</strong>. Holds a B.S. in Automotive Mechanical Engineering from Duoc UC.",

        // Driver Badges
        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Bilingual",
        tech_uber: "Platinum Rank",
        tech_panam: "Dignitaries 2023",
        tech_susaron: "Susaron Cold Cargo",
        tech_mech: "Eng. Duoc UC",
        tech_safety: "Defensive Driving",
        tech_fleet: "IBM Maximo",

        // Controller Badges
        tech_p6: "Planning & CPM",
        tech_pbi: "Dashboards & KPIs",
        tech_excel: "Advanced / Modeling",
        tech_bq: "Queries & ETL",
        tech_m: "Transformation",
        tech_dax: "Advanced Measures",
        tech_py: "Data & Automation",
        tech_genai: "Prompt Engineering",
        tech_bash: "CLI & Scripts",
        tech_r: "Inferential Analytics",
        tech_js: "Integrations & DOM",
        tech_html: "Web Architecture"
    },

    de: {
        subtitle: "Controller mit Kenntnissen in Prompt Engineering & Data Engineering",
        subtitle_controller: "Controller mit Kenntnissen in Prompt Engineering & Data Engineering",
        subtitle_conductor: "Zweisprachiger Berufskraftfahrer | Führerschein A2 / A4 / B / C | VIP & Logistik",
        contact_title: "Kontaktinformationen",
        contact_email_label: "E-Mail",
        contact_phone_label: "Telefon",
        export_pdf: "CV Herunterladen",
        export_pdf_short: "CV Herunterladen",
        nav_headline: "Kfz-Mechatronikingenieur",
        nav_profile: "Profil",
        nav_experience: "Erfahrung",
        nav_education: "Ausbildung",
        nav_skills: "Skills",
        nav_contact: "Kontakt",
        profile_title: "Über Ignacio",
        gauges_title: "Profilmetriken",
        exp_title: "Beruflicher Werdegang",
        edu_title: "Ausbildung & Zertifizierungen",
        edu_comp_title: "Zusatzqualifikationen",
        map_title: "3D-Fähigkeitenradar",
        map_hint: "Ziehen zum Navigieren",
        footer_status: "Betriebsbereit",
        profile_title_conductor: "Berufskraftfahrer & Logistik Profil",
        profile_desc_conductor: "Zweisprachiger Berufskraftfahrer (Spanisch Muttersprache, Englisch C2) mit Führerscheinen A2, A4, B und C.",
        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Zweisprachig",
        tech_uber: "Platin Status",
        tech_panam: "Diplomaten 2023",
        tech_susaron: "Kühltransport Susaron",
        tech_mech: "Ing. Duoc UC",
        tech_safety: "Defensives Fahren",
        tech_fleet: "IBM Maximo"
    },

    ja: {
        subtitle: "Controller (Prompt Engineering & Data Engineering 技能保有)",
        subtitle_controller: "Controller (Prompt Engineering & Data Engineering 技能保有)",
        subtitle_conductor: "バイリンガルプロドライバー | 免許 A2 / A4 / B / C | VIP要人輸送 & 配送物流",
        contact_title: "連絡先情報",
        contact_email_label: "メール",
        contact_phone_label: "電話番号",
        export_pdf: "CVダウンロード",
        export_pdf_short: "CVダウンロード",
        nav_headline: "自動車工学エンジニア",
        nav_profile: "プロフィール",
        nav_experience: "職歴",
        nav_education: "学歴・資格",
        nav_skills: "スキル",
        nav_contact: "連絡先",
        profile_title: "イグナシオについて",
        gauges_title: "プロフィール指標",
        exp_title: "職歴",
        edu_title: "学歴 & 資格",
        edu_comp_title: "専門トレーニング",
        map_title: "3Dスキルレーダー",
        map_hint: "ドラッグして回転",
        footer_status: "稼働中",
        profile_title_conductor: "プロドライバー & 流通物流プロフィール",
        profile_desc_conductor: "プロフェッショナルバイリンガルドライバー（スペイン語母国語、英語C2）。A2、A4、B、C運転免許保有。",
        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 バイリンガル",
        tech_uber: "プラチナレベル",
        tech_panam: "要人輸送 2023",
        tech_susaron: "Susaron 精肉配送",
        tech_mech: "Duoc UC 機械工学",
        tech_safety: "防衛運転",
        tech_fleet: "IBM Maximo"
    },

    ru: {
        subtitle: "Controller с навыками Prompt Engineering и Data Engineering",
        subtitle_controller: "Controller с навыками Prompt Engineering и Data Engineering",
        subtitle_conductor: "Двуязычный профессиональный водитель | Права A2 / A4 / B / C | Транспорт VIP & Логистика",
        contact_title: "Контактная информация",
        contact_email_label: "Эл. почта",
        contact_phone_label: "Телефон",
        export_pdf: "Скачать резюме",
        export_pdf_short: "Скачать резюме",
        nav_headline: "Инженер автомеханики",
        nav_profile: "Профиль",
        nav_experience: "Опыт",
        nav_education: "Образование",
        nav_skills: "Навыки",
        nav_contact: "Контакты",
        profile_title: "Об Игнасио",
        gauges_title: "Метрики профиля",
        exp_title: "Профессиональный путь",
        edu_title: "Образование и сертификаты",
        edu_comp_title: "Дополнительное образование",
        map_title: "3D радар навыков",
        map_hint: "Тяните для вращения",
        footer_status: "Система активна",
        profile_title_conductor: "Профиль Профессионального Водителя и Логиста",
        profile_desc_conductor: "Двуязычный профессиональный водитель (испанский родной, английский C2) с правами A2, A4, B и C.",
        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Двуязычный",
        tech_uber: "Статус Платина",
        tech_panam: "Дипломаты 2023",
        tech_susaron: "Мясная логистика Susaron",
        tech_mech: "Индж. Duoc UC",
        tech_safety: "Защитное вождение",
        tech_fleet: "IBM Maximo"
    }
};

/**
 * Detecta el idioma inicial según:
 * 1. Parámetro URL ?lang=xx
 * 2. Preferencia guardada en localStorage ('portfolio_lang')
 * 3. Idioma del navegador
 * 4. Fallback a 'es'
 */
function detectLang() {
    try {
        const params = new URLSearchParams(window.location.search);
        const urlLang = (params.get('lang') || '').toLowerCase().trim();
        if (urlLang && translations[urlLang]) return urlLang;
    } catch (e) { }

    try {
        const stored = localStorage.getItem('portfolio_lang');
        if (stored && translations[stored]) return stored;
    } catch (e) { }

    const nav = (navigator.language || navigator.userLanguage || 'es').toLowerCase().split('-')[0];
    const supported = ['es', 'en', 'de', 'ja', 'ru'];
    return supported.includes(nav) ? nav : 'es';
}

/**
 * Aplica las traducciones a todos los elementos del DOM marcados con [data-i18n]
 */
function applyTranslations(lang) {
    const activeLang = translations[lang] ? lang : 'es';
    const t = translations[activeLang];
    const fallback = translations['es'];

    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t && t[key] !== undefined) {
            el.innerHTML = t[key];
        } else if (fallback && fallback[key] !== undefined) {
            el.innerHTML = fallback[key];
        }
    });

    document.documentElement.lang = activeLang;

    // Actualizar títulos de documento dinámicamente si aplica
    const currentTitle = document.title || '';
    const isConductorPage = (window.location && window.location.pathname) ? window.location.pathname.includes('conductor') : false;
    if (activeLang === 'en') {
        if (currentTitle.includes('Conductor') || isConductorPage) {
            document.title = "Ignacio Salas Vega | Bilingual Professional Driver & Fleet Logistics";
        } else {
            document.title = "Ignacio Salas Vega | Management Controller, Reliability & DataOps";
        }
    } else if (activeLang === 'es') {
        if (currentTitle.includes('Driver') || isConductorPage) {
            document.title = "Ignacio Salas Vega | Conductor Profesional & Logística";
        } else {
            document.title = "Ignacio Salas Vega | Controller de Gestión & Data Operations";
        }
    }

    // Actualizar textos de los botones de conmutación
    const btnDesktop = document.getElementById('lang-toggle');
    const btnMobile = document.getElementById('lang-toggle-mobile');
    if (btnDesktop) {
        btnDesktop.textContent = activeLang === 'es' ? 'ES / EN' : 'EN / ES';
        btnDesktop.setAttribute('aria-label', activeLang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }
    if (btnMobile) {
        btnMobile.textContent = activeLang === 'es' ? 'ES/EN' : 'EN/ES';
        btnMobile.setAttribute('aria-label', activeLang === 'es' ? 'Switch to English' : 'Cambiar a Español');
    }

    // Notificar a otros módulos (gráficos, radar 3D, etc.)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: activeLang } }));
}

/**
 * Inicializa el subsistema de internacionalización
 */
function initI18n() {
    const lang = detectLang();
    window.currentLang = lang;
    window.translations = translations;

    applyTranslations(lang);

    window.setLang = function (l) {
        const target = translations[l] ? l : 'es';
        window.currentLang = target;
        try {
            localStorage.setItem('portfolio_lang', target);
        } catch (e) { }
        applyTranslations(target);
    };

    window.toggleLang = function () {
        const next = (window.currentLang === 'es') ? 'en' : 'es';
        window.setLang(next);
    };
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
