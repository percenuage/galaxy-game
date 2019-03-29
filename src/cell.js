'use strict';

export default class Cell {

    constructor(row, col, board, block = false) {
        this.row = row;
        this.col = col;
        this.board = board;
        this.block = block;
        this.alien = null;
        this.gun = null;
    }

    setAlien(alien) {
        this.alien = alien;
        this.alien.cell = this;
    }

    setGun(gun) {
        this.gun = gun;
        this.gun.cell = this;
    }

    isVoid() {
        return !this.block && !this.alien && !this.gun;
    }

    paint(context) {
        const cellWidth = context.canvas.width / this.board.cols;
        const cellHeight = context.canvas.height / this.board.rows;
        if (this.block) {
            context.fillStyle = 'black';
            context.fillRect(cellWidth * this.col, cellHeight * this.row, cellWidth, cellHeight);
        } else {
            context.strokeStyle = 'black';
            context.strokeRect(cellWidth * this.col, cellHeight * this.row, cellWidth, cellHeight);
        }
        if (this.alien)  {
            this.alien.paint(context);
        }
    }

}