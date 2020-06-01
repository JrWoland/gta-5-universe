import alt from 'alt-server'
import chat from 'chat'

chat.registerCmd('pos', (player)=> {
    return chat.send(player, `X: ${player.pos.x}, Y: ${player.pos.y}, Z: ${player.pos.z}`)
})