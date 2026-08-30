/* ==============================
   KNK PORTFOLIO — MAIN SCRIPT
   ============================== */

// ─── DATA ────────────────────────────────────────────
const SKILLS_DATA = {
  "Langages & Frameworks": {
    icon: "fas fa-code",
    items: [
      { name: "Java",       icon: "fab fa-java",        level: 80 },
      { name: "Spring Boot",icon: "fas fa-leaf",         level: 80 },
      { name: "PHP",        icon: "fab fa-php",          level: 85 },
      { name: "Laravel",    icon: "fab fa-laravel",      level: 85 },
      { name: "Python",     icon: "fab fa-python",       level: 85 },
      { name: "FastAPI",    icon: "fas fa-bolt",         level: 75 },
      { name: "TypeScript", icon: "fab fa-js",           level: 70 },
      { name: "Angular",    icon: "fab fa-angular",      level: 60 },
      { name: "React",      icon: "fab fa-react",        level: 55 },
      { name: "HTML5",      icon: "fab fa-html5",        level: 90 },
      { name: "CSS3",       icon: "fab fa-css3-alt",     level: 80 },
    ]
  },
  "Bases de Données": {
    icon: "fas fa-database",
    items: [
      { name: "MySQL",      icon: "fas fa-database",     level: 80 },
      { name: "PostgreSQL", icon: "fas fa-database",     level: 70 },
      { name: "PgAdmin",    icon: "fas fa-table",        level: 70 },
    ]
  },
  "Outils & Logiciels": {
    icon: "fas fa-tools",
    items: [
      { name: "GitHub",     icon: "fab fa-github",       level: 85 },
      { name: "GitLab",     icon: "fab fa-gitlab",       level: 80 },
      { name: "Bitbucket",  icon: "fab fa-bitbucket",    level: 80 },
      { name: "JIRA",       icon: "fab fa-jira",         level: 75 },
      { name: "Trello",     icon: "fab fa-trello",       level: 85 },
      { name: "Postman",    icon: "fas fa-paper-plane",  level: 85 },
      { name: "Swagger",    icon: "fas fa-file-code",    level: 85 },
      { name: "Docker",     icon: "fab fa-docker",       level: 60 },
      { name: "Maven",      icon: "fas fa-box",          level: 70 },
    ]
  },
  "Modélisation": {
    icon: "fas fa-project-diagram",
    items: [
      { name: "UML",        icon: "fas fa-sitemap",      level: 85 },
      { name: "PowerAMC",   icon: "fas fa-cube",         level: 80 },
    ]
  },
  "Soft Skills": {
    icon: "fas fa-heart",
    items: [
      { name: "Communication",    icon: "fas fa-comments",    level: 90 },
      { name: "Travail d'équipe", icon: "fas fa-users",       level: 95 },
      { name: "Problem Solving",  icon: "fas fa-lightbulb",   level: 90 },
      { name: "Adaptabilité",     icon: "fas fa-sync-alt",    level: 80 },
    ]
  }
};

const TRANSLATIONS = {
  fr: {
    "nav.about":      "À propos",
    "nav.skills":     "Compétences",
    "nav.experience": "Expérience",
    "nav.contact":    "Contact",

    "hero.available": "Disponible pour de nouvelles opportunités",
    "hero.greeting":  "Bonjour, je suis",
    "hero.desc":      "Spécialisé en Spring Boot, Laravel et développement d'APIs REST.\nPassionné par la qualité logicielle et les architectures robustes.",
    "hero.contact":   "Me contacter",
    "hero.download":  "Télécharger CV",
    "hero.stat1":     "ans d'expérience",
    "hero.stat2":     "projets réalisés",
    "hero.stat3":     "entreprises",

    "about.tag":      "Qui suis-je ?",
    "about.title":    "À propos de moi",
    "about.bio":      "Étudiant en Master Data Science et titulaire d'une Licence de technologie en ingénierie logicielle, je suis concepteur de solutions web robustes, développeur REST API, passionné par la qualité logicielle.",
    "about.birth":    "Date de naissance",
    "about.location": "Localisation",
    "about.country":  "Cameroun",
    "about.phone":    "Téléphone",
    "about.languages":"Langues",
    "about.education":"Formation",
    "lang.french":    "Français",
    "lang.english":   "Anglais",

    "skills.tag":     "Stack technique",
    "skills.title":   "Compétences Techniques",
    "skills.lang":    "Langages & Frameworks",
    "skills.db":      "Bases de Données",
    "skills.tools":   "Outils & Logiciels",
    "skills.model":   "Modélisation",
    "skills.soft":    "Soft Skills",

    "exp.tag":               "Mon parcours",
    "exp.title":             "Expérience Professionnelle",
    "exp.type.pro":          "Stage",
    "exp.type.personal":     "Personnel",
    "exp.type.current":      "Actuel",
    "exp.present":           "Présent",
    "exp.abyster.role":      "Développeur Backend",
    "exp.abyster.p1":        "Analyse du système, mise en place de la base de données et implémentation des APIs REST avec Spring Boot 3",
    "exp.abyster.p2":        "APIs REST pour application de consultation à distance avec Laravel 9",
    "exp.abyster.p3":        "APIs REST pour application de gestion des hôpitaux avec Laravel 9",
    "exp.jobfinder.role":    "Projet Personnel",
    "exp.jobfinder.desc":    "Application web de recherche de travail utilisant Spring Boot 3 et Angular 19",
    "exp.synthexis.role":    "Développeur Web",
    "exp.synthexis.p1":      "Développement et déploiement d'un site web utilisant Laravel 10",
    "exp.synthexis.p2":      "Développement d'une application de gestion avec Spring Boot 3 et Angular 19",

    "contact.tag":    "Travaillons ensemble",
    "contact.title":  "Contact",
    "contact.stay":   "Restons en contact",
    "contact.desc":   "N'hésitez pas à me contacter pour des opportunités ou collaborations.",

    "form.name":      "Nom",
    "form.email":     "Email",
    "form.subject":   "Sujet",
    "form.message":   "Message",
    "form.send":      "Envoyer le message",

    "footer.rights":  "Tous droits réservés",
  },
  en: {
    "nav.about":      "About",
    "nav.skills":     "Skills",
    "nav.experience": "Experience",
    "nav.contact":    "Contact",

    "hero.available": "Available for new opportunities",
    "hero.greeting":  "Hello, I'm",
    "hero.desc":      "Specialized in Spring Boot, Laravel and REST APIs development.\nPassionate about software quality and robust architectures.",
    "hero.contact":   "Contact me",
    "hero.download":  "Download CV",
    "hero.stat1":     "years of experience",
    "hero.stat2":     "completed projects",
    "hero.stat3":     "companies",

    "about.tag":      "Who am I?",
    "about.title":    "About me",
    "about.bio":      "Master Data Science student and holder of a Bachelor's degree in Software Engineering, I design robust web solutions, develop REST APIs, and am passionate about software quality.",
    "about.birth":    "Date of birth",
    "about.location": "Location",
    "about.country":  "Cameroon",
    "about.phone":    "Phone",
    "about.languages":"Languages",
    "about.education":"Education",
    "lang.french":    "French",
    "lang.english":   "English",

    "skills.tag":     "Tech stack",
    "skills.title":   "Technical Skills",
    "skills.lang":    "Languages & Frameworks",
    "skills.db":      "Databases",
    "skills.tools":   "Tools & Software",
    "skills.model":   "Modeling",
    "skills.soft":    "Soft Skills",

    "exp.tag":               "My journey",
    "exp.title":             "Professional Experience",
    "exp.type.pro":          "Internship",
    "exp.type.personal":     "Personal",
    "exp.type.current":      "Current",
    "exp.present":           "Present",
    "exp.abyster.role":      "Backend Developer",
    "exp.abyster.p1":        "System analysis, database setup and REST APIs implementation with Spring Boot 3",
    "exp.abyster.p2":        "REST APIs for remote consultation application using Laravel 9",
    "exp.abyster.p3":        "REST APIs for hospital management application using Laravel 9",
    "exp.jobfinder.role":    "Personal Project",
    "exp.jobfinder.desc":    "Job search web application using Spring Boot 3 and Angular 19",
    "exp.synthexis.role":    "Web Developer",
    "exp.synthexis.p1":      "Development and deployment of a website using Laravel 10",
    "exp.synthexis.p2":      "Development of a management application with Spring Boot 3 and Angular 19",

    "contact.tag":    "Let's work together",
    "contact.title":  "Contact",
    "contact.stay":   "Let's stay in touch",
    "contact.desc":   "Do not hesitate to contact me for opportunities or collaborations.",

    "form.name":      "Name",
    "form.email":     "Email",
    "form.subject":   "Subject",
    "form.message":   "Message",
    "form.send":      "Send message",

    "footer.rights":  "All rights reserved",
  }
};

const TYPED_ROLES = {
  fr: ["Développeur Backend", "Spring Boot Expert", "Laravel Developer", "API REST Architect", "Junior Data Science"],
  en: ["Backend Developer",   "Spring Boot Expert", "Laravel Developer", "REST API Architect", "Junior Data Science"]
};

// ─── STATE ──────────────────────────────────────────
let currentLang = localStorage.getItem("knk-lang") || "fr";
let currentTheme = localStorage.getItem("knk-theme") || "dark";

// ─── INIT ───────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyTheme(currentTheme);
  applyLang(currentLang);
  buildSkills();
  initTyped();
  initScrollProgress();
  initHeader();
  initMobileMenu();
  initReveal();
  initLangBars();
  initSkillBars();
  initCursor();
  initSmoothScroll();
  initContactForm();
  initActiveNav();
});

// ─── THEME ──────────────────────────────────────────
function applyTheme(theme) {
  currentTheme = theme;
  const icon = document.getElementById("theme-icon");
  if (theme === "light") {
    document.body.classList.add("light-mode");
    if (icon) { icon.className = "fas fa-sun"; }
  } else {
    document.body.classList.remove("light-mode");
    if (icon) { icon.className = "fas fa-moon"; }
  }
  localStorage.setItem("knk-theme", theme);
}

document.getElementById("theme-toggle")?.addEventListener("click", () => {
  applyTheme(currentTheme === "dark" ? "light" : "dark");
});

// ─── LANGUAGE ───────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  localStorage.setItem("knk-lang", lang);

  // Update all [data-i18n] elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (TRANSLATIONS[lang][key] !== undefined) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });

  // Update lang button states
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Update skill category titles if rendered
  updateSkillCategoryTitles(lang);
}

document.querySelectorAll(".lang-btn").forEach(btn => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

function updateSkillCategoryTitles(lang) {
  const keyMap = {
    "Langages & Frameworks": "skills.lang",
    "Bases de Données": "skills.db",
    "Outils & Logiciels": "skills.tools",
    "Modélisation": "skills.model",
    "Soft Skills": "skills.soft",
  };
  document.querySelectorAll(".skill-category-name[data-key]").forEach(el => {
    const key = keyMap[el.dataset.key];
    if (key && TRANSLATIONS[lang][key]) {
      el.textContent = TRANSLATIONS[lang][key];
    }
  });
}

// ─── SKILLS BUILD ────────────────────────────────────
function buildSkills() {
  const wrapper = document.getElementById("skills-wrapper");
  if (!wrapper) return;

  Object.entries(SKILLS_DATA).forEach(([category, { icon, items }], catIdx) => {
    const catEl = document.createElement("div");
    catEl.className = "skill-category reveal";
    catEl.style.transitionDelay = `${catIdx * 0.1}s`;

    // Header
    const header = document.createElement("div");
    header.className = "skill-category-header";
    header.innerHTML = `
      <div class="skill-category-icon"><i class="${icon}"></i></div>
      <span class="skill-category-name" data-key="${category}">${category}</span>
      <div class="skill-category-line"></div>
    `;
    catEl.appendChild(header);

    // Cards
    const cards = document.createElement("div");
    cards.className = "skills-cards";

    items.forEach((skill, idx) => {
      const card = document.createElement("div");
      card.className = "skill-card";
      card.style.transitionDelay = `${idx * 0.05}s`;
      card.innerHTML = `
        <div class="skill-icon"><i class="${skill.icon}"></i></div>
        <span class="skill-name">${skill.name}</span>
        <div class="skill-level-bar">
          <div class="skill-level-fill" data-level="${skill.level}"></div>
        </div>
        <span class="skill-percent">${skill.level}%</span>
      `;
      cards.appendChild(card);
    });

    catEl.appendChild(cards);
    wrapper.appendChild(catEl);
  });
}

// ─── TYPED EFFECT ────────────────────────────────────
function initTyped() {
  const el = document.getElementById("typed-role");
  if (!el) return;

  let roleIdx = 0, charIdx = 0, deleting = false;

  function tick() {
    const roles = TYPED_ROLES[currentLang];
    const current = roles[roleIdx];

    if (!deleting) {
      el.textContent = current.substring(0, charIdx + 1);
      charIdx++;
      if (charIdx === current.length) {
        deleting = true;
        setTimeout(tick, 2000);
        return;
      }
    } else {
      el.textContent = current.substring(0, charIdx - 1);
      charIdx--;
      if (charIdx === 0) {
        deleting = false;
        roleIdx = (roleIdx + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 60 : 100);
  }
  tick();
}

// ─── SCROLL PROGRESS ─────────────────────────────────
function initScrollProgress() {
  const bar = document.getElementById("scroll-progress");
  if (!bar) return;
  window.addEventListener("scroll", () => {
    const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100;
    bar.style.width = pct + "%";
  });
}

// ─── HEADER SCROLL ───────────────────────────────────
function initHeader() {
  const header = document.getElementById("header");
  if (!header) return;
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 60);
  });
}

// ─── MOBILE MENU ─────────────────────────────────────
function initMobileMenu() {
  const btn = document.getElementById("mobile-menu-btn");
  const nav = document.getElementById("nav");
  if (!btn || !nav) return;

  btn.addEventListener("click", () => {
    const open = nav.classList.toggle("open");
    btn.classList.toggle("open", open);
    btn.setAttribute("aria-expanded", open);
  });

  // Close on link click
  nav.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      btn.classList.remove("open");
    });
  });
}

// ─── REVEAL ON SCROLL ────────────────────────────────
function initReveal() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.classList.add("visible");
        }, 80);
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
}

// ─── LANGUAGE BARS ───────────────────────────────────
function initLangBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".lang-fill").forEach(fill => {
          fill.style.width = fill.dataset.width + "%";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.3 });

  const aboutSection = document.getElementById("about");
  if (aboutSection) observer.observe(aboutSection);
}

// ─── SKILL BARS ──────────────────────────────────────
function initSkillBars() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.querySelectorAll(".skill-level-fill").forEach(fill => {
          fill.style.width = fill.dataset.level + "%";
        });
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  const skillsSection = document.getElementById("skills");
  if (skillsSection) observer.observe(skillsSection);
}

// ─── CURSOR ──────────────────────────────────────────
function initCursor() {
  const cursor = document.getElementById("cursor");
  const follower = document.getElementById("cursor-follower");
  if (!cursor || !follower) return;

  // Only on non-touch
  if (window.matchMedia("(pointer: coarse)").matches) {
    cursor.style.display = "none";
    follower.style.display = "none";
    return;
  }

  let mx = 0, my = 0, fx = 0, fy = 0;

  window.addEventListener("mousemove", e => {
    mx = e.clientX; my = e.clientY;
    cursor.style.left = mx + "px";
    cursor.style.top = my + "px";
  });

  (function animFollower() {
    fx += (mx - fx) * 0.15;
    fy += (my - fy) * 0.15;
    follower.style.left = fx + "px";
    follower.style.top = fy + "px";
    requestAnimationFrame(animFollower);
  })();

  // Scale on hover interactive elements
  document.querySelectorAll("a, button, .skill-card, .info-card, .contact-item").forEach(el => {
    el.addEventListener("mouseenter", () => {
      follower.style.width = "60px";
      follower.style.height = "60px";
      follower.style.borderColor = "rgba(139,92,246,0.6)";
    });
    el.addEventListener("mouseleave", () => {
      follower.style.width = "36px";
      follower.style.height = "36px";
      follower.style.borderColor = "rgba(139,92,246,0.5)";
    });
  });
}

// ─── SMOOTH SCROLL ───────────────────────────────────
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (!target) return;
      e.preventDefault();
      const headerH = document.getElementById("header")?.offsetHeight || 80;
      window.scrollTo({ top: target.offsetTop - headerH, behavior: "smooth" });
    });
  });
}

// ─── ACTIVE NAV ──────────────────────────────────────
function initActiveNav() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { threshold: 0.4 });

  sections.forEach(sec => observer.observe(sec));
}

// ─── CONTACT FORM ────────────────────────────────────
function initContactForm() {
  const form = document.getElementById("contact-form");
  const feedback = document.getElementById("submit-feedback");
  if (!form) return;

  form.addEventListener("submit", async function(e) {
    e.preventDefault();

    const btn = document.getElementById("submit-btn");
    const originalHtml = btn.innerHTML;

    // Loading state
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi...';
    btn.disabled = true;

    try {
      emailjs.init({ publicKey: 'Lx7MiIn6-s_kzUb5i', blockHeadless: true });

      const response = await emailjs.send("service_dwrq7h5", "template_mmfxoip", {
        title:   document.getElementById("contact-subject")?.value || "",
        name:    document.getElementById("contact-name")?.value || "",
        message: document.getElementById("contact-msg")?.value || "",
        email:   document.getElementById("contact-email")?.value || "",
      });

      if (feedback) {
        feedback.textContent = currentLang === "fr"
          ? "✓ Message envoyé avec succès !"
          : "✓ Message sent successfully!";
        feedback.style.color = "#4ade80";
      }
      form.reset();
    } catch (err) {
      if (feedback) {
        feedback.textContent = currentLang === "fr"
          ? "✗ Erreur lors de l'envoi. Réessayez."
          : "✗ Error sending message. Please retry.";
        feedback.style.color = "#f87171";
      }
    } finally {
      btn.innerHTML = originalHtml;
      btn.disabled = false;
      setTimeout(() => {
        if (feedback) feedback.textContent = "";
      }, 5000);
    }
  });
}
