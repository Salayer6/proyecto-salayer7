import re

html_path = r"c:\Users\naxhito\OneDrive\Documentos\proyecto-salayer7\index.html"
css_path = r"c:\Users\naxhito\OneDrive\Documentos\proyecto-salayer7\style.css"

with open(html_path, 'r', encoding='utf-8') as f:
    html = f.read()

replacement_html = """<div class="carousel-container">
                            <!-- SVG Gradients for Custom Gauges -->
                            <svg width="0" height="0" style="position: absolute;">
                                <defs>
                                    <linearGradient id="affection-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stop-color="#f472b6" />
                                        <stop offset="100%" stop-color="#38bdf8" />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <div class="gauge-grid carousel">
                                <!-- 1. Basic food and hydration: 60% -->
                                <div class="gauge-item color-nps-red">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 25.12;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">60%</span><span
                                            class="gauge-name">Basic Food</span><span class="gauge-desc">Atención Requerida</span>
                                    </div>
                                </div>
                                <!-- 2. Homeostasis: 90% -->
                                <div class="gauge-item color-nps-green">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 6.28;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">90%</span><span
                                            class="gauge-name">Homeostasis</span><span class="gauge-desc">Sistema Óptimo</span>
                                    </div>
                                </div>
                                <!-- 3. Weather shelter: 67% -->
                                <div class="gauge-item color-nps-red">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 20.72;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">67%</span><span
                                            class="gauge-name">Weather Shelter</span><span class="gauge-desc">Mejorable</span>
                                    </div>
                                </div>
                                <!-- 4. Working & connected terminal: 100% -->
                                <div class="gauge-item color-nps-green">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 0;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">100%</span><span
                                            class="gauge-name">Terminal</span><span class="gauge-desc">Conectado y Estable</span>
                                    </div>
                                </div>
                                <!-- 5. Attended mental health: 85% -->
                                <div class="gauge-item color-nps-yellow">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 9.42;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">85%</span><span
                                            class="gauge-name">Mental Health</span><span class="gauge-desc">Bajo Control</span>
                                    </div>
                                </div>
                                <!-- 6. Coffee/Coke: 20% -->
                                <div class="gauge-item color-coffee">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 50.24;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">20%</span><span
                                            class="gauge-name">Coffee / Coke</span><span class="gauge-desc">Reserva Crítica</span>
                                    </div>
                                </div>
                                <!-- 7. Superior food and hydration: 75% -->
                                <div class="gauge-item color-nps-yellow">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 15.70;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">75%</span><span
                                            class="gauge-name">Superior Food</span><span class="gauge-desc">Adecuado</span></div>
                                </div>
                                <!-- 8. Affection, entertainment & therapy: 20% -->
                                <div class="gauge-item color-affection">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill gauge-fill-affection"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 50.24;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">20%</span><span
                                            class="gauge-name">Affection & Ent.</span><span class="gauge-desc">Déficit de Interacción</span>
                                    </div>
                                </div>
                                <!-- 9. Rest and healthy habits: 75% -->
                                <div class="gauge-item color-nps-yellow">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 15.70;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">75%</span><span
                                            class="gauge-name">Rest & Habits</span><span class="gauge-desc">En Desarrollo</span>
                                    </div>
                                </div>
                                <!-- 10. Higher connection / Medicine: 100% -->
                                <div class="gauge-item color-nps-green">
                                    <svg viewBox="0 0 100 100" class="gauge">
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-bg" />
                                        <path d="M 10 50 A 40 40 0 0 1 50 10" class="gauge-fill"
                                            style="stroke-dasharray: 62.8; stroke-dashoffset: 0;" />
                                    </svg>
                                    <div class="gauge-info"><span class="gauge-value">100%</span><span
                                            class="gauge-name">Higher Conn.</span><span class="gauge-desc">Sintonizado</span></div>
                                </div>
                            </div>
                        </div>"""

new_html = re.sub(r'<div class="carousel-container">.*?</div>\s*</section>', replacement_html + '\n                    </section>', html, flags=re.DOTALL)
with open(html_path, 'w', encoding='utf-8') as f:
    f.write(new_html)

with open(css_path, 'r', encoding='utf-8') as f:
    css = f.read()

# I am replacing CSS styles around line 805
css_to_replace = """
.gauge-fill {
    fill: none;
    stroke: var(--accent-lime);
    stroke-width: 12;
    stroke-linecap: round;
    /* stroke-dasharray for 90 deg path (len is approx 62.8) */
    transform-origin: 50px 50px;
    filter: drop-shadow(0 0 5px var(--accent-lime));
}

.accent-purple {
    stroke: var(--accent-primary);
    filter: drop-shadow(0 0 5px var(--accent-primary));
}

.gauge-needle {
    stroke: var(--text-primary);
    stroke-width: 3;
    stroke-linecap: round;
    transform-origin: 50px 50px;
}

.gauge-cap {
    fill: var(--bg-color);
    stroke: var(--text-primary);
    stroke-width: 1.5;
}

.gauge-info {
    margin-top: -5px;
}

.gauge-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--font-header);
    margin-bottom: 0.2rem;
}

.gauge-name {
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.gauge-desc {
    display: block;
    font-size: 0.75rem;
    color: var(--accent-lime);
    font-weight: 500;
    margin-top: 0.25rem;
    opacity: 0.8;
    font-style: italic;
}

.gauge:has(.accent-purple) + .gauge-info .gauge-desc {
    color: var(--accent-primary);
}
"""

css_replacement = """
/* Custom Gauge Colors (NPS and Specials) */
.color-nps-red {
    --gauge-color: #ef4444; /* Rojo para detractores / bajo */
}
.color-nps-yellow {
    --gauge-color: #f59e0b; /* Amarillo/Naranja para pasivos / medio */
}
.color-nps-green {
    --gauge-color: #10b981; /* Verde para promotores / alto */
}
.color-coffee {
    --gauge-color: #ff9800; /* Naranja propio */
}
.color-affection {
    /* Usamos un color solido como fallback, el gradiente va directo en el SVG o via text-fill */
    --gauge-color: #f472b6;
}

.gauge-fill {
    fill: none;
    stroke: var(--gauge-color, var(--accent-lime));
    stroke-width: 12;
    stroke-linecap: round;
    transform-origin: 50px 50px;
    filter: drop-shadow(0 0 5px var(--gauge-color, var(--accent-lime)));
}

/* Excepcion para Affection en stroke SVG ya que es gradiente, 
   lo pasamos directo por url(#affection-gradient) en el path. */
path.gauge-fill-affection {
    stroke: url(#affection-gradient) !important;
    filter: drop-shadow(0 0 5px rgba(244, 114, 182, 0.6)) !important;
}

/* Remover obsoletos accent-purple pero lo mantenemos vacio por si rompe otro file */
.accent-purple {}

.gauge-needle {
    stroke: var(--text-primary);
    stroke-width: 3;
    stroke-linecap: round;
    transform-origin: 50px 50px;
}

.gauge-cap {
    fill: var(--bg-color);
    stroke: var(--text-primary);
    stroke-width: 1.5;
}

.gauge-info {
    margin-top: -5px;
}

.gauge-value {
    display: block;
    font-size: 1.5rem;
    font-weight: 800;
    font-family: var(--font-header);
    margin-bottom: 0.2rem;
}

.gauge-name {
    color: var(--text-secondary);
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.1em;
}

.gauge-desc {
    display: block;
    font-size: 0.75rem;
    color: var(--gauge-color, var(--accent-lime));
    font-weight: 500;
    margin-top: 0.25rem;
    opacity: 0.8;
    font-style: italic;
}

.color-affection .gauge-desc {
    background: linear-gradient(90deg, #f472b6, #38bdf8);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}
"""

if css_to_replace.strip() in css:
    new_css = css.replace(css_to_replace.strip(), css_replacement.strip())
    with open(css_path, 'w', encoding='utf-8') as f:
        f.write(new_css)
else:
    print("CSS block not found.")
    # attempt a fallback replace if line endings are weird
    css = re.sub(r'\.gauge-fill\s*\{.*?\}(?=\s*\.controls)', css_replacement.strip(), css, flags=re.DOTALL)
    # Actually wait, let's just print a message instead to be sure.
