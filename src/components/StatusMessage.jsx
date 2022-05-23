import React from 'react'

const StatusMessage = ({winner ,current}) => {
    const nomoveleft= current.board.every(el=>el !== null);

    return (
        <div className='status-message'>
            {winner!== null &&
            <>
            Winner is  <span className={winner === 'X'? 'text-green':'text-orange'}>{ winner }</span>
            </>}
            {winner===null && !nomoveleft && 
            <>
            Next player is <span className={current.isXnext? 'text-green': 'text-orange'}>{current.isXnext? 'X':'O'}
            </span>
            </>
            }
            {winner===null && nomoveleft && 
            <>
            <span className='text-green'> X </span> and <span className='text-orange'> O </span> tied
            </>}
        </div>
    )
}

export default StatusMessage