const express = require('express');
const https = require('https');

const app = express();

app.get("/",function(req,res){
    var city = "Silchar";
    const API = "47b88cf98b06d744d58f1965454534f6";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+city+"&callback=test&appid="+API;
    https.get(url,function(response){
      let data = '';
	response.on('data',function(chunk){
		data += chunk;
	});
	response.on('end',function(){
		console.log(data);
	});
    });
    res.send("Server is running");
});

app.listen(3000,function(){
    console.log("The server started at port: 3000")
});

