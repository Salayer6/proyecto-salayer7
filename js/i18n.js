/**
 * i18n.js — Internacionalización del Portfolio de Ignacio Salas Vega
 * Idiomas soportados: es (base), en, de, ja, ru
 * Se auto-detecta desde navigator.language; fallback a español.
 */

const translations = {
    es: {
        // Header
        subtitle: "Ingeniero de AI y Datos Faeneros",
        contact_title: "Información de contacto",

        // Sección Signos Vitales
        vitals_title: "Signos Vitales / Status",
        vitals_desc: "Condicionantes operativos bio-mecánicos e infraestructura base",

        // Velocímetros — nombres
        gauge_basic_food: "Alimentación Básica",
        gauge_homeostasis: "Homeostasis",
        gauge_shelter: "Cobijo / Vivienda",
        gauge_terminal: "Terminal",
        gauge_mental: "Salud Mental",
        gauge_coffee: "Café / Bebida",
        gauge_superior_food: "Alimentación Superior",
        gauge_affection: "Afecto y Entret.",
        gauge_rest: "Descanso y Hábitos",
        gauge_higher: "Conexión Superior",

        // Velocímetros — descripciones
        desc_attention: "Atención Requerida",
        desc_optimal: "Sistema Óptimo",
        desc_improvable: "Mejorable",
        desc_connected: "Conectado y Estable",
        desc_controlled: "Bajo Control",
        desc_critical: "Reserva Crítica",
        desc_adequate: "Adecuado",
        desc_deficit: "Déficit de Interacción",
        desc_developing: "En Desarrollo",
        desc_tuned: "Sintonizado",

        // Mapa de skills — leyenda
        legend_soft: "Habilidades Blandas",
        legend_hybrid: "Híbridas",
        legend_hard: "Habilidades Duras",

        // Mapa — hint
        map_hint: "Arrastra para orbitar",

        // Perfil estratégico
        profile_title: "Perfil Estratégico",

        // Sección experiencia
        exp_title: "Trayectoria Profesional",
        profile_desc: "Propongo la integración de una sólida base técnico-operativa con visión estratégica para empresas Data Driven. Especializado en la transición desde la Ingeniería Automotriz hacia la Ingeniería de AI y Datos Faeneros, integrando Inteligencia Generativa en flujos de Control, BI & Analytics para optimizar el rendimiento, costos y plazos mediante automatización inteligente.",
        specialized_title: "Formación autónoma complementaria",
    },

    en: {
        subtitle: "AI & Data Engineer for Mining Ops",
        contact_title: "Contact Information",

        vitals_title: "Vital Signs / Status",
        vitals_desc: "Bio-mechanical operating conditions and base infrastructure",

        gauge_basic_food: "Basic Food",
        gauge_homeostasis: "Homeostasis",
        gauge_shelter: "Weather Shelter",
        gauge_terminal: "Terminal",
        gauge_mental: "Mental Health",
        gauge_coffee: "Coffee / Coke",
        gauge_superior_food: "Superior Food",
        gauge_affection: "Affection & Ent.",
        gauge_rest: "Rest & Habits",
        gauge_higher: "Higher Conn.",

        desc_attention: "Attention Required",
        desc_optimal: "Optimal System",
        desc_improvable: "Improvable",
        desc_connected: "Connected & Stable",
        desc_controlled: "Under Control",
        desc_critical: "Critical Reserve",
        desc_adequate: "Adequate",
        desc_deficit: "Interaction Deficit",
        desc_developing: "In Development",
        desc_tuned: "Tuned In",

        legend_soft: "Soft Skills",
        legend_hybrid: "Hybrid",
        legend_hard: "Hard Skills",

        map_hint: "Drag to orbit",
        profile_title: "Strategic Profile",
        exp_title: "Professional Background",
        profile_desc: "I propose integrating a solid technical-operational base with strategic vision for Data Driven companies. Specialized in the transition from Automotive Engineering to AI and Mining Data Engineering, integrating Generative Intelligence into Control, BI & Analytics workflows to optimize performance, costs, and deadlines through intelligent automation.",
        specialized_title: "Complementary & Specialized Training",
    },

    de: {
        subtitle: "Planungs- & Kontrollingenieur - BI & Datenanalyse",
        contact_title: "Kontaktinformationen",

        vitals_title: "Vitaldaten / Status",
        vitals_desc: "Biomechanische Betriebsbedingungen und Basisinfrastruktur",

        gauge_basic_food: "Grundversorgung",
        gauge_homeostasis: "Homöostase",
        gauge_shelter: "Unterkunft",
        gauge_terminal: "Terminal",
        gauge_mental: "Geistige Gesundheit",
        gauge_coffee: "Kaffee / Getränk",
        gauge_superior_food: "Gehobene Küche",
        gauge_affection: "Zuneigung & Freizeit",
        gauge_rest: "Schlaf & Gewohnheiten",
        gauge_higher: "Höhere Verbindung",

        desc_attention: "Aufmerksamkeit erforderlich",
        desc_optimal: "Optimales System",
        desc_improvable: "Verbesserungsfähig",
        desc_connected: "Verbunden & Stabil",
        desc_controlled: "Unter Kontrolle",
        desc_critical: "Kritische Reserve",
        desc_adequate: "Ausreichend",
        desc_deficit: "Interaktionsdefizit",
        desc_developing: "In Entwicklung",
        desc_tuned: "Abgestimmt",

        legend_soft: "Soziale Kompetenzen",
        legend_hybrid: "Hybrid",
        legend_hard: "Fachkompetenzen",

        map_hint: "Ziehen zum Navigieren",
        profile_title: "Strategisches Profil",
        exp_title: "Beruflicher Werdegang",
        profile_desc: "Ich kombiniere technische Basis mit strategischer Vision für Data-Driven Unternehmen. Spezialisiert auf den Übergang von Automotive Engineering zu AI & Data Engineering, integriere ich Generative AI in Control, BI & Analytics Workflows.",
        specialized_title: "Zusatzqualifikationen & Fachausbildung",
    },

    ja: {
        subtitle: "計画・管理エンジニア - BI & データ分析",
        contact_title: "連絡先情報",

        vitals_title: "バイタルサイン / ステータス",
        vitals_desc: "生体力学的な稼働状態と基本インフラ",

        gauge_basic_food: "基本的な食事",
        gauge_homeostasis: "ホメオスタシス",
        gauge_shelter: "住居 / 避難所",
        gauge_terminal: "ターミナル",
        gauge_mental: "メンタルヘルス",
        gauge_coffee: "コーヒー / 飲料",
        gauge_superior_food: "上質な食事",
        gauge_affection: "愛情 & 娯楽",
        gauge_rest: "休息 & 習慣",
        gauge_higher: "高次の繋がり",

        desc_attention: "要注意",
        desc_optimal: "最適状態",
        desc_improvable: "改善可能",
        desc_connected: "接続済・安定",
        desc_controlled: "制御下",
        desc_critical: "危機的残量",
        desc_adequate: "適切",
        desc_deficit: "交流不足",
        desc_developing: "開発中",
        desc_tuned: "チューニング済",

        legend_soft: "ソフトスキル",
        legend_hybrid: "ハイブリッド",
        legend_hard: "ハードスキル",

        map_hint: "ドラッグで回転",
        profile_title: "戦略的プロフィール",
        exp_title: "職歴",
        profile_desc: "データドリブンな企業向けに、技術的基盤と戦略的ビジョンを統合します。自動車工学からAIおよびデータエンジニアリングへの転換を専門とし、生成AI（Generative AI）を管理、BI、およびアナリティクスワークフローに統合します。",
        specialized_title: "補足教育および専門トレーニング",
    },

    ru: {
        subtitle: "Инженер планирования и контроля - BI & аналитика данных",
        contact_title: "Контактная информация",

        vitals_title: "Жизненные показатели / Статус",
        vitals_desc: "Биомеханические рабочие условия и базовая инфраструктура",

        gauge_basic_food: "Базовое питание",
        gauge_homeostasis: "Гомеостаз",
        gauge_shelter: "Жильё / Укрытие",
        gauge_terminal: "Терминал",
        gauge_mental: "Психическое здоровье",
        gauge_coffee: "Кофе / Напиток",
        gauge_superior_food: "Полноценное питание",
        gauge_affection: "Общение & Досуг",
        gauge_rest: "Отдых & Привычки",
        gauge_higher: "Высшая связь",

        desc_attention: "Требует внимания",
        desc_optimal: "Оптимальная система",
        desc_improvable: "Можно улучшить",
        desc_connected: "Подключено & Стабильно",
        desc_controlled: "Под контролем",
        desc_critical: "Критический запас",
        desc_adequate: "Достаточно",
        desc_deficit: "Дефицит общения",
        desc_developing: "В разработке",
        desc_tuned: "Настроено",

        legend_soft: "Гибкие навыки",
        legend_hybrid: "Гибридные",
        legend_hard: "Жёсткие навыки",

        map_hint: "Тяните для вращения",
        profile_title: "Стратегический профиль",
        exp_title: "Профессиональный путь",
        specialized_title: "Дополнительное и специальное образование",
    }
};

/**
 * Detecta el idioma del navegador y retorna el código base (es/en/de/ja/ru).
 * Fallback: "es"
 */
function detectLang() {
    const nav = (navigator.language || navigator.userLanguage || 'es').toLowerCase().split('-')[0];
    const supported = ['es', 'en', 'de', 'ja', 'ru'];
    return supported.includes(nav) ? nav : 'es';
}

/**
 * Aplica las traducciones al DOM buscando atributos data-i18n.
 */
function applyTranslations(lang) {
    const t = translations[lang] || translations['es'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    // Actualiza el atributo lang del <html> para accesibilidad
    document.documentElement.lang = lang;
}

// Inicializar al cargar
document.addEventListener('DOMContentLoaded', () => {
    const lang = detectLang();
    applyTranslations(lang);

    // Exponer globalmente para que se pueda forzar desde consola: setLang('en')
    window.setLang = (l) => applyTranslations(l);
    window.currentLang = lang;
});
