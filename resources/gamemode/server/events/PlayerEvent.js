import alt from 'alt-server';
import chat from 'chat';
import { areas } from "./Areas";
const coordinate = { x: 813, y: -279, z: 66, delay: 50 };
class PlayerEvent {
  connect(player) {
    alt.Player();
    chat.broadcast(`${player.name} welcome!`);
    alt.emitClient(player, 'onFirstConnect');
  }

  spawned(player) {
    player.model = 's_m_m_movalien_01';
    player.spawn(coordinate.x, coordinate.y, coordinate.z, coordinate.delay);
    chat.send(player, 'You have been spawned');
    alt.emitClient(player, 'emitListOfAreas', areas);
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

  enterToArea(area, entity) {
    if (area.isEntityIn(entity)) {
      chat.send(entity, `You are in ${area.Name}`);
    }
  }

  leaveArea(area, entity) {
    if (!area.isEntityIn(entity)) {
      chat.send(entity, `You have left ${area.Name}`);
    }
  }
}

export default new PlayerEvent();