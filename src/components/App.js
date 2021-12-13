import React, { useEffect, useState } from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis] = useState([])
  const [firstIndex, setFirstIndex] = useState(0)
  const [lastIndex, setLastIndex] = useState(4)
  const [wallet, setWallet] = useState(100)
  const [eatenSushi,setEmptyPlates] = useState([])

  useEffect(() => 
  fetch(API)
  .then(res => res.json())
  .then(data => setSushis(data)),
     [])

  function handleMoreSushi(){
    setFirstIndex(firstIndex + 4)
    setLastIndex(lastIndex + 4)
  }
function handleEatenSushi(sushi){
  if(!eatenSushi.includes(sushi.id)){
    setEmptyPlates([...eatenSushi, sushi.id])
  }
}

  function handleWallet(sushi){
    setWallet(wallet - sushi.price)
    handleEatenSushi(sushi)
  }
  const sushisToDisplay = sushis.slice(firstIndex, lastIndex)
  console.log(sushisToDisplay)

  return (
    <div className="app">
      <SushiContainer sushis={sushisToDisplay} handleMoreSushi={handleMoreSushi}
        wallet={wallet} handleWallet={handleWallet}/>
      <Table wallet={wallet} plates={eatenSushi}/>
    </div>
  );
}

export default App;
 