document.addEventListener("DOMContentLoaded", function () {
  setupLanguageSwitcher();
  displaySkills();

  // Animation au scroll
  const animateOnScroll = function () {
    const elements = document.querySelectorAll(".animate__animated");

    elements.forEach((element) => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.3;

      if (elementPosition < screenPosition) {
        const animationClass = element.classList[1];
        element.classList.add(animationClass);
      }
    });
  };

  window.addEventListener("scroll", animateOnScroll);
  animateOnScroll(); // Exécuter une fois au chargement

  // Header scroll effect
  const header = document.querySelector(".header");
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });

  // Menu mobile
  const mobileMenuBtn = document.querySelector(".mobile-menu");
  const nav = document.querySelector(".nav");

  mobileMenuBtn.addEventListener("click", function () {
    nav.classList.toggle("active");
  });

  // Smooth scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();

      const targetId = this.getAttribute("href");
      const targetElement = document.querySelector(targetId);

      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });

      // Fermer le menu mobile si ouvert
      nav.classList.remove("active");
    });
  });

  // Animation des barres de progression
  const animateProgressBars = function () {
    const progressBars = document.querySelectorAll(".progress-fill");

    progressBars.forEach((bar) => {
      const width = bar.style.width;
      bar.style.width = "0";

      setTimeout(() => {
        bar.style.width = width;
      }, 100);
    });
  };

  // Observer pour déclencher l'animation des barres de progression
  const aboutSection = document.querySelector(".about");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateProgressBars();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(aboutSection);

  // Formulaire de contact
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Ici vous pouvez ajouter le code pour envoyer le formulaire
      alert("Message envoyé! Je vous répondrai dès que possible.");
      this.reset();
    });
  }
});

function displaySkills() {
  const skillsGrid = document.querySelector(".skills-grid");

  if (!skillsGrid) return;

  // Toutes vos compétences organisées
  const skillsData = {
    "Langages & Frameworks": [
      { name: "Java", icon: "fab fa-java", level: 80 },
      { name: "Spring Boot", icon: "fas fa-leaf", level: 80 },
      { name: "PHP", icon: "fab fa-php", level: 85 },
      { name: "Laravel", icon: "fab fa-laravel", level: 85 },
      { name: "TypeScript", icon: "fab fa-js", level: 70 },
      { name: "Angular", icon: "fab fa-angular", level: 60 },
      { name: "HTML5", icon: "fab fa-html5", level: 90 },
      { name: "CSS3", icon: "fab fa-css3-alt", level: 80 },
    ],
    "Bases de Données": [
      { name: "MySQL", icon: "fas fa-database", level: 80 },
      { name: "PostgreSQL", icon: "fas fa-database", level: 70 },
      { name: "PgAdmin", icon: "fas fa-database", level: 70 },
    ],
    "Outils & Logiciels": [
      { name: "GitHub", icon: "fab fa-github", level: 85 },
      { name: "GitLab", icon: "fab fa-gitlab", level: 80 },
      { name: "Bitbucket", icon: "fab fa-bitbucket", level: 80 },
      { name: "JIRA", icon: "fab fa-jira", level: 75 },
      { name: "Trello", icon: "fab fa-trello", level: 85 },
      { name: "Maven", icon: "fas fa-code", level: 70 },
      { name: "Postman", icon: "fas fa-wifi", level: 85 },
      { name: "Swagger", icon: "fas fa-file-code", level: 85 },
      { name: "MS Office", icon: "fas fa-file-word", level: 85 },
      { name: "Docker", icon: "fab fa-docker", level: 60 },
    ],
    Modélisation: [
      { name: "UML", icon: "fas fa-project-diagram", level: 85 },
      { name: "PowerAMC", icon: "fas fa-cube", level: 80 },
    ],
    "Soft Skills": [
      { name: "Communication", icon: "fas fa-comments", level: 90 },
      { name: "Travail d'équipe / Team work", icon: "fas fa-users", level: 95 },
      {
        name: "Résolution de problèmes / Problem solving",
        icon: "fas fa-lightbulb",
        level: 90,
      },
      {
        name: "Adaptabilité / Adaptability",
        icon: "fas fa-sync-alt",
        level: 80,
      },
    ],
  };

  // Affichage des compétences
  for (const category in skillsData) {
    const currentLang = localStorage.getItem("portfolio-lang") || "fr";
    // Titre de catégorie
    const categoryTitle = document.createElement("h3");
    categoryTitle.className = "skills-category-title";
    switch (category) {
      case "Langages & Frameworks":
        categoryTitle.textContent =
          currentLang === "fr"
            ? "Langages & Frameworks"
            : "Languages & Frameworks";
        break;
      case "Bases de Données":
        categoryTitle.textContent =
          currentLang === "fr" ? "Bases de données" : "DataBases";
        break;
      case "Outils & Logiciels":
        categoryTitle.textContent =
          currentLang === "fr" ? "Outils & Logiciels" : "Tools and Softwares";
        break;
      case "Modélisation":
        categoryTitle.textContent =
          currentLang === "fr" ? "Modélisation" : "Modeling";
        break;
      case "Soft Skills":
        categoryTitle.textContent = "Soft Skills";
        break;
      default:
        break;
    }
    // categoryTitle.textContent = category;
    const categoryGroupe = document.createElement("div");
    categoryGroupe.className =
      "skills-category-group animate__animated animate__fadeIn";
    categoryGroupe.appendChild(categoryTitle);
    const skillCardGroup = document.createElement("div");
    skillCardGroup.className = "skills-card-group";
    // skillCardGroup.appendChild(categoryGroupe);

    // Compétences
    skillsData[category].forEach((skill, index) => {
      const skillCard = document.createElement("div");
      skillCard.className = "skill-card animate__animated animate__fadeIn";

      skillCard.innerHTML = `
                <div class="skill-icon">
                    <i class="${skill.icon}"></i>
                </div>
                <h3>${skill.name}</h3>
                <div class="skill-level">
                    <div class="level-bar" style="width: ${skill.level}%"></div>
                    <span>${skill.level}%</span>
                </div>
            `;

      // Délai d'animation progressif
      skillCard.style.animationDelay = `${index * 0.1}s`;

      skillCardGroup.appendChild(skillCard);
    });
    categoryGroupe.appendChild(skillCardGroup);
    skillsGrid.appendChild(categoryGroupe);
  }
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

// Mode Sombre
const themeToggle = document.createElement("button");
themeToggle.className = "theme-toggle";
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
document.body.appendChild(themeToggle);

themeToggle.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    localStorage.setItem("theme", "dark");
  } else {
    themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    localStorage.setItem("theme", "light");
  }
});

// Vérifier le thème au chargement
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark-mode");
  themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Gestion du changement de langue
function setupLanguageSwitcher() {
  const langBtns = document.querySelectorAll(".lang-btn");
  const currentLang = localStorage.getItem("portfolio-lang") || "fr";

  // Activer la langue courante
  document.documentElement.lang = currentLang;
  document
    .querySelector(`.lang-btn[data-lang="${currentLang}"]`)
    .classList.add("active");

  // Traductions
  const translations = {
    fr: {
      "hero-title": "Kembou Nimpa Karlson",
      "hero-subtitle": "Développeur Web Backend",
      "hero-text":
        "Spécialisé en Spring Boot, Laravel et développement d'APIs REST",
      "contact-btn": "Me contacter",
      "download-cv": "Télecharger mon CV",
      "about-title": "À propos",
      "about-text":
        "Étudiant en Master Data Science et titulaire d'une Licence de technologie en ingénierie logicielle, je suis concepteur de solutions web robustes, développeur REST API, passionné par la qualité logicielle.",
      "about-date": "Date de naissance",
      "about-phone": "Téléphone",
      "about-langue": "Langues",
      "langue-francais": "Français",
      "langue-anglais": "Anglais",

      skills: "Compétences",

      experience: "Expérience",
      "experience-pro": "Expérience Professionnelle",

      "experience.abyster.title": "Abyster Consulting",
      "experience.abyster.role": "Développeur Backend",
      "experience.abyster.project1":
        "CopilotHRM: Analyse du système, mise en place de la base de données et implémentation des APIs REST avec Spring Boot 3",
      "experience.abyster.project2":
        "Téléconsultation: APIs REST pour application de consultation à distance avec Laravel 9",
      "experience.abyster.project3":
        "Magnolia: APIs REST pour application de gestion des hôpitaux avec Laravel 9",
      "experience.jobfinder.title": "JobFinder",
      "experience.jobfinder.role": "Projet Personnel",
      "experience.jobfinder.description":
        "Application web de recherche de travail utilisant Spring Boot 3 et Angular 19",
      "experience.synthexis.title": "Synthexis Sarl",
      "experience.synthexis.role": "Développeur Web",
      "experience.synthexis.project1":
        "Développement et déploiement d'un site web utilisant Laravel 10",
      "experience.synthexis.project2":
        "Développement d'une application de gestion avec Spring boot 3 et Angular 19",

      "contact.stay": "Restons en contact",
      "contact.desc":
        "N'hésitez pas à me contacter pour des opportunités ou collaborations.",
      "contact.send-message": "Envoyez le message",
      droits: "Tous droits réservés",

      country: "Cameroun",
      // Ajoutez toutes les autres traductions nécessaires
    },
    en: {
      "hero-title": "Kembou Nimpa Karlson",
      "hero-subtitle": "Backend Web Developer",
      "hero-text":
        "Specialized in Spring Boot, Laravel and REST APIs development",
      "contact-btn": "Contact me",
      "download-cv": "Download my CV",
      "about-title": "About",
      "about-text": "",
      "about-date": "Birth date",
      "about-phone": "Phone",
      "about-langue": "Languages",
      "langue-francais": "French",
      "langue-anglais": "English",

      skills: "Skills",
      "technical-skills": "Compétences Techniques",

      // Ajoutez toutes les autres traductions nécessaires
      experience: "Experience",
      "experience-pro": "Professionnal Experience",
      "experience.abyster.title": "Abyster Consulting",
      "experience.abyster.role": "Backend Developer",
      "experience.abyster.project1":
        "CopilotHRM: System analysis, database setup and REST APIs implementation with Spring Boot 3",
      "experience.abyster.project2":
        "Teleconsultation: REST APIs for remote consultation application using Laravel 9",
      "experience.abyster.project3":
        "Magnolia: REST APIs for hospital management application using Laravel 9",
      "experience.jobfinder.title": "JobFinder",
      "experience.jobfinder.role": "Personal Project",
      "experience.jobfinder.description":
        "Job search web application using Spring Boot 3 and Angular 19",
      "experience.synthexis.title": "Synthexis Sarl",
      "experience.synthexis.role": "Web Developer",
      "experience.synthexis.project1":
        "Development and deployment of a website using Laravel 10",
      "experience.synthexis.project2":
        "Development of a management application with Spring Boot 3 and Angular 19",

      "contact.stay": "Let's stay in touch",
      "contact.desc":
        "Do not hesitate to contact me for opportunities or collaborations",
      "contact.send-message": "Send message",
      droits: "All rights reserved",

      country: "Cameroon",
    },
  };

  // Fonction de traduction
  function updateContent(lang) {
    document.documentElement.lang = lang;

    // Exemple pour quelques éléments :
    document.querySelector(".nav .about").textContent =
      translations[lang]["about-title"];
    document.querySelector(".nav .skill").textContent =
      translations[lang]["skills"];
    document.querySelector(".nav .expe").textContent =
      translations[lang]["experience"];
    document.querySelector(".hero h1").textContent =
      translations[lang]["hero-title"];
    document.querySelector(".hero h2").textContent =
      translations[lang]["hero-subtitle"];
    document.querySelector(".hero p").textContent =
      translations[lang]["hero-text"];
    document.querySelector(".hero .btn").textContent =
      translations[lang]["contact-btn"];
    document.querySelector("#about .section-title").textContent =
      translations[lang]["about-title"];
    document.querySelector(".biography").textContent =
      translations[lang]["about-text"];
    document.querySelector(".birthday").textContent =
      translations[lang]["about-date"];
    document.querySelector(".download-cv").textContent =
      translations[lang]["download-cv"];
    document.querySelector(".tel").textContent =
      translations[lang]["about-phone"];
    document.querySelector(".about-languages h3").textContent =
      translations[lang]["about-langue"];
    document.querySelector(".language .french").textContent =
      translations[lang]["langue-francais"];
    document.querySelector(".language .english").textContent =
      translations[lang]["langue-anglais"];
    document.querySelector(".experience h2").textContent =
      translations[lang]["experience-pro"];
    document.querySelector(".timeline-item h4").textContent =
      translations[lang]["experience.abyster.role"];
    document.querySelector(".experience .copilot").textContent =
      translations[lang]["experience.abyster.project1"];
    document.querySelector(".experience .teleconsult").textContent =
      translations[lang]["experience.abyster.project2"];
    document.querySelector(".experience .magnolia").textContent =
      translations[lang]["experience.abyster.project3"];
    document.querySelector(".projet-perso").textContent =
      translations[lang]["experience.jobfinder.role"];
    document.querySelector(".projet-perso-descr").textContent =
      translations[lang]["experience.jobfinder.description"];
    document.querySelector(".syn-role").textContent =
      translations[lang]["experience.synthexis.role"];
    document.querySelector(".jtm").textContent =
      translations[lang]["experience.synthexis.project1"];
    document.querySelector(".mbc").textContent =
      translations[lang]["experience.synthexis.project2"];
    document.querySelector(".contact-info h3").textContent =
      translations[lang]["contact.stay"];
    document.querySelector(".contact-text").textContent =
      translations[lang]["contact.desc"];
    document.querySelector(".country").textContent =
      translations[lang]["country"];
    document.querySelector(".contact-form button").textContent =
      translations[lang]["contact.send-message"];
    document.querySelector(".droits").textContent =
      translations[lang]["droits"];

    // Ajoutez des sélecteurs pour tous les éléments à traduire
  }

  // Gestion des clics
  langBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const lang = btn.dataset.lang;

      // Mettre à jour l'interface
      langBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      // Changer le contenu
      updateContent(lang);

      // Sauvegarder la préférence
      localStorage.setItem("portfolio-lang", lang);
    });
  });

  // Charger la langue au démarrage
  updateContent(currentLang);
}

function initAutoScroll() {
  document.querySelectorAll(".skill-card-group").forEach((group) => {
    group.style.animation = "none";
    void group.offsetWidth;
    group.style.animation = "";
  });
}

// Appelez cette fonction au chargement
document.addEventListener("DOMContentLoaded", setupLanguageSwitcher);
