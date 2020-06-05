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
    if (target == attacker) {
      return chat.send(target, `You attacked yourself`);
    }
    // chat.send(target, `You were attacked by ${attacker.netOwner}.`);
  }

  killedByEnemy(target, killer, weapon) {
    chat.broadcast(`${target.name} was killed by ${killer.name}.`);
  }

  enterToArea(checkpoint, entity) {
    if (checkpoint.isEntityIn(entity)) {
      chat.send(entity, `You are in ${checkpoint.Name}`);

      return checkpoint.Name;
    }
  }

  leaveArea(checkpoint, entity) {
    if (!checkpoint.isEntityIn(entity)) {
      chat.send(entity, `You have left ${checkpoint.Name}`);
      return checkpoint.Name;
    }
  }
}

export default new PlayerEvent();