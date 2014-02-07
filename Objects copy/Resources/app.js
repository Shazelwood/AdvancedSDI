var lead = require("Objects");

var win1 = Ti.UI.createWindow({
	background: "#fff",
});

var title = Ti.UI.createLabel({
	top: 20,
	text: "Shae Hazelwood - Objects",
	backgroundColor:"red",
});

var holder = Ti.UI.createScrollView({
	height: 500,
	width: Ti.UI.FILL,
	bottom: 0,
	layout: "horizontal",
	contentWidth: Ti.Platform.displayCaps.platformWidth,
	backgroundColor: "white"
});

for (var i = 0; i < lead.data.length; i++){
	var pics = Ti.UI.createImageView({
		image: lead.data[i].image
	});
	var views = Ti.UI.createView({
		backgroundColor: "black",
		top: 5,
		left: 7,
		width: 150,
		height: 150,
		name: lead.data[i].name,
		position: lead.data[i].position,
		team: lead.data[i].team,
		method: lead.data[i].method(),
		method2: lead.data[i].method2()
	});
	
	views.addEventListener("click", function(){
		alert(this.method + " Injured: " + this.method2);
	});
	
	views.add(pics);
	holder.add(views);
};

win1.add(holder, title);
win1.open();
