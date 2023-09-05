import React, { useEffect, useState } from 'react';

const SavedRecipeList = () => {
const [savedRecipes, setSavedRecipes] = useState([]);

useEffect(() => {
    // Retrieve saved recipes from localStorage when the component mounts
    const storedRecipes = JSON.parse(localStorage.getItem('recipes')) || [];
    setSavedRecipes(storedRecipes);
}, []);

return (
    <div>
        <h2>Saved Recipes</h2>
    <ul>
        {savedRecipes.map((recipe, index) => (
            <li key={index}>
        <h3>{recipe.name}</h3>
            <p>Description: {recipe.description}</p>
            {/* Add more details as needed */}
            </li>
        ))}
    </ul>
    </div>
);
};

export default SavedRecipeList;
