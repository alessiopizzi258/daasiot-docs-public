// Nascondi tutto finché non siamo pronti
document.addEventListener('DOMContentLoaded', function() {
    // 1. NASCONDI TUTTO IMMEDIATAMENTE
    document.body.style.opacity = '0';
    document.body.style.visibility = 'hidden';
    
    // 2. Crea header personalizzato
    const customHeader = document.createElement('header');
    customHeader.className = 'custom-header';
    customHeader.innerHTML = `
        <div class="custom-header-container">
            <div class="custom-logo">
                <a href="https://daasiot.sebyone.it/">DaaSIoT</a>
            </div>
        </div>
    `;
    
    // 3. Crea footer personalizzato
    const customFooter = document.createElement('footer');
    customFooter.className = 'custom-footer';
    customFooter.innerHTML = `
        <div class="custom-footer-container">
            <div class="footer-info">
                <a href="https://www.sebyone.it/" target="_blank" rel="noopener noreferrer">SebyOne Srl</a>
                <span class="separator">|</span>
                <span>P.IVA 03784730789</span>
                <span class="separator">|</span>
                <a href="https://daasiot.sebyone.it/legal-notice/" target="_blank" rel="noopener noreferrer">Legal notice</a>
                <span class="separator">|</span>
                <a href="https://daasiot.sebyone.it/privacy-policy/" target="_blank" rel="noopener noreferrer">Privacy policy</a>
            </div>
            <div class="footer-copyright">
                © 2025 SebyOne Srl
            </div>
        </div>
    `;
    
    // 4. Inserisci header all'inizio del body
    document.body.insertBefore(customHeader, document.body.firstChild);
    
    // 5. Inserisci footer alla fine del body
    document.body.appendChild(customFooter);
    
    // 6. Assicurati che header e footer originali siano nascosti
    const originalHeader = document.querySelector('.md-header');
    const originalFooter = document.querySelector('.md-footer');
    
    if (originalHeader) {
        originalHeader.style.display = 'none';
        originalHeader.style.visibility = 'hidden';
    }
    if (originalFooter) {
        originalFooter.style.display = 'none';
        originalFooter.style.visibility = 'hidden';
    }
    
    // 7. Aggiusta il margine per l'header fisso
    const mainContent = document.querySelector('.md-main');
    if (mainContent) {
        mainContent.style.marginTop = '60px';
    }
    
    // 8. MOSTRA TUTTO SOLO DOPO AVER COMPLETATO
    setTimeout(function() {
        document.body.style.opacity = '1';
        document.body.style.visibility = 'visible';
        document.body.classList.add('loaded');
    }, 50); // Piccolo delay per sicurezza
});

// Backup: nascondi tutto anche durante il caricamento
window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    document.body.classList.add('loaded');
});