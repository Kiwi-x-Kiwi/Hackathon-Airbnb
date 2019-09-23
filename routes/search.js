const express = require('express');
const router = express.Router();

/* GET home page */
router.get('/', (req, res, next) => {
  console.log(req.query)
  res.render('search-views/search', {query: req.query});
});

module.exports = router;
