const express = require('express')
const cors = require('cors')
const app = express()
const fruitRouter = require('./routes/fruitRouter')

app.use(cors()) // npm install cors


app.get('/', (req, res) => {
  res.send('Hello World!')
})

// CORS - Cors origin resource sharing

app.use(express.json())
app.use('/fruits', fruitRouter)


module.exports = app