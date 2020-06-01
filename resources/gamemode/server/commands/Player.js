import chat from 'chat'

class Player {
    displayPositionOnChat(player) {
        chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`)
    }
}

export default new Player()