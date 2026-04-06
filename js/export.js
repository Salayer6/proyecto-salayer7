/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

function exportDigitalCV() {
    // 1. Prepare for export
    document.body.classList.add('exporting-digital');
    const originalScrollY = window.scrollY;
    window.scrollTo(0, 0);
    
    // El elemento a capturar es ahora el body para asegurar que el fondo cubra todo el PDF
    const element = document.body;
    
    // 2. Configure html2pdf options
    const opt = {
        margin: 0,
        filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { 
            scale: 2,
            useCORS: true, 
            backgroundColor: '#1d1a2f', 
            logging: false,
            width: 794, // Ancho exacto A4 (210mm a 96dpi)
            windowWidth: 794,
            scrollY: 0, 
            scrollX: 0,
            onclone: (clonedDoc) => {
                // Forzar dimensiones y fondo en el documento clonado
                clonedDoc.documentElement.style.width = '794px';
                clonedDoc.body.style.width = '794px';
                clonedDoc.body.style.backgroundColor = '#1d1a2f';
                
                // Asegurar que el contenido relevante ocupe el ancho completo sin márgenes
                const container = clonedDoc.querySelector('.container');
                if (container) {
                    container.style.width = '794px';
                    container.style.margin = '0';
                    container.style.padding = '0.5rem 1.5rem 5rem 1.5rem';
                }

                // Forzar que los SVGs de los velocímetros se vean
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
