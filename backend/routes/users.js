const router = require('express').Router(); //router object from express framework 
let User = require('../models/user.model'); //mongoose model 

//first route that handles http get requests on /users url path 
router.route('/').get((req,res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/add').post((req, res) => {

    const username = req.body.username;

    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;