const express = require('express')
const router = express.Router()
const currentUserWatchlistModule = require('../controllers/watchList.js')
const addToCurrentUserWatchlistModule = require('../controllers/watchList.js')
const deleteFromCurrentUserWatchlistModule = require('../controllers/watchList.js')

router.get('/', currentUserWatchlistModule.currentUserWatchlist)

router.post('/addToWatchList', addToCurrentUserWatchlistModule.addToCurrentUserWatchlist)

router.delete('/:id', deleteFromCurrentUserWatchlistModule.deleteFromCurrentUserWatchlist)

module.exports = router