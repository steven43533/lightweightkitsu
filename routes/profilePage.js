const express = require('express')
const router = express.Router()

const renderProfilePageModule = require('../controllers/profilePage.js')
const updateBioModule = require('../controllers/profilePage.js')

router.get('/', renderProfilePageModule.renderProfilePage)

router.patch('/:id', updateBioModule.updateBio)
module.exports = router