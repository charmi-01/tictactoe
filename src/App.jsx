import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import './styles/root.scss'
import { calculateWinner } from "./components/winnerfunc";

const App = () => {
  const [history,sethistory]= useState([{board:Array(9).fill(null),isXnext:true}]);
  const [currentmove,setcurrmove] =useState(0);
  const current=history[currentmove];
  
  const winner=calculateWinner(current.board);
  const message= winner? `Winner is ${winner}` : current.isXnext? 'Next player is   X': 'Next player is 0' 
  
  const handelSquareClick=(position)=>{

    if(current.board[position] || winner){
      return;
    }

    sethistory((prev)=>{
      const last=prev[prev.length -1];
      const newboard= last.board.map((square,pos)=>{
        if(pos===position){
          return last.isXnext ? 'X':'0';
        }
        return square;
      });
      return prev.concat({board:newboard,isXnext:!last.isXnext})
    });

    setcurrmove((prev)=>prev+1);
  };

  const moveTo=(move)=>{
    setcurrmove(move);
  }
  return (
    <div className="app">
      <h1>TIC TAK TOE</h1>
      <h2>{message}</h2>
      <Board board={current.board} handelSquareClick={(position)=>handelSquareClick(position)}/>
      <History history={history} moveTo={moveTo} currentmove={currentmove}/>
    </div>
  );
};
export default App
