/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

function exportDigitalCV() {
    // 1. Prepare for export
    document.body.classList.add('exporting-digital');
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);
    
    // Capturamos el contenedor principal para evitar márgenes innecesarios del body
    const element = document.querySelector('.container'); 
    
    // 2. Configure html2pdf options (Full-Bleed A4 Metrics)
    const opt = {
        margin: 0, // Sin márgenes externos en el PDF (Full Bleed)
        filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 2,
            useCORS: true, 
            backgroundColor: '#1d1a2f', 
            logging: false,
            scrollY: 0, 
            scrollX: 0,
            onclone: (clonedDoc) => {
                clonedDoc.documentElement.style.width = '210mm';
                clonedDoc.documentElement.style.backgroundColor = '#1d1a2f'; // Fija la capa más profunda
                clonedDoc.body.style.width = '210mm';
                clonedDoc.body.style.margin = '0';
                clonedDoc.body.style.padding = '0';
                clonedDoc.body.style.backgroundColor = '#1d1a2f';

                const container = clonedDoc.querySelector('.container');
                if (container) {
                    container.style.width = '210mm';
                    container.style.padding = '10mm 15mm';
                    container.style.margin = '0';
                    container.style.backgroundColor = '#1d1a2f';
                    container.style.backgroundImage = 'none';
                    container.style.boxShadow = 'none';
                    container.style.minHeight = '100vh';
                }

                // Velocímetros
                const gauges = clonedDoc.querySelectorAll('.gauge');
                gauges.forEach(svg => {
                    svg.setAttribute('width', '100');
                    svg.setAttribute('height', '100');
                    const fills = svg.querySelectorAll('.gauge-fill');
                    fills.forEach(path => {
                        path.style.filter = 'none';
                        path.style.strokeWidth = '14';
                    });
                });

                // Corregir imagen de perfil (evitar achatamiento)
                const profileImg = clonedDoc.querySelector('.profile-photo');
                if (profileImg) {
                    profileImg.style.width = '35mm';
                    profileImg.style.height = '35mm';
                    profileImg.style.minWidth = '35mm';
                    profileImg.style.minHeight = '35mm';
                    profileImg.style.objectFit = 'cover';
                    profileImg.style.display = 'block';
                }
                const profileContainer = clonedDoc.querySelector('.profile-photo-container');
                if (profileContainer) {
                    profileContainer.style.width = '35mm';
                    profileContainer.style.height = '35mm';
                    profileContainer.style.borderRadius = '50%';
                    profileContainer.style.overflow = 'hidden';
                    profileContainer.style.flexShrink = '0';
                    profileContainer.style.aspectRatio = '1 / 1';
                }

                // Forzar Mapa 2D y Ocultar 3D Completamente
                const wrapper3d = clonedDoc.querySelector('.skill-map-wrapper');
                const canvasContainer = clonedDoc.querySelector('#skill-canvas-container');
                const ui3d = clonedDoc.querySelector('.map-3d-ui');
                const bubble2d = clonedDoc.querySelector('.bubble-container');
                const bubbleSvg = clonedDoc.querySelector('.bubble-chart');
                const legend = clonedDoc.querySelector('.skill-map-legend');

                if (wrapper3d) wrapper3d.style.display = 'none';
                if (canvasContainer) canvasContainer.style.display = 'none';
                if (ui3d) ui3d.style.display = 'none';
                
                if (bubble2d) {
                    bubble2d.style.display = 'block';
                    bubble2d.style.opacity = '1';
                    bubble2d.style.visibility = 'visible';
                    bubble2d.style.width = '100%';
                    bubble2d.style.maxWidth = '180mm';
                    bubble2d.style.margin = '0 auto';
                }
                if (bubbleSvg) {
                    bubbleSvg.style.width = '100%';
                    bubbleSvg.style.height = 'auto';
                    bubbleSvg.style.display = 'block';
                    bubbleSvg.setAttribute('width', '450'); // Atributos fijos calibrados a hoja A4
                    bubbleSvg.setAttribute('height', '321');
                }
                if (legend) {
                    legend.style.display = 'flex';
                    legend.style.opacity = '1';
                    legend.style.visibility = 'visible';
                    legend.style.justifyContent = 'center';
                }

                // Asegurar que los textos del mapa se vean (Forzar blanco en digital oscuro)
                const isDigital = document.body.classList.contains('exporting-digital');
                if (isDigital) {
                    const labels = clonedDoc.querySelectorAll('.blabel');
                    labels.forEach(l => {
                        l.style.fill = '#ffffff';
                        l.style.fontSize = '12px'; // Más grande para PDF
                        l.style.fontWeight = 'bold';
                    });
                    const zoneLabels = clonedDoc.querySelectorAll('.zone-label');
                    zoneLabels.forEach(z => {
                        z.style.opacity = '1';
                        z.style.fontWeight = '900';
                        z.style.fontSize = '14px';
                    });
                }

                // Tarjetas
                const cards = clonedDoc.querySelectorAll('.glass');
                cards.forEach(card => {
                    card.style.backgroundColor = 'rgba(30, 41, 59, 0.6)';
                    card.style.backdropFilter = 'none';
                    card.style.boxShadow = 'none';
                });
            }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy'], // Evita cortes en mitad de elementos
            before: '.pdf-page-break',
            avoid: ['.glass', '.card-header', 'h2', '.gauge-item', '.timeline-item', '.edu-item']
        }
    }; 
    
    // 3. Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
        document.body.classList.remove('exporting-digital');
        window.scrollTo(0, originalScrollY); // Restore scroll
    }).catch(err => {
        console.error('Export error:', err);
        document.body.classList.remove('exporting-digital');
        window.scrollTo(0, originalScrollY);
    });
}
