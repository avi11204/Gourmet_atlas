import React, { useState } from 'react';


function AddRecipe() {
    const [title, setTitle] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [category, setCategory] = useState('');
    



    const handleSubmit = async (e) => {
        e.preventDefault();
        const recipeData = {
            title,
            ingredients: ingredients.split(','), // Splits ingredients by comma
            instructions,
            category
        };

        try {
            const response = await fetch('http://localhost:5000/api/recipes/add', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(recipeData)
            });

            if (response.ok) {
                alert('Recipe added successfully');
                setTitle('');
                setIngredients('');
                setInstructions('');
                setCategory('');
            } else {
                alert('Error adding recipe');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
            <input type="text" placeholder="Ingredients (comma separated)" value={ingredients} onChange={(e) => setIngredients(e.target.value)} required />
            <textarea placeholder="Instructions" value={instructions} onChange={(e) => setInstructions(e.target.value)} required />
            <input type="text" placeholder="Category" value={category} onChange={(e) => setCategory(e.target.value)} />
            <button type="submit">Add Recipe</button>
        </form>
    );
}

// Ensure you export the component like this
export default AddRecipe;

