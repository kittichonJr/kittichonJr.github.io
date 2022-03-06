const prompt = require('prompt-sync')({ sigint: true });

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

class Field {
    constructor() {
        this.arrField = [];
        this.currentPosition = [0,0] // x y
        this.status = true;
        this.result;
    }
    moveLeft() {
        if(this.currentPosition[0] -1 !== -1){ // check border Left of array
            this.currentPosition[0]--
            this.winByFoundHat();
            this.lostByFallInTheHole();
            if (this.status===true) this.updateBoard();
        }else{
            this.lostByOutSide();
        }
    }
    moveRight() {
        if(this.currentPosition[0] +1 < this.arrField[this.currentPosition[1]].length){ // check border Right of array
            this.currentPosition[0]++
            this.winByFoundHat();
            this.lostByFallInTheHole();
            if (this.status===true) this.updateBoard();
        }else{
            this.lostByOutSide();
        }
    }
    moveUp() {
        if (this.currentPosition[1] -1 !== -1){ //check border top of array
            this.currentPosition[1]--
            this.winByFoundHat();
            this.lostByFallInTheHole();
            if (this.status===true) this.updateBoard();
        }else{
            this.lostByOutSide();
        }
    }
    moveDown() {
        if (this.currentPosition[1] +1 < this.arrField.length){ // check border buttom of array
            this.currentPosition[1]++
            this.winByFoundHat();
            this.lostByFallInTheHole();
            if (this.status===true) this.updateBoard();
        }else{
            this.lostByOutSide();
        }
    }
    winByFoundHat(){
        const [x,y] = this.currentPosition;
        if (this.arrField[y][x]===hat){
            this.status = false;
            this.result = 'Congrats, you have found the Hat.'
        }
    }
    lostByFallInTheHole(){
        const [x,y] = this.currentPosition;
        if (this.arrField[y][x]===hole){
            this.status = false;
            this.result = 'You are Fall in the Hole.'
        }
    }
    lostByOutSide(){
        this.status = false;
        this.result = 'You are Out of the Field.'
    }
    difficult(num) {
        let randhole;
        let position = [];
        randhole = Math.floor(Math.random() * num) % Math.round(num / 2) //how many hole
        if (randhole !== 0) {
            while (position.length < randhole) {
                let newPosition = Math.floor(Math.random() * num)
                if (position.indexOf(newPosition) === -1) position.push(newPosition) // if not found in array push it in
            }
            return position
        } else {
            return position
        }
    }
    createBoard(num) {
        for (let col = 0; col < num; col++) {
            let diff = this.difficult(num).sort()
            this.arrField.push([])
            for (let row = 0; row < num; row++) {
                if (diff.indexOf(row) === -1) { // if row not found in diff put fieldCharacter in
                    this.arrField[col].push(fieldCharacter)
                } else {
                    this.arrField[col].push(hole) // if found put hole in
                }
            }
        }
    }
    addHat(){
        const colPosition = Math.floor(Math.random() * this.arrField.length)
        const rowPosition = Math.floor(Math.random() * this.arrField[0].length)
        this.arrField[colPosition][rowPosition] = hat
    }
    updateBoard(){
        const [x,y] = this.currentPosition;
        this.arrField[y][x] = pathCharacter;
    }
    printBoard(num) {
        this.createBoard(num);
        this.addHat();
        this.updateBoard();
        console.log(this.arrField.map((d) => d.join(' ')).join('\n'))
    }
    refreshBoard(){
        console.clear();
        console.log(this.arrField.map((d) => d.join(' ')).join('\n'))
    }
}

const pacMan = new Field();
console.clear();
pacMan.printBoard(10);
let direction;
while(pacMan.status){
    const theway = prompt('Which Way ?: ')
    direction = theway
    try{
        switch (theway){
            case 'l': pacMan.moveLeft();break;
            case 'r': pacMan.moveRight();break;
            case 'u': pacMan.moveUp();break;
            case 'd': pacMan.moveDown();break;
        }
    }catch (e){
        console.log(e)
        break;
    }
    pacMan.refreshBoard()
}
console.log('Which Way ?: ',direction)
console.log(pacMan.result)
