let express = require("express");
let app = express();

app.listen(3000, function(){
    console.log("Hello Node! Welcome to port 3000!");
})


// const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end('Hello Node!');
// })

// server.listen(9000, ()=>{
//     console.log('Server is running...');
// })