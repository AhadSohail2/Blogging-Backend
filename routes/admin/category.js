const express = require('express');

const CategoryController = require('../../controllers/admin/category')
const router = express.Router();

router.post('/category',CategoryController.postCategory)

router.get('/categories',CategoryController.getCategories)

router.get('/category',CategoryController.getCategory)


module.exports = router;