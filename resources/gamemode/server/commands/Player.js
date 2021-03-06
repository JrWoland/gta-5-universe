import alt from 'alt-server';
import chat from 'chat';

class PlayerCmd {
  displayPositionOnChat(player) {
    const { x, y, z } = player.pos;
    chat.send(player, `X: ${x}, Y: ${y}, Z: ${z}`);
  }

  getVehicle(player, args) {
    const { x, y, z } = player.pos;
    if (player.personalVehicle !== undefined) {
      player.personalVehicle.destroy();
    }
    player.personalVehicle = new alt.Vehicle(args[0], x + 5, y, z, 0, 0, 0);
  }

  getUfo(player, args) {
    alt.emitClient(player, 'ufoCmd');
  }

  deleteUfo(player, args) {
    alt.emitClient(player, 'ufoCmdDelete');
  }
}

const instance = new PlayerCmd();
export default instance;