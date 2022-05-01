const mongoose = require('mongoose')
const Schema = mongoose.Schema

const LocationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    F: [{
        today: {
            type: Number,
            required:true,
        },
        day1: {
            type: Number,
            required:true,
        },
        day2: {
            type: Number,
            required:true,
        },
        day3: {
            type: Number,
            required:true,
        },
        day4: {
            type: Number,
            required:true,
        },
        day5: {
            type: Number,
            required:true,
        },
        day6: {
            type: Number,
            required:true,
        },	
    }],
    C: [{
        today: {
            type: Number,
            required:true,
        },
        day1: {
            type: Number,
            required:true,
        },
        day2: {
            type: Number,
            required:true,
        },
        day3: {
            type: Number,
            required:true,
        },
        day4: {
            type: Number,
            required:true,
        },
        day5: {
            type: Number,
            required:true,
        },
        day6: {
            type: Number,
            required:true,
        },	
    }],
    days: [{
        today: {
            type: String,
            required:true,
        },
        day1: {
            type: String,
            required:true,
        },
        day2: {
            type: String,
            required:true,
        },
        day3: {
            type: String,
            required:true,
        },
        day4: {
            type: String,
            required:true,
        },
        day5: {
            type: String,
            required:true,
        },
        day6: {
            type: String,
            required:true,
        },	
    }],
    Icon: [{
        today: {
            type: String,
            required:true,
        },
        day1: {
            type: String,
            required:true,
        },
        day2: {
            type: String,
            required:true,
        },
        day3: {
            type: String,
            required:true,
        },
        day4: {
            type: String,
            required:true,
        },
        day5: {
            type: String,
            required:true,
        },
        day6: {
            type: String,
            required:true,
        },	
    }],
        

  }
)

const Location = mongoose.model('Location', LocationSchema)
module.exports = {
    Location,
}
