var config = {
    type: Phaser.AUTO,
    scale: {
      autoCenter: Phaser.Scale.CENTER_BOTH,
      width: 1536,
      height: 930,
    },
  
    physics: { default: "arcade", arcade: { gravity: { y: 0 }, debug: true } },
    scene: [niveles,niveles2],
  };
  
  var game = new Phaser.Game(config);
  
  var paleta;
  var pelota;
  var play = 0;
  var cursors;
  var keySpace;