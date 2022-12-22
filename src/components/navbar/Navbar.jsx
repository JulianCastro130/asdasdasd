import "./navbar.css"
import React from 'react'
import { Link } from "react-router-dom"

const Navbar = () => {
  return (
    <div className="nav">
      <Link to="/"><button>Home</button></Link>
      <Link to="/meets"><button>Meets</button></Link>
    </div>
  )
}

export default Navbar
