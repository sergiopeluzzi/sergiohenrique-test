const path = require('path');
const Recipe = require('../models/recipe.model');

const getRecipes = async (query) => {
    try {
        const recipes = await Recipe.find(query);
        return recipes;
    } catch (err) {
        throw Error('Error while getting Recipes');
    }
};

const createRecipe = async (query) => {
    try {
        const recipe = await Recipe.create(query);
        return recipe;
    } catch (err) {
        const msg = query.userId ? 'Invalid entries. Try again' : 'jwt malformed';
        throw new Error(msg, { cause: err });
    }
};

const getRecipe = async (id) => {
    try {
        const recipe = await Recipe.findById(id);
        return recipe;
    } catch (err) {
        throw Error('recipe not found');
    }
};

const updateRecipe = async (query) => {
    try {
        const conditions = { _id: query.id };
        const recipe = await Recipe.findOneAndUpdate(conditions, query);
        return recipe;
    } catch (err) {
        throw Error('Error while updating a Recipe');
    }
};

const destroyRecipe = async (id) => {
    try {
        const conditions = { _id: id };
        const recipe = await Recipe.findOneAndDelete(conditions);
        return recipe;
    } catch (err) {
        throw Error('Error while deleting a Recipe');
    }
};

const uploadImage = async (query) => {
    try {
        const conditions = { _id: query.id };
        const recipe = await Recipe.findOneAndUpdate(conditions, query);
        recipe.image = path.join(process.env.SERVER || 'http://localhost:3000', query.file.path);
        return recipe;
    } catch (err) {
        throw Error('Error while updatina a Recipe Image');
    }
};

module.exports = { getRecipes, createRecipe, getRecipe, updateRecipe, destroyRecipe, uploadImage };