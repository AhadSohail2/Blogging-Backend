const express = require('express');

const CategoryController = require('../../controllers/admin/category')
const router = express.Router();

router.post('/category',CategoryController.postCategory)

module.exports = router;