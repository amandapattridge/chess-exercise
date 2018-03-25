import React from 'react';
import './Square.css';

function Square(props){
    let squareColor = (props.xValue + props.yValue) % 2 === 0 ? '#fff' : '#33b5e5';

    return (
        <div className='square' style={{background: squareColor}} onClick={props.onClick}></div>
    );
}

export default Square;