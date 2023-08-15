export class EnemyOne{
    constructor (image, width, height, spriteWidht, spriteHeight, imageCoorX, imageCoorY) {
        this.image = image;
        this.width = width;
        this.height = height;
        this.spriteWidht = spriteWidht;
        this.spriteHeight = spriteHeight;
        this.imageCoorX = imageCoorX;
        this.imageCoorY = imageCoorY;
        this.spritecordX = 0;
        
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.spritecordX * this.spriteWidht, 0, this.spriteWidht, this.spriteHeight,  this.imageCoorX, this.imageCoorY, this.width, this.height);
    } 
    update() {
        this.spritecordX++;
        if(this.spritecordX == 6) {
            this.spritecordX = 0;
        }
        this.imageCoorX -= 5;
        
    }
}