let creationNationalAssemblyStatus = JSON.parse(localStorage.getItem('creation_national_assembly'));
let estatesGeneralStatus = JSON.parse(localStorage.getItem('estates_general'));
let frenchEnvelopmentStatus = JSON.parse(localStorage.getItem('french_envelopment'));
let stormBastilleStatus = JSON.parse(localStorage.getItem('storm_bastille'));
let tennisCourtOathStatus = JSON.parse(localStorage.getItem('tennis_court_oath'));
let firstSecondEstateStatus = JSON.parse(localStorage.getItem('first_second_estate'));
let kingLouisStatus = JSON.parse(localStorage.getItem('King_Louis'));
let nationalAssemblyStatus = JSON.parse(localStorage.getItem('National_Assembly'));
let thirdEstateStatus = JSON.parse(localStorage.getItem('Third_Estate'));

let creationNationalAssemblyFront = document.getElementById("front1");
let creationNationalAssemblyBack = document.getElementById("back1");

let estatesGeneralFront = document.getElementById("front2");
let estatesGeneralBack = document.getElementById("back2");

let frenchEnvelopmentFront = document.getElementById("front3");
let frenchEnvelopmentBack = document.getElementById("back3");

let stormBastilleFront = document.getElementById("front4");
let stormBastilleBack = document.getElementById("back4");

let tennisCourtOathFront = document.getElementById("front5");
let tennisCourtOathBack = document.getElementById("back5");

let firstSecondEstateFront = document.getElementById("front6");
let firstSecondEstateBack = document.getElementById("back6");

let kingLouisFront = document.getElementById("front7");
let kingLouisBack = document.getElementById("back7");

let nationalAssemblyFront = document.getElementById("front8");
let nationalAssemblyBack = document.getElementById("back8");

let thirdEstateFront = document.getElementById("front9");
let thirdEstateBack = document.getElementById("back9");

const card = document.getElementById("card_received");
const messageElement = document.getElementById("message");

document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', () => {
        card.classList.toggle('flipped');
    });
})

document.addEventListener("click", function(event) {
    const card = document.querySelector(".card");

    if (!card.contains(event.target) && cardPresetOnScreen == true) { 
        card.classList.add("remove"); // Hide the card
        cardPresetOnScreen = false;
    }
});

if (creationNationalAssemblyStatus) {
    creationNationalAssemblyFront.src = "../assests/Cards/Events/Frontside/Creation_National_Assembly.png";  // replace with the actual image path
    creationNationalAssemblyBack.src = "../assests/Cards/Events/Backside/Creation_National_Assembly.png";  // replace with the actual image path
}

if (estatesGeneralStatus) {
    estatesGeneralFront.src = "../assests/Cards/Events/Frontside/Estates_General.png";  // replace with the actual image path
    estatesGeneralBack.src = "../assests/Cards/Events/Backside/Estates_General.png";  // replace with the actual image path
}

if (frenchEnvelopmentStatus) {
    frenchEnvelopmentFront.src = "../assests/Cards/Events/Frontside/French_Envelopment.png";  // replace with the actual image path
    frenchEnvelopmentBack.src = "../assests/Cards/Events/Backside/French_Envelopment.png";  // replace with the actual image path
}

if (stormBastilleStatus) {
    stormBastilleFront.src = "../assests/Cards/Events/Frontside/Storm_Bastille.png"; // replace with the actual image path
    stormBastilleBack.src = "../assests/Cards/Events/Backside/Storm_Bastille.png";  // replace with the actual image path
}

if (tennisCourtOathStatus) {
    tennisCourtOathFront.src = "../assests/Cards/Events/Frontside/Tennis_Court_Oath.png";  // replace with the actual image path
    tennisCourtOathBack.src = "../assests/Cards/Events/Backside/Tennis_Court_Oath.png";  // replace with the actual image path
}

if (firstSecondEstateStatus) {
    firstSecondEstateFront.src = "../assests/Cards/People/Frontside/First_Second_Estate.png";  // replace with the actual image path
    firstSecondEstateBack.src = "../assests/Cards/People/Backside/First_Second_Estate.png";;  // replace with the actual image path
}

if (kingLouisStatus) {
    kingLouisFront.src = "../assests/Cards/People/Frontside/King_Louis.png";  // replace with the actual image path
    kingLouisBack.src = "../assests/Cards/People/Backside/King_Louis.png";  // replace with the actual image path
}

if (nationalAssemblyStatus) {
    nationalAssemblyFront.src = "../assests/Cards/People/Frontside/National_Assembly.png";  // replace with the actual image path
    nationalAssemblyBack.src =  "../assests/Cards/People/Backside/National_Assembly.png";   // replace with the actual image path
}

if (thirdEstateStatus) {
    thirdEstateFront.src = "../assests/Cards/People/Frontside/Third_Estate.png";   // replace with the actual image path
    thirdEstateBack.src = "../assests/Cards/People/Backside/Third_Estate.png";  // replace with the actual image path
}

window.addEventListener('beforeunload', () => {
    localStorage.clear(); // Clear all localStorage data
    console.log('LocalStorage cleared on session end');
});

// localStorage.setItem('Third_Estate', JSON.stringify(true));
// localStorage.setItem('King_Louis', JSON.stringify(true));
//Uses this in game.js later