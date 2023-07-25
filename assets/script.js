const slides = [
	{
	  "image": "slide1.jpg",
	  "tagLine": "Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
	  "image": "slide2.jpg",
	  "tagLine": "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
	  "image": "slide3.jpg",
	  "tagLine": "Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
	  "image": "slide4.png",
	  "tagLine": "Autocollants <span>avec découpe laser sur mesure</span>"
	}
  ];


// Définition des variables
	const previousArrow = document.querySelector('.arrow_left');
	const nextArrow = document.querySelector('.arrow_right');
	const bannerImage = document.querySelector('.banner-img');
	const taglineParagraph = document.querySelector('#banner p');
	const dotsContainer = document.querySelector('.dots');
	const numberOfSlides = slides.length;
	let activeSlide = 0;

// Action sur le clic flèche gauche
	previousArrow.addEventListener('click', () => {
	PreviousSlide();
	bannerImage.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
	taglineParagraph.innerHTML = slides[activeSlide].tagLine;
	activeDot();
  });
  
// Action sur le clic flèche droite
  	nextArrow.addEventListener('click', () => {
	NextSlide();
	bannerImage.src = `./assets/images/slideshow/${slides[activeSlide].image}`;
	taglineParagraph.innerHTML = slides[activeSlide].tagLine;
	activeDot();
  });
   
// Fonction pour créer les dots
  	function createDots() {
	for (let i = 0; i < numberOfSlides; i++) {
	const dot = document.createElement('div');
	dot.classList.add('dot');
	dotsContainer.appendChild(dot);
	}
    }
  	createDots();
  
// Fonction pour afficher le dot actif
	function activeDot() {
	const dots = document.querySelectorAll('.dot');
	dots.forEach((dot) => dot.classList.remove('dot_selected'));
	dots[activeSlide].classList.add('dot_selected');
	}
	activeDot();
  
// Fonction pour passer à la diapositive précédente
	function PreviousSlide() {
	activeSlide--;
	if (activeSlide < 0) {
	activeSlide = numberOfSlides - 1;
	}
	}
	  
// Fonction pour passer à la diapositive suivante
	function NextSlide() {
	activeSlide++;
	if (activeSlide === numberOfSlides) {
	activeSlide = 0;
	}
	}