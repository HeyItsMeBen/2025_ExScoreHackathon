import { sprite_gender } from './userData.js';

class Resources {
  constructor() {
    this.toLoad = {
      path: "assests/Locations/path.png",
      paris_slums: "assests/Locations/paris_slums.png",
    }
    if (sprite_gender == "female") {
      this.toLoad.sprite = "assests/female_character.png";
      console.log("sprite_gender is female")
    } else {
      this.toLoad.sprite =  "assests/male_character.png";
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
          console.log(this.images[key].image + " is loaded");
            this.images[key].isLoaded = true;
        }
    })
  }
}

export const resources = new Resources();