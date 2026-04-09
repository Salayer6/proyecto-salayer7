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
    
    // Calcular relleno perfecto para que el fondo llegue al final de la última página A4 (Aspect Ratio A4: 1.4142857)
    const a4Ratio = 297 / 210;
    const a4PixelHeight = element.scrollWidth * a4Ratio;
    const totalPagesNeeded = Math.ceil(element.scrollHeight / a4PixelHeight);
    const perfectPadding = (totalPagesNeeded * a4PixelHeight) - element.scrollHeight;
    
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
                    container.style.paddingBottom = `${perfectPadding}px`; // Sella matemáticamente la hoja final
                    container.style.margin = '0';
                    container.style.backgroundColor = '#1d1a2f';
                    container.style.backgroundImage = `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.05'/%3E%3C/svg%3E")`;
                    container.style.boxShadow = 'none';
                    container.style.minHeight = '100vh';
                }

                // Velocímetros
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

                // Corregir imagen de perfil (evitar achatamiento mediante background workaround)
                // html2canvas tiene un conocido bug donde ignora "object-fit: cover" y estruja imágenes no cuadradas.
                const profileImg = clonedDoc.querySelector('.profile-photo');
                const profileContainer = clonedDoc.querySelector('.profile-photo-container');
                
                if (profileImg && profileContainer) {
                    const imgSrc = profileImg.src;
                    
                    // Reemplazamos el elemento img por un cuadrado div con fondo para garantizar la geometría circular en el PDF
                    const bgDiv = clonedDoc.createElement('div');
                    bgDiv.style.backgroundImage = `url(${imgSrc})`;
                    bgDiv.style.backgroundSize = 'cover';
                    // Usamos center 10% para subir el encuadre y centrar en el rostro
                    bgDiv.style.backgroundPosition = 'center 10%'; 
                    bgDiv.style.width = '110px'; 
                    bgDiv.style.height = '110px';
                    bgDiv.style.minWidth = '110px';
                    bgDiv.style.minHeight = '110px';
                    bgDiv.style.borderRadius = '50%';
                    bgDiv.style.margin = '0 auto';
                    bgDiv.style.flexShrink = '0';
                    
                    profileContainer.innerHTML = ''; // Vaciar contenedor antiguo
                    profileContainer.appendChild(bgDiv);
                    
                    profileContainer.style.width = '110px';
                    profileContainer.style.height = '110px';
                    profileContainer.style.minWidth = '110px';
                    profileContainer.style.minHeight = '110px';
                    profileContainer.style.borderRadius = '50%';
                    profileContainer.style.overflow = 'hidden';
                    profileContainer.style.flex = '0 0 110px'; // Forzar que no crezca ni se achate
                    profileContainer.style.display = 'block';
                    profileContainer.style.alignSelf = 'flex-start';
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
            mode: ['css', 'legacy'], // Quitamos 'avoid-all' extremo para no forzar achatamiento al encajar elementos
            before: '.pdf-page-break',
            avoid: ['.card-header', 'h2', '.gauge-item', '.timeline-item', '.edu-item'] // Removido .glass
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
