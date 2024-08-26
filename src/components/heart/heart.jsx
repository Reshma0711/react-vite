
import React, { useState } from "react";
import Heart from "react-animated-heart";

const CustomHeart=()=>{
  const [isClick, setClick] = useState(false);
  return (
    <div className="App">
      <Heart isClick={isClick} onClick={() => setClick(!isClick)} />
    </div>
  );
}

export default CustomHeart