const express = require('express');

const 

const app = express();

const database = {
	users: [
	{
		id: "123",
		name: "John",
		email: "John@gmail.com",
		password: "cookies",
		entries: 0,
		joined: new Date()

	},
	{
		id: "124",
		name: "Sally",
		email: "Sally@gmail.com",
		password: "bananas",
		entries: 0,
		joined: new Date()

	}


	]
}

app.get('/', (req, res) => {
	res.send("this is working");
})


app.post("/signin", (req, res) => {
	res.json("signin");
})

app.listen(3000, () => {
	console.log("app is running on port 3000");
})




// home route  = this is working

// sign in route = POST with a success/fail 

//register = POST - return user 

//profile/:userID =  GET request of user

//image route - PUT request, update user info 

