const db = require('../database/db');

const recipeSchema = db.Schema({
    name: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
    ingredients: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
    preparation: {
        type: String,
        required: [true, 'Invalid entries. Try again.'],
    },
    userId: {
        type: String,
        required: [true, 'jwt malformed'],
    },
    image: {
        type: String,
    },
});

const Recipe = db.model('Recipe', recipeSchema);

module.exports = Recipe;