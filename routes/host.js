const express = require('express');
const router = express.Router();

const User = require('../models/User');

//checks implemented
router.use((req, res, next) => {
    //force checks if user is logged in so they cant just type a pages route
    if (!req.user) {
        req.flash('error', 'please log in to use this feature');
        res.redirect('/login');
    }
    //stops users without host access from doing this they're not supposed to like creating/deleting details
    if (!req.user.isHost) {
        req.flash('error', 'You do not have access to this feature');
        res.redirect('/login');
    }
    //if host, next()
    next();
})

//sends host to create listing page to create new users
router.get('/create-new-listing', (req, res, next) => {

    res.render('user/new-listing');

})

//lets admin get a list of all their active listings
router.get('/my-active-listings', (req, res, next) => {

    User.find()
        .then((allTheListings) => {
            res.render('user/my-active-listings', {
                users: allTheListings
            })
        })
        .catch((err) => {
            next(err);
        })

})


//page where host can delete listings from DB. deletes them by their ID's. can only access after passing host check above
router.post('/delete/:id', (req,res,next)=>{

    User.findByIdAndRemove(req.params.id)
    .then((result)=>{

        req.flash('success', 'Listing successfully deleted')
        res.redirect('/admin/my-active-listings') //redirects back to same page

    })
    .catch((err)=>{
        next(err);
    })
})







module.exports = router;