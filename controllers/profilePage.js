const express = require('express')
const router = express.Router()
const db = require('../models')



router.get('/', (req, res) => {
    res.render("profile")
})

router.patch('/:id', (req,res) => {
    const bioBox = JSON.parse(JSON.stringify(req.body))
    Object.keys(bioBox).forEach(function (key) {
        let actualBio = bioBox[key]
        console.log(actualBio);
        const profileId = res.locals.currentUser.id
        console.log(profileId);
        let bioValue = { biography: actualBio}
        let selector = {
            where:{ id: profileId }
        };
        db.user.update(bioValue, selector)
        .then(updatedBio => {
            
            res.redirect('/profile')
        })
        .catch(error => {
            console.log(error)
        })
        .finally(created => {
            console.log("Added biography", created)
        })
        })
})


module.exports = router