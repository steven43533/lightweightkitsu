const express = require('express')
const router = express.Router()
const db = require('../models')

// index route to show all the users favorites 
router.get('/', (req,res) =>{
    db.faveAnime.findAll()
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
    db.faveAnime.create({
        name: data.animeTitle,
        userId: res.locals.currentUser.id,
        posterImage: data.poster,
        favoriteCount: data.favoritesCount,
        startDate: data.startDate,
        endDate: data.endDate
    })
    .then(createdFave => {
        res.redirect(`/favoritedAnime/${createdFave.id}`)
    })
    .catch(error => {
        console.log(error);
    })
    .finally(created => {
        console.log(created);
    })
})

module.exports = router