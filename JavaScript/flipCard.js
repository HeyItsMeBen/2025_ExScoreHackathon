let creationNationalAssemblyStatus = true;// JSON.parse(sessionStorage.getItem('creation_national_assembly'));
let estatesGeneralStatus = true;// JSON.parse(sessionStorage.getItem('estates_general'));
let frenchEnvelopmentStatus = true;// JSON.parse(sessionStorage.getItem('french_envelopment'));
let stormBastilleStatus = true;// JSON.parse(sessionStorage.getItem('storm_bastille'));
let tennisCourtOathStatus = true;// JSON.parse(sessionStorage.getItem('tennis_court_oath'));
let firstSecondEstateStatus = true;// JSON.parse(sessionStorage.getItem('first_second_estate'));
let kingLouisStatus = true;// JSON.parse(sessionStorage.getItem('King_Louis'));
let nationalAssemblyStatus = true;// JSON.parse(sessionStorage.getItem('National_Assembly'));
let thirdEstateStatus = true; //JSON.parse(sessionStorage.getItem('Third_Estate'));

let creationNationalAssemblyFront = document.getElementById("front1");
let creationNationalAssemblyBack = document.getElementById("back1");

let estatesGeneralFront = document.getElementById("front2");
let estatesGeneralBack = document.getElementById("back2");

let frenchEnvelopmentFront = document.getElementById("front3");
let frenchEnvelopmentBack = document.getElementById("back3");

let stormBastilleFront = document.getElementById("front4");
let stormBastilleBack = document.getElementById("front4");

let tennisCourtOathFront = document.getElementById("front5");
let tennisCourtOathBack = document.getElementById("front5");

let firstSecondEstateFront = document.getElementById("front6");
let firstSecondEstateBack = document.getElementById("back6");

let kingLouisFront = document.getElementById("front7");
let kingLouisBack = document.getElementById("front7");

let nationalAssemblyFront = document.getElementById("front8");
let nationalAssemblyBack = document.getElementById("back8");

let thirdEstateFront = document.getElementById("front9");
let thirdEstateBack = document.getElementById("front9");

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


