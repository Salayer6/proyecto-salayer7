/**
 * i18n.js — Internacionalización del Portfolio de Ignacio Salas Vega
 * Idiomas soportados: es (base), en, de, ja, ru
 * Auto-detecta idioma del navegador; fallback a español.
 */

const translations = {
    es: {
        // Headers & Titles
        subtitle: "Controller de Gestión & Data Operations | Business Intelligence, Data Engineering & AI Automation",
        subtitle_controller: "Controller de Gestión & Data Operations | Business Intelligence, Data Engineering & AI Automation",
        subtitle_conductor: "Conductor Profesional Bilingüe | Licencias A2 / A4 / B / C | Traslado Ejecutivo & Logística de Distribución",
        contact_title: "Información de contacto",

        // Sección Telemetría Operativa
        vitals_title: "Telemetría Operativa / Status",
        vitals_desc: "Disponibilidad, continuidad de servicio e indicadores de preparación técnica",

        // Medidores — nombres
        gauge_availability: "Disponibilidad / Terreno",
        gauge_terminal: "Terminal & Cloud",
        gauge_analytics: "Rigor Analítico & KPIs",
        gauge_automation: "DataOps & n8n",
        gauge_powerbi: "Power BI & DAX",
        gauge_p6: "Planificación P6",
        gauge_genai: "IA Generativa",
        gauge_maintenance: "Mantenimiento & Flota",
        gauge_bilingual: "Inglés Profesional",
        gauge_alignment: "Alineación Estratégica",

        // Medidores — descripciones
        desc_immediate: "Inmediata & Viajes OK",
        desc_connected: "Conectado y Estable",
        desc_methodology: "Control de Gestión",
        desc_auto: "Flujos y Scripts",
        desc_executive: "Modelado Directivo",
        desc_cpm: "Ruta Crítica & Obra",
        desc_prompting: "Prompt Engineering",
        desc_engineering: "Ingeniería Aplicada",
        desc_fluent: "C2 Bilingüe",
        desc_optimal: "Compromiso Total",

        // Mapa de skills — leyenda
        skillmap_title: "Radar de Habilidades & Criticidad",
        skillmap_desc: "Medidor radial de criticidad · <strong>Centro:</strong> Alta criticidad e intervenciones de alto riesgo puntual (ej. queries SQL, control P6) → <strong>Periferia:</strong> Habilidades tácticas y estructurales continuas.",
        legend_soft: "Habilidades Blandas",
        legend_hybrid: "Híbridas",
        legend_hard: "Habilidades Duras",

        // Mapa — hint
        map_hint: "Arrastra para orbitar",

        // Perfil estratégico — Controller
        profile_title: "Perfil Estratégico",
        profile_desc: "<strong>Controller de Gestión &amp; Data Operations</strong> con formación en <strong>Ingeniería Automotriz (Duoc UC)</strong> y especialización en <strong>Control de Gestión (FEN Universidad de Chile)</strong>. Especializado en transformar datos dispersos en decisiones rentables mediante <strong>Business Intelligence, Data Engineering y automatización con IA</strong>.<br><br>Aporto un enfoque híbrido que fusiona la disciplina operativa y de mantenimiento con visión de negocio y analítica avanzada. Trayectoria destacada en empresas de <strong>Grupo MSUS</strong>:<br><br>• <a href='https://sadhanacore.com/' target='_blank' rel='noopener noreferrer' style='color: var(--accent-cyan); font-weight: 600;'>SadhanaCore <i class='fa-solid fa-arrow-up-right-from-square' style='font-size: 0.75em;'></i></a>: Diseño e implementación de tableros de <strong>Business Intelligence (Power BI, DAX, Power Query)</strong> para clientes corporativos; integración de <strong>Prompt Engineering e IA Generativa</strong> para adjudicaciones en <strong>Mercado Público (Chile)</strong>; y despliegue de módulos ERP low-cost con automatizaciones en <strong>n8n y Python</strong>.<br>• <a href='https://prismadigital.io/' target='_blank' rel='noopener noreferrer' style='color: var(--accent-cyan); font-weight: 600;'>Prisma Digital <i class='fa-solid fa-arrow-up-right-from-square' style='font-size: 0.75em;'></i></a>: Ejecución de auditorías técnicas integrales de <strong>SEO, arquitectura web y analítica digital (GA4)</strong> para plataformas de e-commerce.<br><br><strong>Contacto de referencia:</strong> Felipe Ramírez (+56 9 8526 5640) — <em>CEO de SadhanaCore &amp; Head of Sales en Prisma Digital</em>.",
        
        // Perfil Conductor Profesional
        profile_title_conductor: "Perfil Profesional de Conducción & Logística",
        profile_desc_conductor: "Conductor profesional bilingüe (Español nativo, Inglés C2) con licencias A2, A4, B y C sin anotaciones. Amplia experiencia en logística de distribución urbana de alimentos cárnicos en la ciudad de Santiago (<strong>Susaron</strong>), traslado bilingüe de dignatarios y autoridades VIP en los <strong>Juegos Panamericanos y Parapanamericanos Santiago 2023</strong>, y transporte privado de pasajeros alcanzando la categoría máxima <strong>Nivel Platino en Uber</strong>. Titulado de <strong>Ingeniería en Mecánica Automotriz y Autotrónica (Duoc UC)</strong>, lo que otorga un respaldo técnico único en diagnóstico preventivo, física de operación, gestión de flotas y seguridad vial.",

        exp_title: "Trayectoria Profesional",
        specialized_title: "Formación autónoma complementaria",

        // Tech Vitals — Controller
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
        tech_html: "Arquitectura Web",

        // Tech Vitals — Conductor
        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Bilingüe",
        tech_uber: "Nivel Platino",
        tech_panam: "Dignatarios 2023",
        tech_susaron: "Carga Cárnica Susaron",
        tech_mech: "Ing. Duoc UC",
        tech_safety: "Conducción Defensiva",
        tech_fleet: "IBM Maximo",
    },

    en: {
        subtitle: "Management Controller & Data Operations | Business Intelligence, Data Engineering & AI Automation",
        subtitle_controller: "Management Controller & Data Operations | Business Intelligence, Data Engineering & AI Automation",
        subtitle_conductor: "Bilingual Professional Driver | Class A2 / A4 / B / C | VIP Dignitary Transport & Logistics",
        contact_title: "Contact Information",

        vitals_title: "Operational Telemetry / Status",
        vitals_desc: "Availability, service continuity, and technical readiness indicators",

        gauge_availability: "Availability / Field",
        gauge_terminal: "Terminal & Cloud",
        gauge_analytics: "Analytical Rigor & KPIs",
        gauge_automation: "DataOps & n8n",
        gauge_powerbi: "Power BI & DAX",
        gauge_p6: "Planning & P6",
        gauge_genai: "Generative AI",
        gauge_maintenance: "Maintenance & Fleet",
        gauge_bilingual: "Professional English",
        gauge_alignment: "Strategic Alignment",

        desc_immediate: "Immediate & Travel Ready",
        desc_connected: "Connected & Stable",
        desc_methodology: "Management Control",
        desc_auto: "Workflows & Scripts",
        desc_executive: "Executive Dashboards",
        desc_cpm: "Critical Path & Works",
        desc_prompting: "Prompt Engineering",
        desc_engineering: "Applied Engineering",
        desc_fluent: "C2 Bilingual",
        desc_optimal: "Total Commitment",

        skillmap_title: "Skills & Criticality Radar",
        skillmap_desc: "Radial criticality meter · <strong>Center:</strong> High-risk & surgical precision tasks (e.g. SQL queries, P6 control) → <strong>Periphery:</strong> Continuous tactical and structural skills.",
        legend_soft: "Soft Skills",
        legend_hybrid: "Hybrid",
        legend_hard: "Hard Skills",

        map_hint: "Drag to orbit",
        profile_title: "Strategic Profile",
        profile_desc: "<strong>Management Controller &amp; Data Operations</strong> with background in <strong>Automotive Engineering (Duoc UC)</strong> and postgraduate studies in <strong>Management Control (FEN Universidad de Chile)</strong>. Specializing in transforming scattered data into profitable business decisions through <strong>Business Intelligence, Data Engineering, and AI Automation</strong>.<br><br>I deliver a hybrid approach merging operational process discipline with business vision and advanced analytics. Proven track record at <strong>Grupo MSUS</strong> companies:<br><br>• <a href='https://sadhanacore.com/' target='_blank' rel='noopener noreferrer' style='color: var(--accent-cyan); font-weight: 600;'>SadhanaCore <i class='fa-solid fa-arrow-up-right-from-square' style='font-size: 0.75em;'></i></a>: Designing and implementing <strong>Business Intelligence dashboards (Power BI, DAX, Power Query)</strong>; integrating <strong>Prompt Engineering &amp; GenAI</strong> to win public tenders on <strong>Mercado Público (Chile)</strong>; and deploying low-cost ERP sprint-tracking modules automated with <strong>n8n and Python</strong>.<br>• <a href='https://prismadigital.io/' target='_blank' rel='noopener noreferrer' style='color: var(--accent-cyan); font-weight: 600;'>Prisma Digital <i class='fa-solid fa-arrow-up-right-from-square' style='font-size: 0.75em;'></i></a>: Conducting comprehensive technical audits of <strong>SEO, web architecture, and digital analytics (GA4)</strong> for e-commerce platforms.<br><br><strong>Direct Reference:</strong> Felipe Ramírez (+56 9 8526 5640) — <em>CEO at SadhanaCore &amp; Head of Sales at Prisma Digital</em>.",
        
        profile_title_conductor: "Professional Driving & Logistics Profile",
        profile_desc_conductor: "Bilingual professional driver (Native Spanish, C2 English) holding Chilean professional licenses A2, A4, B, and C with clean record. Extensive experience in urban cold-chain distribution of meat products in Santiago (<strong>Susaron</strong>), bilingual dignitary and VIP delegation transport during the Santiago 2023 Pan American and Parapan American Games, and top-rated private passenger transport achieving <strong>Uber Platinum Status</strong>. Holds a B.S. in Automotive Mechanical Engineering from Duoc UC.",

        exp_title: "Professional Background",
        specialized_title: "Complementary & Specialized Training",

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
        tech_html: "Web Architecture",

        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Bilingual",
        tech_uber: "Platinum Rank",
        tech_panam: "Dignitaries 2023",
        tech_susaron: "Susaron Cold Cargo",
        tech_mech: "Eng. Duoc UC",
        tech_safety: "Defensive Driving",
        tech_fleet: "IBM Maximo",
    },

    de: {
        subtitle: "Controller mit Kenntnissen in Prompt Engineering & Data Engineering",
        subtitle_controller: "Controller mit Kenntnissen in Prompt Engineering & Data Engineering",
        subtitle_conductor: "Zweisprachiger Berufskraftfahrer | Führerschein A2 / A4 / B / C | VIP & Logistik",
        contact_title: "Kontaktinformationen",

        vitals_title: "Vitaldaten / Status",
        vitals_desc: "Biomechanische Betriebsbedingungen und Basisinfrastruktur",

        gauge_basic_food: "Grundversorgung",
        gauge_homeostasis: "Homöostase",
        gauge_shelter: "Unterkunft",
        gauge_terminal: "Terminal",
        gauge_mental: "Geistige Gesundheit",
        gauge_coffee: "Kaffee / Coke",
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

        skillmap_title: "Fähigkeiten- & Kritikalitätsradar",
        skillmap_desc: "Radialer Kritikalitätsmesser · <strong>Zentrum:</strong> Hochrisiko- & kurzzeitige Präzisionsaufgaben (z. B. SQL-Queries, P6-Steuerung) → <strong>Peripherie:</strong> Kontinuierliche taktische und strukturelle Fähigkeiten.",
        legend_soft: "Soziale Kompetenzen",
        legend_hybrid: "Hybrid",
        legend_hard: "Fachkompetenzen",

        map_hint: "Ziehen zum Navigieren",
        profile_title: "Strategisches Profil",
        profile_desc: "Beim Übergang vom Automotive Engineering zur Rolle als Controller...",
        
        profile_title_conductor: "Berufskraftfahrer & Logistik Profil",
        profile_desc_conductor: "Zweisprachiger Berufskraftfahrer (Spanisch Muttersprache, Englisch C2) mit Führerscheinen A2, A4, B und C. Erfahrung in der Fleischwarenlogistik bei <strong>Susaron</strong> (Santiago), VIP-Diplomatentransport bei den Panamerikanischen Spielen 2023 und <strong>Uber Platin Status</strong>.",

        exp_title: "Beruflicher Werdegang",
        specialized_title: "Zusatzqualifikationen & Fachausbildung",

        tech_excel: "Fortgeschritten",
        tech_bq: "Liest & Debuggt",
        tech_m: "Führt aus",
        tech_dax: "Zeigt",
        tech_py: "Studiert ML+PyTorch",
        tech_bash: "Autodidakt",
        tech_js: "Versteht",
        tech_genai: "Avantgarde",
        tech_pbi: "Produziert",
        tech_html: "Verwaltet",
        tech_r: "Nicht erforderlich",

        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Zweisprachig",
        tech_uber: "Platin Status",
        tech_panam: "Diplomaten 2023",
        tech_susaron: "Kühltransport Susaron",
        tech_mech: "Ing. Duoc UC",
        tech_safety: "Defensives Fahren",
        tech_fleet: "IBM Maximo",
    },

    ja: {
        subtitle: "Controller (Prompt Engineering & Data Engineering 技能保有)",
        subtitle_controller: "Controller (Prompt Engineering & Data Engineering 技能保有)",
        subtitle_conductor: "バイリンガルプロドライバー | 免許 A2 / A4 / B / C | VIP要人輸送 & 配送物流",
        contact_title: "連絡先情報",

        vitals_title: "バイタルサイン / ステータス",
        vitals_desc: "生体力学的な稼働状態と基本インフラ",

        gauge_basic_food: "基本的な食事",
        gauge_homeostasis: "ホメオスタシス",
        gauge_shelter: "住居 / 避難所",
        gauge_terminal: "ターミナル",
        gauge_mental: "メンタルヘルス",
        gauge_coffee: "コーヒー / Coke",
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

        skillmap_title: "スキル・重要度レーダー",
        skillmap_desc: "放射状重要度メーター · <strong>中心部:</strong> 高リスク・短時間精密作業（SQLクエリ変更、P6工程管理等） → <strong>周辺部:</strong> 継続的戦術・基盤スキル。",
        legend_soft: "ソフトスキル",
        legend_hybrid: "ハイブリッド",
        legend_hard: "ハードスキル",

        map_hint: "ドラッグで回転",
        profile_title: "戦略的プロフィール",
        profile_desc: "自動車工学からプロンプトエンジニアリングおよびデータエンジニアリングのスキルを持つController役への移行...",

        profile_title_conductor: "プロドライバー & 流通物流プロフィール",
        profile_desc_conductor: "プロフェッショナルバイリンガルドライバー（スペイン語母国語、英語C2）。A2、A4、B、Cプロ運転免許を保有。サンティアゴでの精肉配送物流（<strong>Susaron</strong>）、2023年パンアメリカン競技大会でのVIP・要人バイリンガル輸送、および**Uberプラチナレベル**の実績を保有。Duoc UCの自動車機械工学士号を有し、車両整備・防衛運転に精通。",

        exp_title: "職歴",
        specialized_title: "補足教育および専門トレーニング",

        tech_excel: "上級",
        tech_bq: "読み取り・デバッグ",
        tech_m: "実行",
        tech_dax: "表示",
        tech_py: "ML+PyTorchを学習中",
        tech_bash: "独学",
        tech_js: "理解",
        tech_genai: "アバンギャルド",
        tech_pbi: "作成",
        tech_html: "管理",
        tech_r: "不要",

        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 バイリンガル",
        tech_uber: "プラチナレベル",
        tech_panam: "要人輸送 2023",
        tech_susaron: "Susaron 精肉配送",
        tech_mech: "Duoc UC 機械工学",
        tech_safety: "防衛運転",
        tech_fleet: "IBM Maximo",
    },

    ru: {
        subtitle: "Controller с навыками Prompt Engineering и Data Engineering",
        subtitle_controller: "Controller с навыками Prompt Engineering и Data Engineering",
        subtitle_conductor: "Двуязычный профессиональный водитель | Права A2 / A4 / B / C | Транспорт VIP & Логистика",
        contact_title: "Контактная информация",

        vitals_title: "Жизненные показатели / Статус",
        vitals_desc: "Биомеханические рабочие условия и базовая инфраструктура",

        gauge_basic_food: "Базовое питание",
        gauge_homeostasis: "Гомеостаз",
        gauge_shelter: "Жильё / Укрытие",
        gauge_terminal: "Терминал",
        gauge_mental: "Психическое здоровье",
        gauge_coffee: "Кофе / Coke",
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

        skillmap_title: "Радар навыков и критичности",
        skillmap_desc: "Радиальный измеритель критичности · <strong>Центр:</strong> Высокорисковые и краткосрочные точечные задачи (напр. правка SQL-запросов, контроль P6) → <strong>Периферия:</strong> Непрерывные тактические и структурные навыки.",
        legend_soft: "Гибкие навыки",
        legend_hybrid: "Гибридные",
        legend_hard: "Жёсткие навыки",

        map_hint: "Тяните для вращения",
        profile_title: "Стратегический профиль",
        profile_desc: "В переходе от автомобильной инженерии к роли Controller...",

        profile_title_conductor: "Профиль Профессионального Водителя и Логиста",
        profile_desc_conductor: "Двуязычный профессиональный водитель (испанский родной, английский C2) с правами A2, A4, B и C. Опыт городской логистики доставки мясных продуктов в Сантьяго (<strong>Susaron</strong>), сопровождения дипломатов и VIP-делегаций на Панамериканских играх 2023 и статус <strong>Uber Платина</strong>. Инженер по автомобильной механике (Duoc UC).",

        exp_title: "Профессиональный путь",
        specialized_title: "Дополнительное и специальное образование",

        tech_excel: "Продвинутый",
        tech_bq: "Читает и отлаживает",
        tech_m: "Выполняет",
        tech_dax: "Показывает",
        tech_py: "Изучает ML+PyTorch",
        tech_bash: "Самоучка",
        tech_js: "Понимает",
        tech_genai: "Авангард",
        tech_pbi: "Производит",
        tech_html: "Администрирует",
        tech_r: "Не требуется",

        tech_license: "A2 / A4 / B / C",
        tech_english: "C2 Двуязычный",
        tech_uber: "Статус Платина",
        tech_panam: "Дипломаты 2023",
        tech_susaron: "Мясная логистика Susaron",
        tech_mech: "Индж. Duoc UC",
        tech_safety: "Защитное вождение",
        tech_fleet: "IBM Maximo",
    }
};

function detectLang() {
    const nav = (navigator.language || navigator.userLanguage || 'es').toLowerCase().split('-')[0];
    const supported = ['es', 'en', 'de', 'ja', 'ru'];
    return supported.includes(nav) ? nav : 'es';
}

function applyTranslations(lang) {
    const t = translations[lang] || translations['es'];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key] !== undefined) {
            el.innerHTML = t[key];
        }
    });

    document.documentElement.lang = lang;
}

function initI18n() {
    const lang = detectLang();
    applyTranslations(lang);

    window.setLang = (l) => applyTranslations(l);
    window.currentLang = lang;
    window.translations = translations;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initI18n);
} else {
    initI18n();
}
