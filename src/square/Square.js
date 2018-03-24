import React from 'react';
import './Square.css';

function Square(props){
    let squareColor = (props.xValue + props.yValue) % 2 === 0 ? '#fff' : '#33b5e5';
    let bishopSquare = <i class="fas fa-chess-bishop"></i>;
    let knightSquare = <i class="fas fa-chess-knight"></i>

    console.log(props.xValue, props.yValue, (props.xValue + props.yValue))
    return (
        <div className='square' style={{background: squareColor}}>
            <i className></i>
        </div>
    );
}

export default Square;