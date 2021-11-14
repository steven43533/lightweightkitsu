const express = require('express')
const router = express.Router()
const axios = require('axios')

router.get('/results', function(req,res) {
    let animeTitle = req.query.animeTitle
    axios.get(`https://kitsu.io/api/edge/anime?filter[text]=${animeTitle}`)
    .then(apiResults => {
        console.log(apiResults.data);
        const results = apiResults.data.data
        res.render('results', {results: results})
    })
    .catch(err => {
        console.log(err);
    })
})

router.get('/:anime_id', function(req,res) {
    let animeId = req.params.anime_id

    axios.get(`https://kitsu.io/api/edge/anime/${animeId}`)
        .then(apiRes => {
            //console.log('api data for this anime: ', apiRes.data);
            let attributes = apiRes.data.data.attributes
            let animeTitle = attributes.titles.en_jp
            let synopsis = attributes.synopsis
            let poster = attributes.posterImage.small
            let avgRating = attributes.averageRating
            let status = attributes.status
            let epCount = attributes.episodeCount
            
            res.render('details', {animeTitle: animeTitle, synopsis: synopsis, poster: poster, avgRating: avgRating, status: status, epCount: epCount})
        })
        .catch(err => {
            console.log(err);
        })
})



module.exports = router