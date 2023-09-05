import { useState, useEffect } from "react";
import { showRecipe } from "../../utilities/homePage";

export default function HomePage(){
    const[inforecipe, setInforecipe] = useState();

    useEffect(() =>{ 
        
        const getallrecipe= showRecipe() 
    let allrecipes = []
    getallrecipe.then(result=> {result.map((current)=>{
        allrecipes.push(current)
        setInforecipe(allrecipes)

    })})
    
    },[])
    console.log('reciiipes', inforecipe)

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


                </div>
            )
        

        }): ""}

    </div>

    
)
} 