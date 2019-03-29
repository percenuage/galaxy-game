'use strict';

import Cell from './cell.js';

export default class Board {
    constructor(rows, cols) {
        this.rows = rows;
        this.cols = cols;
        this.cells = [];
        this.initCells();
    }

    initCells() {
        for (let i = 0; i < this.rows; i++) {
            this.cells.push([]);
            for (let j = 0; j < this.cols; j++) {
                this.cells[i].push(new Cell(i, j, this));
            }
        }
    }

    addRandomBlockingCells(number) {
        for (let i = 0; i < number; i++) {
            let cell = this.getRandomVoidCell();
            cell.block = true;
        }
    }

    addAlien(alien) {
        let cell = this.getRandomVoidCell();
        cell.setAlien(alien);
    }

    addGun(gun) {
        let cell = this.getRandomVoidCell();
        cell.setGun(gun);
    }

    getRandomVoidCell() {
        let row, col;
        do {
            row = Board.getRandomIntExclusive(0, this.rows);
            col = Board.getRandomIntExclusive(0, this.cols);
        } while (!this.cells[row][col].isVoid());
        return this.cells[row][col];
    }

    paint(context) {
        context.fillStyle = "white";
        context.fillRect(0, 0, context.canvas.width, context.canvas.height);
        for (let i = 0; i < this.rows; i++) {
            for (let j = 0; j < this.cols; j++) {
                this.cells[i][j].paint(context);
            }
        }
    }

    static getRandomIntExclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
    }
}