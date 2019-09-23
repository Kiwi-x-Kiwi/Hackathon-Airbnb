const express = require('express');
const router = express.Router();
// const home = require('../models/home')

/* GET home page */
router.get('/', (req, res, next) => {
    res.render('details/new');
});




module.exports = router;