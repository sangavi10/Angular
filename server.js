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