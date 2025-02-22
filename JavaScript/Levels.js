import {resources} from "./Resource.js";
import {Sprite} from "./Sprite.js";
import {Vector2} from "./Vector2.js";
import {Animations} from "./Animations.js"; 
import {FrameIndexPattern} from "./FrameIndexPattern.js";
import {STAND} from "./NPCAnimations.js";

export const scenes = {
    1: {
        name: "paris_slums",
        background: resources.images.paris_slums,
        y_bar: 300,
        characters: [
            {
                sprite: new Sprite({
                    resource: resources.images.proletariat,
                    frameSize: new Vector2(250, 250),
                    hFrames: 2,
                    vFrames: 2,
                    frame: 0,
                    animations: new Animations({
                        stand: new FrameIndexPattern(STAND),
                    })
                }),
                position: new Vector2(600, 400)
            }
        ],
        path: "assests/paris_slums.png",
    },

    2: {
        name: "path",
        background: resources.images.path,  // Ensure this resource exists
        level: 1,
        y_bar: 400,
        characters: [
            {
                sprite: new Sprite({
                    resource: resources.images.proletariat,
                    frameSize: new Vector2(250, 250),
                    hFrames: 2,
                    vFrames: 2,
                    frame: 0,
                    animations: new Animations({
                        stand: new FrameIndexPattern(STAND),
                    })
                }),
                position: new Vector2(600, 500)
            }
        ],
        path: "assests/path.png",
    }
};

