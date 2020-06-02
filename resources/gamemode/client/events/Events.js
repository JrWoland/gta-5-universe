import alt, { Player } from 'alt-client';
import game from 'natives';


alt.onServer('onFirstConnect', () => {
  alt.log('You just connected');
  alt.emitServer('spawnPlayer');
});

alt.onServer('ufoCmd', () => {
  game.createObject(-1268267712, 813, -279, 80);
});

alt.onServer('ufoCmdDelete', () => {
  game.deleteObject(-1268267712);
});