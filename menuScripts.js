let playClicked = false;
let aboutClicked = false;
let creditsClicked = false;
let mapSelected = false;
let mapSelectedFrance = false;
let characterSelected = false;

const logo = document.getElementById('logo');
const play = document.getElementById('play');
const about = document.getElementById('about');
const credits = document.getElementById('credits');
const backArrowPlay = document.getElementById('back');
const mapTitle1 = document.getElementById("locationFrance");
const start = document.getElementById('start');
const male_character = document.getElementById('male');
const female_character = document.getElementById('female');

function hideElements(ids) {
    ids.forEach(id => {
        document.getElementById(id).classList.add("hide");
        document.getElementById(id).classList.remove("show");
        document.getElementById(id).classList.remove("fastHide");
        document.getElementById(id).classList.remove("fastShow");
    });
}

function showElements(ids) {
    ids.forEach(id => {
        document.getElementById(id).classList.remove("hide");
        document.getElementById(id).classList.add("show");
        document.getElementById(id).classList.remove("fastHide");
        document.getElementById(id).classList.remove("fastShow");
    });
}

function fastHideElements(ids) {
    ids.forEach(id => {
        document.getElementById(id).classList.remove("hide");
        document.getElementById(id).classList.remove("show");
        document.getElementById(id).classList.add("fastHide");
        document.getElementById(id).classList.remove("fastShow");
    });
}

function fastShowElements(ids) {
    ids.forEach(id => {
        document.getElementById(id).classList.remove("hide");
        document.getElementById(id).classList.remove("show");
        document.getElementById(id).classList.remove("fastHide");
        document.getElementById(id).classList.add("fastShow");
    });
}

backArrowPlay.addEventListener('click', () => { //go to the play screen
    showElements(["play", "about", "credits", "logo"]);
    fastHideElements(["back"]);
    if (playClicked == true) {
        hideElements(["characterTitle", "locationTitle", "locationFrance", "TBD1", "TBD2", "TBD3", "icon1", "icon2", "icon3", "icon4", "male", "female"]);
        if (mapSelected == true && characterSelected == true) {
            hideElements(["start"]);
        }
    } else if (aboutClicked == true) {
        hideElements(["aboutDisplay"]);
    } else if (creditsClicked == true) {
        hideElements(["creditsDisplay"]);
    }
    playClicked = false;
    aboutClicked = false;
    creditsClicked = false;
});

play.addEventListener('mouseover', () => { 
    play.src = "assests/NavBar/Play_Button_Hover.png"; // Change image on hover
    });
play.addEventListener('mouseout', () => {
    play.src = "assests/NavBar/Play_Button_Idle.png"; // Revert back when hover ends
    });
play.addEventListener('click', () => { //go to the play screen
    playClicked = true;
    hideElements(["play", "about", "credits", "logo"]);
    fastShowElements(["back"]);
    showElements(["characterTitle", "locationTitle", "locationFrance", "TBD1", "TBD2", "TBD3", "icon1", "icon2", "icon3", "icon4", "male", "female"]);
});

about.addEventListener('mouseover', () => { 
    about.src = "assests/NavBar/About_Hover.png"; // Change image on hover
});
about.addEventListener('mouseout', () => {
    about.src = "assests/NavBar/About_Idle.png"; // Revert back when hover ends
});
    about.addEventListener('click', () => { //go to the about screen
        aboutClicked = true;
        hideElements(["play", "about", "credits", "logo"]);
        fastShowElements(["back"]);
        showElements(["aboutDisplay"]);
});

credits.addEventListener('mouseover', () => { 
    credits.src = "assests/NavBar/Credits_hover.png"; // Change image on hover
});
credits.addEventListener('mouseout', () => {
    credits.src = "assests/NavBar/Credits_idle.png"; // Revert back when hover ends
});
credits.addEventListener('click', () => { //go to the credits screen
    creditsClicked = true;
    hideElements(["play", "about", "credits", "logo"]);
    fastShowElements(["back"]);
    showElements(["creditsDisplay"]);
});

mapTitle1.addEventListener('mouseover', () => {
    mapTitle1.style.color = "yellow";
});
mapTitle1.addEventListener('mouseout', () => {
    if (mapSelectedFrance == false) {
        mapTitle1.style.color = "white";
    } else {
        mapTitle1.style.color = "yellow";
    }
});
mapTitle1.addEventListener('click', () => {
    mapTitle1.style.color = "yellow";
    mapSelectedFrance = true;
    mapSelected = true;
});

start.addEventListener('mouseover', () => {
    start.style.color = "yellow";
});
start.addEventListener('mouseout', () => {
    start.style.color = "white";
});
start.addEventListener('click', () => {
    if (mapSelected == true && characterSelected == true) {
        //Link to game
    }
});


document.addEventListener("click", function () {
    if (playClicked == true && mapSelected == true && characterSelected == true) {
        fastShowElements(["start"]);
    }
});

["back", "creditsDisplay", "aboutDisplay", "characterTitle", "locationTitle", "locationFrance", "TBD1", "TBD2", "TBD3", "icon1", "icon2", "icon3", "icon4", "start", "male", "female"].forEach(id => {
    fastHideElements([id])
});











