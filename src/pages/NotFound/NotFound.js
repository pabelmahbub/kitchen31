import React from 'react';
import { Link } from 'react-router-dom';
import NFound from '../../img/404.png';
import './NotFound.css'

function NotFound() {
  return (
    <div className='notFound'>
        <img
           src={NFound} 
           width={500}
           height={500}
           alt='Not Found Image'
        ></img>

        <Link to='/'><button>Home</button></Link>

    </div>
  )
}

export default NotFound
