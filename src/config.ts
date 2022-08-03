import MainMenu from "./scenes/MainMenu";

export const GameConfig: Phaser.Types.Core.GameConfig = {
  title: 'Path of Survivors',
  url: 'https://paragrimm.stream',
  version: '0.0.1',
  width: 800,
  height: 600,
  type: Phaser.AUTO,
  parent: 'game',
  scene: [MainMenu],
  input: {
    keyboard: true,
    mouse: true,
    touch: false,
    gamepad: false
  },
  physics: {
    default: 'arcade',
    arcade: {
      debug: false
    }
  },
  backgroundColor: '#000000',
  render: { pixelArt: false, antialias: true },
};