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
        subtitle: "Mantenimiento Electromecánico de Flotas & Confiabilidad | Telemetría, SAP PM & Power BI | Control de Gestión (FEN-UCHILE) & KPIs",
        subtitle_controller: "Mantenimiento Electromecánico de Flotas & Confiabilidad | Telemetría, SAP PM & Power BI | Control de Gestión (FEN-UCHILE) & KPIs",
        subtitle_conductor: "Conductor Profesional Bilingüe | Licencias A2 / A4 / B / C | Traslado Ejecutivo & Logística de Distribución",
        contact_title: "Información de contacto",
        contact_email_label: "Email",
        contact_phone_label: "Teléfono",
        cv_summary_title: "Resumen Profesional",

        // Perfil y Hero
        profile_name: "Ignacio Antonio<br/>Salas Vega",
        profile_title: "Sobre Ignacio",
        profile_summary: "Ingeniero en Maquinaria, Vehículos Automotores y Autotrónica con Diplomado en Control de Gestión (FEN-UCHILE). Ofrezco servicios de gestión integral de mantenimiento de flotas, ingeniería de confiabilidad de activos y optimización del control presupuestario operacional.",
        profile_desc: "Ingeniero en Maquinaria, Vehículos Automotores y Autotrónica con Diplomado en Control de Gestión (FEN-UCHILE). Ofrezco servicios de gestión integral de mantenimiento de flotas, ingeniería de confiabilidad de activos y optimización del control presupuestario operacional. Mi formación técnica en Autotrónica me permite diagnosticar y resolver fallas electromecánicas complejas en terreno, mientras que mi especialización en la FEN-UCHILE me permite traducir la operación en KPIs financieros y control de OPEX. Cuento con experiencia en garantizar la continuidad operativa en faena, reducir tiempos de parada no programada (downtime) y liderar la digitalización de procesos. Integro herramientas como SAP PM, plataformas CMMS/EAM, Power BI y análisis de telemetría (CANbus/OBD-II) para estructurar planes preventivos/predictivos e incrementar la disponibilidad de la flota.",
        profile_location: "Santiago, Chile",
        status_available: "DISPONIBLE · BÚSQUEDA ACTIVA",

        hero_label: "Perfil Técnico Profesional",
        hero_headline: "Mantenimiento<br/><span class=\"text-primary\">Electro-Mecánico</span><br/>&amp; Confiabilidad",
        hero_sub: "Ingeniero en Maquinaria, Vehículos Automotores y Autotrónica con Diplomado en Control de Gestión (FEN-UCHILE). Ofrezco servicios de gestión integral de mantenimiento de flotas, ingeniería de confiabilidad de activos y optimización del control presupuestario operacional.",
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
        exp1_company: "Grupo MSUS (SadhanaCore &amp; Prisma Digital)",
        exp1_b1: "Dashboards directivos en Power BI (DAX), modelos en Airtable e integración de IA Generativa para Mercado Público.",
        exp1_b2: "Arquitectura de solución agencial inteligente (Vercel + Claude + n8n) para monitoreo de licitaciones.",
        exp1_b3: "Auditorías SEO &amp; GA4, automatización de flujos operativos.",
        exp1_date: "Jun 2024 – Actual",

        exp_auter_title: "Analista de Abastecimiento",
        exp_auter_company: "Auter S.A. · Construcción &amp; Mantenimiento de Semáforos",
        exp_auter_company_mobile: "Auter S.A. · Mantenimiento de Semáforos",
        exp_auter_date: "Mar 2023 – Sep 2023",
        exp_auter_b1: "Gestión de solicitudes de material y OC en bodega central, asegurando continuidad operacional de proyectos viales a nivel nacional.",
        exp_auter_b2: "Coordinación y evaluación de proveedores, control de stock y seguimiento de despachos.",
        exp_auter_b3: "Apoyo en inventario, recepción y despacho de materiales y repuestos electro-mecánicos.",

        exp2_title: "Técnico Mantenimiento Electro-Mecánico de Flotas",
        exp2_company: "Royal America (Multitecnica S.A. · Cliente Walmart)",
        exp2_b1: "Planes de mantenimiento preventivo y correctivo para más de 200 equipos electro-mecánicos críticos.",
        exp2_b2: "Administración de OT y ciclo de vida de repuestos vía ERP MAXIMO.",
        exp2_b3: "Diagnóstico técnico de fallas en sistemas eléctricos, mecánicos e hidráulicos.",
        exp2_date: "Feb 2019 – Feb 2020",

        exp_piamonte_title: "Asesor de Servicio &amp; Recepción Técnica – Piamonte S.A.",
        exp_piamonte_title_mobile: "Asesor de Servicio – Piamonte S.A.",
        exp_piamonte_company: "Concesionario oficial · Recepción técnica y control de taller",
        exp_piamonte_company_mobile: "Recepción técnica · concesionario oficial",
        exp_piamonte_date: "2018",
        exp_piamonte_b1: "Inspección técnica inicial, recepción y diagnóstico de requerimientos de mantenimiento express.",
        exp_piamonte_b2: "Control del programa de atención, agendamiento de pautas operacionales y seguimiento de OT en taller.",

        exp3_title: "Técnico Mecánico – SALFA (Salinas y Fabres)",
        exp3_company: "SALFA (Salinas y Fabres S.A.)",
        exp_salfa_sub: "Servicio técnico liviano y flotas",
        exp_salfa_sub_mobile: "Servicio técnico liviano",
        exp3_b1: "Pautas de mantenimiento preventivo: frenos, suspensión, dirección, transmisiones.",
        exp3_b2: "Diagnóstico electrónico y resolución sistemática de fallas.",
        exp3_date: "2015",

        badge_internship_pro: "Práctica Profesional",
        badge_internship_tech: "Práctica Técnica",

        // CV Print ATS Bullets & Entries (Print CV / Export)
        cv_exp1_dates: "Junio 2024 - Actualidad",
        cv_exp1_b1: "Liderazgo en optimización de flujos operacionales, control de gestión y desarrollo de soluciones analíticas y de automatización.",
        cv_exp1_b2: "<strong>SadhanaCore:</strong> Diseño e implementación de cuadros de mando directivos en <strong>Power BI (DAX, Power Query)</strong>, modelos analíticos en <strong>Airtable</strong> e integración de <strong>Prompt Engineering e IA Generativa</strong> para adjudicación en <strong>Mercado Público</strong>.",
        cv_exp1_b3: "<strong>Prisma Digital:</strong> Desarrollo de aplicaciones web interactivas y arquitectura de solución agencial inteligente para monitoreo de licitaciones desplegada en <strong>Vercel con Claude, Antigravity y n8n</strong>, junto a auditorías de <strong>SEO y GA4</strong>.",

        cv_exp_auter_dates: "Marzo 2023 - Septiembre 2023",
        cv_exp_auter_b1: "Gestión de <strong>solicitudes de material y órdenes de compra</strong> en bodega central, asegurando continuidad operacional del mantenimiento de semáforos a nivel nacional.",
        cv_exp_auter_b2: "<strong>Coordinación y evaluación de proveedores</strong>, control de stock y seguimiento de despachos para proyectos viales activos.",
        cv_exp_auter_b3: "Apoyo en <strong>inventario, recepción y despacho</strong> de materiales y repuestos electro-mecánicos.",

        cv_exp2_dates: "Febrero 2019 - Febrero 2020",
        cv_exp2_b1: "Ejecución de <strong>planes de mantenimiento preventivo y correctivo</strong> para flotas electro-mecánicas críticas (más de 200 equipos operativos).",
        cv_exp2_b2: "Administración del flujo de trabajo, ciclo de vida de repuestos y <strong>órdenes de trabajo (OT) a través del ERP MAXIMO</strong>.",
        cv_exp2_b3: "<strong>Diagnóstico técnico</strong> de fallas complejas en sistemas eléctricos, mecánicos e hidráulicos para maximizar la <strong>disponibilidad de flota</strong>.",

        cv_exp_piamonte_b1: "Inspección técnica inicial, recepción y diagnóstico de requerimientos de mantenimiento express.",
        cv_exp_piamonte_b2: "Control del programa de atención, agendamiento de pautas operacionales y seguimiento de OT en taller.",

        cv_exp3_b1: "Aplicación de <strong>pautas de mantenimiento preventivo</strong> en sistemas de frenos, suspensión, dirección y transmisiones.",
        cv_exp3_b2: "<strong>Diagnóstico electrónico</strong> y resolución sistemática de fallas en equipamiento liviano y flotas.",

        // Formación & Educación
        edu_title: "Formación &amp; Certificaciones",
        edu_comp_title: "Formación Complementaria &amp; Especializada",
        specialized_title: "Formación autónoma complementaria",

        // CV Print ATS Education
        cv_edu_minero_title: "Activa tu Talento Minero (Tipo: E-learning · Minería 4.0)",
        cv_edu_minero_org: "Consejo de Competencias Mineras (CCM) · Geotecnia, Mantención, Planificación",
        cv_edu_minero_b1: "Programa de formación integral en competencias técnicas críticas para la <strong>Minería 4.0</strong>.",
        cv_edu_minero_b2: "Especialización en áreas operativas y estratégicas: <strong>Geotecnia</strong>, <strong>Mantención</strong> y <strong>Planificación</strong> minera.",
        cv_edu_minero_b3: "Alineación con el <strong>Reglamento de Seguridad Minera</strong> y estándares de seguridad industrial en faena.",
        cv_edu_minero_b4: "Acreditado mediante Diploma de Honor oficial CCM (Consejo de Competencias Mineras).",

        cv_edu_sust_title: "Introducción a la Sustentabilidad",
        cv_edu_sust_org: "PUC Chile · Abordaje de Crisis climática",
        cv_edu_sust_date: "Diciembre de 2017",

        cv_edu_pm_title: "Fundamentos de Project Management &amp; Product Owner",
        cv_edu_slack_title: "Slack para Comunicación Online &amp; Trabajo Colaborativo",
        cv_edu_de_title: "Especialización Data Engineering, Big Data &amp; Cloud (17 Certificaciones)",
        cv_edu_p6_title: "Oracle Primavera P6 - Planificación y Control de Faena",
        cv_edu_faena_title: "Introducción a Faena Minera (8 Cursos SENCE)",
        cv_edu_google_title: "Certificado Profesional en Analítica de Datos",
        cv_edu_fen_title: "Diplomado en Control de Gestión para Profesionales",
        cv_edu_fen_org: "FEN, Universidad de Chile - Promedio 5.5",
        cv_edu_duoc_title: "Ingeniería en Mecánica Automotriz y Autotrónica (Titulado)",
        cv_edu_duoc_org: "Duoc UC, Sede San Joaquín - Promedio 6.0",

        // Autodidacta / Libros
        self_taught_title: "Investigación &amp; Liderazgo (Autodidacta)",
        self_taught_1: "Técnicas de investigación social · Restituto Sierra Bravo",
        self_taught_2: "Agile Manifesto · Kent Beck et al.",
        self_taught_3: "Liderazgo · John Maxwell",
        self_taught_4: "Ventas · Ron Willingham",
        self_taught_5: "PMBOK® Guide · PMI",
        self_taught_title_mobile: "Autodidacta",
        self_taught_desc_mobile: "Investigación social (Restituto), Agile Manifesto, Liderazgo (Maxwell), Ventas (Willingham), PMBOK® Guide.",

        // Modal Diploma
        modal_diploma_title: "Diploma de Honor — Activa tu Talento Minero",
        modal_diploma_sub: "Consejo de Competencias Mineras (CCM) · Minería 4.0",
        modal_diploma_type: "Tipo: E-learning",
        modal_diploma_safety: "Reglamento de Seguridad Minera",
        modal_diploma_spec: "Especialización: <strong>Geotecnia</strong>, <strong>Mantención</strong> y <strong>Planificación</strong>",
        modal_diploma_pdf: "Abrir PDF Original",
        modal_diploma_close: "Cerrar",

        // Conductor Timeline & Education (para conductor.html)
        cond_exp_title: "Trayectoria en Conducción &amp; Logística",
        cond_exp1_date: "Octubre 2023 - Noviembre 2023",
        cond_exp1_title: "Conductor Bilingüe para Dignatarios y Delegaciones Oficiales",
        cond_exp1_sub: "Manpower — Juegos Panamericanos y Para-Panamericanos Santiago 2023",
        cond_exp1_desc: "Conducción ejecutiva y traslado seguro de autoridades olímpicas internacionales, dignatarios y delegaciones deportivas VIP durante el evento deportivo más importante del continente, trabajando codo a codo con <strong>Corporación Santiago 2023</strong>.<br>• Operación con comunicación 100% bilingüe en <strong>Inglés C2</strong> y Español.<br>• Estricto cumplimiento de protocolos de alta seguridad, navegación de rutas prioritarias y puntualidad sin margen de error.",
        cond_exp2_date: "2021 - 2023",
        cond_exp2_title: "Conductor de Distribución Urbana de Productos Cárnicos",
        cond_exp2_sub: "Susaron (Distribuidora de Carnes Susaron - Santiago, Región Metropolitana)",
        cond_exp2_desc: "Operación y conducción de vehículos de reparto de carga fría (productos cárnicos) abasteciendo a clientes comerciales y puntos de venta en las comunas del Gran Santiago.<br>• Planificación y optimización de rutas diarias de distribución urbana.<br>• Manejo de cadena de frío, maniobras de carga/descarga con seguridad laboral y gestión de documentación en ruta.",
        cond_exp3_date: "2021 - Actualidad",
        cond_exp3_title: "Conductor Privado de Pasajeros — Estatus Nivel Platino",
        cond_exp3_sub: "Uber Chile (Plataforma Movilidad Urbana Santiago)",
        cond_exp3_desc: "Prestación de servicio de transporte privado de pasajeros alcanzando la categoría máxima <strong>Nivel Platino</strong>.<br>• <strong>Conducción segura e intachable:</strong> Registro 100% libre de accidentes y libre de multas o infracciones de tránsito durante toda la trayectoria activa.<br>• Registro de alta satisfacción y calificación promedio sobresaliente otorgada por los usuarios.<br>• Mantenimiento técnico preventivo, higiene rigurosa del vehículo y atención ejecutiva personalizada.",
        cond_exp4_date: "Febrero 2019 - Febrero 2020",
        cond_exp4_title: "Técnico de Mantención de Vehículos 100% Eléctricos CROWN",
        cond_exp4_desc: "Control y mantenimiento preventivo de flota industrial eléctrica mediante <strong>IBM Maximo</strong>. Operación técnica y maniobrabilidad de equipos pesados de logística.",
        cond_exp5_date: "Marzo 2023 - Septiembre 2023",
        cond_exp5_title: "Analista de Apoyo Administrativo &amp; Control Vial",
        cond_exp5_desc: "Gestión integral de bodega central e insumos viales.",
        cond_exp6_date: "2018",
        cond_exp6_title: "Asesor de Servicio &amp; Recepción Técnica",
        cond_exp6_desc: "Inspección técnica inicial, recepción vehicular y diagnóstico de requerimientos de mantenimiento express.<br>• Control de programa de atención y agendamiento de pautas de mantención.<br>• Seguimiento de órdenes de trabajo (OT) y coordinación técnica directa en taller.",
        cond_edu_title: "Formación Técnica, Licencias &amp; Capacitaciones",

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
        subtitle: "Fleet Electro-Mechanical Maintenance & Asset Reliability | Telematics, SAP PM & Power BI | Management Control (FEN-UCHILE) & KPIs",
        subtitle_controller: "Fleet Electro-Mechanical Maintenance & Asset Reliability | Telematics, SAP PM & Power BI | Management Control (FEN-UCHILE) & KPIs",
        subtitle_conductor: "Bilingual Professional Driver | Class A2 / A4 / B / C | VIP Dignitary Transport & Logistics",
        contact_title: "Contact Information",
        contact_email_label: "Email",
        contact_phone_label: "Phone",
        cv_summary_title: "Professional Summary",

        // Profile & Hero
        profile_name: "Ignacio Antonio<br/>Salas Vega",
        profile_title: "About Ignacio",
        profile_summary: "Automotive & Autotronics Engineer with a Postgraduate Diploma in Management Control (FEN-UCHILE). I deliver specialized services in fleet maintenance management, asset reliability engineering, and operational budget control.",
        profile_desc: "Automotive & Autotronics Engineer with a Postgraduate Diploma in Management Control (FEN-UCHILE). I deliver specialized services in fleet maintenance management, asset reliability engineering, and operational budget control. My Autotronics engineering background enables me to perform complex electro-mechanical diagnostics, while my FEN-UCHILE diploma empowers me to align field maintenance with corporate financial KPIs and OPEX control. I bring proven experience in maintaining site continuity, minimizing unplanned downtime, and driving operational digital transformation. I leverage tools such as SAP PM, CMMS/EAM platforms, Power BI, and telematics analytics (CANbus/OBD-II) to transition operations toward data-driven, predictive maintenance models.",
        profile_location: "Santiago, Chile",
        status_available: "AVAILABLE · ACTIVE SEARCH",

        hero_label: "Technical Professional Profile",
        hero_headline: "Electro-Mechanical<br/><span class=\"text-primary\">Maintenance</span><br/>&amp; Reliability",
        hero_sub: "Automotive & Autotronics Engineer with a Postgraduate Diploma in Management Control (FEN-UCHILE). I deliver specialized services in fleet maintenance management, asset reliability engineering, and operational budget control.",
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
        exp1_company: "MSUS Group (SadhanaCore &amp; Prisma Digital)",
        exp1_b1: "Executive dashboards in Power BI (DAX), Airtable data models, and Generative AI integration for Public Procurement.",
        exp1_b2: "Intelligent agentic architecture (Vercel + Claude + n8n) for automated tender monitoring.",
        exp1_b3: "SEO &amp; GA4 audits, end-to-end operational workflow automation.",
        exp1_date: "Jun 2024 – Present",

        exp_auter_title: "Procurement &amp; Supply Chain Analyst",
        exp_auter_company: "Auter S.A. · Traffic Light Construction &amp; Maintenance",
        exp_auter_company_mobile: "Auter S.A. · Traffic Light Maintenance",
        exp_auter_date: "Mar 2023 – Sep 2023",
        exp_auter_b1: "Management of material requests and purchase orders (PO) at central warehouse, ensuring operational continuity for nationwide road projects.",
        exp_auter_b2: "Supplier coordination and evaluation, inventory control, and dispatch tracking for active road projects.",
        exp_auter_b3: "Support in inventory management, receiving, and dispatching electro-mechanical materials and spare parts.",

        exp2_title: "Fleet Electro-Mechanical Maintenance Technician",
        exp2_company: "Royal America (Multitecnica S.A. · Walmart Client)",
        exp2_b1: "Preventive and corrective maintenance programs for 200+ mission-critical electro-mechanical equipment units.",
        exp2_b2: "Work order (WO) administration and spare parts lifecycle management via IBM MAXIMO ERP.",
        exp2_b3: "Technical fault diagnostics across electrical, mechanical, and hydraulic systems.",
        exp2_date: "Feb 2019 – Feb 2020",

        exp_piamonte_title: "Service Advisor &amp; Technical Reception – Piamonte S.A.",
        exp_piamonte_title_mobile: "Service Advisor – Piamonte S.A.",
        exp_piamonte_company: "Official dealership · Technical reception &amp; workshop control",
        exp_piamonte_company_mobile: "Technical reception · official dealership",
        exp_piamonte_date: "2018",
        exp_piamonte_b1: "Initial technical vehicle inspection, service reception, and diagnostic assessment for express maintenance.",
        exp_piamonte_b2: "Service schedule management, operational maintenance scheduling, and workshop work order tracking.",

        exp3_title: "Mechanical Technician – SALFA (Salinas y Fabres)",
        exp3_company: "SALFA (Salinas y Fabres S.A.)",
        exp_salfa_sub: "Light vehicle and fleet technical service",
        exp_salfa_sub_mobile: "Light vehicle technical service",
        exp3_b1: "Preventive maintenance protocols: braking systems, suspension, steering, and transmissions.",
        exp3_b2: "Electronic diagnostics and systematic fault resolution in light vehicles and fleets.",
        exp3_date: "2015",

        badge_internship_pro: "Professional Internship",
        badge_internship_tech: "Technical Internship",

        // CV Print ATS Bullets & Entries (Print CV / Export)
        cv_exp1_dates: "June 2024 – Present",
        cv_exp1_b1: "Leadership in operational workflow optimization, management control, and development of analytical and automation solutions.",
        cv_exp1_b2: "<strong>SadhanaCore:</strong> Design and implementation of executive dashboards in <strong>Power BI (DAX, Power Query)</strong>, analytical models in <strong>Airtable</strong>, and integration of <strong>Prompt Engineering and Generative AI</strong> for Chilean Public Procurement.",
        cv_exp1_b3: "<strong>Prisma Digital:</strong> Interactive web application development and intelligent agentic architecture for tender monitoring deployed on <strong>Vercel with Claude, Antigravity, and n8n</strong>, along with <strong>SEO and GA4</strong> audits.",

        cv_exp_auter_dates: "March 2023 – September 2023",
        cv_exp_auter_b1: "Management of <strong>material requests and purchase orders (PO)</strong> at central warehouse, ensuring operational continuity for nationwide road projects.",
        cv_exp_auter_b2: "<strong>Supplier coordination and evaluation</strong>, inventory control, and dispatch tracking for active road projects.",
        cv_exp_auter_b3: "Support in <strong>inventory, receiving, and dispatch</strong> of electro-mechanical materials and spare parts.",

        cv_exp2_dates: "February 2019 – February 2020",
        cv_exp2_b1: "Execution of <strong>preventive and corrective maintenance programs</strong> for critical electro-mechanical fleets (200+ operational units).",
        cv_exp2_b2: "Workflow administration, spare parts lifecycle management, and <strong>work orders (WO) through IBM MAXIMO ERP</strong>.",
        cv_exp2_b3: "<strong>Technical fault diagnostics</strong> across complex electrical, mechanical, and hydraulic systems to maximize <strong>fleet availability</strong>.",

        cv_exp_piamonte_b1: "Initial technical vehicle inspection, service reception, and diagnostic assessment for express maintenance.",
        cv_exp_piamonte_b2: "Management of service schedule, operational maintenance scheduling, and workshop work order tracking.",

        cv_exp3_b1: "Application of <strong>preventive maintenance protocols</strong>: braking systems, suspension, steering, and transmissions.",
        cv_exp3_b2: "<strong>Electronic diagnostics</strong> and systematic fault resolution in light vehicles and fleets.",

        // Education & Certifications
        edu_title: "Education &amp; Certifications",
        edu_comp_title: "Specialized &amp; Complementary Training",
        specialized_title: "Complementary &amp; Specialized Training",

        // CV Print ATS Education
        cv_edu_minero_title: "Activate Your Mining Talent (Type: E-learning · Mining 4.0)",
        cv_edu_minero_org: "Mining Competency Council (CCM) · Geotechnics, Maintenance, Planning",
        cv_edu_minero_b1: "Comprehensive technical training program in critical skills for <strong>Mining 4.0</strong>.",
        cv_edu_minero_b2: "Specialization in operational and strategic mining areas: <strong>Geotechnics</strong>, <strong>Maintenance</strong>, and <strong>Mine Planning</strong>.",
        cv_edu_minero_b3: "Full alignment with Chilean <strong>Mining Safety Regulations</strong> and industrial site safety standards.",
        cv_edu_minero_b4: "Accredited by official CCM Honor Diploma (Mining Competency Council).",

        cv_edu_sust_title: "Introduction to Sustainability",
        cv_edu_sust_org: "PUC Chile · Addressing Climate Crisis",
        cv_edu_sust_date: "December 2017",

        cv_edu_pm_title: "Project Management &amp; Product Owner Fundamentals",
        cv_edu_slack_title: "Slack for Online Communication &amp; Team Collaboration",
        cv_edu_de_title: "Data Engineering, Big Data &amp; Cloud Specialization (17 Certifications)",
        cv_edu_p6_title: "Oracle Primavera P6 - Project Planning &amp; Site Control",
        cv_edu_faena_title: "Introduction to Mining Site Operations (8 SENCE Courses)",
        cv_edu_google_title: "Google Data Analytics Professional Certificate",
        cv_edu_fen_title: "Postgraduate Diploma in Management Control for Professionals",
        cv_edu_fen_org: "FEN, Universidad de Chile - GPA 5.5 / 7.0",
        cv_edu_duoc_title: "B.S. in Automotive Mechanical Engineering &amp; Autotronics (Graduated)",
        cv_edu_duoc_org: "Duoc UC, San Joaquín Campus - GPA 6.0 / 7.0",

        // Self-Taught / Leadership
        self_taught_title: "Self-Directed Research &amp; Leadership",
        self_taught_1: "Social Research Methods · Restituto Sierra Bravo",
        self_taught_2: "Agile Manifesto · Kent Beck et al.",
        self_taught_3: "Leadership Principles · John Maxwell",
        self_taught_4: "Integrity Selling · Ron Willingham",
        self_taught_5: "PMBOK® Guide · PMI",
        self_taught_title_mobile: "Self-Directed Study",
        self_taught_desc_mobile: "Social research (Restituto), Agile Manifesto, Leadership (Maxwell), Sales (Willingham), PMBOK® Guide.",

        // Modal Diploma
        modal_diploma_title: "Honor Diploma — Activate Your Mining Talent",
        modal_diploma_sub: "Mining Competency Council (CCM) · Mining 4.0",
        modal_diploma_type: "Type: E-learning",
        modal_diploma_safety: "Mining Safety Regulations",
        modal_diploma_spec: "Specialization: <strong>Geotechnics</strong>, <strong>Maintenance</strong> and <strong>Mine Planning</strong>",
        modal_diploma_pdf: "Open Original PDF",
        modal_diploma_close: "Close",

        // Conductor Timeline & Education (for conductor.html)
        cond_exp_title: "Driving &amp; Logistics Experience",
        cond_exp1_date: "October 2023 - November 2023",
        cond_exp1_title: "Bilingual Driver for Dignitaries &amp; Official Delegations",
        cond_exp1_sub: "Manpower — Santiago 2023 Pan American &amp; Parapan American Games",
        cond_exp1_desc: "Executive driving and secure transport of international Olympic authorities, dignitaries, and VIP delegations during the continent's premier sporting event, collaborating directly with <strong>Corporación Santiago 2023</strong>.<br>• 100% bilingual operations in <strong>English C2</strong> and Spanish.<br>• Strict compliance with VIP security protocols, priority lane navigation, and zero-defect punctuality.",
        cond_exp2_date: "2021 - 2023",
        cond_exp2_title: "Urban Distribution Driver for Meat Products",
        cond_exp2_sub: "Susaron Meat Distributors (Santiago Metropolitan Region)",
        cond_exp2_desc: "Operation and driving of cold-chain refrigerated delivery trucks supplying commercial clients and retail outlets across Greater Santiago.<br>• Daily urban route planning and fuel/time optimization.<br>• Cold chain monitoring, occupational health and safety compliance during loading/unloading, and on-route dispatch documentation.",
        cond_exp3_date: "2021 - Present",
        cond_exp3_title: "Private Passenger Driver — Platinum Status",
        cond_exp3_sub: "Uber Chile (Urban Mobility Platform, Santiago)",
        cond_exp3_desc: "Top-rated private passenger transportation service achieving the highest tier: <strong>Platinum Status</strong>.<br>• <strong>Accident-free &amp; clean record:</strong> 100% spotless driving record with zero traffic violations or accidents throughout active service.<br>• Outstanding customer satisfaction ratings.<br>• Preventive vehicle maintenance, rigorous sanitation, and personalized executive courtesy.",
        cond_exp4_date: "February 2019 - February 2020",
        cond_exp4_title: "100% Electric CROWN Vehicle Maintenance Technician",
        cond_exp4_desc: "Preventive maintenance and fleet control for electric industrial machinery via <strong>IBM Maximo</strong>. Technical operation and maneuvering of heavy logistics equipment.",
        cond_exp5_date: "March 2023 - September 2023",
        cond_exp5_title: "Administrative Support &amp; Traffic Control Analyst",
        cond_exp5_desc: "Comprehensive warehouse and traffic infrastructure materials management.",
        cond_exp6_date: "2018",
        cond_exp6_title: "Service Advisor &amp; Technical Receptionist",
        cond_exp6_desc: "Initial technical inspection, vehicle intake, and diagnostic assessment for express maintenance.<br>• Service scheduling and maintenance task coordination.<br>• Work order tracking and direct technical communication with workshop mechanics.",
        cond_edu_title: "Technical Education, Licenses &amp; Training",

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
            document.title = "Ignacio Salas Vega | Fleet Electro-Mechanical Maintenance, Asset Reliability & Management Control";
        }
    } else if (activeLang === 'es') {
        if (currentTitle.includes('Driver') || isConductorPage) {
            document.title = "Ignacio Salas Vega | Conductor Profesional & Logística";
        } else {
            document.title = "Ignacio Salas Vega | Mantenimiento Electromecánico de Flotas, Confiabilidad de Activos & Control de Gestión";
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
