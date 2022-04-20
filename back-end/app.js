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
	console.log("Checking if hellenekpo exists\n");
	check_user_exists(User, "hellen");
	const user1 = new User({username: "hellenekpo", password:
						   "agileiscool", date_account_created: Date.now()});
	await user1.save();
	console.log(user1.username);
	console.log("Checking if hellenekpo exists after adding the user\n");
	check_user_exists(User, user1.username);
	const user2 = new User({username: "hellenekpo", password:
						   "agileiscool123", date_account_created: Date.now()});
	await user2.save();
	console.log(user2.username);
	console.log("Now adding helenaekpo\n");
	const user3 = new User({username: "helenaekpo", password:
						   "agileiscool", date_account_created: Date.now()});
	check_user_exists(User, user3.username);
	console.log(user3.username);
	await user3.save();
	user1.notifycreation();
}

async function check_user_exists(User, currname) {
	const users = await User.find();
	console.log(users);
	for (let i = 0; i < users.length; ++i) {
		if (i.usrename == currname) {
			console.log("this user already exists, not adding them to the database again!");
			return true;
		}
	}
	console.log("this user doesn't exist, we can add them!, yay");
	return false;
	
}

async function add_user()
	

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