import React, {Component} from 'react';
import Row from '../row/Row';
import './Board.css'

class Board extends Component{
   // eslint-disable-next-line
    constructor(props){
       super(props);
   }
   
    renderRow(y){
        return (
            <Row yValue={y} />
        )
   }

   
    render() {
    return (
    <div className='board'>
        {this.renderRow(0)}
        {this.renderRow(1)}
        {this.renderRow(2)}
        {this.renderRow(3)}
        {this.renderRow(4)}
        {this.renderRow(5)}
        {this.renderRow(6)}
        {this.renderRow(7)}
    </div>
    );
  }  
}

export default Board;