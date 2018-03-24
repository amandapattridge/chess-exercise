import React, {Component} from 'react';
import Square from '../square/Square';

class Board extends Component{
   renderSquare(){
        return (<Square value='1' />)
   }
   renderBoard(){

   }

   
    render() {
    return (
    <div>
     {this.renderSquare()}
    </div>
    );
  }  
}

export default Board;