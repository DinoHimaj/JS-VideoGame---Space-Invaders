export default class Enemy {
  constructor(x, y, imageNumber) {
    this.x = x;
    this.y = y;
    //44x32 are the dimensions of the image
    this.width = 44;
    this.height = 32;

    this.image = new Image();
    this.image.src = `images/enemy${imageNumber}.png`;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  //https://developer.mozilla.org/en-US/docs/Games/Techniques/2D_collision_detection
  collideWith(sprite) {
    if (
      this.x + this.width > sprite.x &&
      this.x < sprite.x + sprite.width &&
      this.y + this.height > sprite.y &&
      this.y < sprite.y + sprite.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
