const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]




// EVENTS LISTENER //

const previousArrow = document.querySelector('.arrow_left');
const nextArrow = document.querySelector('.arrow_right');


previousArrow.addEventListener('click', () => {
	activeSlide = (activeSlide - 1 + numberOfSlides) % numberOfSlides;
	console.log('ceci est un clic sur la flèche gauche')
	activeDot();
});

nextArrow.addEventListener('click', () => {
	activeSlide = (activeSlide + 1) % numberOfSlides;
	console.log('ceci est un clic sur la flèche droite')
	activeDot();
});






