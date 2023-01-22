import "./Recipe.css";
import {useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import React from 'react'
import { useFetch } from "../../hooks/useFetch";
import Navbar from "../../components/Navbar";
import ThemeSelector from "../../components/ThemeSelector";
import { useTheme } from "../../hooks/useTheme";

function Recipe() {

    const { id } = useParams();
    const url = "http://localhost:3000/recipes/" + id
    const {error, isPending, data: recipe} = useFetch(url)
    const{ mode} = useTheme()

    //used better comment extension for commenting:
    //       !useFetch hooks is used in this project 
    // TODO: const [myrecipes, setMyRecipes] = useState("")
    // ?     shoud be same as defined in app.js:path: "/recipes/:id",
    
    //   useEffect(() => {
    //     const url =`http://localhost:3000/recipes/${id}`;
    //     fetch(url)
    //     .then(res =>res.json())
    //     .then(data => setMyRecipes(data));
    // }, [])
    
  return (
    <>
         <Navbar />
         <ThemeSelector />

   
    <div className={`recipe ${mode}`}>
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading ...</p>}
        {recipe &&(
             <>
                <h2 className="page-title">{recipe.title}</h2>
                <p>It takes {recipe.cookingTime} to cook.</p>
                <ul>
                    {recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}
                </ul>
                <p className="method">{recipe.method}</p>
             </>
        )}
    </div>

    </>
  )
}

export default Recipe