// backend/routes/reciperoute.js
const express = require('express');
const router = express.Router();
const Recipe = require('../models/Recipe');

// POST request to add a new recipe
router.post('/', async (req, res) => {
    const { title, description, ingredients, instructions, image, category, prepTime, cookTime, servings } = req.body;

    try {
        // Create a new recipe document
        const newRecipe = new Recipe({
            title,
            description,
            ingredients,
            instructions,
            image,
            category,
            prepTime,
            cookTime,
            servings
        });

        // Save to the database
        await newRecipe.save();
        res.status(201).json(newRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error adding recipe", error });
    }
});

// GET request to retrieve all recipes
router.get('/', async (req, res) => {
    try {
        const recipes = await Recipe.find();
        res.status(200).json(recipes);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipes", error });
    }
});

// GET request to retrieve a specific recipe by ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await Recipe.findById(id);
        if (!recipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json(recipe);
    } catch (error) {
        res.status(500).json({ message: "Error fetching recipe", error });
    }
});

// PUT request to update a recipe by ID
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { title, description, ingredients, instructions, image, category, prepTime, cookTime, servings } = req.body;

    try {
        const updatedRecipe = await Recipe.findByIdAndUpdate(id, {
            title,
            description,
            ingredients,
            instructions,
            image,
            category,
            prepTime,
            cookTime,
            servings
        }, { new: true });

        if (!updatedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }

        res.status(200).json(updatedRecipe);
    } catch (error) {
        res.status(500).json({ message: "Error updating recipe", error });
    }
});

// DELETE request to delete a recipe by ID
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedRecipe = await Recipe.findByIdAndDelete(id);
        if (!deletedRecipe) {
            return res.status(404).json({ message: "Recipe not found" });
        }
        res.status(200).json({ message: "Recipe deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: "Error deleting recipe", error });
    }
});
router.get('/search', async (req, res) => {
    const { query } = req.query;
  
    try {
      // Search for recipes that match the query in title or description
      const recipes = await Recipe.find({
        $or: [
          { title: { $regex: query, $options: 'i' } }, // Case-insensitive search in the title
          { description: { $regex: query, $options: 'i' } },
        ],
      });
  
      res.json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'An error occurred while searching for recipes.' });
    }
  });
module.exports = router;
