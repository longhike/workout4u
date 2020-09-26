const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  day: {
    type: Date,
    default: new Date()
  },
  exercises: [
    {
      type: {
        type: String,
        trim: true,
        required: "Select the type of exercise"
      },
      name: {
        type: String,
        trim: true,
        required: "Which exercise?"
      },
      duration: {
        type: Number,
        required: "How long was your workout? (minutes)"
      },
      distance: {
        type: Number,
        required: "How far?"
      },
      weight: {
        type: Number,
        required: "How much weight?"
      },
      reps: {
        type: Number,
        required: "How many reps?"
      },
      sets: {
        type: Number,
        required: "How many sets?"
      }
    }
  ]
}
);

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;