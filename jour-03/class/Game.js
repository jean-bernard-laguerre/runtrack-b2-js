import Board from "./Board"
import Player from "./Player"

export class Game {
    constructor() {

        this.player1 = new Player("X", false)
        this.player2 = new Player("O", false)
    }

    startNewGame() {
        this.board = new Board()
        this.currentTurn = this.player1
    }

    makeMove(row, col) {
        this.board.placeMove(row, col, this.currentTurn.symbol)
    }

    registerMove() {
        const cases = document.querySelectorAll(".case")
        
    }

    switchTurn() {
        if(this.currentTurn.symbol == "X") {
            this.currentTurn = this.player2
        } else {
            this.currentTurn = this.player1
        }
    }

    checkGameOver() {
        if (this.board.checkVictory() || this.board.isFull()) {
            this.announceWinner()
        }
    }

    announceWinner() {
        
        let message  = document.querySelector("message")

        if(this.board.isFull()) {
            message.innerHTML = "Match nul !"
        } else {
            message.innerHTML = `Le joueur ${this.currentTurn} a gagné !`
        }   
    }

    resetGame() {
        this.board.resetBoard()
    }
}