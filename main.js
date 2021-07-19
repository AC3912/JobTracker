// Require modules
var express = require('express');
var mysql = require('./dbcon.js');

// Configure application
var app = express();
var handlebars = require('express-handlebars').create({defaultLayout:'main'});
app.engine('handlebars', handlebars.engine);
app.use(express.urlencoded({extended:true}));
app.use('/static', express.static('public'));
app.set('view engine', 'handlebars');
app.set('port', process.argv[2]);
app.set('mysql', mysql);

// Handle routes in their respective user-created modules
//app.use('/page1', require('./page1.js'));

// TODO: Move to specific page
function getUser(res, mysql, context, complete)
{
   mysql.pool.query('SELECT user_id, user_name, password FROM user', (err, rows, fields) => {
      if(err){
         res.write(JSON.stringify(err));
         res.end();
      }
      console.log(rows);
      context.user = rows;
      complete();
   });
}

// Handle homepage route
app.get('/',function(req,res){
   var callbackCount = 0;
   var context = {};
   var mysql = req.app.get('mysql');
   getUser(res, mysql, context, complete);
   // TODO: Create these functions
   //getJob(res, mysql, context, complete);
   //getJobSkill(res, mysql, context, complete);
   //getSkill(res, mysql, context, complete);
   //getCompany(res, mysql, context, complete);
   //getContact(res, mysql, context, complete);
  
   function complete(){
      callbackCount++;
      if(callbackCount >= 1){	  // Wait for all database queries to complete
         res.render('home', context);
      }
   }

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
