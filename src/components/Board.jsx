import React ,{useState}from 'react'
import Square from './Square'

const Board = ({board, handelSquareClick}) => {
  
  const rendersquare=(position)=>{
    return <Square value={board[position]} onClick={()=>handelSquareClick(position)}/>
  }

  return (
    <div className='board'>
        <div className='board-row'>
            {rendersquare(0)}
            {rendersquare(1)}
            {rendersquare(2)}
        </div>
        <div className='board-row'>
            {rendersquare(3)}
            {rendersquare(4)}
            {rendersquare(5)}
        </div>
        <div className='board-row'>
            {rendersquare(6)}
            {rendersquare(7)}
            {rendersquare(8)}
        </div>
    </div>
  )
}
export default Board

