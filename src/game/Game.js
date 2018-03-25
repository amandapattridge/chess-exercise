import React, { Component } from 'react';
import Board from '../board/Board'
import './Game.css';

class Game extends Component {
    constructor(props){
        super(props)
        let squares = new Array(8).fill([]).map((row) =>{
            return ['', '', '', '', '', '', '', '']
        }); // couldn't use Array construcor here; changing one value (below) changed whole 'column'
        
        squares[0][5] = 'B'; // set inital bishop position
        squares[0][2] = 'K'; // set initial knight position
        this.state = {
            squares: squares, 
            pieceSelected: '',
            initialX: null,
            initialY: null,
        }
    }

    handleClick(x,y){
        let pieceSelected = this.state.pieceSelected;
        let squares = this.state.squares;
        let initialX = this.state.initialX;
        let initialY = this.state.initialY;

        if(squares[y][x] && pieceSelected){
            return;
        } else if (squares[y][x]) {
            pieceSelected = squares[y][x];
            initialX = x;
            initialY = y;
        } else if (pieceSelected){
            squares[y][x] = pieceSelected;
            squares[initialY][initialX] = '';
            pieceSelected = '';
            initialX = null;
            initialY = null;
        }

        this.setState({
            squares: squares, //create an empty 8x8 array
            pieceSelected: pieceSelected,
            initialX: initialX,
            initialY: initialY,
        })

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
