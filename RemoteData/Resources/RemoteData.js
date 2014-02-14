var currentWin = Ti.UI.currentWindow;
var holder = Ti.UI.createView({
	height: 500,
	bottom: 0,
	width: Ti.UI.FILL
});

var table = Ti.UI.createTableView();
var tableData = [];
var response, row, author, image, a, b, c, title, section;
var remoteResponse = function() {
    // Response function code
    response = JSON.parse(this.responseText);
    for (a = 0; a < response.results.length; a++){
    	row = Ti.UI.createTableViewRow({
    		height: 170,
    	});
    	image = Ti.UI.createImageView({
    		backgroundImage: "http://www.silvermorgandollar.com/images/no_image.gif",
			height: 150,
			width: 150,
			right: 5
    	});
    	for (b = 0; b < response.results[a].media.length; b++){
    		for (c = 0; c < response.results[a].media[b]["media-metadata"].length; c++){
				var format = response.results[a].media[b]["media-metadata"][c].format;
				var pic = response.results[a].media[b]["media-metadata"][c].url;
				if( format === "Standard Thumbnail"){
					image.image = pic;
				}else if(format === "Normal"){
					image.image = pic;
				}else if(format === "square640"){
					image.image = pic;
				}else if(format === "square320"){
					image.image = pic;
				}else if(format === "thumbLarge"){
					image.image = pic;
				};
			};
		};
    	
    	
    	title = Ti.UI.createLabel({
    		text: response.results[a].title,
    		top: 70,
    		left: 10,
    		width: 150,
    		font:{
            	fontSize:'16',
            	fontWeight: "Bold" 
    		},
    		touchEnabled:false
    	});
    	author = Ti.UI.createLabel({
    		text: response.results[a].byline,
    		top: 30,
    		left: 10,
    		width: 150,
    		font:{
            	fontSize:'12',
            	fontStyle: "italic" 
    		},
    		touchEnabled:false
    	});
    	section = Ti.UI.createLabel({
    		text: response.results[a].section,
    		top: 5,
    		left: 10,
    		width: 150,
    		font:{
            	fontSize:'18',
    		},
    		touchEnabled:false
    	});
    	row.add(title, image, author, section);
    	tableData.push(row);
    }
    table.setData(tableData);
};

var remoteError = function(e) {
    Ti.API.debug("Status: " + this.status);
    Ti.API.debug("Text: " + this.responseText);
    Ti.API.debug("Error: " + e.error);
    alert("There's a problem pulling remote data");
};

var xhr = Ti.Network.createHTTPClient({
    onload: remoteResponse,
    onerror: remoteError,
    timeout:5000
});

xhr.open("GET", "http://api.nytimes.com/svc/mostpopular/v2/mostviewed/all-sections/1.json?api-key=96b25181c8c0c478f8a1a5e5c71226a8:1:68792990");
xhr.send();

holder.add(table);
currentWin.add(holder);