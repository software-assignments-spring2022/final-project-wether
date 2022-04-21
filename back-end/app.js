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
	
let currusers = [];
main1().catch(err => console.log(err));
main().catch(err => console.log(err));
async function main1() {
	add_user(User, "hellenekpo", "agilecool")
}
async function main() {
	currusers = await User.find();
console.log(currusers);
//	await mongoose.connect('mongodb://localhost:27017')
//	const userSchema = new mongoose.Schema({
//		username: String,
//		password: String,
//		date_account_created: String
//	});
//	userSchema.methods.notifycreation = function created() {
//		const print_creation = "This account was created" +
//			  this.date_account_created;
//		console.log(print_creation);
//	}
//	const User = mongoose.model('User', userSchema);
//
//	//const users = await User.find();
//	//console.log(users);
}
setInterval(main, 5000);
//const User = mongoose.model('User', userSchema);

async function find_user(User, currname) {
	const users = await User.find({username: "123"});
	if (users.length > 0) {
		console.log("This user already exist!")
		return Promise.resolve(100);
	}
	else {
		console.error("You can add the user");
		return Promise.reject(400);
	
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

function time_out() {
	console.log("in time out");
}

app.post('/register/new', async(req, res) => {
	await mongoose.connect('mongodb://localhost:27017')
	try {
		console.log(req.body.username);
		console.log(req.body.password);
		result = true;
		for (let i = 0; i < currusers.length; ++i) {
        if (currusers[i].username == req.body.username) {
            console.log("Cannot add user")
			result = false;
        }	
    }
		if (result == true) {
			console.log("DOESN'T EXIST");
			setTimeout(() => {time_out()}, 5000);
			add_user(User, req.body.username, req.body.password)
		}
		else {
			console.log("It already exists!");
		}
		res.sendStatus(200);
	}
	catch (err) {
		console.log("Idkkk");
		console.error(err);
		res.sendStatus(400);
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