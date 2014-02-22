var dataB = Ti.Database.open("TeamDB");

dataB.execute("CREATE TABLE IF NOT EXISTSS game(id INTEGER PRIMARY KEY, name TEXT, number INTEGER, team TEXT);");
//dataB.close();

var rows = dataB.execute("SELECT DISTINCT team FROM game");



dataB.execute("UPDATE game SET name=? ");
