/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

function exportDigitalCV() {
    // Capturamos el contenedor principal para evitar márgenes innecesarios del body
    const element = document.querySelector('.container'); 
    
    // 1. Prepare for export
    document.body.classList.add('exporting-digital');
    
    // 2. Configure html2pdf options
    const opt = {
        margin: 0,
        filename: 'CV Ignacio Antonio Salas Vega - Digital.pdf',
        image: { type: 'jpeg', quality: 1.0 },
        html2canvas: { 
            scale: 2, 
            useCORS: true, 
            backgroundColor: '#1d1a2f', // Match --bg-color
            logging: false,
            letterRendering: true,
            allowTaint: true,
            width: 800 // Forzamos ancho para que coincida con el CSS de exportación
        },
        jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' },
        pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
    };

    // 3. Generate PDF
    html2pdf().set(opt).from(element).save().then(() => {
        document.body.classList.remove('exporting-digital');
    }).catch(err => {
        console.error('Export error:', err);
        document.body.classList.remove('exporting-digital');
    });
}
