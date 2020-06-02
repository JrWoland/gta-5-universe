import alt from 'alt-server';
import PlayerEvent from './PlayerEvent';
alt.onClient('spawnPlayer', PlayerEvent.spawned);

alt.on('playerConnect', PlayerEvent.connect);
alt.on('playerDamage', PlayerEvent.attackAnotherPlayer);
alt.on('playerDeath', PlayerEvent.killedByEnemy);
