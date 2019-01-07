const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3222
const cors = require('cors')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())


app.listen(port, () => {
    console.log(`I got you on http://localhost:${port}`) 
})