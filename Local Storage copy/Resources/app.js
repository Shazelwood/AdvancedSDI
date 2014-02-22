var mainWin = Ti.UI.createWindow({
	title: "Team USA Roster",
	backgroundColor: "#fff",
	url: "team.js"
});

var tabGroup = Ti.UI.createTabGroup();

var tab = Ti.UI.createTab({
	title: "Team",
	window: mainWin
});

tabGroup.addTab(tab);
tabGroup.open();

mainWin.open();
