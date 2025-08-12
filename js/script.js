// Smooth scrolling sécurisé (ignore href="#" et ancres manquantes)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = this.getAttribute('href');
        const isHash = target && target.startsWith('#') && target.length > 1;
        if (!isHash) return; // laisser le comportement par défaut (ex: href="#")
        const el = document.querySelector(target);
        if (!el) return;
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
    });
});

// Effet souris uniquement sur le fond (mouse-glow)
const root = document.documentElement;
document.addEventListener('mousemove', (e) => {
    root.style.setProperty('--mouse-x', `${e.clientX}px`);
    root.style.setProperty('--mouse-y', `${e.clientY}px`);
});

// Animation d'entrée
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observer tous les éléments à animer
document.querySelectorAll('.skill-card, .project-item, .code-bio').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Animation spéciale pour les projets
const projectItems = document.querySelectorAll('.project-item');
projectItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.2}s`;
});

// Animation typewriter pour le code
const codeLines = document.querySelectorAll('.code-line');
codeLines.forEach((line, index) => {
    line.style.animationDelay = `${index * 0.2}s`;
});

// Parallax supprimé (conflit avec l'animation CSS des formes)

// Effet hover 3D pour les cartes projet
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        // Normaliser et borner la position pour réduire l'effet aux coins
        let percentX = (x - centerX) / centerX; // [-1, 1]
        let percentY = (y - centerY) / centerY; // [-1, 1]
        const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
        percentX = clamp(percentX, -0.8, 0.8);
        percentY = clamp(percentY, -0.8, 0.8);
        // Angle max réduit pour un hover plus subtil
        const maxTilt = 5; // degrés
        const rotateX = -(percentY * maxTilt); // inversé pour un mouvement naturel
        const rotateY = percentX * maxTilt;

        card.style.transform = `perspective(1800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1800px) rotateX(0) rotateY(0) translateZ(0)';
    });
});

// (Formulaire supprimé du HTML) — gestionnaire retiré

// Animation des compétences au scroll
const skillCards = document.querySelectorAll('.skill-card');
skillCards.forEach((card, index) => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px) rotateY(5deg) scale(1.05)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) rotateY(0) scale(1)';
    });
});