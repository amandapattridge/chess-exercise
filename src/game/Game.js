import React, { Component } from 'react';
import Board from '../board/Board'
import './Game.css';

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(8).fill(Array(8).fill(null)) //create an empty 8x8 arra
        }
    }

    render() {
        return (
            <div id='game'>
                <Board squares={this.squares}/>
            </div>
            
        );
    }
}

export default Game;
