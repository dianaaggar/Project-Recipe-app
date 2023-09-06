// import React from 'react';
// import SavedRecipes from '../../components/SavedRecipes/SavedRecipes'; 


// const SavedRecipesPage = () => {
// return (
//     <div>
//         <h1>Saved </h1>
//         <SavedRecipes />
//     </div>
// );
// };

// export default SavedRecipesPage;

import { useState, useEffect } from "react";
import { showRecipe } from "../../utilities/homePage";

import * as savedRecipesUtilities from "../../utilities/savedRecipes"

export default function FavoriteRecipe(){
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

    // const save = async (event,id) =>{ 
    //     event.preventDefault()

        // const findRecipe = await axios.post("recipes/recipes/findrecipe",{id})
        // console.log(id)
        // console.log(findRecipe.data)


    //     const response = await savedRecipesUtilities.findRecipe({id})
    //     console.log(response)
    // }



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
                <h2> Name:  {current.name} </h2>
            
                <h4> Description: {current.description} </h4> 
                    
                <h4> Ingredients: {current.ingredients} </h4>
                
                <h4> Instructions: {current.instructions} </h4>
                    
                    <h2> Cooking Time: {current.cookingTime} mn</h2>
                    
                    <img src={current.imageUrl} alt=""/>


                    <form>
                    {/* <button type="submit" onClick={(event)=> save(event,current._id)}>
                    {id=current.id} Add to the Favorite recipe </button> */}
                    
                    <button type="submit" onClick={(event) =>deleteRecipe(event,current._id) }>{id=current.id} Delete the recipe </button>
                

                    </form>

                </div>
            )
        

        }): ""}

    </div>

    
)
} 

