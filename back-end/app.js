// require('dotenv').config({ silent: true })
const express = require("express")
const PORT = 3000;
const app = express()
const multer = require('multer')
const mongoose = require('mongoose')
    // const morgan = require('morgan')
    // const cors = require('cors') 
    // const mongoose = require('mongoose')

// app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }))
// app.use(cors()) 
main().catch(err => console.log(err));
async function main() {
	await mongoose.connect('mongodb://localhost:27017')
	const kittySchema = new mongoose.Schema({
		name: String
	});
	kittySchema.methods.speak = function speak() {
		const greeting = this.name
		? "Meow my name is " + this.name
		: "I don't have a name";
		console.log(greeting);
	}
	const Kitten = mongoose.model('Kitten', kittySchema)
	const silence = new Kitten({name: 'Silence'});
	console.log(silence.name);
	const fluffy = new Kitten({name: 'Fluffy'});
	fluffy.speak();
	await fluffy.save();
	await silence.save();
	fluffy.speak();
	const kittens = await Kitten.find();
	console.log(kittens);
}
//var storage = multer.diskStorage({
//	//store files into a directory named 'uploads'
//	destination: function(req, file, cb) {
//		cb(null, "/uploads")
//	},
//	//rename the files to ncldue the current time and date
//	filename: function (req, file, cb) {
//		cb(null, file.fieldname + "-" + Date.now())
//	},
//})
//
//var upload = multer({storage: storage})
//
//app.post('/upload-route-example', upload.array('files'), req, res) => {
//	console.log(JSON.stringify(req.files, null, 2))
//	if (req.files.length) {
//		res.json({success: true, message: 'thanks!'})
//	}
//	else {
//		res.status(500).send({success: false, message "oh no!"})
//	}
//}

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/', function(req, res) {
	console.log("Success");
   // res.render('index', {});
});

app.listen(PORT, () => {
	console.log('Server is listening on port: ${PORT}');
});

let tempComments = []
let cmtUID = 0 // unique id

app.get('/comments', async(req, res) => {
    res.json({
        comments: tempComments,
        status: 'success',
    })
});

app.post('/comments/new', async(req, res) => {
    try {
        newCmt = {}
        newCmt.content = req.body.content
        newCmt.author = req.body.author
        newCmt.rating = 0;
        newCmt.uid = cmtUID++;

        tempComments.push(newCmt)
		console.log('Success');
        res.sendStatus(200); // ok
    } catch (err) {
        console.error(err)
        res.sendStatus(400); // ew
    }
});



function find_cmt_ind_by_uid(uid) {
    for (let i = 0; i < tempComments.length; ++i) {
        if (tempComments[i].uid == uid) {
            return i
        }
    }
    return -1
}

app.post('/comments/vote', async(req, res) => {
    try {
        let i = find_cmt_ind_by_uid(req.body.uid)
        if (i < 0) {
            throw 'invalid comment uid: ' + req.body.uid.toString()
        }

        if (req.body.good) {
			console.log("We are attempting to the vote")
            tempComments[i].rating += 1
        } else {
			console.log("We are down voting")
            tempComments[i].rating -= 1
        }
		console.log('Success_upvote');
        res.sendStatus(200); // ok
    } catch (err) {
		console.log("Idk whas happening")
        console.error(err)
        res.sendStatus(400); // ew
    }
})

module.exports = app