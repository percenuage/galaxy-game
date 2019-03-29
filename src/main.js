'use strict';

import Board from './board.js';
import Alien from './alien.js';
import Gun from './gun.js';

let board = new Board(10, 10);
board.addRandomBlockingCells(10);
board.addAlien(new Alien('valentina'));
board.addAlien(new Alien('alien'));
board.addGun(new Gun('laser2', 20));
board.addGun(new Gun('laser3', 30));
board.addGun(new Gun('laser4', 40));

let context = document.querySelector('canvas').getContext('2d');
board.paint(context);

console.log(board);