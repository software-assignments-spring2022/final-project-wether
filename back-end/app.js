// require('dotenv').config({ silent: true })
const express = require("express");
const PORT = 3000;
const app = express()
    // const morgan = require('morgan')
    // const cors = require('cors') 
const mongoose = require('mongoose')

// app.use(morgan('dev', { skip: (req, res) => process.env.NODE_ENV === 'test' }))
// app.use(cors()) 

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

main().catch(err => console.log(err));
async function main() {
	await mongoose.connect('mongodb://localhost:27017')
	const userSchema = new mongoose.Schema({
		username: String,
		password: String,
		date_account_created: String
	});
	userSchema.methods.notifycreation = function created() {
		const print_creation = "This account was created" +
			  this.date_account_created;
		console.log(print_creation);
	}
	const User = mongoose.model('User', userSchema);
	setTimeout(() => {find_user(User, "hellenekpo")}, 5000);
	add_user(User, "hellenekpo", "agile");
	setTimeout(() => {find_user(User, "hellenekpo")}, 5000);
	//const users = await User.find();
	//console.log(users);
}

async function find_user(User, currname) {
	const users = await User.find({username: "hellenekpo"});
	if (users.length > 0) {
		console.log("This user already exist!")
		return new Promise((resolve, reject) => {
			console.log("Yeah");
			resolve();
		});
	}
	else {
		return new Promise((resolve, reject) => {
			console.log("Nah");
			reject();
		})
	}
}



async function add_user(User, user_name, pass_word) {
	const user = new User({username: user_name, password: pass_word, data_account_created: Date.now()});
	await user.save();
}
	

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
			console.log("We are upvoting")
            tempComments[i].rating += 1
        } else {
			console.log("We are downvoting")
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