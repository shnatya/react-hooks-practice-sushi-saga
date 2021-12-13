import React, { useState } from "react";

function Sushi({sushi, handleWallet, wallet}) {
  const [plateClicked, setClicked] = useState(false)

  function handlePlate(){
    if(Math.sign(wallet-sushi.price) !== -1){
      if(plateClicked === false){
        handleWallet(sushi)
        setClicked(true)
      }
      
    }
    // else{
    //   setClicked(false)
    // } 
  }
  
  return (
    <div className="sushi">
      <div className="plate" onClick={handlePlate}>
        {/* Tell me if this sushi has been eaten! */}
        {plateClicked ? null : (
          <img
            src={sushi.img_url}
            alt={sushi.name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {sushi.name} - ${sushi.price}
      </h4>
    </div>
  );
}

export default Sushi;
