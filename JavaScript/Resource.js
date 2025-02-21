class Resources {
  constructor() {
    this.toLoad = {
        path: "assests/Locations/path.png",
        paris_slums: "assests/Locations/paris_slums.png",
        male_sprite: "assests/male_character.png",
        female_sprite: "assests/female_character.png"
    };
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