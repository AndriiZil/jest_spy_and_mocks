'use strict';

class SoundPlayer {
  constructor() {}

  playSoundFile(filename) {
    console.log(`Playing sound file ${filename}`);
  }
  get foo() {
    return 'bar';
  }
  static brand() {
    return 'player-brand';
  }
}

module.exports = SoundPlayer;
