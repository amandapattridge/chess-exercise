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
            <Row yValue={y} handleClick={(x,y) => this.props.handleClick(x,y)} squares={this.props.squares[y]} />
        )
   }

   
    render() {
    return (
    <div className = 'board-container'>
        <div className='name-field'>Amanda Pattridge</div>
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
    </div>
    );
  }  
}

export default Board;