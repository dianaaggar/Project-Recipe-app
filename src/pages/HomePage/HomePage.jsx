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

    const save = (event,id) =>{ 
        event.preventDefault()
        const findRecipe = savedRecipesUtilities.findRecipe()
        console.log(id)
        console.log(findRecipe)

    }

    const deleteRecipe = () =>{ 
    }

    return(
    <div>
        {inforecipe? inforecipe.map((current,i)=>{
            
            return(

                <div key={i}>
                    {current.name}
                    <br/>
                    {current.description}
                    <br/>
                    {current.ingredients}
                    <br/>
                    {current.instructions}
                    <br/>
                    {current.cookingTime}
                    <br/>
                    <img src={current.imageUrl} alt=""/>

                    <form onSubmit={(event)=> save(event,current._id)}>
                    {id=current.id}
                    <button type="submit"> Save the recipe </button>
                    </form>

                    <button type="submit" onClick={deleteRecipe(current._id)}>Delete the recipe </button>
                    

                </div>
            )
        

        }): ""}

    </div>

    
)
} 