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
var spacePopUp = false;
var speechBubble = false;
var speechBubble2 = false;
var interacted = false;
var curBubble = true;
const update = () => {
    moveSprite(input, sprite);
    scenes[curLevel].characters.forEach(character => {
        if (character.position.dist(spritePos) < 300 && !interacted) {
            spacePopUp = true;
            if (input.space === true) {
                interacted = true;
                speechBubble = true;
                curBubble = 1000;
                if (input.space === true) {
                    interacted = true;
                    console.log('SpeechBubble2!');
                    speechBubble2 = true;
                    localStorage.setItem('Third_Estate', JSON.stringify(true));
                    localStorage.setItem('King_Louis', JSON.stringify(true));
                }
            }
        }
        else{
            spacePopUp = false;
        }
    });
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
    
    if (spacePopUp){
        ctx.drawImage(resources.images.space_pop_up.image, spritePos.x - 100, spritePos.y + 50, 300,20);
    }
    if (speechBubble){
        ctx.drawImage(resources.images.speechbubble1.image, spritePos.x + 100, spritePos.y - 100, 250,187.5);
    }

    if (speechBubble2){
        ctx.drawImage(resources.images.speechbubble2.image, 600, 300, 250,187.5);
    }

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

window.addEventListener('beforeunload', () => {
    localStorage.clear(); // Clear all localStorage data
    console.log('LocalStorage cleared on session end');
});