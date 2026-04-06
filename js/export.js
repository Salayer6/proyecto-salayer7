/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

function exportDigitalCV() {
    // Capturamos el contenedor principal para evitar márgenes innecesarios del body
    const element = document.querySelector('.container'); 
    
    // 1. Prepare for export: Add class and reset scroll to prevent blank pages
    document.body.classList.add('exporting-digital');
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);
    
    // 2. Configure html2pdf options
    const opt = {
        margin: 0, // El margen 0 en html2pdf es clave para que los links no se desplacen
        filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 2, // 2x es el sweet spot para nitidez y precisión de links
            useCORS: true, 
            backgroundColor: '#11101d', 
            logging: false,
            letterRendering: false, 
            allowTaint: true,
            width: 800, 
            scrollY: 0, 
            scrollX: 0,
            onclone: (clonedDoc) => {
                // Fix para asegurar que los SVGs de los velocímetros se vean en la captura
                const gauges = clonedDoc.querySelectorAll('.gauge');
                gauges.forEach(svg => {
                    svg.setAttribute('width', '100');
                    svg.setAttribute('height', '100');
                    
                    // Asegurar que los paths interiores tengan trazos visibles y sin filtros hardcodificados
                    const fills = svg.querySelectorAll('.gauge-fill');
                    fills.forEach(path => {
                        // Resolvemos el color computado para que html2canvas no use variables CSS (que a veces fallan en clone)
                        const computedStyle = window.getComputedStyle(path);
                        const resolvedColor = computedStyle.stroke;
                        
                        // Si es el de Afecto (que usa gradiente), lo forzamos a color sólido rosa premium
                        if (path.classList.contains('gauge-fill-affection')) {
                            path.style.stroke = '#f472b6'; 
                        } else if (resolvedColor && resolvedColor !== 'none') {
                            path.style.stroke = resolvedColor;
                        }
                        
                        // Forzamos visibilidad eliminando filtros que rompen html2canvas (como drop-shadows complejos)
                        path.style.filter = 'none';
                        path.style.strokeWidth = '14'; // Un poco más grueso ayuda en la captura a 2x
                    });
                });

                // Extender el fondo texturizado al fondo del documento clonado para evitar trailing whitespace
                const container = clonedDoc.querySelector('.container');
                if (container) {
                    container.style.minHeight = '100%';
                    clonedDoc.body.style.backgroundColor = '#11101d';
                    clonedDoc.body.style.backgroundImage = container.style.backgroundImage;
                }
            }
        },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }, // pt da mejor precisión para links
        pagebreak: { 
            mode: ['avoid-all', 'css', 'legacy'],
            before: '.pdf-page-break',
            avoid: ['h1', 'header', '.card-header', '.contact-item']
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
