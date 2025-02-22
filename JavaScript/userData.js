//Character gender

const gender = sessionStorage.getItem('gender');

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

sessionStorage.setItem('creation_national_assembly', JSON.stringify(Creation_National_Assembly));
sessionStorage.setItem('estates_general', JSON.stringify(Estates_General));
sessionStorage.setItem('french_envelopment', JSON.stringify(French_Envelopment));
sessionStorage.setItem('storm_bastille', JSON.stringify(Storm_Bastille));
sessionStorage.setItem('tennis_court_oath', JSON.stringify(Tennis_Court_Oath));
sessionStorage.setItem('first_second_estate', JSON.stringify(First_Second_Estate));
sessionStorage.setItem('King_Louis', JSON.stringify(King_Louis));
sessionStorage.setItem('National_Assembly', JSON.stringify(National_Assembly));
sessionStorage.setItem('Third_Estate', JSON.stringify(Third_Estate));