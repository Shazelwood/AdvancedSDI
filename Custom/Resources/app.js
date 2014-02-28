var mainWin = Ti.UI.createWindow({
	title: "Marvel Characters",
	backgroundColor: "#fff"	,
	url: "RemoteData.js"
});
var title = Ti.UI.createLabel({
	text: "Marvel Characters",
	font:{
    	fontSize:'16',
    	fontWeight: "Bold" 
	},
	top: 30
});
mainWin.add(title);
mainWin.open();
