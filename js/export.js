/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

const EXPORT_CONFIG = {
    filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
    bgColor: '#1d1a2f',
    cardBgColor: 'rgba(30, 41, 59, 0.6)',
    profileDim: '110px',
    noiseFilter: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
};

function exportDigitalCV() {
    // 1. Prepare for export
    document.body.classList.add('exporting-digital');
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);
    
    // Export from body to ensure full-bleed background coverage
    const element = document.body; 
    const container = document.querySelector('.container');
    
    // Calculate perfect padding for full-bleed background on the last A4 page
    const a4Ratio = 297 / 210;
    const calcWidth = container.offsetWidth || 1100;
    const a4PixelHeight = calcWidth * a4Ratio;
    const totalPagesNeeded = Math.ceil(element.scrollHeight / a4PixelHeight);
    const totalTargetHeight = totalPagesNeeded * a4PixelHeight;
    const perfectPadding = totalTargetHeight - element.scrollHeight;
    
    // 2. Configure html2pdf options (Full-Bleed A4 Metrics)
    const opt = {
        margin: 0,
        filename: EXPORT_CONFIG.filename,
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 2,
            useCORS: true, 
            backgroundColor: EXPORT_CONFIG.bgColor, 
            logging: false,
            scrollY: 0, 
            scrollX: 0,
            windowWidth: calcWidth,
            windowHeight: totalTargetHeight,
            width: calcWidth,
            height: totalTargetHeight,
            onclone: (clonedDoc) => {
                applyDocumentFixes(clonedDoc, perfectPadding, totalTargetHeight);
                fixProfileImage(clonedDoc);
                fixVitalGauges(clonedDoc);
                toggleSkillMaps(clonedDoc);
                fixVisualStyles(clonedDoc);
            }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { 
            mode: ['css', 'legacy'],
            before: '.pdf-page-break',
            avoid: ['.card-header', 'h2', '.gauge-item', '.timeline-item', '.edu-item']
        }
    }; 
    
    // 3. Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
        finishExport(originalScrollY);
    }).catch(err => {
        console.error('Export error:', err);
        finishExport(originalScrollY);
    });
}

/**
 * Global document level styles for the clone
 */
function applyDocumentFixes(clonedDoc, padding, totalHeight) {
    const container = clonedDoc.querySelector('.container');
    const targetWidth = container ? container.offsetWidth : 1100;

    const rootElements = [clonedDoc.documentElement, clonedDoc.body];
    rootElements.forEach(el => {
        el.style.backgroundColor = EXPORT_CONFIG.bgColor;
        el.style.backgroundImage = EXPORT_CONFIG.noiseFilter;
        el.style.backgroundRepeat = 'repeat';
        el.style.margin = '0';
        el.style.padding = '0';
        el.style.width = `${targetWidth}px`;
        el.style.height = `${totalHeight}px`; // Force exact height
        el.style.minHeight = `${totalHeight}px`;
        el.style.overflow = 'hidden';
    });

    if (container) {
        Object.assign(container.style, {
            width: `${targetWidth}px`,
            maxWidth: 'none',
            padding: '10mm 15mm',
            paddingBottom: `${padding}px`, 
            margin: '0 auto',
            backgroundColor: 'transparent',
            backgroundImage: 'none',
            boxShadow: 'none',
            minHeight: '100vh'
        });
    }

    // Force remove blobs and other artifacts that html2canvas struggles with
    const style = clonedDoc.createElement('style');
    style.innerHTML = `
        body::before, body::after { display: none !important; }
        .export-banner, .nav-links, .map-3d-ui, .map-zoom-controls { display: none !important; }
        .glass { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; }
        * { -webkit-print-color-adjust: exact !important; color-adjust: exact !important; }
    `;
    clonedDoc.head.appendChild(style);
}

/**
 * Fixes profile image distortion issue with html2canvas
 */
function fixProfileImage(clonedDoc) {
    const profileImg = clonedDoc.querySelector('.profile-photo');
    const profileContainer = clonedDoc.querySelector('.profile-photo-container');
    
    if (profileImg && profileContainer) {
        const imgSrc = profileImg.src;
        const bgDiv = clonedDoc.createElement('div');
        
        Object.assign(bgDiv.style, {
            backgroundImage: `url(${imgSrc})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center 10%',
            width: EXPORT_CONFIG.profileDim,
            height: EXPORT_CONFIG.profileDim,
            minWidth: EXPORT_CONFIG.profileDim,
            minHeight: EXPORT_CONFIG.profileDim,
            borderRadius: '50%',
            margin: '0 auto',
            flexShrink: '0'
        });
        
        profileContainer.innerHTML = '';
        profileContainer.appendChild(bgDiv);
        
        Object.assign(profileContainer.style, {
            width: EXPORT_CONFIG.profileDim,
            height: EXPORT_CONFIG.profileDim,
            borderRadius: '50%',
            overflow: 'hidden',
            flex: `0 0 ${EXPORT_CONFIG.profileDim}`,
            display: 'block',
            alignSelf: 'flex-start'
        });
    }
}

/**
 * Optimizes SVG Gauges for high resolution PDF
 */
function fixVitalGauges(clonedDoc) {
    const gauges = clonedDoc.querySelectorAll('.gauge');
    gauges.forEach(svg => {
        svg.setAttribute('width', '70');
        svg.setAttribute('height', '70');
        const fills = svg.querySelectorAll('.gauge-fill');
        fills.forEach(path => {
            path.style.filter = 'none';
            path.style.strokeWidth = '14';
        });
    });
}

/**
 * Switches 3D Map to 2D Bubble Chart for Export
 */
function toggleSkillMaps(clonedDoc) {
    // Hide components
    ['.skill-map-wrapper', '#skill-canvas-container', '.map-3d-ui'].forEach(selector => {
        const el = clonedDoc.querySelector(selector);
        if (el) el.style.display = 'none';
    });

    // Show and calibrate 2D map
    const bubble2d = clonedDoc.querySelector('.bubble-container');
    const bubbleSvg = clonedDoc.querySelector('.bubble-chart');
    const legend = clonedDoc.querySelector('.skill-map-legend');

    if (bubble2d) {
        Object.assign(bubble2d.style, {
            display: 'block',
            opacity: '1',
            visibility: 'visible',
            width: '100%',
            maxWidth: '180mm',
            margin: '0 auto'
        });
    }

    if (bubbleSvg) {
        Object.assign(bubbleSvg.style, {
            width: '100%',
            height: 'auto',
            display: 'block'
        });
        bubbleSvg.setAttribute('width', '450');
        bubbleSvg.setAttribute('height', '321');
    }

    if (legend) {
        Object.assign(legend.style, {
            display: 'flex',
            opacity: '1',
            visibility: 'visible',
            justifyContent: 'center'
        });
    }

    // Force labels to white for visibility
    clonedDoc.querySelectorAll('.blabel').forEach(l => {
        Object.assign(l.style, { fill: '#ffffff', fontSize: '12px', fontWeight: 'bold' });
    });
    clonedDoc.querySelectorAll('.zone-label').forEach(z => {
        Object.assign(z.style, { opacity: '1', fontWeight: '900', fontSize: '14px' });
    });
}

/**
 * Fixes glassmorphism and card styles for printer-friendly processing
 */
function fixVisualStyles(clonedDoc) {
    clonedDoc.querySelectorAll('.glass').forEach(card => {
        Object.assign(card.style, {
            backgroundColor: EXPORT_CONFIG.cardBgColor,
            backdropFilter: 'none',
            boxShadow: 'none'
        });
    });
}

/**
 * Resets the UI state after export
 */
function finishExport(originalY) {
    document.body.classList.remove('exporting-digital');
    window.scrollTo(0, originalY);
}
