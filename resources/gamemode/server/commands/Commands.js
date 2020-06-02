import chat from 'chat';
import PlayerCmd from './Player';

chat.registerCmd('pos', PlayerCmd.displayPositionOnChat);
chat.registerCmd('veh', PlayerCmd.getVehicle);
chat.registerCmd('ufo', PlayerCmd.getUfo);
chat.registerCmd('ufodelete', PlayerCmd.deleteUfo);