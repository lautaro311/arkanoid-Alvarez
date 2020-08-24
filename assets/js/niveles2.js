var patron;
class niveles2 extends Phaser.Scene {
  constructor() {
    super("nivel_2");
  }

  preload() {
    this.load.atlas(
      "atlas",
      "../assets/utility.png",
      "../assets/utility_atlas.json"
    );
    this.load.image("BRICK", "../assets/bricks.png");
    this.load.image("boton", "../assets/boton.png");
    this.load.tilemapTiledJSON("lvl2", "../assets/lvl2.json");
  }

  create() {

    
    var mapa = this.make.tilemap({ key: "lvl2" });
   
    var tileset = mapa.addTilesetImage("bricks", "BRICK");
   

    paleta = this.physics.add.image(780, 800, "atlas", "paddle").setScale(0.9);
    paleta.body.immovable = true;
    paleta.setCollideWorldBounds(true);

    pelota = this.physics.add.image(780, 755, "atlas", "ball").setScale(0.3);


    var topLayer = mapa.createStaticLayer("top", tileset);
    topLayer.setCollisionByProperty({ collides: true });

    this.physics.add.collider(pelota, topLayer);
    this.physics.add.collider(pelota, paleta);

    pelota.setCollideWorldBounds(true);
    pelota.setBounce(1, 1);
    this.physics.world.checkCollision.down = false;

    paleta.body.setCollideWorldBounds(true);

    cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    this.physics.add.collider(pelota, paleta,);
    this.physics.add.collider(pelota, topLayer,);
    patron = Phaser.Math.FloatBetween(-100, 100);
  }

  

  update() {
    if (cursors.left.isDown) {
      paleta.setVelocityX(-400);
    } else if (cursors.right.isDown) {
      paleta.setVelocityX(400);
    } else {
      paleta.setVelocityX(0);
    }
    if (keySpace.isDown) {
      start();
      console.log("start");
    }
    if (keySpace.isDown) {
        start();
      }
  }
}
function start() {
    console.log("start");
  
    pelota.setVelocity(patron, -500);
  }
