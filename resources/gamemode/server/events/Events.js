import alt from 'alt-server';
import PlayerEvent from './PlayerEvent';
alt.onClient('spawnPlayer', PlayerEvent.spawned);


const specialPoint = new alt.Checkpoint(0, 791, -262, 62.6, 1000, 400, 255, 255, 255, 120);
const greenPoint = new alt.ColshapeSphere(770, -262, 66, 20);

specialPoint.Name = "SpecialPoint";
greenPoint.Name = "GreenPoint";


alt.on('playerConnect', PlayerEvent.connect);
alt.on('playerDamage', PlayerEvent.attackAnotherPlayer);
alt.on('playerDeath', PlayerEvent.killedByEnemy);

alt.on('entityEnterColshape', PlayerEvent.enterToArea);
alt.on('entityLeaveColshape', PlayerEvent.leaveArea);