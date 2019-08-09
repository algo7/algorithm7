//Dependencies
const express = require('express');
const router = express.Router();


//GET Route
router.get('/', (req, res) => {
    res.render('routes/index');
});

router.get('/terms', (req, res) => {
    res.render('routes/terms');
});

module.exports = router;