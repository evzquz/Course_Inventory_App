var express = require('express');
 var jade = require('jade');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');
//sql
var mysql = require('mysql');
var con =mysql.createConnection({
host: "localhost",
user: "pub",
password: "tsu123",
database: "mydb"
});

con.connect(function(err) {
if (err) console.log("error1");
console.log("successful connection!");
});



app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'jade');
app.set('view options', {
  layout: false
});


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/style', express.static(__dirname + '/style'));
app.use('/script', express.static(__dirname + '/script'));


app.get('/', function(req, res){
	res.sendFile('index1.html',{'root':__dirname + '/templates'});	
})

app.post('/data', function(req, res){
	var y= (req.body.choices)
	 console.log(y);
	if(y=="opt1"){
	
		res.sendFile('home.html',{'root':__dirname + '/templates'});

		app.post('/data1', function(req, res){

		var sql = "INSERT INTO COOURSE (course_num,course_title,credit_hrs) 			VALUES ?";

		 console.log(req.body.course_num);
		 console.log(req.body.course_title);
		 console.log(req.body.credit_hrs);

		var a = req.body.course_num;
		var b = req.body.course_title;
		var c = req.body.credit_hrs;

		var values = [
			[a, b, c]];

		con.query(sql, [values], function (err,result){
			if (err) 
			console.log("error2");
			else
			console.log("Number of records inserted: " + 				result.affectedRows);
			res.sendFile('index1.html',{'root':__dirname + '/templates'});
		});	
	});	
	}
	
	else if (y=="opt2"){

		res.sendFile('index2.html',{'root':__dirname + '/templates'});

		app.post('/data2', function(req, res){

		var userInp = req.body.course_num;
		var sql1 = 'SELECT * FROM COOURSE WHERE course_num = ?';

		con.query(sql1, [userInp], function (err, result) {
		  if (err) throw err;
		

		for (var i in result) {
      console.log(result[i]);
  }

		var data = { result: result };
		console.log(data);
		res.render('template1', {result: result});



		});
	


		})
	}



});













app.listen(3012, function(){
	console.log('Node server running @ http://localhost:3012')
});











