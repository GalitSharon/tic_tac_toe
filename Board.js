import Cell from './Cell.js';

class Board {
    constructor() {
        this.cellsList = [
            new Cell(0),
            new Cell(1),
            new Cell(2),
            new Cell(3),
            new Cell(4),
            new Cell(5),
            new Cell(6),
            new Cell(7),
            new Cell(8),
        ];
    }

    updateCell(cellNum, shape) {   // shape: x= 1  o= 0
        this.cellsList[cellNum].shape = shape;
    }

    getShape(cellNum) {
        return this.cellsList[cellNum].shape;
    }

    // 1-> victory , 0 -> no victory found
    findSetOfThree(){
        let resultSet = [];
        resultSet.push(this.cellsList[0].shape + this.cellsList[1].shape + this.cellsList[2].shape);
        resultSet.push(this.cellsList[3].shape + this.cellsList[4].shape + this.cellsList[5].shape);
        resultSet.push(this.cellsList[6].shape + this.cellsList[7].shape + this.cellsList[8].shape);

        resultSet.push(this.cellsList[0].shape + this.cellsList[3].shape + this.cellsList[6].shape);
        resultSet.push(this.cellsList[1].shape + this.cellsList[4].shape + this.cellsList[7].shape);
        resultSet.push(this.cellsList[2].shape + this.cellsList[5].shape + this.cellsList[8].shape);

        resultSet.push(this.cellsList[0].shape + this.cellsList[4].shape + this.cellsList[8].shape);
        resultSet.push(this.cellsList[2].shape + this.cellsList[4].shape + this.cellsList[6].shape);

        console.log(resultSet);
        if(resultSet.find(x => x === 3) || resultSet.find(x => x === -3)){
            return 1;
        }
        return 0;
    }

    // 0-> game on, 1-> victory , 2-> game over without victory
    isGameTerminate(movesNum){
        if(movesNum < 3){
            return 0;
        }else if(movesNum === 9){
            return this.findSetOfThree() ? 1 : 2;
        }
        return this.findSetOfThree();
    }
}

export default Board;