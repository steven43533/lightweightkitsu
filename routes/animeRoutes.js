const express = require('express')
const router = express.Router()

const getSearchResultsModule = require('../controllers/animeRoutes.js')
const getAnimeByIdModule = require('../controllers/animeRoutes.js')

router.get('/results', getSearchResultsModule.getSearchResults);

router.get('/:anime_id', getAnimeByIdModule.getAnimeById);

module.exports = router