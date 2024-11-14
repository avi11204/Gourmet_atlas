// components/RecipeList.jsx
import React, { useState, useEffect } from 'react';
import RecipeCard from './RecipeCard';

const RecipeList = ({ searchQuery }) => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      if (searchQuery) {
        const response = await fetch(`/api/recipes/search?query=${searchQuery}`);
        const data = await response.json();
        setRecipes(data);
      } else {
        setRecipes([]);
      }
    };

    fetchRecipes();
  }, [searchQuery]);

  return (
    <div className="recipe-list">
      {recipes.length > 0 ? (
        recipes.map((recipe) => <RecipeCard key={recipe._id} recipe={recipe} />)
      ) : (
        <p>No recipes found</p>
      )}
    </div>
  );
};

export default RecipeList;
