var express = require('express');
var router=express.Router()
var app = express();
var request = 0;

app.use('/',router);

router.get('/', function(req, res){
	   
	if(!req.query.data)
	{
		res.sendFile(__dirname+"/public/main.xml");
		request=1;

	}
	else if(request===1)
	{
		 console.log(request);
		 res.sendFile(__dirname + "/public/" + req.query.data + ".xml");
	 request =2;
	 }
	else
	{   console.log(request);
		res.sendFile(__dirname + "/public/" + req.query.data + "two" + ".xml");
		request=1;
	}

/* 	    if(req.query.data===undefined)
	    {
	    	res.sendFile(__dirname+"/public/main.xml");

		}
		else if (flag){
		    
		    res.sendFile(__dirname + "/public/" + String(req.query.data) + ".xml");
            flag=false;
		
		}
	    else if (!flag)
	    {   
	    	res.sendFile(__dirname + "/public/" + String(req.query.data) + "two" + ".xml");
	    	flag=true
	    } */
	})

var server = app.listen(process.env.PORT || 5000);

