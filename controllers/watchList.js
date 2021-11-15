const express = require('express')
const router = express.Router()
const db = require('../models')

// index route to show the users want to watch list 
router.get('/', (req,res) =>{
    db.wantToWatch.findAll({
        where: { userId: res.locals.currentUser.id }
    })
        .then(watchThese => {
            console.log(watchThese);
            res.render('indexWantToWatch', {results: watchThese})
        })
        .catch(error => {
            console.log(error);
        })
})

// posts selected anime to want to watch list
router.post('/addToWatchList', (req,res) => {
    const data = JSON.parse(JSON.stringify(req.body))
    console.log('this is anime data', data);
    db.wantToWatch.create({
        name: data.animeTitle,
        animeId: data.animeId,
        userId: res.locals.currentUser.id,
        posterImage: data.poster,
        synopsis: data.synopsis
    })
    .then(createdFave => {
        res.redirect(`/watchlist/`)
    })
    .catch(error => {
        console.log(error);
    })
    .finally(created => {
        console.log(created);
    })
})

router.delete('/:id', (req,res) => {
    db.wantToWatch.destroy({
        where: {id: req.params.id}
    })
    .then(deletedItem => {
        console.log('You removed ', deletedItem);
        res.redirect('/watchlist/')
    })
    .catch(error => {
        console.log(error);
    })
})


module.exports = router