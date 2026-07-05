/**
 * Export Logic for Ignacio Salas Vega Portfolio
 * Uses window.print() → "Save as PDF" to preserve
 * the native text layer required by ATS parsers (HiringRoom,
 * Computrabajo, Workday, etc.)
 *
 * Single mode: Low-color professional style — clean, minimal accents
 */

/**
 * Exports the CV using the browser's native print dialog.
 * Applies a single unified low-color print style.
 */
function exportCV() {
    document.body.classList.add('print-lc');

    const cleanup = () => {
        document.body.classList.remove('print-lc');
        window.removeEventListener('afterprint', cleanup);
    };

    window.addEventListener('afterprint', cleanup);

    setTimeout(() => {
        window.print();
        // Fallback cleanup in case afterprint doesn't fire (e.g. some iOS Safari versions)
        setTimeout(cleanup, 5000);
    }, 100);
}

// Legacy aliases kept for safety (no longer used by the UI)
function exportColorCV() { exportCV(); }
function exportBWCV()    { exportCV(); }
