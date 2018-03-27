import React from 'react';
import './Square.css';

function Square(props){
    let squareColor = (props.xValue + props.yValue) % 2 === 0 ? '#fff' : '#33b5e5';
    let isValidMove = props.square.validMove
    let highlightClass = (isValidMove === true ? 'valid-move' : (isValidMove === false ? 'invlalid-move' : ''))
    let pieceSelectedClass = props.square.selected ? 'selected' : ''

    return (
    <div className='container'>
        <div className='square-background' style={{background: squareColor}}></div>
        <div className={'square' + ' ' + highlightClass + ' ' + pieceSelectedClass} onClick={props.onClick}>
            {props.square.value} 
        </div>
    </div>
    );
}

export default Square;