import React, { useState } from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleMoreSushi, handleWallet, wallet}) {

  return (
    <div className="belt">
      {/* Render Sushi components here! */
      sushis.map(sushi => (<Sushi handleWallet={handleWallet} 
                                  key={sushi.id} sushi={sushi}
                                  wallet={wallet}/>))
      }
      <MoreButton handleMoreSushi={handleMoreSushi}/>
    </div>
  );
}

export default SushiContainer;
