/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Uses window.print() → "Save as PDF" to preserve
 * native text layer required by ATS parsers.
 */

function exportCV() {
    const isConductor = window.location.pathname.includes('conductor');
    const originalTitle = document.title;

    if (isConductor) {
        document.title = "CV_Ignacio_Antonio_Salas_Vega";
    } else {
        document.title = "CV_Ignacio_Antonio_Salas_Vega";
    }

    // Inyectar estilo dinámico para forzar la eliminación de cabeza (título/fecha) y pie de página (URL/paginación)
    let dynamicStyle = document.getElementById('export-clean-print-style');
    if (!dynamicStyle) {
        dynamicStyle = document.createElement('style');
        dynamicStyle.id = 'export-clean-print-style';
        dynamicStyle.innerHTML = `
            @page {
                size: letter portrait;
                margin: 0;
            }
            @media print {
                header:not(.cv-header), footer, .export-banner, .web-only {
                    display: none !important;
                }
            }
        `;
        document.head.appendChild(dynamicStyle);
    }

    document.body.classList.add('print-lc');

    const cleanup = () => {
        document.body.classList.remove('print-lc');
        document.title = originalTitle;
        if (dynamicStyle && dynamicStyle.parentNode) {
            dynamicStyle.parentNode.removeChild(dynamicStyle);
        }
        window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);

    setTimeout(() => {
        window.print();
        setTimeout(cleanup, 4000);
    }, 100);
}

function exportColorCV() { exportCV(); }
function exportBWCV() { exportCV(); }
function exportToPDF() { exportCV(); }
function exportHarvardCV() { exportCV(); }

window.exportCV = exportCV;
window.exportToPDF = exportToPDF;
window.exportHarvardCV = exportHarvardCV;
window.exportColorCV = exportColorCV;
window.exportBWCV = exportBWCV;
