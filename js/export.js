/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Handles high-fidelity PDF generation using html2pdf.js
 */

function exportDigitalCV() {
    const element = document.body; // Capture body to get the full background gradients
    
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
            allowTaint: true
        },
        jsPDF: { unit: 'in', format: 'tabloid', orientation: 'portrait' }
    };

    // 3. Generate PDF
    html2pdf().set(opt).from(element).toPdf().get('pdf').then(function (pdf) {
        // Optional: Any last minute PDF manipulation
    }).save().then(() => {
        document.body.classList.remove('exporting-digital');
    }).catch(err => {
        console.error('Export error:', err);
        document.body.classList.remove('exporting-digital');
    });
}
