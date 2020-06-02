import alt from 'alt-server';
import chat from 'chat';
import Player from './Player';

chat.registerCmd('pos', Player.displayPositionOnChat);
chat.registerCmd('veh', Player.getVehicle);