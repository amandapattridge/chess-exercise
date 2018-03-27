import React from 'react';
import Row from '../row/Row';
import './Board.css'

function Board(props){
   
    function renderRow(y){
        return (
            <Row yValue={y} handleClick={(x,y) => props.handleClick(x,y)} squares={props.squares[y]} />
        )
   }

   
    return (
        <div className = 'board-container'>
            <div className='name-field'>Amanda Pattridge</div>
            <div className='board'>
                {renderRow(0)}
                {renderRow(1)}
                {renderRow(2)}
                {renderRow(3)}
                {renderRow(4)}
                {renderRow(5)}
                {renderRow(6)}
                {renderRow(7)}
            </div>
        </div>
    );
}

export default Board;