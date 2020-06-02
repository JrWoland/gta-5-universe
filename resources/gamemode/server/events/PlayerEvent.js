import alt from 'alt-server';
import chat from 'chat';

const coordinate = { x: 813, y: -279, z: 66, delay: 50 };

class PlayerEvent {
    connect(player) {
        chat.broadcast(`${player.name} welcome!`);
        alt.emitClient(player, 'onFirstConnect');
    }

    spawn(player) {
        player.model = 's_m_m_movalien_01';
        player.spawn(coordinate.x, coordinate.y, coordinate.z, coordinate.delay);
        chat.send(player, 'You have been spawned');
    }

}

export default new PlayerEvent();