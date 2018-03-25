import React from 'react';
import Square from '../square/Square'
import './Row.css'

function Row(props){
    function renderSquare(x){
        return (
            <div>
                <Square xValue={x} yValue={props.yValue} square={props.squares[x]} onClick={()=> {props.handleClick(x, props.yValue)}}/>
            </div>       
        )
    }
    
    return (
        <div className='row'>
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
            {renderSquare(6)}
            {renderSquare(7)}
        </div>
        
    );
}

export default Row;