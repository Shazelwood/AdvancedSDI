var mainWin = Ti.UI.createWindow({
	title: "New York Times: Most Viewed",
	backgroundColor: "#fff"	,
	url: "RemoteData.js"
});
var title = Ti.UI.createLabel({
	text: "New York Times: Most Viewed",
	font:{
    	fontSize:'16',
    	fontWeight: "Bold" 
	},
	top: 30
});
mainWin.add(title);
mainWin.open();
