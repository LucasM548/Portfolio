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
    icon: '🌐',
    title: 'Sites Web',
    description:
      "Création de sites web modernes et responsives avec HTML, CSS et JavaScript.",
    tags: ['HTML', 'CSS', 'JavaScript']
  },
  {
    icon: '🎨',
    title: 'UI/UX Design',
    description:
      "Conception d'expériences utilisateur intuitives et esthétiques, de la recherche utilisateur au prototype interactif.",
    tags: ['Design']
  },
  {
    icon: '📱',
    title: 'Responsive Design',
    description:
      "Création d'interfaces adaptatifs pour tous les écrans, optimisation pour mobile et performance sur tous les dispositifs.",
    tags: ['Mobile', 'Performance']
  }
];

// ——— Projets ———
const projects = [
  {
    image: '🍐',
    year: '2023',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'Pear Search',
    description:
      "Le meilleur moteur de recherche de tous les temps, il vous permettra de trouver ce que vous cherchez tout en vous laissant flâner sur le web. Vous pouvez oublier vos données personnelles, qui seront stockées directement sur nos serveurs pour vous simplifier la vie.",
    tags: ['html', 'css', 'js'],
    link: { href: 'https://lucasm548.github.io/Pear-Search/', text: 'Voir le site' }
  },
  {
    image: '📥',
    year: '2024',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'Applications Automatical Installer',
    description:
      "Permet l’installation automatique des applications sélectionnées.",
    tags: ['Python', 'PyQt5', 'requests', 'json'],
    link: { href: 'https://github.com/LucasM548/Applications_Automatical_Installer', text: 'voir le Repository' }
  },
  {
    image: '💎',
    year: '2025',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'Stones Collection',
    description:
      "Site pour stockée la liste des pierres que ma copine possède.",
    tags: ['html', 'css', 'js', "base de données", "API"],
    link: { href: 'https://stones-collection.netlify.app/', text: 'Voir le site' }
  },
  {
    image: '🎮',
    year: '2025',
    status: { label: 'Terminé', className: 'status-completed' },
    title: 'Report with WintrChess',
    description:
      "Transférez facilement vos parties d’échecs depuis Lichess et Chess.com vers WintrChess pour une analyse approfondie. Disponible sous forme de script Tampermonkey et d’extension Chrome.",
    tags: ['Chrome extension', 'js'],
    link: { href: 'https://chromewebstore.google.com/detail/free-analyze-with-wintrch/ljjbgidgpkhjenpgpjfjidfflnelmpan', text: 'Chrome web store' }
  },
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
