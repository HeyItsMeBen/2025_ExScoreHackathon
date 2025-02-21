import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./GameLoop.js";
import { DOWN, Input, LEFT, RIGHT, UP } from "./Input.js";
import { WALK_DOWN, WALK_LEFT, WALK_RIGHT, WALK_UP,STAND_DOWN, STAND_LEFT, STAND_RIGHT, STAND_UP} from "./playerAnimations.js";
import { FrameIndexPattern } from "./FrameIndexPattern.js";
import { Animations } from "./Animations.js";


// game.js
console.log("game.js file is connected!");

//Note: Can avoid CORS restrictions by running --disable-web-security --user-data-dir="C:\chrome_dev". Not recommended if you have a local server instead

let charFacing = DOWN;
const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const input = new Input();
const speed = 7;
const update = () =>{
    sprite.step(1000/60);
    if (!input.direction){
        if (charFacing == UP){sprite.animations.play("standUp");}
        if (charFacing == DOWN){sprite.animations.play("standDown");}
        if (charFacing == LEFT){sprite.animations.play("standLeft");}
        if (charFacing == RIGHT){sprite.animations.play("standRight");}
        return;
    }
    if (input.direction === UP) {
        console.log(spritePos.y);
        if (spritePos.y >= 300) {
            spritePos.y -= speed;
        }
        sprite.animations.play("walkUp");
    }
    if (input.direction === DOWN) {
        if (spritePos.y <= 720){
            spritePos.y += speed;
        }
        sprite.animations.play("walkDown");
    }
    if (input.direction === LEFT) {
        if (spritePos.x >= -100){
            spritePos.x -= speed;
        }
        sprite.animations.play("walkLeft");
    }
    if (input.direction === RIGHT) {
        if (spritePos.x <= 1180){
            spritePos.x += speed;
        }
        sprite.animations.play("walkRight");
    }
    charFacing = input.direction ?? charFacing;
}
const sprite = new Sprite({
    resource: resources.images.female_sprite,
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
    const bg = resources.images.paris_slums;
    if (bg.isLoaded) {
        ctx.drawImage(bg.image, 0, 0, 1280,720);
    }
    ctx.imageSmoothingEnabled = false;

    sprite.drawImage(ctx, spritePos.x, spritePos.y);
    
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();