import alt from 'alt-server';
import chat from 'chat';

const coordinate = { x: 813, y: -279, z: 66, delay: 50 };

class PlayerEvent {
  connect(player) {
    chat.broadcast(`${player.name} welcome!`);
    alt.emitClient(player, 'onFirstConnect');
  }

  spawned(player) {
    player.model = 's_m_m_movalien_01';
    player.spawn(coordinate.x, coordinate.y, coordinate.z, coordinate.delay);
    chat.send(player, 'You have been spawned');
  }

  attackAnotherPlayer(target, attacker, damage, weapon) {
    if (target === attacker) {
      return chat.send(target, `You attacked yourself`);
    }
    chat.send(target, `You were attacked by ${attacker.name}.`);
  }

  killedByEnemy(target, killer, weapon) {
    chat.broadcast(`${target.name} was killed by ${killer.name}.`);
  }

}

export default new PlayerEvent();