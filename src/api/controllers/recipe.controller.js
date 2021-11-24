const RecipeService = require('../services/recipe.service');

const getRecipes = async (req, res) => {
    try {
        const recipes = await RecipeService.getRecipes({});
        return res.status(200).json(recipes);
    } catch (err) {
        return res.status(400).json({ status: 400, message: err.message });
    }
};

const createRecipes = async (req, res) => {
    const { name, ingredients, preparation } = req.body;
    const userId = req.loggedUserId;   
    const status = userId ? 400 : 401;  
    try {
        const recipe = await RecipeService.createRecipe({
            name,
            ingredients,
            preparation,
            userId,
        });
        return res.status(201).json({ recipe });
    } catch (err) {
        return res.status(status).json({ message: err.message });
    }
};

const showRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        const recipe = await RecipeService.getRecipe(id);
        return res.status(200).json(recipe);
    } catch (err) {
        return res.status(404).json({ message: err.message });
    }
};

const updateRecipe = async (req, res) => {
    const { name, ingredients, preparation } = req.body;
    const { id } = req.params;
    try {
        const recipe = await RecipeService.updateRecipe({
            id,
            name,
            ingredients,
            preparation,
        });
        return res.status(201).json(recipe);
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

const destroyRecipe = async (req, res) => {
    const { id } = req.params;
    try {
        await RecipeService.destroyRecipe(id);
        return res.status(204).json({});
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

const uploadImage = async (req, res) => {
    const { file } = req;
    const { id } = req.params;

    try {
        const recipe = await RecipeService.uploadImage({ id, file });
        return res.status(201).json(recipe);
    } catch (err) {
        return res.status(400).json({ message: err.message });
    }
};

module.exports = { 
    getRecipes, 
    createRecipes, 
    showRecipe, 
    updateRecipe, 
    destroyRecipe, 
    uploadImage, 
};