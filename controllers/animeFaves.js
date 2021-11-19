const db = require('../models')

// index route to show all the users favorites 
exports.currentUsersFavorites = (req,res) =>{
    db.faveAnime.findAll({
        where: { userId: res.locals.currentUser.id }
    })
        .then(faves => {
            console.log(faves);
            res.render('indexFaves', {results: faves})
        })
        .catch(error => {
            console.log(error);
        })
}
// add current users favorite to db
exports.addToFavoritesDB = (req,res) => {
    const data = JSON.parse(JSON.stringify(req.body))
    console.log('this is anime data', data);
    db.faveAnime.create({
        name: data.animeTitle,
        animeId: data.animeId,
        userId: res.locals.currentUser.id,
        posterImage: data.poster,
        favoriteCount: data.favoritesCount,
        startDate: data.startDate,
        endDate: data.endDate
    })
    .then(createdFave => {
        res.redirect(`/favoritedAnime/`)
    })
    .catch(error => {
        console.log(error);
    })
    .finally(created => {
        console.log(created);
    })
}

// remove currentusers favorited anime from db/list
exports.removeFromDBandFaveList = (req,res) => {
    db.faveAnime.destroy({
        where: {id: req.params.id}
    })
    .then(deletedItem => {
        console.log('You removed ', deletedItem);
        res.redirect('/favoritedAnime/')
    })
    .catch(error => {
        console.log(error);
    })
}
