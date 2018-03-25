import React, { Component } from 'react';
import Board from '../board/Board'
import './Game.css';

class Game extends Component {
    constructor(props){
        super(props)
        this.state = {
            squares: Array(8).fill(Array(8).fill(null)), //create an empty 8x8 array
            
        }
    }

    handleClick(x,y){

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
