
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
    console.log(data)
    try {
    const postrecipe = await axios.post("recipes/recipes/findrecipe",data);
    return(
        postrecipe.data
    )
    } catch (error) {
        console.error(error);
    }
    };

    export const deleteRecipe = async (id) => {
        console.log(id)
        try {
        const postrecipe = await axios.delete(`recipes/recipes/${id}`);
        return(
            postrecipe.data
        )
        } catch (error) {
            console.error(error);
        }
        };
