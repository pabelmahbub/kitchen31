import './Navbar.css';
import { Link } from 'react-router-dom';
import React from 'react'
import SearchBar from './SearchBar';
import { useTheme } from "../hooks/useTheme"


function Navbar() {
  //for on click change in navbar:: const { color, changeColor} = useTheme()
    const { color} = useTheme()
  return (
    <div className='navbar' style={{background: color}}>
       {/*  for on click change in navbar:: <nav onClick={()=> changeColor('green')}>*/}
        <nav>
          <Link to="/" className='brand'>kitchen31</Link>
          <SearchBar />
          <Link to="/create">Create Recipe</Link>

        </nav>
        
      
    </div>
  )
}

export default Navbar
