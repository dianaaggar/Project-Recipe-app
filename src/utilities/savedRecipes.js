// export const SavedRecipes = () => {
//     return <div>
//         Saved Recipes
//     </div>
// };

import axios from "axios";

    export const SavedRecipes = async (recipe, cookies) => {

    try {
    await axios.post(
        "/SavedRecipes",
        { ...recipe },
    );

    } catch (error) {
    console.error(error);
    }
};