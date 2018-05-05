const express = require('express')
const router = express.Router()

const planController = require('../controllers/plan');

//GET all plans
router.get('/plan',(req, res) => {
    return res.json(planController.getAll());
 });

module.exports = router