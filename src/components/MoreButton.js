import React from "react";

function MoreButton({handleMoreSushi}) {

  function nextSushi(){
    handleMoreSushi()
  }
  return <button onClick={nextSushi}>More sushi!</button>;
}

export default MoreButton;
