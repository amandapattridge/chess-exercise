import React from 'react';
import './Square.css';

function Square(props){
    let squareColor = (props.xValue + props.yValue) % 2 === 0 ? '#fff' : '#33b5e5';
    let isValidMove = props.square.validMove
    let highlightClass = (isValidMove === true ? 'valid-move' : (isValidMove === false ? 'invlalid-move' : ''))

    return (
        <div className={'square ' + highlightClass}  style={{background: squareColor}} onClick={props.onClick}>
            {props.square.value}
        </div>
    );
}

export default Square;