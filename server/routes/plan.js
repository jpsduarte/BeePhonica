const express = require('express')
const router = express.Router()

const planController = require('../controllers/plan');

//GET all plans
router.get('/plans',(req, res) => {
    return res.json(planController.getAll());
 });

 //GET plan by id
 router.get('/plans/:id', (req, res) => {
    return res.json(planController.getById(req.params['id']));
 });

module.exports = router