import alt from 'alt-server';
import chat from 'chat';

const standardPos = { x: 813, y: -279, z: 66, delay: 50 };

class PlayerEvent {
    connect(player, { x, y, z, delay } = standardPos) {
        chat.broadcast(`${player.name} welcome!`);
        alt.emitClient(player, 'onFirstConnect');
        player.spawn(x, y, z, delay);
    }

    spawn(player) {
        player.model = 's_m_m_movalien_01';
        player.pos = standardPos;
        chat.send(player, 'You have been spawned');
    }

    standardPos() {
        return standardPos;
    }
}

export default new PlayerEvent();