
import axios from "axios";

    export const CreateRecipe = async (recipe, cookies) => {

    try {
    await axios.post(
        "/recipes",
        { ...recipe },
    );

    } catch (error) {
    console.error(error);
    }
};

