import React ,{useState}from 'react'
import Square from './Square'

const Board = () => {
  const [board,setBoard]= useState(Array(9).fill(null));
  const [isXnext,setisXnext]=useState(false);
  
  const handelSquareClick=(position)=>{

    if(board[position]){
      return;
    }

    setBoard((prev)=>{
      return prev.map((square,pos)=>{
        if(pos===position){
          return isXnext ? 'X':'0';
        }
        return square;
      });
    });
    setisXnext((prev)=>!prev);
  };
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

