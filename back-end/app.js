// require('dotenv').config({ silent: true })
const express = require("express")
const app = express()
    // const morgan = require('morgan')
    // const cors = require('cors') 
    // const mongoose = require('mongoose')

// app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }))
// app.use(cors()) 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
    res.render('index', {});
});

let tempComments = []

app.get('/comments', async(req, res) => {
    // try {
    //     const messages = await Message.find({})
    //     res.json({
    //         messages: messages,
    //         status: 'success',
    //     })
    // } catch (err) {
    //     console.error(err)
    //     res.status(400).json({
    //         error: err,
    //         status: 'failed',
    //     })
    // }

    res.json({
        comments: tempComments,
        status: 'success',
    })
})

app.post('/comments/save', async(req, res) => {
    // try {
    //     const message = await Message.create({
    //         name: req.body.name,
    //         message: req.body.message,
    //     })
    //     return res.json({
    //         message: message,
    //         status: 'success'
    //     })
    // } catch (err) {
    //     console.error(err)
    //     return res.status(400).json({
    //         error: err,
    //         status: 'fail',
    //     })
    // }

    tempComments.push(req.body.content)

    res.sendStatus(200); // ok
})

module.exports = app