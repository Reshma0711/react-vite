import { RiFacebookBoxFill } from "react-icons/ri";





import React from 'react'
import { Outlet } from "react-router-dom";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Categoryscreen = () => {
  return (
    <div>
      <div>
        {/* <Button>
          <Link to="electronics">Electronics</Link>
        </Button> */}
        <Button style={{ backgroundColor: "black" ,color:"white"}}>
          <Link to="Jewellery">Jewellery</Link>
        </Button>
      </div>
      <h2>category-Screen</h2>
      <Outlet />
    </div>
  );
}

export default Categoryscreen
