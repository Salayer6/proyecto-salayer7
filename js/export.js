/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Both modes use window.print() → "Save as PDF" to preserve
 * the native text layer required by ATS parsers (HiringRoom, 
 * Computrabajo, Workday, etc.)
 *
 * Modes:
 *  - Color (Digital): Dark background with full-color accents
 *  - Low-Color (B&W): White background, grayscale — printer-friendly
 */

/**
 * Exports the CV using the browser's native print dialog.
 * @param {'color'|'bw'} mode - 'color' for digital dark theme, 'bw' for grayscale
 */
function exportCV(mode) {


    // Apply the appropriate print class
    if (mode === 'color') {
        document.body.classList.add('print-color');
        document.body.classList.remove('print-bw');
    } else {
        document.body.classList.add('print-bw');
        document.body.classList.remove('print-color');
    }

    // Use a short timeout to let the CSS class apply before printing
    setTimeout(() => {
        window.print();
        // Clean up classes after print dialog closes
        document.body.classList.remove('print-color', 'print-bw');
    }, 100);
}

// Convenience wrappers called by the buttons in index.html
function exportColorCV() {
    exportCV('color');
}

function exportBWCV() {
    exportCV('bw');
}
