const router = require('express').Router(); //router object from express framework
let Exercise = require('../models/exercise.model'); //mongoose model 

//first route that handles http get requests on /exercises url path
router.route('MERNDemo/').get((req, res) => {

    Exercise.find()
        .then(ecercises => res.json(ecercises))
        .catch(err => res.status(400).json('Error: ' + err));
});

//add exercises to database
router.route('/add').post((req, res) => {

    const username = req.body.username; //get username from request body
    const description = req.body.description;   //get description from request body
    const duration = Number(req.body.duration); //get duration from request body
    const date = Date.parse(req.body.date); //get date from request body

    //create new exercise object
    const newExercise = new Exercise({
        username,
        description,
        duration,
        date,
    });

    //save new exercise object to database
    newExercise.save()
        .then(() => res.json('Exercise added!'))    //return message
        .catch(err => res.status(400).json('Error ' + err));
});

//get exercise by id
router.route('/:id').get((req, res) => {

    //find exercise by id
    Exercise.findById(req.params.id)
        .then(exercise => res.json(exercise))   //return exercise
        .catch(err => res.status(400).json('Error ' + err));
});

//delete exercise by id
router.route('/:id').delete((req, res) => {

    //find exercise by id and delete
    Exercise.findByIdAndDelete(req.params.id)
        .then(() => res.json('Exercise deleted!'))  //return message
        .catch(err => res.status(400).json('Error ' + err));
});

//update exercise by id
router.route('/update/:id').post((req, res) => {

    //find exercise by id
    Exercise.findById(req.params.id)
        .then(exercise => { 
            exercise.username = req.body.username;
            exercise.description = req.body.description;
            exercise.duration = Number(req.body.duration);
            exercise.date = Date.parse(req.body.date);

            //save updated exercise to database
            exercise.save()
                .then(() => res.json('Ecercise updated!'))
                .catch(err => res.status(400).json('Error ' + err));
        })
        .catch(err => res.status(400).json('Error ' + err));
})



module.exports = router;