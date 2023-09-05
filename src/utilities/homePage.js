import axios from "axios";

export const showRecipe = async () => {
try {
const getrecipe = await axios.get("recipes/recipes/showrecipe");
return(
    getrecipe.data
)
} catch (error) {
    console.error(error);
}
};