import {Component, OnInit} from '@angular/core';
import {Tile} from "../core/enums/tile";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.sass']
})
export class BoardComponent implements OnInit {
  board: Tile[][] = []
  currentPlayer: Tile = Tile.EMPTY
  gameStatus: boolean = false

  constructor() { }

  ngOnInit(): void {
    this.newGame()
  }

  newGame(): void {
    this.board = []
    for (let row = 0; row < 3; row++) {
      this.board[row] = []
      for (let col = 0; col < 3; col++) {
        this.board[row][col] = Tile.EMPTY
      }
    }
    this.currentPlayer = Tile.X
    this.gameStatus = true
  }

  isWin(): boolean {
    // Horizontal
    for(const rows of this.board) {
      if(rows[0] === rows[1] && rows[1] === rows[2] && rows[0] !== Tile.EMPTY) {
        this.gameStatus = false
        return true
      }
    }

    // Vertical
    for(let col = 0; col < this.board[0].length; col++) {
      if(this.board[0][col] === this.board[1][col] && this.board[0][col] === this.board[2][col] && this.board[0][col] !== Tile.EMPTY) {
        this.gameStatus = false
        return true
      }
    }

    // Diagonal
    if(this.board[0][0] === this.board[1][1] && this.board[0][0] === this.board[2][2] && this.board[0][0] !== Tile.EMPTY) {
      this.gameStatus = false
      return true
    }
    if(this.board[2][0] === this.board[1][1] && this.board[2][0] === this.board[0][2] && this.board[2][0] !== Tile.EMPTY) {
      this.gameStatus = false
      return true
    }
    return false
  }

  isDraw(): boolean {
    for(const rows of this.board) {
      for (const cols of rows) {
        if(cols === Tile.EMPTY) {
          return false
        }
      }
    }
    return !this.isWin()
  }

  turn(row: number, col: number): void {
    if(this.gameStatus && !this.isWin()) {
      if (this.board[row][col] === Tile.EMPTY) {
        switch (this.currentPlayer) {
          case Tile.X:
            this.board[row][col] = Tile.X
            break
          case Tile.O:
            this.board[row][col] = Tile.O
            break
          default:
            this.board[row][col] = Tile.EMPTY
        }
        this.switchSides()
      }
    }
  }

  switchSides(): boolean {
    if (this.currentPlayer === Tile.X) {
      this.currentPlayer = Tile.O
      return true
    }
    if (this.currentPlayer === Tile.O) {
      this.currentPlayer = Tile.X
      return true
    }
    return false
  }
}
