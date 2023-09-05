
import axios from "axios";

export const saveRecipe = async (data) => {
try {
const postrecipe = await axios.post("recipes/recipes/saveRecipe",data);
return(
    postrecipe.data
)
} catch (error) {
    console.error(error);
}
};

export const findRecipe = async (data) => {
    try {
    const postrecipe = await axios.post("recipes/recipes/findRecipe",data);
    return(
        postrecipe.data
    )
    } catch (error) {
        console.error(error);
    }
    };
