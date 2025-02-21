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
let Creation_National_Assembly = false;
let Estates_General = false;
let French_Envelopment = false;
let Storm_Bastille = false;
let Tennis_Court_Oath = false;
let First_Second_Estate = false;
let King_Louis = false;
let National_Assembly = false;
let Third_Estate = false;
