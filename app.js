const express = require('express');
const https = require('https');

const app = express();

app.get("/",function(req,res){
    const url = "https://api.openweathermap.org/data/2.5/weather?q=Silchar&units=metric&appid=47b88cf98b06d744d58f1965454534f6";
    https.get(url,function(response){
      console.log(response);
    });
    res.send("Server is running");
});

app.listen(3000,function(){
    console.log("The server started at port: 3000")
});

