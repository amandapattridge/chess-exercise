import React from 'react';
import './Square.css';

function Square(props){
    // set background color of square
    const squareColor = (props.xValue + props.yValue) % 2 === 0 ? '#2179c6' : '#95989b';

    const isValidMove = props.square.validMove;

    // get classes for hilighing valid/invlaid moves
    const validHighlightClass = (isValidMove === true ? ' valid-move' : (isValidMove === false ? ' invalid-move' : ''));
    const pieceSelectedClass = props.square.selected ? ' selected' : '';
    const pieceColor = props.square.color === 'white' ? '#eee' : '#212121';
    const pieceTypeClass = {
        K: 'fas fa-chess-knight',
        B: 'fas fa-chess-bishop',
        R: 'fas fa-chess-rook',
        Q: 'fas fa-chess-queen',
        I: 'fas fa-chess-king',
        P: 'fas fa-chess-pawn'
    }

    // if square ic occupied, specify piece type
    let iconClass;
    iconClass = pieceTypeClass[props.square.value] || '';

    return (
    <div className='container'>
        <div className='square-background' style={{background: squareColor}}>
            <i className={iconClass} style={{color: pieceColor}}></i>
        </div>
        {/* this div is an overlay for highlighting squares */}
        <div className={'square ' + validHighlightClass + pieceSelectedClass} onClick={props.onClick}></div>
    </div>
    );
}

export default Square;