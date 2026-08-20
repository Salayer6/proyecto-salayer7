/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Uses window.print() → "Save as PDF" to preserve
 * native text layer required by ATS parsers.
 */

function exportCV() {
    const isConductor = window.location.pathname.includes('conductor');
    const originalTitle = document.title;

    if (isConductor) {
        document.title = "Ignacio_Salas_Vega_CV_Conductor_Profesional_Bilingue";
    } else {
        document.title = "Ignacio_Salas_Vega_CV_Controller_Data_Engineering";
    }

    document.body.classList.add('print-lc');

    const cleanup = () => {
        document.body.classList.remove('print-lc');
        document.title = originalTitle;
        window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);

    setTimeout(() => {
        window.print();
        setTimeout(cleanup, 4000);
    }, 100);
}

function exportColorCV() { exportCV(); }
function exportBWCV()    { exportCV(); }
