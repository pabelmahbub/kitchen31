import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Create from "../create/Create";



import React from 'react';
import { useFetch } from "../../hooks/useFetch";
import RecipeList from "../../components/RecipeList";
import ThemeSelector from "../../components/ThemeSelector";

function Home() {
    const {data, isPending, error} = useFetch("http://localhost:3000/recipes")
  return (
    <>
   <Navbar /> 
   <ThemeSelector />
     <div className="home">
      {/* 
      <Link to ="/create"> <Create /></Link> */}
     
     {error && <p className="error">{error}</p>}
     {isPending && <p className="loading">Loading ...</p>}
     {data && <RecipeList recipes={data}/>}
    </div>
    </>
  )
}

export default Home