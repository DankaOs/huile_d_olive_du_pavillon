
// Scroll to ...

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
  }
}

//compte à rebours
const yearDisplay = document.getElementById('yearDisplay');
let countdownStarted = false;


if (yearDisplay) {
let currentYear = new Date().getFullYear(); // Année actuelle
const endYear = 1921; // Année finale

// Fonction pour décrémenter l'année
function countdown() {

yearDisplay.textContent = currentYear; // Afficher l'année actuelle

if (currentYear > endYear) {
  currentYear--; // Décrémente l'année
} else {
  clearInterval(interval); // Arrêter le compte à rebours
}
} 





// Mettre à jour l'affichage toutes les 1 seconde
let interval = setInterval(countdown, 50);
}


function toggleAnswer(element) {
const answer = element.nextElementSibling;
const icon = element.querySelector('.toggle-dropdown');

if (answer.style.maxHeight) {
    answer.style.maxHeight = null;  // Ferme la réponse
    icon.classList.remove('rotate');  // Retourne l'icône à son état original
} else {
    answer.style.maxHeight = answer.scrollHeight + "px";  // Ouvre la réponse
    icon.classList.add('rotate');  // Fait tourner l'icône
}
}







//function changeLanguage(lang) {
//    if (lang === 'en') {
//       document.documentElement.lang = 'en';
//  } else {
//        document.documentElement.lang = 'fr';

//   }

// document.getElementById("langage_fr").addEventListener("click", () => {
// window.location.href ="index.html"; // Redirige vers la page en français
//});

// Gestionnaire d'événements pour le bouton anglais (si nécessaire)
//document.getElementById("langage_en").addEventListener("click", () => {
//  window.location.href = "index_en.html"; // Redirige vers la page en anglais
//});
//}



(function() {
  "use strict";

  /**
 * Applique la classe .scrolled au corps de la page lorsque celle-ci est défilée vers le bas
 */
function toggleScrolled() {
  // Sélectionne l'élément <body>
  const selectBody = document.querySelector('body');
  // Sélectionne l'élément avec l'ID #header
  const selectHeader = document.querySelector('#header');
  
  // Vérifie si le header n'a pas les classes 'scroll-up-sticky', 'sticky-top' ou 'fixed-top'
  if (!selectHeader.classList.contains('scroll-up-sticky') && 
      !selectHeader.classList.contains('sticky-top') && 
      !selectHeader.classList.contains('fixed-top')) return;
  
  // Ajoute la classe 'scrolled' au body si le défilement est supérieur à 100px, sinon la retire
  window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
}

// Ajoute un écouteur d'événement pour appliquer la fonction toggleScrolled lors du défilement de la page
document.addEventListener('scroll', toggleScrolled);

// Ajoute un écouteur d'événement pour appliquer la fonction toggleScrolled au chargement de la page
window.addEventListener('load', toggleScrolled);

  /**
 * Basculement de la navigation mobile
 */
// Sélectionne le bouton de basculement de la navigation mobile
const mobileNavToggleBtn = document.querySelector('.mobile-nav-toggle');

// Fonction pour basculer la navigation mobile
function mobileNavToogle() {
  // Bascule la classe 'mobile-nav-active' sur l'élément <body>
  document.querySelector('body').classList.toggle('mobile-nav-active');
  
  // Change l'icône du bouton de basculement entre 'bi-list' et 'bi-x'
  mobileNavToggleBtn.classList.toggle('bi-list');
  mobileNavToggleBtn.classList.toggle('bi-x');
}

// Ajoute un écouteur d'événement sur le bouton pour activer la fonction mobileNavToogle lors du clic
mobileNavToggleBtn.addEventListener('click', mobileNavToogle);

  /**
 * Cacher la navigation mobile lors de la navigation sur des liens de la même page (liens avec hash)
 */
// Sélectionne tous les éléments <a> dans le menu de navigation (#navmenu) et applique une fonction à chacun d'eux
document.querySelectorAll('#navmenu a').forEach(navmenu => {
  
  // Ajoute un écouteur d'événement de clic à chaque lien du menu de navigation
  navmenu.addEventListener('click', () => {
    
    // Vérifie si la classe 'mobile-nav-active' est présente sur le <body>, indiquant que la navigation mobile est active
    if (document.querySelector('.mobile-nav-active')) {
      
      // Si la navigation mobile est active, appelle la fonction mobileNavToogle pour la désactiver
      mobileNavToogle();
    }
  });

});


  /**
 * Basculer les sous-menus déroulants dans la navigation mobile
 */
// Sélectionne tous les éléments avec la classe 'toggle-dropdown' dans le menu de navigation (.navmenu)
document.querySelectorAll('.navmenu .toggle-dropdown').forEach(navmenu => {

  // Ajoute un écouteur d'événement de clic à chaque élément 'toggle-dropdown'
  navmenu.addEventListener('click', function(e) {

    // Empêche l'action par défaut de l'événement de se produire (comme suivre un lien)
    e.preventDefault();
    
    // Bascule la classe 'active' sur le parent de l'élément cliqué, pour indiquer que ce menu est ouvert ou fermé
    this.parentNode.classList.toggle('active');
    
    // Bascule la classe 'dropdown-active' sur l'élément suivant le parent, pour afficher ou masquer le sous-menu
    this.parentNode.nextElementSibling.classList.toggle('dropdown-active');
    
    // Empêche la propagation de l'événement à d'autres écouteurs d'événements
    e.stopImmediatePropagation();
  });
});


  /**
 * Préchargeur
 */
// Sélectionne l'élément avec l'ID 'preloader' dans le document
const preloader = document.querySelector('#preloader');

// Vérifie si l'élément 'preloader' existe
if (preloader) {

  // Ajoute un écouteur d'événement qui attend le chargement complet de la page
  window.addEventListener('load', () => {

    // Supprime l'élément 'preloader' une fois que la page est entièrement chargée
    preloader.remove();
  });
}


  /**
 * Bouton de retour en haut de page
 */
// Sélectionne l'élément avec la classe 'scroll-top' dans le document
let scrollTop = document.querySelector('.scroll-top');

/**
 * Fonction pour afficher ou masquer le bouton de retour en haut
 * en fonction de la position de défilement de la page
 */
function toggleScrollTop() {
  if (scrollTop) {
    // Ajoute la classe 'active' si la position de défilement dépasse 100px, sinon la retire
    window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
  }
}

// Ajoute un écouteur d'événement pour gérer le clic sur le bouton de retour en haut
scrollTop.addEventListener('click', (e) => {
  e.preventDefault();
  // Fait défiler la page vers le haut en douceur
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});

// Ajoute un écouteur d'événement pour appeler la fonction toggleScrollTop au chargement de la page
window.addEventListener('load', toggleScrollTop);

// Ajoute un écouteur d'événement pour appeler la fonction toggleScrollTop lors du défilement de la page
document.addEventListener('scroll', toggleScrollTop);

  /**
 * Fonction d'initialisation de l'animation lors du défilement
 * et configuration des paramètres d'animation
 */
function aosInit() {
  // Initialise la bibliothèque AOS (Animate On Scroll) avec des options spécifiques
  AOS.init({
    duration: 600,      // Durée de l'animation en millisecondes
    easing: 'ease-in-out',  // Type d'accélération utilisé pour l'animation
    once: true,         // Si true, l'animation se déclenche une seule fois lors du défilement
    mirror: false       // Si false, l'animation ne se répète pas lors du défilement vers le haut
  });
}

// Ajoute un écouteur d'événement pour appeler la fonction aosInit lors du chargement de la page
window.addEventListener('load', aosInit);



  /**
 * Initialisation des sliders Swiper
 */
function initSwiper() {
  // Parcourt tous les éléments ayant la classe .init-swiper
  document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
    // Récupère la configuration du Swiper à partir de l'élément avec la classe .swiper-config
    let config = JSON.parse(
      swiperElement.querySelector(".swiper-config").innerHTML.trim()
    );

    // Si l'élément possède la classe .swiper-tab, initialise un Swiper avec une pagination personnalisée
    if (swiperElement.classList.contains("swiper-tab")) {
      initSwiperWithCustomPagination(swiperElement, config);
    } else {
      // Sinon, initialise un Swiper standard avec la configuration fournie
      new Swiper(swiperElement, config);
    }
  });
}

// Ajoute un écouteur d'événement pour initialiser les sliders Swiper une fois la page chargée
window.addEventListener("load", initSwiper);


  /**
 * Initialisation de PureCounter
 * 
 * Cette ligne de code initialise la bibliothèque PureCounter, 
 * qui est utilisée pour animer les compteurs de statistiques sur la page. 
 * PureCounter est généralement utilisé pour les chiffres qui augmentent de manière animée 
 * lorsque l'utilisateur fait défiler la page et atteint la section contenant les compteurs.
 */
new PureCounter();


  /**
 * Initialisation de la mise en page Isotope et des filtres
 * 
 * Ce code initialise la bibliothèque Isotope pour la mise en page filtrable des éléments sur la page.
 * Il permet de créer des grilles d'éléments (comme des portfolios ou des galeries) qui peuvent être filtrées
 * dynamiquement par l'utilisateur.
 */


document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
  // Récupération des attributs de configuration pour la mise en page, le filtre par défaut et le tri
  let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
  let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
  let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

  let initIsotope;

  // Initialisation d'Isotope après que les images sont chargées
  imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: layout,
          filter: filter,
          sortBy: sort
      });
  });

  // Gestion des clics sur les filtres pour changer l'affichage des éléments
  isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
          // Mise à jour de l'état du filtre actif
          isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
          this.classList.add('filter-active');

          // Réorganisation des éléments selon le filtre sélectionné
          initIsotope.arrange({
              filter: this.getAttribute('data-filter')
          });

          // Réinitialisation des animations AOS si elles sont utilisées
          if (typeof aosInit === 'function') {
              aosInit();
          }
      }, false);
  });

});

  /**
 * Basculer les éléments de la FAQ (Foire Aux Questions)
 * 
 * Ce code permet d'ajouter un comportement de bascule (toggle) aux éléments de la FAQ.
 * Lorsqu'un utilisateur clique sur un titre de question (h3) ou sur le bouton de bascule (faq-toggle),
 * la classe 'faq-active' est ajoutée ou retirée, permettant d'afficher ou de masquer la réponse associée.
 */
document.querySelectorAll('.faq-item h3, .faq-item .faq-toggle').forEach((faqItem) => {
  // Ajout d'un événement 'click' à chaque élément h3 ou bouton de bascule dans les éléments de la FAQ
  faqItem.addEventListener('click', () => {
    // Ajout ou suppression de la classe 'faq-active' à l'élément parent pour afficher ou masquer la réponse
    faqItem.parentNode.classList.toggle('faq-active');
  });
});


  /**
 * Correction de la position de défilement lors du chargement de la page pour les URL contenant des liens avec des ancres.
 * 
 * Ce code permet de corriger la position de défilement lorsque la page est chargée avec un lien contenant une ancre (hash).
 * Il vérifie si l'URL contient un hash, et si un élément correspondant à ce hash existe sur la page.
 * Si c'est le cas, il ajuste la position de défilement pour prendre en compte la marge de défilement (scrollMarginTop) de cet élément.
 */
window.addEventListener('load', function(e) {
  // Vérifie si l'URL contient un hash (ex : #section)
  if (window.location.hash) {
    // Vérifie si un élément correspondant à ce hash existe dans le document
    if (document.querySelector(window.location.hash)) {
      setTimeout(() => {
        // Sélectionne l'élément correspondant au hash
        let section = document.querySelector(window.location.hash);
        // Récupère la valeur de la marge de défilement de l'élément
        let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
        // Ajuste la position de défilement en soustrayant la marge de défilement
        window.scrollTo({
          top: section.offsetTop - parseInt(scrollMarginTop),
          behavior: 'smooth' // Défilement fluide
        });
      }, 100); // Délai pour garantir que l'élément est rendu avant de calculer la position
    }
  }
});


  /**
 * Navmenu Scrollspy
 * 
 * Ce script gère la mise en évidence des liens de navigation en fonction de la section visible de la page lors du défilement.
 */

let navmenulinks = document.querySelectorAll('.navmenu a'); // Sélectionne tous les liens de navigation dans le menu

/**
 * Fonction qui vérifie la position de défilement de la page et met en évidence le lien de navigation correspondant
 */
function navmenuScrollspy() {
  navmenulinks.forEach(navmenulink => {
    if (!navmenulink.hash) return; // Ignore les liens sans hash (sans référence à une section spécifique)
    
    let section = document.querySelector(navmenulink.hash); // Sélectionne la section correspondant au hash du lien
    
    if (!section) return; // Si la section n'existe pas, passe au lien suivant
    
    let position = window.scrollY + 200; // Calcule la position actuelle de défilement avec un décalage de 200px

    // Vérifie si la position de défilement actuelle est dans la section
    if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
      // Supprime la classe 'active' de tous les liens de navigation actifs
      document.querySelectorAll('.navmenu a.active').forEach(link => link.classList.remove('active'));
      // Ajoute la classe 'active' au lien correspondant à la section visible
      navmenulink.classList.add('active');
    } else {
      // Retire la classe 'active' si la section n'est plus visible
      navmenulink.classList.remove('active');
    }
  });
}

// Ajoute des écouteurs d'événements pour déclencher la fonction au chargement de la page et lors du défilement
window.addEventListener('load', navmenuScrollspy);
document.addEventListener('scroll', navmenuScrollspy);


})();





