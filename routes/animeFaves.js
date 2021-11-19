const express = require('express')
const router = express.Router()

const currentUsersFavoritesModule = require('../controllers/animeFaves.js')
const addToFavoritesDBModule = require('../controllers/animeFaves.js')
const removeFromDBandFaveListModule = require('../controllers/animeFaves.js')

router.get('/', currentUsersFavoritesModule.currentUsersFavorites)

router.post('/addAsFavorite', addToFavoritesDBModule.addToFavoritesDB)

router.delete('/:id', removeFromDBandFaveListModule.removeFromDBandFaveList)

module.exports = router