import React from "react";
// import { NavLink } from "react-router-dom";



function Screen({children, className}) {
  return (
    <div className={className}>
        {children}
    </div>
  );
}

export default Screen;

