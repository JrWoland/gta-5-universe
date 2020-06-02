import alt from 'alt-server';
import chat from 'chat';

class Player {
  constructor() {
    this.name = 'this test';
  }
  displayPositionOnChat(player) {
    const { x, y, z } = player.pos;
    chat.send(player, `X: ${x}, Y: ${y}, Z: ${z}`);
  }

  getVehicle(player, args) {
    const { x, y, z } = player.pos;
    return new alt.Vehicle(args[0], x + 5, y, z, 0, 0, 0);
  }
}

const instance = new Player();
export default instance;