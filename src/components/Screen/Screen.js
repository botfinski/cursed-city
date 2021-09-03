import React from "react"
// import { NavLink } from "react-router-dom";
import "./Screen.scss"

function Screen({ children, className }) {
  return <div className={`Screen ${className}`}>{children}</div>
}

export default Screen
