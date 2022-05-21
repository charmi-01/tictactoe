import React from 'react'

const history = ({history,moveTo,currentmove}) => {
  return (
    <div>
        <ul>
            {
                history.map((_,move)=>{
                    return(
                    <li key={move}>
                        <button style={{
                            fontWeight: move===currentmove? 'bold':'normal',
                        }} type="button" onClick={()=>{
                            moveTo(move)
                        }}>{ move===0? 'Go to game start':`Go to move #${move}`}</button>
                    </li>); 
                })
            }
        </ul>
    </div>
  )
}

export default history