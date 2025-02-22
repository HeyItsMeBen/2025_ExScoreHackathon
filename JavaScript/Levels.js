import {resources} from "./Resources.js";
import {Sprite} from "./Sprite.js";
import {Vector2} from "./Vector2.js";
import {Animations, FrameIndexPattern} from "./Animations.js"; 

export const scenes = {
    1:{
        name: paris_slums,
        background: resources.images.paris_slums,
        level: 1,
        y_bar: 300,
        characters: {
            proletariat: {sprite:
            new Sprite({
                resource: resources.images.sprite,
                frameSize: new Vector2(250,250),
                hFrames: 2,
                vFrames:2,
                frame:0,
                animations: new Animations({
                    stand: new FrameIndexPattern(STAND),
                })
            }), position: new Vector2(600,400)}
        },
        path: "assests/paris_slums.png",
        
    }
}