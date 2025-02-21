let cardPresetOnScreen = true; //This should be set to false as default, but for the current sake is set to true

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

//    <script src="flipCard.js"></script> 

