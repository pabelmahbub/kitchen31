import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Create from "../create/Create";
import React, { useEffect, useState } from 'react';
import RecipeList from "../../components/RecipeList";
import ThemeSelector from "../../components/ThemeSelector";
import { projectFirestore } from "../../firebase/config";

function Home() {
   const [data, setdata] = useState(null)
   const [isPending, setIsPending] = useState(false)
   const [error, setError] = useState(false)

    useEffect(() => {
      setIsPending(true)

       const unsub = projectFirestore.collection("recipes").onSnapshot((snapshot) =>{
        if(snapshot.empty){
          setError('No recipes to load!')
          setIsPending(false)
        }else{
          let results = []
          snapshot.docs.forEach(doc =>{
            results.push({id:doc.id, ...doc.data()})
          })
          setdata(results)
          setIsPending(false)
        }
      }, (err)=> {
        setError(err.message)
        setIsPending(false)
      })
      return ()=> unsub()

    }, [])
    
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