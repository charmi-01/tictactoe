import React from 'react'

const StatusMessage = ({winner ,current}) => {
    const nomoveleft= current.board.every(el=>el !== null);

    return (
        <h2>
            {winner!== null && `Winner is ${winner}`}
            {winner===null && !nomoveleft && `Next player is ${current.isXnext? 'X':'O'}`}
            {winner===null && nomoveleft && 'X and 0 tied'}
        </h2>
    )
}

export default StatusMessage