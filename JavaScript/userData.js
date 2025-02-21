//Character gender

const gender = localStorage.getItem('gender');

export let sprite_gender;

if (gender == "male") {
    sprite_gender = "male";
} else {
    sprite_gender = "female";
}

console.log(sprite_gender);

//Cards Collected

let cardsFound = 0;