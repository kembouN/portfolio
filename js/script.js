// Theme toggle script
const toggleBtn = document.getElementById("toggle-theme");
const html = document.documentElement;

function toggleTheme() {
  const current = html.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  html.setAttribute("data-theme", next);
  localStorage.setItem("theme", next);
}

if (toggleBtn) {
  toggleBtn.addEventListener("click", toggleTheme);
}

const storedTheme = localStorage.getItem("theme");
if (storedTheme) {
  html.setAttribute("data-theme", storedTheme);
}

// Scroll progress bar
const scrollBar = document.createElement("div");
scrollBar.id = "scroll-bar";
document.body.prepend(scrollBar);

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollBar.style.width = scrollPercent + "%";
});

// Effet de trace de curseur
// window.addEventListener("mousemove", (e) => {
//   const dot = document.createElement("div");
//   dot.className = "cursor-line";

//   // Position
//   dot.style.left = `${e.pageX}px`;
//   dot.style.top = `${e.pageY}px`;

//   // Couleur aléatoire à chaque mouvement
//   const hue = Math.floor(Math.random() * 360);
//   dot.style.backgroundColor = `hsl(${hue}, 100%, 60%)`;

//   document.body.appendChild(dot);

//   // Disparaît automatiquement
//   setTimeout(() => {
//     dot.remove();
//   }, 800);
// });

window.addEventListener("mousemove", (e) => {
  const trail = document.createElement("div");
  trail.className = "cursor-trail";
  trail.style.left = `${e.pageX}px`;
  trail.style.top = `${e.pageY}px`;
  document.body.appendChild(trail);

  setTimeout(() => {
    trail.remove();
  }, 5000);
});

// MISE EN PLACE DE LA TRADUCTION
// const translations = {
//   fr: {
//     "nav.about": "À propos",
//     "nav.skills": "Compétences",
//     "nav.projects": "Projets",
//     "nav.contact": "Contact",
//     "intro.title": "Développeur Backend Spring Boot / Laravel",
//     "intro.desc": "Concepteur de solutions web robustes...",
//     "intro.download": "Télécharger mon CV"
//   },
//   en: {
//     "nav.about": "About",
//     "nav.skills": "Skills",
//     "nav.projects": "Projects",
//     "nav.contact": "Contact",
//     "intro.title": "Backend Developer Spring Boot / Laravel",
//     "intro.desc": "Builder of robust web solutions, REST API developer, ",
//     "intro.download": "Download my CV"
//   }
// };

const translations = {
  fr: {
    "title": "KEMBOU NIMPA — Portfolio",
    "name": "KEMBOU NIMPA",
    "nav": {
      "about": "À propos",
      "skills": "Compétences",
      "projects": "Projets",
      "contact": "Contact"
    },
    "intro": {
      "title": "Développeur Backend Spring Boot / Laravel",
      "desc": "Concepteur de solutions web robustes, développeur REST API, passionné par la qualité logicielle.",
      "download": "Télécharger mon CV",
      "alt": "Photo de profil"
    },
    "about": {
      "content": "Développeur web spécialisé dans le backend, je conçois et développe des APIs performantes et sécurisées avec Java Spring Boot et Laravel. J'ai aussi une bonne maîtrise d'Angular 19 pour le frontend et je m'intéresse à l'optimisation DevOps (Docker, GitLab CI/CD)."
    },
    "skills": {
      "languages": "<strong>Langages</strong><br/>Java, PHP, TypeScript, HTML5, CSS3",
      "frameworks": "<strong>Frameworks</strong><br/>Spring Boot, Laravel, Angular 19",
      "databases": "<strong>Bases de données</strong><br/>MySQL, PostgreSQL",
      "tools": "<strong>Outils</strong><br/>Docker, Git, GitHub, GitLab, Jira, Postman, Swagger",
      "collaboration": "<strong>Collaboration</strong><br/>Teams, Slack, Confluence, Trello, SharePoint",
      "personal": "<strong>Personnelles</strong><br/>Adaptabilité, pensée d'analyse, communication"
    },
    "projects": {
      "copilothrm": {
        "title": "CopilotHRM",
        "desc": "Application RH développée avec Spring Boot 3 pour <strong>Abyster Consulting</strong>, gestion des utilisateurs, rôles, contrat de travail."
      },
      "jobfinder": {
        "title": "JobFinder",
        "desc": "Application de recherche d'emploi fullstack (Angular 19 + Spring Boot), projet personnel."
      },
      "magnolia": {
        "title": "Magnolia",
        "desc": "Application de gestion d'un laboratoire d'analyse biomédicale avec Laravel 9 pour <strong>Abyster Consulting</strong>."
      },
      "teleconsultation": {
        "title": "Téléconsultation",
        "desc": "Application de consultation médicale en ligne et gestion des rendez-vous avec Laravel 9 pour <strong>Abyster Consulting</strong>."
      }
    },
    "contact": {
      "email": "Email : <a href=\"mailto:karlsonkit87@gmail.com\">karlsonkit87@gmail.com</a>",
      "github": "GitHub : <a href=\"https://github.com/kembouN\" target=\"_blank\">https://github.com/kembouN</a>",
      "linkedin": "LinkedIn : <a href=\"https://www.linkedin.com/in/karlson-kembou-2b1501328/\" target=\"_blank\">https://www.linkedin.com/in/karlson-kembou-2b1501328/</a>"
    },
    "footer": {
      "copyright": "&copy; 2024 KEMBOU NIMPA. Tous droits réservés."
    }
  },
  en: {
    "title": "KEMBOU NIMPA — Portfolio",
    "name": "KEMBOU NIMPA",
    "nav": {
      "about": "About",
      "skills": "Skills",
      "projects": "Projects",
      "contact": "Contact"
    },
    "intro": {
      "title": "Spring Boot / Laravel Backend Developer",
      "desc": "Designer of robust web solutions, REST API developer, passionate about software quality.",
      "download": "Download my CV",
      "alt": "Profile picture"
    },
    "about": {
      "content": "Web developer specialized in backend, I design and develop performant and secure APIs with Java Spring Boot and Laravel. I also have good mastery of Angular 19 for frontend and I'm interested in DevOps optimization (Docker, GitLab CI/CD)."
    },
    "skills": {
      "languages": "<strong>Languages</strong><br/>Java, PHP, TypeScript, HTML5, CSS3",
      "frameworks": "<strong>Frameworks</strong><br/>Spring Boot, Laravel, Angular 19",
      "databases": "<strong>Databases</strong><br/>MySQL, PostgreSQL",
      "tools": "<strong>Tools</strong><br/>Docker, Git, GitHub, GitLab, Jira, Postman, Swagger",
      "collaboration": "<strong>Collaboration</strong><br/>Teams, Slack, Confluence, Trello, SharePoint",
      "personal": "<strong>Personal</strong><br/>Adaptability, analytical thinking, communication"
    },
    "projects": {
      "copilothrm": {
        "title": "CopilotHRM",
        "desc": "HR application developed with Spring Boot 3 for <strong>Abyster Consulting</strong>, user management, roles, work contracts."
      },
      "jobfinder": {
        "title": "JobFinder",
        "desc": "Fullstack job search application (Angular 19 + Spring Boot), personal project."
      },
      "magnolia": {
        "title": "Magnolia",
        "desc": "Biomedical analysis laboratory management application with Laravel 9 for <strong>Abyster Consulting</strong>."
      },
      "teleconsultation": {
        "title": "Teleconsultation",
        "desc": "Online medical consultation application and appointment management with Laravel 9 for <strong>Abyster Consulting</strong>."
      }
    },
    "contact": {
      "email": "Email : <a href=\"mailto:karlsonkit87@gmail.com\">karlsonkit87@gmail.com</a>",
      "github": "GitHub : <a href=\"https://github.com/kembouN\" target=\"_blank\">https://github.com/kembouN</a>",
      "linkedin": "LinkedIn : <a href=\"https://www.linkedin.com/in/karlson-kembou-2b1501328/\" target=\"_blank\">https://www.linkedin.com/in/karlson-kembou-2b1501328/</a>"
    },
    "footer": {
      "copyright": "&copy; 2024 KEMBOU NIMPA. All rights reserved."
    }
  }
};

document.getElementById("lang-switcher").addEventListener("change", (e) => {
  const lang = e.target.value;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
});

// Section loader animation with name wobble
// const observer = new IntersectionObserver((entries) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting && !entry.target.classList.contains("loaded")) {
//       const loader = document.createElement("div");
//       loader.className = "section-loader";
//       loader.innerHTML = "<span class='wobble'>K</span><span class='wobble'>E</span><span class='wobble'>M</span><span class='wobble'>B</span><span class='wobble'>O</span><span class='wobble'>U</span> <span class='wobble'>N</span><span class='wobble'>I</span><span class='wobble'>M</span><span class='wobble'>P</span><span class='wobble'>A</span><span class='wobble'>...</span>";
//       entry.target.prepend(loader);

//       setTimeout(() => {
//         loader.remove();
//         entry.target.classList.add("loaded");
//       }, 2000);
//     }
//   });
// }, {
//   threshold: 0.1
// });

// document.querySelectorAll(".section").forEach(section => {
//   observer.observe(section);
// });

