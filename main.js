// Require modules
var express = require('express');
var mysql = require('./dbcon.js');
var bodyParser = require('body-parser');

// Configure application
var app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.set('port', process.argv[2]);
app.set('mysql', mysql);

// Handle routes in their respective user-created modules
//app.use('/page1', require('./page1.js'));


// Handle homepage route
app.get('/',function(req,res){
  var mysql = req.app.get('mysql');
  mysql.pool.query('SELECT * FROM Jobs', function(err, rows, fields){
    if(err){
      console.log(err);
      res.end();
    }
    console.log(rows);
  });
	
  // TODO: Implement landing page
});

// Handle file-not-found error
app.use(function(req,res){
  res.status(404);
  
  // TODO: Update with React sytnax
  res.render('404');
});

// Handle general errors
app.use(function(err, req, res, next){
  console.error(err.stack);
  res.status(500);
  
  // TODO: Update with React sytnax
  res.render('500');
});

// Announce server location
app.listen(app.get('port'), function(){
  console.log('Express started on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate.');
});
