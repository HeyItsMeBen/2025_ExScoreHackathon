import { resources } from "./Resource.js";
import { Sprite } from "./Sprite.js";
import { Vector2 } from "./Vector2.js";
import { GameLoop } from "./GameLoop.js";
import { Input } from "./Input.js";

const canvas = document.querySelector("#game-canvas");
const ctx = canvas.getContext("2d");
const input = new Input();
const speed = 10;
const update = () =>{
    if (input.direction === "UP") {
        spritePos.y -= speed;
    }
    if (input.direction === "DOWN") {
        spritePos.y += speed;
    }
    if (input.direction === "LEFT") {
        spritePos.x -= speed;
    }
    if (input.direction === "RIGHT") {
        spritePos.x += speed;
    }
}
const male_sprite = new Sprite({
    resource: resources.images.male_sprite,
    frameSize: new Vector2(250,250),
    hFrames: 4,
    vFrames:4,
    frame:0
});
const spritePos = new Vector2(60, 60);
const draw = () => {
    const path = resources.images.path;
    if (path.isLoaded) {
        ctx.drawImage(path.image, 0, 0, 1280,720);
    }
    ctx.imageSmoothingEnabled = false;

    male_sprite.drawImage(ctx, spritePos.x, spritePos.y);
    
}

const gameLoop = new GameLoop(update, draw);
gameLoop.start();
