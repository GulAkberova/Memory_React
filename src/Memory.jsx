import { useEffect, useRef, useState } from "react";

const TILE_COLORS = [
  {
    id: 1,
    color: "red"
  },
  {
    id: 2,
    color: "green"
  },
  {
    id: 3,
    color: "blue"
  },
  {
    id: 4,
    color: "yellow"
  },
  {
    id: 5,
    color: "red"
  },
  {
    id: 6,
    color: "green"
  },
  {
    id: 7,
    color: "blue"
  },
  {
    id: 8,
    color: "yellow"
  },

];

export default function Memory() {
  const[all, setAll]=useState([])
  const [bg, setBg] = useState([]);
  const [foundBg, setFoundBg] = useState([]);
  const [count, setCount] = useState(0);
  useEffect(() => {
    setAll(shuffle(TILE_COLORS))
  }, [])
//   console.log(all);
  

  // Write your code here.
  function handleColor(index) {
    console.log('1',bg);
    // console.log(index);
    setBg([...bg , index]);
    // console.log('2',bg, 'count',count);
    
    setCount(prev => prev + 1);
    // console.log('count',count);
    if(count==1){
      if(bg[0].color==index.color){
        setFoundBg([...foundBg,bg[0],index])
      }
      setTimeout(() => {
        setBg([])
        setCount(0)
        
      }, 500);

    }
  }
  const RestartGame = () => {
    setFoundBg([]);
    setAll(shuffle(TILE_COLORS));
  }

  return (
    <>
     <div className="board_div">
      <h1> {foundBg.length === TILE_COLORS.length ? "You Win" : "Memory"}</h1>
   
    <div className="board">
        {
          all && all.map((i,key)=>(
            <div
            style={{
                background:bg.includes(i)? i.color:
                foundBg.includes(i) ? i.color: 'white',
                pointerEvents: bg.includes(i) ? "none" : foundBg.includes(i) ? "none" : "auto"
            }}
            
            key={key} className="tile"  
            
            onClick={()=>handleColor(i)}></div>
          ))
        }
     
      </div>
 

      {
        foundBg.length === TILE_COLORS.length && <button onClick={() => RestartGame()}>Restart</button>
      }
         </div>
    </>
  );
}

/**
 * Returns the array shuffled into a random order.
 * Do not edit this function.
 */
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));

    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}