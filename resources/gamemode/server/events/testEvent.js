import alt from 'alt-server'
import chat from 'chat'

alt.on("playerConnect", (player) => {
   chat.broadcast(`${player.name} welcome!`)
})