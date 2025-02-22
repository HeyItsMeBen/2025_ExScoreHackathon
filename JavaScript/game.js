import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./GameLoop.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./Input.js";
import { WALK_DOWN, WALK_LEFT, WALK_RIGHT, WALK_UP,STAND_DOWN, STAND_LEFT, STAND_RIGHT, STAND_UP} from "./playerAnimations.js";
import { FrameIndexPattern } from "./FrameIndexPattern.js";
import { Animations } from "./Animations.js";
import {scenes} from "./Levels.js";

// game.js
console.log("game.js file is connected!");

//Note: Can avoid CORS restrictions by running --disable-web-security --user-data-dir="C:\chrome_dev". Not recommended if you have a local server instead

let charFacing = DOWN;
const curLevel = 1;
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const input = new Input();
const speed = 7;
const targetX = 60;
const targetY = 450;

var interacted = false;
const update = () => {
    moveSprite(input, sprite);
    if (input.space === true) {
        scenes[curLevel].characters.forEach(character => {
            if (character.position.dist(spritePos) < 300 && !interacted) {
                console.log("Interacted with character"); //replace with whatever the hell happens
                if (spritePos.x === targetX && spritePos.y === targetY) {
                    popupImage.style.display = 'press_space_to_talk';  // Show the image
                    popupImage.style.left = (spritePos.x + 50) + 'px';  // Adjust image position
                    popupImage.style.top = (spritePos.y + 50) + 'px';
                  } else {
                    popupImage.style.display = 'none';  // Hide the image
                  }
                interacted = true;
            }
        });
    }
}
const sprite = new Sprite({
    resource: resources.images.sprite,
    frameSize: new Vector2(250,250),
    hFrames: 4,
    vFrames:4,
    frame:0,
    animations: new Animations({
        walkDown: new FrameIndexPattern(WALK_DOWN),
        walkRight: new FrameIndexPattern(WALK_RIGHT),
        walkUp: new FrameIndexPattern(WALK_UP),
        walkLeft: new FrameIndexPattern(WALK_LEFT),
        standDown: new FrameIndexPattern(STAND_DOWN),
        standRight: new FrameIndexPattern(STAND_RIGHT),
        standUp: new FrameIndexPattern(STAND_UP),
        standLeft: new FrameIndexPattern(STAND_LEFT),
    })
});
const spritePos = new Vector2(60, 450);
const draw = () => {
    const bg =scenes[curLevel].background;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }
    ctx.imageSmoothingEnabled = false;
    
    scenes[curLevel].characters.forEach(character => {
        character.sprite.drawImage(ctx, character.position.x, character.position.y);
        character.sprite.step(1000/60);
        character.sprite.animations.play("stand");
    });
    sprite.drawImage(ctx, spritePos.x, spritePos.y);
        
    
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();

const moveSprite = (input, s) => {
    s.step(1000/60);
    if (!input.direction){
        if (charFacing == UP){s.animations.play("standUp");}
        if (charFacing == DOWN){s.animations.play("standDown");}
        if (charFacing == LEFT){s.animations.play("standLeft");}
        if (charFacing == RIGHT){s.animations.play("standRight");}
        return;
    }
    if (input.direction === UP) {
        if (spritePos.y >= scenes[curLevel].y_bar) {
            spritePos.y -= speed;
        }
        s.animations.play("walkUp");
    }
    if (input.direction === DOWN) {
        if (spritePos.y <= 500){
            spritePos.y += speed;
        }
        s.animations.play("walkDown");
    }
    if (input.direction === LEFT) {
        if (spritePos.x >= -100){
            spritePos.x -= speed;
        }
        s.animations.play("walkLeft");
    }
    if (input.direction === RIGHT) {
        if (spritePos.x <= 1180){
            spritePos.x += speed;
        }
        s.animations.play("walkRight");
    }
    charFacing = input.direction ?? charFacing;
}
