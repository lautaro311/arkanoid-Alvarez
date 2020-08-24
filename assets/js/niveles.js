var patron;
class niveles extends Phaser.Scene {
  constructor() {
    super("nivel_1");
  }

  preload() {
    this.load.atlas(
      "atlas",
      "../assets/utility.png",
      "../assets/utility_atlas.json"
    );
    this.load.image("BRICK", "../assets/bricks.png");
    this.load.image("boton", "../assets/boton.png");
    this.load.tilemapTiledJSON("lvl1", "../assets/lvl1.json");
    this.load.tilemapTiledJSON("lvl2", "../assets/lvl2.json");
  }

  create() {

    
    var mapa = this.make.tilemap({ key: "lvl1" });
   
    var tileset = mapa.addTilesetImage("bricks", "BRICK");
   

   

    pelota = this.physics.add.image(780, 755, "atlas", "ball").setScale(0.3);



    var topLayer = mapa.createStaticLayer("top", tileset);
    topLayer.setCollisionByProperty({ collides: true });

    this.physics.add.collider(pelota, topLayer);
    

    pelota.setCollideWorldBounds(true);
    pelota.setBounce(1, 1);
    this.physics.world.checkCollision.down = false;

   

    cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);

    
    this.physics.add.collider(pelota, topLayer,);
    patron = Phaser.Math.FloatBetween(-100, 100);
    var boton = this.add.image(1300, 800, "boton")
    .setInteractive({cursor: "pointer"});
    
    var texto = this.add.text(1240,790,"Nivel 2").setScale(2);


    boton.on("pointerdown", () => {
     this.scene.sleep("nivel_1");
     this.scene.run("nivel_2");
    })
    paleta = this.physics.add.image(780, 800, "atlas", "paddle").setScale(0.9);
    paleta.body.immovable = true;
    paleta.setCollideWorldBounds(true);
    paleta.body.setCollideWorldBounds(true);
    this.physics.add.collider(pelota, paleta,);
    this.physics.add.collider(pelota, paleta);
  }

  

  update() {
      if(play=1){
        if (cursors.left.isDown) {
            paleta.setVelocityX(-400);
          } else if (cursors.right.isDown) {
            paleta.setVelocityX(400);
          } else {
            paleta.setVelocityX(0);
          }
          if (keySpace.isDown) {
              start();
            }
      
          if (pelota.y > 930) {
              play = 0
              pelota.x = paleta.x;
              pelota.y = paleta.y - 52;
              pelota.setVelocity(0);
          }
      }
  }
}

function start() {
 if (play = 0) {
     play = 1
    console.log("start");
  pelota.setVelocity(patron, -500);
 }
  }
