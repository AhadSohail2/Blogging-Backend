const express = require('express');

//Imports Admin Routes
const adsRoute=require('./ads')
const blogsRoute=require('./blogs')
const categoryRoute=require('./category')
const commentsRoute=require('./comments')
const featuredRoute=require('./featured')
const userRoute=require('./user')

const router = express.Router();

router.use(adsRoute);
router.use(blogsRoute);
router.use(categoryRoute);
router.use(commentsRoute);
router.use(featuredRoute);
router.use(userRoute);

module.exports=router;