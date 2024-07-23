// Initialisation of the server

require('dotenv').config() //npm install dotenv (in packaje.json)

const app = require('./app')
const port = process.env.PORT || 5001 // grabbing the hidden key PORT from .eng


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})