import './RecipeList.css';
import React from 'react'
import { Link } from 'react-router-dom';
import deleteIcon from "../img/delete.svg"
import Navbar from './Navbar';
import { useTheme } from '../hooks/useTheme';
import { projectFirestore } from '../firebase/config';

function RecipeList({recipes}) {
    const{ mode } = useTheme()
   
    if(recipes.length === 0){
        return <div className='error'>No recipes to Load ...</div>
    }

    const handleClick = id =>{
         projectFirestore.collection('recipes').doc(id).delete()
    }

  return (
    <>
    
    <div className='recipe-list'>
        {recipes.map(recipe =>(
            <div key={recipe.id} className={`card ${mode}`}>
                <h3>{recipe.title}</h3>
                <p>{recipe.cookingTime} to make</p>
                <div>{recipe.method.substring(0,200)}...</div>
                <Link to={`/recipes/${recipe.id}`}>Cook This</Link>
                <img
                   src={deleteIcon}
                   className="delete"
                   onClick={()=> handleClick(recipe.id)}
                />
            </div>
        ))}
      
    </div>
    </>
  )
}

export default RecipeList
