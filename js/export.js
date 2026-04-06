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
    
    // 2. Configure html2pdf options (A4 Metrics)
    const opt = {
        margin: [10, 10, 10, 10], // Margen de 10mm en todos lados
        filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 2,
            useCORS: true, 
            backgroundColor: '#1d1a2f', 
            logging: false,
            // Quitamos width/windowWidth fijos de aquí para dejar que html2pdf calcule según el elemento
            scrollY: 0, 
            scrollX: 0,
            onclone: (clonedDoc) => {
                // Forzar que el clon use medidas métricas para A4
                clonedDoc.documentElement.style.width = '210mm';
                clonedDoc.body.style.width = '210mm';
                clonedDoc.body.style.margin = '0';
                clonedDoc.body.style.padding = '0';
                clonedDoc.body.style.backgroundColor = '#1d1a2f';

                const container = clonedDoc.querySelector('.container');
                if (container) {
                    container.style.width = '190mm'; // 210mm - 20mm de margen (10mm por lado)
                    container.style.padding = '10mm';
                    container.style.margin = '0 auto';
                    container.style.backgroundColor = '#1d1a2f';
                    container.style.backgroundImage = 'none';
                    container.style.boxShadow = 'none';
                    container.style.minHeight = '297mm'; // Altura de al menos una página A4
                }

                // Asegurar que los SVGs de los velocímetros se vean
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

                // Tarjetas con fondo sólido
                const cards = clonedDoc.querySelectorAll('.glass');
                cards.forEach(card => {
                    card.style.backgroundColor = 'rgba(30, 41, 59, 0.6)';
                    card.style.backdropFilter = 'none';
                    card.style.boxShadow = 'none';
                });
            }
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }, // pt da mejor precisión para links
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
