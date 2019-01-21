//database with u/names & pws
var database = [
	{
		username: "Belaboo",
		password: "Code"
	},
	{
		username: "Max",
		password: "FiremanSam"
	},
	{
		username: "Panda",
		password: "Cat"
	},
	{
		username: "Choco",
		password: "Late"
	}

];
//We want to show a timeline (array of objects)
var newsfeed = [
	{
		username: "Zack",
		timeline: "Hungry tummy"
	},

	{
		username: "Winnie",
		timeline: "Where's the best cafe?"
	},
	{
		username: "Carrie",
		timeline: "Where's the best cocktail bar?"
	},
	{
		username: "Bert",
		timeline: "Sleep?"
	},
];
//prompt users for u/name & pw then store these
var usernameInput = prompt("Enter your username");
var pwInput = prompt("Enter your password");
//We want to check the userinput against the data in the d/base then //either show the timeline or show an alert 
//with msg 'wrong u/name or pw'.  The function should take two parameters.
function isUserValid(username, password) {
	for (var i=0; i < database.length; i++) {
		if(database[i].username === usernameInput &&
			database[i].password === pwInput) {
			return true;
		} 
	}
	return false;
}
function signin(username, password){
	
	if (isUserValid(username, password)) {
		console.log(newsfeed);
	} else {
		alert("Sorry, wrong username/password");
	}
}
//now call the function using your two prompt variables  //i.e your two arguments which match the parameters
signin(usernameInput, pwInput);































