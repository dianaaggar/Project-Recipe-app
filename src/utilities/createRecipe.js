import axios from "axios";

export const CreateRecipe = async (recipe) => {
try {
    await axios.post("/recipes/recipes",recipe );
    console.log('check the recipe', recipe)
} catch (error) {
    console.error(error);
}
};