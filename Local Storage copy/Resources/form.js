var formWin = Ti.UI.createWindow({
		title: "Register",
		backgroundColor: "#FFF"
	});
	var fieldHolder = Ti.UI.createScrollView({
		backgroundColor: "black",
		width: Ti.UI.FILL,
		height: Ti.UI.FILL
	});
	var button2 = Ti.UI.createButton({
		title: "Done",
		top: 280,
	});
	var field1 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    	color:'#336699',
    	hintText:'Name',
    	paddingLeft:8,
    	paddingRight:8,
		left:	10,
	    width:	300,
	    height:	40,
	    top:	40
	});
	
	var field2 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    	color:'#336699',
    	hintText:'Position',
    	paddingLeft:8,
    	paddingRight:8,
		left:	10,
	    width:	300,
	    height:	40,
	    top:	100
	});
	
	var field3 = Ti.UI.createTextField({
		borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
    	color:'#336699',
    	hintText:'Team',
    	paddingLeft:8,
    	paddingRight:8,
		left:	10,
	    width:	300,
	    height:	40,
	    top:	160
	});
	
	fieldHolder.add(field1, field2, field3, button2);
	formWin.add(fieldHolder);