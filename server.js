var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000;
//listens for a process environment variable, but if there isn't one, defaults to 3000.
//use const so it can't be changed once it's running.

//express middleware to let you modify the requests being sent.
app.use(function(request, response, next){
    if (request.headers['x-forwarded-proto'] === "https"){
        response.redirect("http://" + request.hostname + request.url);
    }else{
        next();
        
    }
});

// This lets express see folders that are in the directory listed in the argument
//Index.html goes here
app.use(express.static('public'));

//This tells the server to start
app.listen(PORT,function(){console.log("We are LIVE on port " + PORT + "!");});
