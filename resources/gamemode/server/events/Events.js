import alt from 'alt-server';
import PlayerEvent from './PlayerEvent';



// const specialPoint = new alt.Checkpoint(0, 791, -262, 62.6, 20, 400, 255, 255, 255, 120);

// specialPoint.Name = 'Special Point';



alt.onClient('spawnPlayer', PlayerEvent.spawned);

alt.on('playerConnect', PlayerEvent.connect);
alt.on('playerDamage', PlayerEvent.attackAnotherPlayer);
alt.on('playerDeath', PlayerEvent.killedByEnemy);

alt.on('entityEnterColshape', PlayerEvent.enterToArea);
alt.on('entityLeaveColshape', PlayerEvent.leaveArea);