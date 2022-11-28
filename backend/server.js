const dotenv = require('dotenv');
const express = require('express');
const { default: mongoose } = require('mongoose');
const mongo = require('mongoose');

const workOurRoutes = require('./routes/workout')
// Express App
const app = express();

dotenv.config()

app.use(express.json())

app.use((req, res, next)=>{

  console.log(req.path, req.method);
  next();
})

const port = process.env.PORT;
const passcode = process.env.MONG_DB;

// Routes
app.use('/api/workouts',workOurRoutes)

// Connect to db
mongo.connect(passcode)
.then(()=>{
  
  app.listen(port, ()=>{

    console.log(`Connected to DB & Listening on port: ${port}`);
  })
})
.catch((error)=>{
  console.log(error);
})


