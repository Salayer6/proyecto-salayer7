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
            scrollX: 0
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
