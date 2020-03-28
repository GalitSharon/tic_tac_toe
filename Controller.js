import Board from './Board.js';

class Controller {

    constructor() {
        this.board = null;
        this.screen = 'start';   //startScreen, playScreen, resultScreen
        this.currPlayer = 1;
        this.movesNum = 0;

        this.screenDiv = document.getElementById('screenDiv');
        this.startButton = document.getElementById('startGameButton');
        this.resultScreen = document.getElementById('resultScreen');
    }

    clearAll(){
        this.board = new Board();
        this.screen = 'playScreen';
        this.currPlayer = 1;
        this.movesNum = 0;

        let allCells = document.querySelectorAll(".cell");
        allCells.forEach(cell => cell.innerText = '');
    }

    toggleClasses(){
        this.screenDiv.classList.toggle('screenHidden');
        this.startButton.classList.toggle('screenHidden');
        this.resultScreen.classList.toggle('screenHidden');
    }

    addListners(){
        let allCells = document.querySelectorAll(".cell");
        allCells.forEach(cell => cell.addEventListener("click", (e) => {
            if (this.screen === 'playScreen' && e.target.innerText === '') {
                e.target.innerText =
                    (this.currPlayer === 1 ? 'X' : (this.currPlayer === -1 ? 'O' : " "));
                this.onCellClick(e.target.title);
            }
        }));
    }

    initGame() {
        this.clearAll();
        this.toggleClasses();
        this.addListners();

        document.getElementById('startScreen').innerText = '';
    }

    onCellClick(cellNum) {
        let cellShape = this.board.getShape(cellNum);
        if (cellShape === 0) {
            this.board.updateCell(cellNum, this.currPlayer);
            this.movesNum += 1;
            let currStatus = this.board.isGameTerminate(this.movesNum);

            switch (currStatus) {
                case (1):
                    this.screen = 'resultScreen';
                    this.resultScreen.innerText = (this.currPlayer === 1 ? 'X ' : 'O ') + "has won!";
                    this.toggleClasses();
                    break;
                case (2):
                    this.screen = 'resultScreen';
                    this.resultScreen.innerText = "Draw!";
                    this.toggleClasses();
                    break;
                default:
                    this.currPlayer *= (-1);
            }
        }
    }
}

export default Controller;

