import React, { Component } from 'react';
import Board from '../board/Board'
import SquareData from '../square/squareData'
import './Game.css';

class Game extends Component {
    constructor(props){
        super(props)
        let squares = new Array(8).fill([]).map((row) =>{
            return [new SquareData(), new SquareData(), new SquareData(), new SquareData(), new SquareData(), new SquareData(), new SquareData(), new SquareData()]
        }); // couldn't use Array construcor here; changing one value (below) changed whole 'column'
        
        squares[0][0].value = 'R'; // set initial rook position
        squares[0][1].value = 'K'; // set initial knight position
        squares[0][2].value = 'B';
        squares[0][3].value = 'Q';
        squares[0][4].value = 'I';
        squares[0][5].value = 'B'; // set inital bishop position
        squares[0][6].value = 'K';        
        squares[0][7].value = 'R';

        this.state = {
            squares: squares, 
            pieceSelected: '',
            initialX: undefined,
            initialY: undefined,
            validMoves: []

        }
    }

    handleClick(x,y){
        let pieceSelected = this.state.pieceSelected;
        let squares = this.state.squares;
        let initialX = this.state.initialX;
        let initialY = this.state.initialY;
        let validMoves = this.state.validMoves

        // if user previously seleted a piece and clicks on another square containinga piece
        if(squares[y][x].value && pieceSelected && (initialX !== x && initialY !== y)){

            squares[y][x].validMove = false;

        } else if (pieceSelected){
            // if user clicks on valid move square, move piece and reset valid move data
            if(squares[y][x].validMove || squares[y][x].selected){

                squares[initialY][initialX].value = '';
                squares[initialY][initialX].selected = false;
                initialX = undefined;
                initialY = undefined;

                squares[y][x].value = pieceSelected;
                pieceSelected = '';

                squares = squares.map((row) => {
                   return row.map((square) => {
                        square.validMove = undefined;
                        return square;
                    })
                })
            // if user clicks on an empty square that is an invalid move, mark move as invalid
            } else {

                squares[y][x].validMove = false;

            }
        // if user has not selected a piece and clicks on a square containing a piece
        // select the piece and calculate posible moves
        } else if (squares[y][x].value) {

            pieceSelected = squares[y][x].value;
            squares[y][x].selected = true;
            initialX = x;
            initialY = y;

            if (pieceSelected === 'B'){
                // get and store valid moves, allows faster clearing of valid moves when piece is placed on next
                // click (don't have to iterate over the whole table to remove valid moves)
                validMoves = this.getValidBishopMoves(x, y, squares);
                squares = this.setValidMoves(squares, validMoves, true); 

            }

            if (pieceSelected === 'K'){

                validMoves = this.getValidKnightMoves(x, y, squares);
                squares = this.setValidMoves(squares, validMoves, true);

            }
            if (pieceSelected === 'R'){

                validMoves = this.getValidRookMoves(x, y, squares);
                squares = this.setValidMoves(squares, validMoves, true);

            }
        }

        this.setState({
            squares: squares,
            pieceSelected: pieceSelected,
            initialX: initialX,
            initialY: initialY,
            validMoves: validMoves
        })

    }

    // add or remove valid move property to squares
    setValidMoves(squares, moves, value){

        moves.forEach((move) => {
            squares[move[1]][move[0]].validMove = value;
        })

        return squares;

    }

    //Bishop movement
    
    // returns an array of all valid moves for a bishop, including bishop's starting position
    // ex. [[0,5], [4,1], [3,2]]
    // does not include potenttial moves where a bishop would have to travel through a square occupied by another piece.
    getValidBishopMoves(x, y, squares){

        let validMoves = [];

        this.moveUpLeft(x,y, squares).forEach((move) => {validMoves.push(move)})
        this.moveDownLeft(x,y, squares).forEach((move) => {validMoves.push(move)})
        this.moveUpRight(x,y, squares).forEach((move) => {validMoves.push(move)})
        this.moveDownRight(x,y, squares).forEach((move) => {validMoves.push(move)})

        return validMoves;

    }

    moveUpLeft(x, y, squares, validMoves = []){

        if(--x < 0 || --y < 0 || squares[y][x].value){
            return validMoves;
        }
        
        this.moveUpLeft(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves   

    }

    moveUpRight(x, y, squares, validMoves = []){
        
        if(++x > 7 || --y < 0 || squares[y][x].value){
            return validMoves;
        }
        
        this.moveUpRight(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves    

    }

    moveDownLeft(x, y, squares, validMoves = []){

        if(--x < 0 || ++y > 7 || squares[y][x].value){
            return validMoves;
        }
        
        this.moveDownLeft(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves  

    }

    moveDownRight(x, y, squares, validMoves = []){

        if(++x > 7 || ++y > 7 || squares[y][x].value){
            return validMoves;
        }
        
        this.moveDownRight(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves 

    }

    //Rook movement

    getValidRookMoves(x, y, squares){

        let validMoves = [];

        this.moveUp(x,y, squares).forEach((move) => {validMoves.push(move)})
        this.moveDown(x,y, squares).forEach((move) => {validMoves.push(move)})
        this.moveRight(x,y, squares).forEach((move) => {validMoves.push(move)})
        this.moveLeft(x,y, squares).forEach((move) => {validMoves.push(move)})

        return validMoves;

    }

    moveDown(x, y, squares, validMoves = []){
        if(++y > 7 || squares[y][x].value){
            return validMoves;
        }

        this.moveDown(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves 
    }

    moveUp(x, y, squares, validMoves = []){
        if(--y < 0 || squares[y][x].value){
            return validMoves;
        }

        this.moveUp(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves 
    }

    moveRight(x, y, squares, validMoves = []){
        if(++x > 7 || squares[y][x].value){
            return validMoves;
        }

        this.moveRight(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves 
    }

    moveLeft(x, y, squares, validMoves = []){
        if(--x < 0 || squares[y][x].value){
            return validMoves;
        }

        this.moveLeft(x, y, squares, validMoves);
        validMoves.push([x, y])
        return validMoves 
    }

    // Knight movement

    getValidKnightMoves(x, y, squares){

        let validMoves = [[x+2, y-1], [x+2, y+1],[x-2, y-1], [x-2, y+1], [x-1, y-2], [x-1, y+2], [x+1, y-2], [x+1, y+2]];
        
        validMoves = validMoves.filter((move) => {
            let x = move[0];
            let y = move[1];
            return (x >= 0 && x <= 7 && y >=0 && y <= 7 && !squares[y][x].value)
        });

        return validMoves;

    }

    render() {

        return (
            <div id='game'>
                  <Board squares={this.state.squares} handleClick={(x,y) => {this.handleClick(x,y)}}/>  
            </div>
            
        );

    }
}

export default Game;
