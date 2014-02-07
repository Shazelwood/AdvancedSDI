var x = "" ;
// Literal Notation
var player1 ={
	image: "images/kevin-durant.jpg",
	name: "K. Durant",
	position: "Small Forward",
	team: "OKC Thunder",
	injured: false,
	method: function(){
		return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";	
	},
	method2: function(){
		if (Math.floor(Math.random() * 11) > 5){
			return injured = true;
		}
		else{
			return injured = false;
		};
	}
};

var player2 ={
	image: "images/lebron-james.jpg",
	name: "L. James",
	position: "Small Forward",
	team: "Miami Heat",
	injured: false,
	method: function(){
		return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";	
	},
	method2: function(){
		if (Math.floor(Math.random() * 11) > 5){
			return injured = true;
		}else{
			return injured = false;
		};
	}
};
var player3 ={
	image: "images/carmelo-anthony.jpg",
	name: "C. Anthony",
	position: "Small Forward",
	team: "New York Knicks",
	injured: false,
	method: function(){
		return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";	
	},
	method2: function(){
		if (Math.floor(Math.random() * 11) > 5){
			return injured = true;
		}else{
			return injured = false;
		};
	}
};
var player4 ={
	image: "images/kevin-love.jpg",
	name: "K. Love",
	position: "Small Forward",
	team: "MIN Timberwolves",
	injured: false,
	method: function(){
		return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";	
	},
	method2: function(){
		if (Math.floor(Math.random() * 11) > 5){
			return injured = true;
		}else{
			return injured = false;
		};
	}
};

var player5 ={
	image: "images/stephen-curry.jpg",
	name: "S. Curry",
	position: "Guard",
	team: "Golden State Warriors",
	injured: false,
	method: function(){
		return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";	
	},
	method2: function(){
		if (Math.floor(Math.random() * 11) > 5){
			return injured = true;
		}else{
			return injured = false;
		};
	}
};

//Dot Notation
var player6 = new Object();
player6.image = "images/lamarcus-aldridge.jpg";
player6.name = "L. Aldridge";
player6.position = "Small Forward";
player6.team = "Portland Trail Blazers";
player6.injured = false;
player6.method = function(){
	return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";
};
player6.method2 = function(){
	if (Math.floor(Math.random() * 11) > 5){
		return injured = true;
	}else{
			return injured = false;
		};
};

var player7 = new Object();
player7.image = "images/james-harden.jpg";
player7.name = "J. Harden";
player7.position = "Guard";
player7.team = "Houston Rockets";
player7.injured = false;
player7.method = function(){
	return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";
};
player7.method2 = function(){
	if (Math.floor(Math.random() * 11) > 5){
		return injured = true;
	}else{
			return injured = false;
		};
};
var player8 = new Object();
player8.image = "images/blake-griffin.jpg";
player8.name = "B. Griffin";
player8.position = "Small Forward";
player8.team = "LA Clippers";
player8.injured = false;
player8.method = function(){
	return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";
};
player8.method2 = function(){
	if (Math.floor(Math.random() * 11) > 5){
		return injured = true;
	}else{
			return injured = false;
		};
};
var player9 = new Object();
player9.image = "images/paul-george.jpg",
player9.name = "P. George";
player9.position = "Small Forward";
player9.team = "Indiana Pacers";
player9.injured = false;
player9.method = function(){
	return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";
};
player9.method2 = function(){
	if (Math.floor(Math.random() * 11) > 5){
		return injured = true;
	}else{
			return injured = false;
		};
};
var player10 = new Object();
player10.image = "images/demarcus-cousins.jpg";
player10.name = "D. Cousins";
player10.position = "Center";
player10.team = "SAC Kings";
player10.injured = false;
player10.method = function(){
	return "My name is " + this.name + " I play " + this.position + " for " + this.team + ".";
};
player10.method2 = function(){
	if (Math.floor(Math.random() * 11) > 5){
		return injured = true;
	}else{
			return injured = false;
		};
};

leadArray = [player1, player2, player3, player4, player5, player6, player7, player8, player9, player10];

exports.data = leadArray;
