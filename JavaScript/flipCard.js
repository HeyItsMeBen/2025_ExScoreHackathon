let creationNationalAssemblyStatus = JSON.parse(sessionStorage.getItem('creation_national_assembly'));
let estatesGeneralStatus = JSON.parse(sessionStorage.getItem('estates_general'));
let frenchEnvelopmentStatus = JSON.parse(sessionStorage.getItem('french_envelopment'));
let stormBastilleStatus = JSON.parse(sessionStorage.getItem('storm_bastille'));
let tennisCourtOathStatus = JSON.parse(sessionStorage.getItem('tennis_court_oath'));
let firstSecondEstateStatus = JSON.parse(sessionStorage.getItem('first_second_estate'));
let kingLouisStatus = JSON.parse(sessionStorage.getItem('King_Louis'));
let nationalAssemblyStatus = JSON.parse(sessionStorage.getItem('National_Assembly'));
let thirdEstateStatus = JSON.parse(sessionStorage.getItem('Third_Estate'));

let creationNationalAssembly = document.getElementById("creation_national_assembly");
let estatesGeneral = document.getElementById("Estates_General");
let frenchEnvelopment = document.getElementById("French_envelopment");
let stormBastille = document.getElementById("storm_Bastille");
let tennisCourtOath = document.getElementById("Tennis_Court_Oath");
let firstSecondEstate = document.getElementById("first_second_estate");
let kingLouis = document.getElementById("King_Louis");
let nationalAssembly = document.getElementById("National_Assembly");
let thirdEstate = document.getElementById("Third_Estate");

function flipCard(card) {
    card.querySelector(".card-inner").classList.toggle("flipped");
}

document.addEventListener("click", function(event) {
    const card = document.querySelector(".card");

    if (!card.contains(event.target) && cardPresetOnScreen == true) { 
        card.classList.add("remove"); // Hide the card
        cardPresetOnScreen = false;
    }
});

// Get the container and buttons
const cardContainer = document.querySelector('.card-container');
const scrollLeftButton = document.getElementById('scroll-left');
const scrollRightButton = document.getElementById('scroll-right');

// Define scroll step (change this value to adjust the scroll distance)
const scrollStep = 220; // Amount to scroll (width of a card + margin)

// Scroll to the right (next card)
scrollRightButton.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: scrollStep, // Move right
    behavior: 'smooth' // Smooth scroll
  });
});

// Scroll to the left (previous card)
scrollLeftButton.addEventListener('click', () => {
  cardContainer.scrollBy({
    left: -scrollStep, // Move left
    behavior: 'smooth' // Smooth scroll
  });
});


if (creationNationalAssemblyStatus) {
    creationNationalAssembly.src = "../assests/Cards/Events";  // replace with the actual image path
}

if (estatesGeneralStatus) {
    estatesGeneral.src = "path/to/your/image2.png";  // replace with the actual image path
}

if (frenchEnvelopmentStatus) {
    frenchEnvelopment.src = "path/to/your/image3.png";  // replace with the actual image path
}

if (stormBastilleStatus) {
    stormBastille.src = "path/to/your/image4.png";  // replace with the actual image path
}

if (tennisCourtOathStatus) {
    tennisCourtOath.src = "path/to/your/image5.png";  // replace with the actual image path
}

if (firstSecondEstateStatus) {
    firstSecondEstate.src = "path/to/your/image6.png";  // replace with the actual image path
}

if (kingLouisStatus) {
    kingLouis.src = "path/to/your/image7.png";  // replace with the actual image path
}

if (nationalAssemblyStatus) {
    nationalAssembly.src = "path/to/your/image8.png";  // replace with the actual image path
}

if (thirdEstateStatus) {
    thirdEstate.src = "path/to/your/image9.png";  // replace with the actual image path
}
//    <script src="flipCard.js"></script> 

