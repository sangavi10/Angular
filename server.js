var client = require('mongodb').MongoClient; 
var url = 'mongodb://localhost:27017/'; 
client.connect(url,{ useNewUrlParser: true }, function(err,db) 
{     
        var dbo=db.db("Demo") 
    var cursor = dbo.collection('Example').find();     
    cursor.each(function (err,doc) 
    { 
        if(doc!=null) 
        console.log(doc); 
    }); 
    db.close(); 
}); 


node-demo

var http = require('http');
var fs = require('fs');
http.createServer(function (req, res) {
  fs.readFile('app.html', function(err, data) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(data);
    res.end();
  });
}).listen(4200);
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";
var claim='';
MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("Demo");
  dbo.collection("Example").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});
