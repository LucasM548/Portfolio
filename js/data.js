// Données dynamiques et rendu DOM
// Les éléments sont injectés avant l'exécution de js/script.js (chargé ensuite dans index.html)

// ——— À propos (code-bio) ———
const developer = {
  name: 'Lucas Martinati',
  status: 'Étudiant & Développeur',
  passion: 'Créer des expériences digitales uniques',
  skills: ['JavaScript', 'React', 'Node.js', 'UI/UX'],
  mindset: 'Apprendre constamment et innover',
  currentFocus: 'Technologies modernes & Design créatif',
  availability: true,
  email: 'lucasm54800@gmail.com',
  comment: 'Prêt à collaborer sur des projets innovants !'
};

function renderCodeBio(dev) {
  const el = document.getElementById('code-content');
  if (!el) return;

  const pad2 = (n) => String(n).padStart(2, '0');
  const str = (s) => `<span class="string">'${s}'</span>`;
  const prop = (p) => `<span class="property">${p}</span>`;
  const val = (v) => `<span class="value">${v}</span>`;
  const arr = (list) => `[${list.map((it) => str(it)).join(', ')}]`;

  const lines = [
    `<span class="keyword">const</span> ${prop('developer')} = {`,
    `&nbsp;&nbsp;${prop('name')}: ${str(dev.name)},`,
    `&nbsp;&nbsp;${prop('status')}: ${str(dev.status)},`,
    `&nbsp;&nbsp;${prop('passion')}: ${str(dev.passion)},`,
    `&nbsp;&nbsp;${prop('skills')}: ${arr(dev.skills)},`,
    `&nbsp;&nbsp;${prop('mindset')}: ${str(dev.mindset)},`,
    `&nbsp;&nbsp;${prop('currentFocus')}: ${str(dev.currentFocus)},`,
    `&nbsp;&nbsp;${prop('availability')}: ${val(dev.availability)},`,
    `&nbsp;&nbsp;${prop('email')}: ${str(dev.email)}`,
    `};`,
    ``,
    `<span class="comment">// ${dev.comment}</span>`
  ];

  el.innerHTML = lines
    .map((content, i) => `
      <div class="code-line">
        <span class="line-number">${pad2(i + 1)}</span>
        ${content}
      </div>`)
    .join('');
}

// ——— Compétences ———
const skills = [
  {
    icon: '⚡',
    title: 'JavaScript ES6+',
    description:
      "Développement moderne avec les dernières fonctionnalités JavaScript, programmation asynchrone et manipulation du DOM avancée.",
    tags: ['ES6+', 'Async/Await', 'APIs']
  },
  {
    icon: '⚛️',
    title: 'React & Ecosystem',
    description:
      "Création d'interfaces utilisateur dynamiques et réactives avec React, Redux et les hooks modernes pour une expérience optimale.",
    tags: ['Hooks', 'Redux', 'Context API']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      "Conception d'expériences utilisateur intuitives et esthétiques, de la recherche utilisateur au prototype interactif.",
    tags: ['Figma', 'Prototyping', 'User Research']
  },
  {
    icon: '🔧',
    title: 'Backend Development',
    description:
      "Développement d'APIs robustes et scalables avec Node.js, gestion de bases de données et architecture microservices.",
    tags: ['Node.js', 'Express', 'MongoDB']
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      "Création d'interfaces adaptatifs pour tous les écrans, optimisation mobile-first et performance sur tous les dispositifs.",
    tags: ['Mobile-First', 'CSS Grid', 'Flexbox']
  },
  {
    icon: '🚀',
    title: 'Performance & SEO',
    description:
      'Optimisation des performances web, référencement naturel et bonnes pratiques pour des applications rapides et accessibles.',
    tags: ['Lighthouse', 'Web Vitals', 'A11y']
  }
];

// ——— Projets ———
const projects = [
  {
    image: '🎮',
    year: '2024',
    status: { label: 'En cours', className: 'status-in-progress' },
    title: 'Application Gaming Interactive',
    description:
      "Plateforme de jeu en ligne avec système de matchmaking en temps réel, chat intégré et statistiques avancées. Interface moderne avec animations fluides et effets 3D.",
    tags: ['React', 'WebRTC', 'Socket.io', 'Three.js'],
    link: { href: '#', text: 'Voir le projet' }
  },
  {
    image: '📊',
    year: '2023',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'Dashboard Analytics Avancé',
    description:
      "Interface de visualisation de données complexes avec graphiques interactifs, filtres dynamiques et export multi-format. Intégration d'APIs multiples et mise à jour en temps réel.",
    tags: ['Vue.js', 'D3.js', 'Chart.js', 'WebSockets'],
    link: { href: '#', text: 'Voir la démo' }
  },
  {
    image: '🌐',
    year: '2023',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'E-commerce Full-Stack',
    description:
      "Plateforme de vente complète avec gestion d'inventaire intelligent, système de paiement sécurisé, recommandations IA et interface d'administration avancée.",
    tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Redis'],
    link: { href: '#', text: 'Étude de cas' }
  },
  {
    image: '🎨',
    year: '2022',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'Portfolio Créatif 3D',
    description:
      'Site portfolio immersif avec environnement 3D interactif, physique réaliste et animations procedurales. Optimisé pour les performances sur mobile.',
    tags: ['Three.js', 'GLSL', 'Cannon.js', 'GSAP'],
    link: { href: '#', text: 'Voir le site' }
  }
];

// ——— Rendu ———
function renderSkills(list) {
  const container = document.getElementById('skills-container');
  if (!container) return;
  container.innerHTML = list
    .map(
      (s) => `
      <div class="skill-card">
        <div class="skill-header">
          <div class="skill-icon">${s.icon}</div>
          <div class="skill-title">${s.title}</div>
        </div>
        <p class="skill-description">${s.description}</p>
        <div class="skill-tags">
          ${s.tags.map((t) => `<span class="skill-tag">${t}</span>`).join('')}
        </div>
      </div>`
    )
    .join('');
}

function renderProjects(list) {
  const container = document.getElementById('projects-timeline');
  if (!container) return;
  container.innerHTML = list
    .map(
      (p) => `
      <div class="project-item">
        <div class="project-card">
          <div class="project-image">${p.image}</div>
          <div class="project-content">
            <div class="project-meta">
              <span class="project-year">${p.year}</span>
              <span class="project-status ${p.status.className}">${p.status.label}</span>
            </div>
            <h3 class="project-title">${p.title}</h3>
            <p class="project-description">${p.description}</p>
            <div class="project-footer">
              <div class="project-tags">
                ${p.tags.map((t) => `<span class="tag">${t}</span>`).join('')}
              </div>
              <a href="${p.link.href}" class="project-link">${p.link.text}</a>
            </div>
          </div>
        </div>
      </div>`
    )
    .join('');
}

// Rendus
renderCodeBio(developer);
renderSkills(skills);
renderProjects(projects);
