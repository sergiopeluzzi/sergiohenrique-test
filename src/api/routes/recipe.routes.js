const express = require('express');
const multer = require('multer');
const RecipeController = require('../controllers/recipe.controller');
const auth = require('../middlewares/auth.middleware');

const router = express.Router();

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './src/uploads');
    },
    filename: (req, file, cb) => {
        cb(null, `${req.params.id}.jpg`);
    },
});

const upload = multer({ storage });

router.get('/', RecipeController.getRecipes);
router.post('/', auth, RecipeController.createRecipes);
router.get('/:id', RecipeController.showRecipe);
router.put('/:id', auth, RecipeController.updateRecipe);
router.delete('/:id', auth, RecipeController.destroyRecipe);
router.post('/:id/image/', auth, upload.single('image'), RecipeController.uploadImage);

module.exports = router;