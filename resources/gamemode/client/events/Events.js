import alt from 'alt-client';
import game from 'natives';


alt.onServer('onFirstConnect', () => {
  alt.log('You just connected');
  alt.emitServer('spawnPlayer');
  const area = new alt.RadiusBlip(791, -262, 62.6, 1000);
  area.alpha = 200;
  area.color = 1;
  area.category = 2;

});

alt.onServer('ufoCmd', () => {
  game.createObject(-1268267712, 813, -279, 80);
});

alt.onServer('ufoCmdDelete', () => {
  game.deleteObject(-1268267712);
});
