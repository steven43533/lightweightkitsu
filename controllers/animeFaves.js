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

module.exports = router