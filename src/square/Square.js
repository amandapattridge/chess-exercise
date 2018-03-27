import React from 'react';
import './Square.css';

function Square(props){
    // set background color of square
    const squareColor = (props.xValue + props.yValue) % 2 === 0 ? '#fff' : '#33b5e5';

    const isValidMove = props.square.validMove;

    // get classes for hilighing valid/invlaid moves
    const validHighlightClass = (isValidMove === true ? ' valid-move' : (isValidMove === false ? ' invalid-move' : ''));
    const pieceSelectedClass = props.square.selected ? ' selected' : '';

    // if square ic occupied, specify piece type
    let iconClass = '';
    if(props.square.value === 'K'){
        iconClass = 'fas fa-chess-knight';
    } else if(props.square.value === 'B'){
        iconClass = 'fas fa-chess-bishop';
    }

    return (
    <div className='container'>
        <div className='square-background' style={{background: squareColor}}>
            <i className={iconClass}></i>
        </div>
        {/* this div is an overlay for highlighting squares */}
        <div className={'square ' + validHighlightClass + pieceSelectedClass} onClick={props.onClick}></div>
    </div>
    );
}

export default Square;