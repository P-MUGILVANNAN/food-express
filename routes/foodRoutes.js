const express = require('express');
const router = express.Router();
const { addFood, getAllFoods, getFoodById, getFoodsByCategory, updateFood, deleteFood } = require('../controllers/foodController');
const { protect, adminOnly } = require('../middleware/authMiddleware');

// public routes
// get foods route
router.get('/',getAllFoods);

// get food by id route
router.get('/:id',getFoodById);

// get foods by category
router.get('/category/:category',getFoodsByCategory);

// admin-only routes
// add food route
router.post('/',protect,adminOnly,addFood);

// update food route
router.put('/:id',protect,adminOnly,updateFood);

// delete food route
router.delete('/:id',protect,adminOnly,deleteFood);

module.exports = router;