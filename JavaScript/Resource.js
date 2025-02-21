import { sprite_gender } from './userData.js';

// class Resources {
//   constructor() {
//     // if (sprite_gender == "female") {
//     //   this.toLoad = {
//     //     male_sprite: "assests/female_character.png" //Switches to female
//     //   };
//     // } else {
//     //   this.toLoad = {
//     //     male_sprite: "assests/male_character.png" //Switches to male (default)
//     //   };
//     // }
//     this.toLoad = {
//       male_sprite: "assests/male_character.png", //Switches to male (default)
//       path: "assests/path.png"
//     };

//     Object.keys(this.toLoad).forEach((key) => {
//         const img = new Image();
//         img.src = this.toLoad[key];
//         this.images[key] = {
//             image:img,
//             isLoaded:false
//         }
//         img.onload = () => {
//             this.images[key].isLoaded = true;
//         }
//     })
//   }
// }

// export const resources = new Resources();
class Resources {
  constructor() {
    if (sprite_gender == "female") {
        this.toLoad = {
          path: "assests/path.png",
          male_sprite: "assests/female_character.png"
      };
      console.log("sprite_gender is female")
    } else {
      this.toLoad = {
        path: "assests/path.png",
        male_sprite: "assests/male_character.png"
      }
    }
    // this.toLoad = {
    //     path: "assests/path.png",
    //     male_sprite: "assests/male_character.png"
    // };
    this.images = {};

    Object.keys(this.toLoad).forEach((key) => {
        const img = new Image();
        img.src = this.toLoad[key];
        this.images[key] = {
            image:img,
            isLoaded:false
        }
        img.onload = () => {
            this.images[key].isLoaded = true;
        }
    })
  }
}

export const resources = new Resources();