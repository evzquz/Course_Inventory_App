var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//sql
var mysql = require('mysql');
var con =mysql.createConnection({
host: "localhost",
user: "root",
password: "imtheone2016",
database: "mydb"
});
con.connect(function(err) {
if (err) console.log("wtf");
console.log("CONNECTEd!");


});



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/style', express.static(__dirname + '/style'));
app.use('/script', express.static(__dirname + '/script'));

app.get('/', function(req, res){
	res.sendFile('home.html',{'root':__dirname + '/templates'});
})





app.post('/data', function(req, res){


var sql = "INSERT INTO COOURSE (course_num,course_title,credit_hrs) VALUES ?";



 console.log(req.body.course_num);
 console.log(req.body.course_title);
 console.log(req.body.credit_hrs);

var a = req.body.course_num;
var b = req.body.course_title;
var c = req.body.credit_hrs;


var values = [
	[a, b, c]

];
con.query(sql, [values], function (err,result){
	if (err) console.log("fuck");
else
	console.log("Number of records inserted: " + result.affectedRows);



});

res.send(200, 'hello');

});


app.listen(3012, function(){
	console.log('Node server running @ http://localhost:3000')
});












