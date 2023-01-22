import "./Create.css";
import { useRef, useState, useEffect } from "react";
import React from 'react'
import { useFetch } from "../../hooks/useFetch";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar";
import ThemeSelector from "../../components/ThemeSelector";
import { useTheme } from "../../hooks/useTheme";

function Create() {
    const [title, setTitle] = useState("")
    const [method, setMethod] = useState("")
    const [cookingTime, setCookingTime] = useState("")
    const [newIngredient, setNewingredient] = useState("")
    const [ingredients, setIngredients] = useState([])
    const ingredientInput = useRef(null);
    const{ mode} = useTheme()

    const navigate = useNavigate();

    const {postData, error, data} = useFetch("http://localhost:3000/recipes", "POST") 

    const handleSubmit =(e)=>{
        e.preventDefault()
        postData({title, ingredients, method, cookingTime: cookingTime + " minutes"})

    }

    const handleAdd =(e)=>{
        e.preventDefault()
        const ing = newIngredient.trim()
        if(ing && !ingredients.includes(ing)){
          setIngredients(prevIngredients => [...prevIngredients, ing])
        }
        setNewingredient('')
        ingredientInput.current.focus()
    }

    useEffect(() => {
        if(data){
            navigate('/');
        }
    }, [data])
    
  return (
    <>
      <Navbar />
      <ThemeSelector />
   
    <div className={`create ${mode}`}>
        <h2 className="page-title">Add a new recipe.</h2>

        <form onSubmit={handleSubmit}>
          <label>
            <span>Recipe title:</span>
            <input
                type="text"
                onChange={(e)=> setTitle(e.target.value)}
                value={title}
                required
               />
          </label>

          <label>
            <span>Recipe Ingredients:</span>
            <div className="ingredients">
                <input
                    type="text"
                    onChange={(e)=> setNewingredient(e.target.value)}
                    value={newIngredient}
                    ref={ingredientInput}
                    //required
                />
                <button className="btn" onClick={handleAdd}>Add</button>
            </div>
          </label>
          <p>Current Ingredients: {ingredients.map(i => <em key={i}>{i},</em> )}</p>


          <label>
            <span>Method of cooking</span>
            <textarea
                type="number"
                onChange={(e)=> setMethod(e.target.value)}
                value={method}
                required
               />
          </label>
          <label>
            <span>Cooking Time(minutes):</span>
            <input
                type="number"
                onChange={(e)=> setCookingTime(e.target.value)}
                value={cookingTime}
                required
               />
          </label>

        <button className="btn">Submit</button>
        </form>


    </div>
    </>
  )
}

export default Create
