export default class Board {
    constructor() {
        this.initializeBoard()
    }

    initializeBoard() {

        this.grid = [["-","-","-"],
                     ["-","-","-"],
                     ["-","-","-"]]
        this.hasWinner = false
    }
    displayBoard() {

        const board = document.querySelector("#board")
        board.innerHTML = ""

        this.grid.map((line, x) => {

            let row = document.createElement("div")
            row.classList.add("row")

            line.map((symbol, y) => {

                let caseBtn = document.createElement("button")
                caseBtn.classList.add("case")
                caseBtn.setAttribute("id", `btn-${x}-${y}`)
                caseBtn.innerHTML = symbol

                row.appendChild(caseBtn)
            })

            board.appendChild(row)
        });
    }
    placeMove(row, col, symbol) {
        if(this.grid[row][col] != "-") {
            return false
        }

        this.grid[row][col] = symbol
        return true
    }
    checkVictory() {

        this.grid.forEach(row => {
            if (row[0] == row[1] == row[2]){
                this.hasWinner = true
            }
        })

        for(let i = 0; i < 3; i++) {
            if (this.grid[0][i] == this.grid[1][i] == this.grid[2][i]){
                this.hasWinner = true
            }
        }

        if((this.grid[0][0] == this.grid[1][1] == this.grid[2][2]) 
        || (this.grid[0][2] == this.grid[1][1] == this.grid[2][0])){

            this.hasWinner = true
        }

        return this.hasWinner
    }
    isFull() {
        this.grid.forEach(line => {
            line.forEach(symbol => {
                if (symbol == "-") {
                    return false
                }
            })
        })
        return true
    }
    resetBoard() {
        this.initializeBoard()
        this.displayBoard()
    }
}