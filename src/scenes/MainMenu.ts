export default class MainMenu extends Phaser.Scene {
  score: number = 0;
  scoreText!: Phaser.GameObjects.Text;

  constructor(key: string) {
    super(key);



  }

  create() {
    // Text soll auf "pointerover" event reagieren
    // Anschließend soll der score erhöht werden, wenn gehovert wird.
    var text = this.add.text(20, 30, "I want to be tested");

    text.setInteractive(new Phaser.Geom.Rectangle(text.x, text.y, text.width, text.height), Phaser.Geom.Rectangle.Contains);
    text.input.hitArea.x += text.width / 2;
    text.input.hitArea.y += text.height / 2;

    text.on("pointerover", () => {
      this.score++;
      console.log(this.score);
    });

    this.scoreText = this.add.text(20, 70, "Score: ");
  }

  update() {
    this.scoreText.text = "Score: " + this.score;
  }
}