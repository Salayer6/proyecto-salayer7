/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

const EXPORT_CONFIG = {
    filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
    bgColor: '#1d1a2f',
    cardBgColor: 'rgba(30, 41, 59, 0.6)',
    a4Width: '210mm',
    profileDim: '110px',
    noiseFilter: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`
};

function exportDigitalCV() {
    // 1. Prepare for export
    document.body.classList.add('exporting-digital');
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);
    
    const element = document.querySelector('.container'); 
    
    // Calculate perfect padding for full-bleed background on the last A4 page
    const a4Ratio = 297 / 210;
    const a4PixelHeight = element.scrollWidth * a4Ratio;
    const totalPagesNeeded = Math.ceil(element.scrollHeight / a4PixelHeight);
    const perfectPadding = (totalPagesNeeded * a4PixelHeight) - element.scrollHeight;
    
    // 2. Configure html2pdf options
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
            onclone: (clonedDoc) => {
                applyDocumentFixes(clonedDoc, perfectPadding);
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
function applyDocumentFixes(clonedDoc, padding) {
    const rootElements = [clonedDoc.documentElement, clonedDoc.body];
    rootElements.forEach(el => {
        el.style.width = EXPORT_CONFIG.a4Width;
        el.style.backgroundColor = EXPORT_CONFIG.bgColor;
        el.style.margin = '0';
        el.style.padding = '0';
    });

    const container = clonedDoc.querySelector('.container');
    if (container) {
        Object.assign(container.style, {
            width: EXPORT_CONFIG.a4Width,
            padding: '10mm 15mm',
            paddingBottom: `${padding}px`,
            margin: '0',
            backgroundColor: EXPORT_CONFIG.bgColor,
            backgroundImage: EXPORT_CONFIG.noiseFilter,
            boxShadow: 'none',
            minHeight: '100vh'
        });
    }
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
