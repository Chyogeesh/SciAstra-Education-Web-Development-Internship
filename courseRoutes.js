const express = require('express');
const router = express.Router();
const courseController = require('../controllers/courseController');

router.get('/discounted', courseController.getDiscountedCourses);

module.exports = router;
