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
            backgroundColor: '#1d1a2f', 
            logging: false,
            letterRendering: false, 
            allowTaint: true,
            width: 800, 
            scrollY: 0, 
            scrollX: 0,
            onclone: (clonedDoc) => {
                // Forzar que los SVGs de los velocímetros se vean en la captura
                const gauges = clonedDoc.querySelectorAll('.gauge');
                gauges.forEach(svg => {
                    svg.setAttribute('width', '100');
                    svg.setAttribute('height', '100');
                    
                    const fills = svg.querySelectorAll('.gauge-fill');
                    fills.forEach(path => {
                        // Eliminamos filtros que rompen html2canvas
                        path.style.filter = 'none';
                        path.style.strokeWidth = '14';
                    });
                });

                // Sincronizar fondo oscuro con el del sitio real (#1d1a2f)
                clonedDoc.documentElement.style.backgroundColor = '#1d1a2f';
                clonedDoc.body.style.backgroundColor = '#1d1a2f';
                
                // Asegurar que las tarjetas tengan un fondo sólido para evitar fallos de renderizado
                const cards = clonedDoc.querySelectorAll('.glass');
                cards.forEach(card => {
                    card.style.backgroundColor = 'rgba(30, 41, 59, 0.6)';
                    card.style.backdropFilter = 'none';
                });
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
