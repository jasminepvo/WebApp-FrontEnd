//bring in your dependecies 
const cors = require('cors');
const express = require('express');
const app = express()
const PORT = 3030;



//middlewares 
app.use(cors());
app.use(express.json());
//connects the public files(which are usually css and js ), to backend
app.use(express.static('public'));





//send something to server, to let us know it's working 
app.get('/', (request,response) => {
    response.send('Hi, its working');
} )



//set up listen 
app.listen(PORT || PORT, () => {
    console.log(`You're on ${PORT}`)
})