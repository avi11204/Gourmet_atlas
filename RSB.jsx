import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import RecipeCard from './RecipeCard';

const RecipeSearchPage = () => {
  const [recipes, setRecipes] = useState([]);
  const location = useLocation();

  // Extract the query parameter from the URL
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get('query'); // e.g., "tiramisu"

  useEffect(() => {
    if (searchQuery) {
      // Fetch recipes from your API using the search query
      axios.get(`http://localhost:5000/api/recipes/search?query=${searchQuery}`)
        .then((response) => setRecipes(response.data))
        .catch((error) => console.error('Error fetching recipes:', error));
    }
  }, [searchQuery]); // Re-run when searchQuery changes

  return (
    <div>
      <h2>Search Results for "{searchQuery}"</h2>
      <div className="recipe-card-container">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard key={recipe._title} recipe={recipe} />
          ))
        ) : (
          <p>No recipes found for "{searchQuery}".</p>
        )}
      </div>
    </div>
  );
};

export default RecipeSearchPage;
