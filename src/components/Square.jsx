import React from 'react'

const Square = ({value, onClick , iswinningSquare}) => {
    return (
        <button type='button'  onClick={onClick}
        className={`square ${iswinningSquare? 'winning':''} ${value=== 'X'? 'text-green':'text-orange'}`}
        >
            {value}
        </button>
    )
};

export default Square ;