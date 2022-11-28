const express = require('express')

const {getWorkouts,getWorkout, createWorkout, deleteWorkout, updateWorkout} = require('../controllers/workoutcontroller')


const router = express.Router();



// GET all workouts
router.get('/', getWorkouts)

// GET single workout
router.get('/:id', getWorkout)

router.post('/', createWorkout)

router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)


module.exports = router