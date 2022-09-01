//bring in your dependecies 
const cors = require('cors');
const express = require('express');
const app = express()
const PORT = 3030;
const http = require('http');
const server = http.createServer(app);



//middlewares 
app.use(cors());
app.use(express.json());
//connects the public files(which are usually css and js ), to backend
app.use(express.static('public'));





server.listen(8000,'127.0.0.1',function(){
server.close(function(){
 server.listen(8001,'192.168.0.202')
})
})


//send something to server, to let us know it's working 
app.get('/', (request,response) => {
    response.send('Hi, its working');
} )



//set up listen 
app.listen(PORT || PORT, () => {
    console.log(`You're on ${PORT}`)
})