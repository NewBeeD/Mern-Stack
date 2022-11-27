const express = require('express')

const Workout = require('../models/workoutModel')

const router = express.Router();



// GET all workouts
router.get('/', (req, res)=>{

  res.json({mssg: 'Get all Workouts'})
})

// GET single workout
router.get('/:id', (req, res)=>{

  res.json({mssg: 'Get a single Workout'})
})

router.post('/', async (req, res)=>{

  const {title, load, reps} = req.body;

  try{

    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)

  }catch(error){

    res.status(400).json({error: error.message})
  }
})

router.delete('/:id', (req, res)=>{

  res.json({mssg:'DELETE a Workout'})
})

router.patch('/:id', (req, res)=>{

  res.json({mssg:'UPDATE a Workout'})
})


module.exports = router