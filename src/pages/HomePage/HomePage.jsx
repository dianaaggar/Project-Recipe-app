import { useState, useEffect } from "react";
import { showRecipe } from "../../utilities/homePage";

import * as savedRecipesUtilities from "../../utilities/savedRecipes"

export default function HomePage(){
    const[inforecipe, setInforecipe] = useState();
    let id = null
    useEffect(() =>{ 
        
        const getallrecipe= showRecipe() 
    let allrecipes = []
    getallrecipe.then(result=> {result.map((current)=>{
        allrecipes.push(current)
        setInforecipe(allrecipes)

    })})
    
    },[])
    console.log('reciiipes', inforecipe)

    const save = async (event,id) =>{ 
        event.preventDefault()
        // const findRecipe = await axios.post("recipes/recipes/findrecipe",{id})
        // console.log(id)
        // console.log(findRecipe.data)
        const response = await savedRecipesUtilities.findRecipe({id})
        console.log(response)

    }

    const deleteRecipe = async (event,id) =>{
        event.preventDefault()

        const deleteRecipes = await savedRecipesUtilities.deleteRecipe(id)
        console.log(deleteRecipes)
    }



    return(
    <div>
        {inforecipe? inforecipe.map((current,i)=>{
            
            return(

                <div key={i}>
                <h1> Name:  {current.name} </h1>
            
                <h4> Description: {current.description} </h4> 
                    
                <h3> Ingredients: {current.ingredients} </h3>
                
                <h4> Instructions: {current.instructions} </h4>
                    
                    <h2> Cooking Time: {current.cookingTime} mn</h2>
                    
                    <img src={current.imageUrl} alt=""/>


                    <form className="butt">
                    <button type="submit" className="buttA" onClick={(event)=> save(event,current._id)}>
                    {id=current.id} Add to the Favorite recipe </button>
                    
                    <button type="submit" className="buttD" onClick={(event) =>deleteRecipe(event,current._id) }>{id=current.id} Delete the recipe </button>
                

                    </form>

                </div>
            )
        

        }): ""}

    </div>

    
)
} 

