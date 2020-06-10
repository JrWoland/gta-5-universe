import alt from 'alt-client';
import game from 'natives';


alt.onServer('onFirstConnect', () => {
  alt.log('You just connected');
  alt.emitServer('spawnPlayer');
});

alt.onServer('emitListOfAreas', (areas = []) => {
  areas.forEach(({ x, y, z, width, heigth, color, _name }) => {
    const area = new alt.AreaBlip(x, y, z, width, heigth);
    area.alpha = 150;
    area.color = color;
    area.heading = 0; //angle
    area.shortRange = true; //set visibility of dot
    area.name = _name;
  });
});

alt.onServer('ufoCmd', () => {
  game.createObject(-1268267712, 813, -279, 80);
});

alt.onServer('ufoCmdDelete', () => {
  game.deleteObject(-1268267712);
});
