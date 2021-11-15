const express = require('express')
const router = express.Router()
const db = require('../models')

// index route to show all the users favorites 
router.get('/', (req,res) =>{
    db.faveanime.findAll()
        .then(faves => {
            res.render('indexFaves', {results: faves})
        })
        .catch(error => {
            console.log(error);
        })
})

router.post('/addAsFavorite', (req,res) => {
    const data = JSON.parse(JSON.stringify(req.body))
    console.log('this is anime data', data);
})

module.exports = router