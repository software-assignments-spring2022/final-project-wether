require('dotenv').config({ silent: true })
const express = require("express")
const app = express()
const morgan = require('morgan')
const cors = require('cors') 
const mongoose = require('mongoose')

app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }))
app.use(cors()) 

app.use(express.json()) 
app.use(express.urlencoded({ extended: true })) 

const { Message } = require('./models/Message')
const { User } = require('./models/User')

app.get('/messages', async (req, res) => {
  try {
    const messages = await Message.find({})
    res.json({
      messages: messages,
      status: 'success',
    })
  } catch (err) {
    console.error(err)
    res.status(400).json({
      error: err,
      status: 'failed',
    })
  }
})

app.post('/messages/save', async (req, res) => {
  try {
    const message = await Message.create({
      name: req.body.name,
      message: req.body.message,
    })
    return res.json({
      message: message, 
      status: 'success'
    })
  } catch (err) {
    console.error(err)
    return res.status(400).json({
      error: err,
      status: 'fail',
    })
  }
})

module.exports = app