import alt from 'alt-server';
import PlayerEvent from './PlayerEvent';

alt.on('playerConnect', PlayerEvent.connect);
alt.onClient('spawnPlayer', PlayerEvent.spawn);
