import React,{useState} from "react";
import Board from "./components/Board";
import History from "./components/History";
import './styles/root.scss'
import { calculateWinner } from "./components/winnerfunc";
import StatusMessage from "./components/StatusMessage";

const App = () => {
  const [history,sethistory]= useState([{board:Array(9).fill(null),isXnext:true}]);
  const [currentmove,setcurrmove] =useState(0);
  const current=history[currentmove];
  
  const {winner,winningSquare}=calculateWinner(current.board);

  const handelSquareClick=(position)=>{

    if(current.board[position] || winner){
      return;
    }

    sethistory((prev)=>{
      const last=prev[prev.length -1];
      const newboard= last.board.map((square,pos)=>{
        if(pos===position){
          return last.isXnext ? 'X':'O';
        }
        return square;
      });
      return prev.concat({board:newboard,isXnext:!last.isXnext})
    });

    setcurrmove((prev)=>prev+1);
  };

  const onnewgame=()=>{
    sethistory([{board:Array(9).fill(null),isXnext:true}]);
    setcurrmove(0);
  };

  const moveTo=(move)=>{
    setcurrmove(move);
  }
  return (
    <div className="app">
      <h1>TIC <span className="text-green">TAC</span> TOE</h1>
      <StatusMessage winner={winner} current={current}/>
      <Board board={current.board} handelSquareClick={(position)=>handelSquareClick(position)} winningSquare={winningSquare}/>
      <button type="button" onClick={onnewgame} className={`btn-reset ${winner? 'active':''}`}>
        Start New Game</button>
      <h2 style={{fontWeight:'normal'}}>Current game history</h2>
      <History history={history} moveTo={moveTo} currentmove={currentmove}/>
      <div className="bg-balls"/>
    </div>
  );
};
export default App
