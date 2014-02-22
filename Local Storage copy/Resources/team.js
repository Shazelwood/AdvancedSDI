var currentWin = Ti.UI.currentWindow;

Ti.include("form.js");

var dataB = Ti.Database.open("TeamDB");
dataB.execute("CREATE TABLE IF NOT EXISTS game(id INTEGER PRIMARY KEY, name TEXT, number INTEGER, team TEXT);");
var tableView = Ti.UI.createTableView();

var buildRow = function () {
	var dataArray = [];
	
	var rows = dataB.execute("SELECT * FROM game");
	
	while (rows.isValidRow()){
		var id, name, number, team;
		
		id = rows.fieldByName('id');
		name = rows.fieldByName('name');
		number = rows.fieldByName('number');
		team = rows.fieldByName('team');
	
		dataArray.push({
			title:	name,
			id:		id,
			number:	number,
			team:	team
		});
		rows.next();
	};
	return dataArray;
};

var button = Ti.UI.createButton({
	title: "Register",
	right: 10,
	top: 0
});

button.addEventListener("click", function(){
	formWin.open();
	button2.addEventListener("click",function(){
		dataB.execute("INSERT INTO game(name,number,team) VALUES (?,?,?)", field1.value, field2.value, field3.value);
		
		field1.value = "";
		field2.value = "";
		field3.value = "";
		
		formWin.close();
		tableView.setData(buildRow());
	});
});

var dim = Ti.UI.createView({
		width: Ti.UI.FIIL,
		height: Ti.UI.FILL,
		backgroundColor: "black",
		opacity: 0.8
	});
dim.visible = false;
tableView.addEventListener("longpress", function(e){
	var test = e.source.id;
	dim.visible = true;
	var prompt = Ti.UI.createView({
		backgroundColor: "#FFF",
		width: 200,
		height: 100,
		borderRadius: 20
	});
	var button1 = Ti.UI.createButton({
		title: "Delete",
		right: 20,
		bottom: 20
	});
	var button2 = Ti.UI.createButton({
		title: "Edit",
		left: 20,
		bottom: 20
	});
	var button3 = Ti.UI.createButton({
		title: "cancel",
		bottom: 5
	});
	var label = Ti.UI.createLabel({
		text: "What would you like to do?",
		font: {fontSize: 14},
		top: 20
	});
	//Edit
	button2.addEventListener("click", function(){
		formWin.open();
		button2.addEventListener("click", function(){
			dataB.execute("UPDATE game SET name = ?, number = ?, team = ? WHERE id = ?",field1.value, field2.value, field3.value, test);
			formWin.close();
			prompt.visible = false;
		 	dim.visible = false;
			tableView.setData(buildRow());
		});
	});
	//cancel
	button3.addEventListener("click", function(){
		prompt.visible = false;
		dim.visible = false;
	});
	//Delete
	button1.addEventListener("click", function(){
		dataB.execute("DELETE FROM game WHERE id = ?", test);
		prompt.visible = false;
		dim.visible = false;
		tableView.setData(buildRow());
	});
	
	prompt.add(button1, button2, button3, label);
	currentWin.add(prompt);
	
});

currentWin.add(tableView, dim);
tableView.setData(buildRow());
currentWin.add(button);
