//bring in your dependecies 
const cors = require('cors');
const express = require('express');
const app = express()
const PORT = 3030;


//middlewares 
app.use(cors());
app.use(express.json());
app.use()






//set up listen 
app.listen(PORT || PORT, () => {
    console.log(`You're on ${PORT}`)
})