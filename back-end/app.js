// require('dotenv').config({ silent: true })
const express = require("express");
const PORT = 8080;
const app = express()
const router = express.Router();
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
    const commentSchema = new mongoose.Schema({
		content: String,
		author: String,
		rating: Number,
		uid: Number
	});
	const Comment = mongoose.model('Comment', commentSchema);
	let currusers = [];
	let username_loggedin = "";
	let password_loggedin = "";
    let tempComments = []
	let commentslist = []
    let cmtUID = 0 // unique id
	main().catch(err => console.log(err));
async function main() {
	await mongoose.connect('mongodb://localhost:27017')
	console.log("looking the users")
	console.log("waiting...")
	console.log("curr user thats logged in " + username_loggedin)
	console.log("curr passwords thats logged in " + password_loggedin)
	currusers = await User.find();
	tempComments = await Comment.find();
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
setInterval(main, 10000);
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


async function add_comment(Comment, user_name, comment1) {
	const comment = new Comment({content: comment1, author: user_name, rating: 0, uid: cmtUID++});
	await comment.save();
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
	console.log('Server is listening on port: ' + PORT);
});


app.get('/comments', async(req, res) => {
	//console.log(tempComments);
    res.json({
        comments: tempComments,
        status: 'success',
    })
});

app.get('/listusers', async(req, res) => {
	res.json({
		userlist: currusers
	})
});

app.get('/username', async(req, res) => {
	res.json({
		username: username_loggedin
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
		add_comment(Comment, req.body.author, req.body.content)
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
app.post('/loggedin', async(req, res) => {
	try {
		username_loggedin = req.body.username;
		password_loggedin = req.body.password;
		console.log(username_loggedin);
		console.log(password_loggedin);
		res.sendStatus(200);
	}
	catch (err) {
		console.error(err)
		res.sendStatus(400);
	}
});

app.post('/signout', async(req, res) => {
	try {
		username_loggedin = "";
		password_loggedin = "";
		res.sendStatus(200);
	}
	catch (err) {
		console.error(err);
		res.sendStatus(400);
	}
});

app.post('/register/new', async(req, res) => {
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
		currcomment = await Comment.findOne({ uid: req.body.uid}).exec();
		rating = currcomment.rating;
		
        let i = find_cmt_ind_by_uid(req.body.uid)
        if (i < 0) {
            throw 'invalid comment uid: ' + req.body.uid.toString()
        }

        if (req.body.good) {
			console.log("We are upvoting")
            tempComments[i].rating += 1
			rating++;
        } else {
			console.log("We are downvoting")
            tempComments[i].rating -= 1
			rating--;
        }
		currcomment.rating = rating;
		await currcomment.save();
		console.log(currcomment.rating)
		console.log(currcomment.content)
		console.log(currcomment.author)
        res.sendStatus(200); // ok
    } catch (err) {
		console.log("Idk whas happening")
        console.error(err)
        res.sendStatus(400); // ew
    }
})

module.exports = app