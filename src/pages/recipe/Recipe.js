import "./Recipe.css";
import {useNavigate, useParams } from 'react-router-dom';
import { useState, useEffect } from "react";
import React from 'react'
import Navbar from "../../components/Navbar";
import ThemeSelector from "../../components/ThemeSelector";
import { useTheme } from "../../hooks/useTheme";
import { projectFirestore } from "../../firebase/config";

function Recipe() {

    const { id } = useParams();
    const url = "http://localhost:3000/recipes/" + id
    const{ mode} = useTheme()
    const navigate = useNavigate();


    const [recipe, setRecipe] = useState(null)
    const [isPending, setIsPending] = useState(false)
    const [error, setError] = useState(false)

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

    useEffect(() => {
      setIsPending(true)
      const unsub = projectFirestore.collection('recipes').doc(id).onSnapshot((doc)=>{
        if(doc.exists){
          setIsPending(false)
          setRecipe(doc.data())
        }else{
          setIsPending(false)
          setError("Recipe data is not found")
        }
      })
      return ()=> unsub()
    }, [id])

    const handleClick = ()=>{
       projectFirestore.collection('recipes').doc(id).update({
        title:'Best dish ever[Must Try!]'
       })
       navigate('/')
    }
    
    
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
                <button onClick={handleClick} className="btn">Must Try!!!</button>
             </>
        )}
    </div>

    </>
  )
}

export default Recipe