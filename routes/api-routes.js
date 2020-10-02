const router = require('express').Router()
const Workout = require("../models/index");


  router.get("/api/workouts", function (req, res) {
    // console.log(req);
    // console.log(res);
    Workout.find({})
    .then(data => res.json(data))
    .catch(err => res.json(err))
  })

  router.get("/api/workouts/range", function (req, res) {
    // console.log(req);
    // console.log(res);
    Workout.find({}).then(function (data) {
      console.log(data);
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  })

  router.post("/api/workouts", function (req, res) {
    let reqString = JSON.stringify(req.body)
    console.log(reqString + " this is the req.body");
    let reqJson = JSON.parse(reqString)
    console.log(reqJson);
    Workout.create(reqString)
      .then(() => res.redirect('/'))
      .catch(err => res.json(err))
  })

  router.put("/api/workouts/:id", function (req, res) {
    // console.log(req.query);
    // console.log(req.params.id);
    Workout.findByIdAndUpdate(
      req.query, 
      { $push: { exercises: req.body } }, { new: true })
      .then(function (data) {
      res.json(data)
    }).catch(function (err) {
      res.json(err)
    })
  })


module.exports = router