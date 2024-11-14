import React from 'react';
import { Link } from 'react-router-dom';
import './RecipeStylles.css'; // Make sure the path is correct

const RecipeCard = ({ recipe }) => {
    return (
     
        <div className="recipe-card">

            <img
                src={recipe.image}
                alt={recipe.title}
                className="recipe-card-image"
            />
            <div className="recipe-card-details">
                <h3>{recipe.title}</h3>
                <p>{recipe.description}</p>
                <button>
                    <Link to={`/recipe/${recipe._id}`} className="recipe-button">
                        Explore
                    </Link>
                </button>
            </div>
        </div>
    );
};

export default RecipeCard;


