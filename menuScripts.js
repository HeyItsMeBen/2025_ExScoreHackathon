let playClicked = false;
let aboutClicked = false;
let creditsClicked = false;

const play = document.getElementById('play');
const about = document.getElementById('about');
const credits = document.getElementById('credits');
const backArrowPlay = document.getElementById('back');


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
    showElements(["play", "about", "credits"]);
    fastHideElements(["back"]);
    if (playClicked == true) {
        hideElements(["characterTitle", "locationTitle", "locationFrance", "TBD1", "TBD2", "TBD3"]);
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
    hideElements(["play", "about", "credits"]);
    fastShowElements(["back"]);
    showElements(["characterTitle", "locationTitle", "locationFrance", "TBD1", "TBD2", "TBD3"]);
});

about.addEventListener('mouseover', () => { 
    about.src = "assests/NavBar/About_Hover.png"; // Change image on hover
});
about.addEventListener('mouseout', () => {
    about.src = "assests/NavBar/About_Idle.png"; // Revert back when hover ends
});
    about.addEventListener('click', () => { //go to the about screen
        aboutClicked = true;
        hideElements(["play", "about", "credits"]);
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
    hideElements(["play", "about", "credits"]);
    fastShowElements(["back"]);
    showElements(["creditsDisplay"]);
});

fastHideElements(["back"]);
fastHideElements(["creditsDisplay"]);
fastHideElements(["aboutDisplay"]);
fastHideElements(["characterTitle"]);
fastHideElements(["locationTitle"]);
fastHideElements(["locationFrance"]);
fastHideElements(["TBD1"]);
fastHideElements(["TBD2"]);
fastHideElements(["TBD3"]);







