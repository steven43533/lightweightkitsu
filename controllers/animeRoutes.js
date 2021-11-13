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

module.exports = router