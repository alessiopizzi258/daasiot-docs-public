document.addEventListener('DOMContentLoaded', function() {
    // Preload fonts
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = 'https://fonts.googleapis.com';
    document.head.appendChild(link);
    
    const link2 = document.createElement('link');
    link2.rel = 'preconnect';
    link2.href = 'https://fonts.gstatic.com';
    link2.crossOrigin = 'crossorigin';
    document.head.appendChild(link2);
    
    const link3 = document.createElement('link');
    link3.rel = 'stylesheet';
    link3.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300..800;1,300..800&family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap';
    document.head.appendChild(link3);
    
    // Nascondi tutto
    document.body.style.opacity = '0';
    document.body.style.visibility = 'hidden';
    
    // Crea header
    const header = document.createElement('header');
    header.className = 'custom-header';
    header.innerHTML = `
        <div class="custom-header-container">
            <button class="mobile-menu-toggle" aria-label="Apri menu">
                <span></span>
                <span></span>
                <span></span>
            </button>
            
            <div class="header-left">
                <div class="custom-logo">
                    <a href="/">DaaS-IoT</a>
                </div>
            </div>
            
            <div class="header-center">
                <span class="documentation-text">Documentation</span>
            </div>
            
            <div class="header-right">
                <div class="header-links">
                    <a href="/contacts/" class="header-link">Riferimenti</a>
                    <a href="/community/" class="header-link">Community</a>
                    <a href="/download/" class="header-link">Download</a>
                </div>
                <button class="mobile-secondary-toggle" aria-label="Menu aggiuntivo">
                    <span>⋮</span>
                </button>
            </div>
        </div>
        
        <div class="mobile-overlay"></div>
        <nav class="mobile-nav">
            <div class="mobile-nav-header">
                <button class="mobile-menu-close" aria-label="Chiudi menu">×</button>
            </div>
            <div class="mobile-nav-content"></div>
        </nav>
        
        <div class="mobile-secondary-menu">
            <div class="mobile-secondary-header">
                <button class="mobile-secondary-close" aria-label="Chiudi menu">×</button>
            </div>
            <div class="mobile-secondary-links">
                <a href="/contacts/" class="mobile-secondary-link">Riferimenti/Contatti</a>
                <a href="/community/" class="mobile-secondary-link">Community</a>
                <a href="/download/" class="mobile-secondary-link">Download</a>
            </div>
        </div>
    `;
    
    // Crea footer
    const footer = document.createElement('footer');
    footer.className = 'custom-footer';
    footer.innerHTML = `
        <div class="custom-footer-container">
            <div class="footer-info">
                <a href="https://www.sebyone.it/">SebyOne Srl</a>
                <span class="separator">|</span>
                <span>P.IVA 03784730789</span>
                <span class="separator">|</span>
                <a href="/legal-notice/">Legal notice</a>
                <span class="separator">|</span>
                <a href="/privacy-policy/">Privacy policy</a>
            </div>
            <div class="footer-copyright">© 2025 SebyOne Srl</div>
        </div>
    `;
    
    // Inserisci nel DOM
    document.body.prepend(header);
    document.body.appendChild(footer);
    
    // Copia navigazione e aggiungi funzionalità espandibile
    setTimeout(() => {
        const sidebar = document.querySelector('.md-nav--primary .md-nav__list');
        const mobileNav = document.querySelector('.mobile-nav-content');
        
        if (sidebar && mobileNav) {
            mobileNav.innerHTML = sidebar.innerHTML;
            
            // Aggiungi gestione menu espandibili
            initExpandableMenus();
            
            // Gestione click sui link normali
            mobileNav.querySelectorAll('a').forEach(link => {
                if (!link.closest('.md-nav__item--nested')) {
                    link.addEventListener('click', closeMenu);
                }
            });
        }
        
        // Aggiungi metadati documentazione se non siamo in homepage
        if (!document.body.classList.contains('homepage-layout')) {
            addDocumentationMetadata();
        }
        
    }, 100);
    
    // Gestione menu principale
    const toggle = document.querySelector('.mobile-menu-toggle');
    const close = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.mobile-overlay');
    const nav = document.querySelector('.mobile-nav');
    
    // Gestione menu secondario mobile
    const secondaryToggle = document.querySelector('.mobile-secondary-toggle');
    const secondaryClose = document.querySelector('.mobile-secondary-close');
    const secondaryMenu = document.querySelector('.mobile-secondary-menu');
    
    function openMenu() {
        document.body.style.overflow = 'hidden';
        nav.classList.add('active');
        overlay.classList.add('active');
    }
    
    function closeMenu() {
        document.body.style.overflow = '';
        nav.classList.remove('active');
        overlay.classList.remove('active');
        secondaryMenu.classList.remove('active');
    }
    
    function openSecondaryMenu() {
        secondaryMenu.classList.add('active');
        overlay.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeSecondaryMenu() {
        secondaryMenu.classList.remove('active');
        if (!nav.classList.contains('active')) {
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        }
    }
    
    if (toggle) toggle.addEventListener('click', openMenu);
    if (close) close.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);
    
    if (secondaryToggle) secondaryToggle.addEventListener('click', openSecondaryMenu);
    if (secondaryClose) secondaryClose.addEventListener('click', closeSecondaryMenu);
    
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeMenu();
    });

    // FUNZIONE: Inizializza menu espandibili mobile
    function initExpandableMenus() {
        const nestedItems = document.querySelectorAll('.mobile-nav-content .md-nav__item--nested');
        
        nestedItems.forEach(item => {
            const link = item.querySelector('.md-nav__link');
            const sublist = item.querySelector('.md-nav__list');
            
            if (link && sublist) {
                // Espandi automaticamente il menu attivo
                const activeLink = sublist.querySelector('.md-nav__link--active');
                if (activeLink) {
                    item.classList.add('expanded');
                }
                
                link.addEventListener('click', function(e) {
                    e.preventDefault();
                    e.stopPropagation();
                    
                    const isExpanded = item.classList.contains('expanded');
                    
                    // Chiudi tutti gli altri menu aperti (tranne con Ctrl)
                    if (!e.ctrlKey) {
                        nestedItems.forEach(otherItem => {
                            if (otherItem !== item && !otherItem.contains(item)) {
                                otherItem.classList.remove('expanded');
                            }
                        });
                    }
                    
                    // Apri/chiudi il menu corrente
                    item.classList.toggle('expanded', !isExpanded);
                });
            }
        });
    }
    
    // FUNZIONE: Aggiungi metadati documentazione
    function addDocumentationMetadata() {
        const content = document.querySelector('.md-content');
        if (!content) return;
        
        const pageTitle = document.querySelector('h1');
        if (!pageTitle) return;
        
        // Crea elemento metadati
        const metadata = document.createElement('div');
        metadata.className = 'doc-metadata';
        
        // Estrai informazioni
        const pageMeta = extractPageMetadata();
        
        metadata.innerHTML = `
            <div class="doc-metadata-grid">
                <div class="doc-metadata-label">📅 Ultimo aggiornamento:</div>
                <div class="doc-metadata-value">${pageMeta.lastUpdated}</div>
                
                <div class="doc-metadata-label">👨‍💻 Autore:</div>
                <div class="doc-metadata-value">
                    ${pageMeta.author} <span class="doc-metadata-badge">${pageMeta.status}</span>
                </div>
                
                <div class="doc-metadata-label">📞 Contatti:</div>
                <div class="doc-metadata-value">
                    <a href="https://www.sebyone.it" target="_blank">www.sebyone.it</a> | 
                    <a href="mailto:info@sebyone.it">info@sebyone.it</a>
                </div>
                
                <div class="doc-metadata-label">🚀 Versione:</div>
                <div class="doc-metadata-value">${pageMeta.version}</div>
            </div>
        `;
        
        // Inserisci dopo il titolo
        if (pageTitle.nextSibling) {
            content.insertBefore(metadata, pageTitle.nextSibling);
        } else {
            content.appendChild(metadata);
        }
    }

    // FUNZIONE: Estrai metadati automaticamente
    function extractPageMetadata() {
        // 1. Prova a prendere data dal plugin git-revision-date
        let lastUpdated = 'Informazione non disponibile';
        const gitDateElement = document.querySelector('.git-revision-date-localized-plugin');
        if (gitDateElement) {
            lastUpdated = gitDateElement.textContent || gitDateElement.getAttribute('title') || gitDateElement.innerText;
        } else {
            // Fallback: data corrente
            lastUpdated = getCurrentDate();
        }
        
        // 2. Prova a prendere autori dal plugin git-committers
        let author = 'SebyOne Team';
        const committersElements = document.querySelectorAll('.git-committers-plugin a');
        if (committersElements.length > 0) {
            const authorNames = Array.from(committersElements).map(a => a.textContent.trim()).join(', ');
            author = authorNames;
        }
        
        // 3. Cerca metadati nel front matter
        const metaTags = document.querySelectorAll('meta[name*="author"], meta[name*="date"], meta[name*="version"], meta[name*="status"]');
        let status = 'Ufficiale';
        let version = '1.0';
        
        metaTags.forEach(tag => {
            const name = tag.getAttribute('name');
            const content = tag.getAttribute('content');
            
            if (name && content) {
                if (name.includes('author')) author = content;
                if (name.includes('date')) lastUpdated = formatDate(content);
                if (name.includes('version')) version = content;
                if (name.includes('status')) status = content;
            }
        });

        return {
            lastUpdated,
            author,
            status,
            version
        };
    }

    function getCurrentDate() {
        const now = new Date();
        const options = { 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            timeZone: 'Europe/Rome'
        };
        return now.toLocaleDateString('it-IT', options);
    }

    function formatDate(dateString) {
        try {
            const date = new Date(dateString);
            const options = { 
                year: 'numeric', 
                month: 'long', 
                day: 'numeric',
                timeZone: 'Europe/Rome'
            };
            return date.toLocaleDateString('it-IT', options);
        } catch (e) {
            return dateString;
        }
    }
    
    // Mostra tutto
    setTimeout(() => {
        document.body.style.opacity = '1';
        document.body.style.visibility = 'visible';
        document.body.classList.add('loaded');
    }, 50);
});

window.addEventListener('load', function() {
    document.body.style.opacity = '1';
    document.body.style.visibility = 'visible';
    document.body.classList.add('loaded');
});