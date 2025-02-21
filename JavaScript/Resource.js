import { sprite_gender } from './userData.js';

class Resources {
  constructor() {
    if (sprite_gender == "female") {
      this.toLoad = {
        path: "assests/Locations/path.png",
        male_sprite: "assests/female_character.png"
      }
      console.log("It's a girl!")
    } else {
      this.toLoad = {
        path: "assests/Locations/path.png",
        male_sprite: "assests/male_character.png"
      }
      console.log("It's a boy!")
    }
    
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