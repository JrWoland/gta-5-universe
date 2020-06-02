import alt from 'alt-client';

alt.onServer('onFirstConnect', () => {
    alt.log('You just connected');
    alt.emitServer('spawnPlayer');
});