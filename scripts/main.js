// Component Loader
async function loadComponent(componentName, containerId) {
    try {
        const response = await fetch(`./components/${componentName}.html`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        document.getElementById(containerId).innerHTML = html;
        console.log(`Component ${componentName} loaded successfully!`);
    } catch (error) {
        console.error(`Error loading component ${componentName}:`, error);
    }
}

// Initialize all functionality after components are loaded
async function initializeApp() {
    // Load all components first
    await loadComponent('navbar', 'navbar-container');
    await loadComponent('inicio', 'inicio-container');
    await loadComponent('sobremim', 'sobremim-container');
    await loadComponent('skills', 'skills-container');
    await loadComponent('portfolio', 'portfolio-container');
    await loadComponent('contatos', 'contatos-container');
    
    console.log('All components loaded successfully!');
    
    // Wait a bit for components to be fully rendered
    setTimeout(() => {
        initializeNavigation();
        initializeAnimations();
    }, 100);
}

// Navigation functionality
function initializeNavigation() {
    // Navegação suave para links âncora
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Destacar link ativo na navegação durante o scroll
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-link');

    function highlightNavOnScroll() {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navItems.forEach(item => {
            item.classList.remove('active');
            if (item.getAttribute('href') === `#${current}`) {
                item.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', highlightNavOnScroll);
    
    console.log('Navigation initialized');
}

// Animation functionality
function initializeAnimations() {
    const sections = document.querySelectorAll('section[id]');
    
    // Animação de fade-in para elementos quando entram na viewport
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar seções para animação
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    console.log('Animations initialized');
}

// Load all components when DOM is ready
document.addEventListener('DOMContentLoaded', initializeApp);