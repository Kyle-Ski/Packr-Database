const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3222
const cors = require('cors')
const userRoutes = require('./routes/userRoutes')
const auth = require('./routes/authRoutes')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.get('/', (req, res, next) => {
    res.json({message: 'running'})
})

app.use('/users', userRoutes)
app.use('/auth', auth)

app.use(notFound);
app.use(errorHandler);

function notFound(err, req, res, next) {
    res.status(404).send({error: 'Not found!', status: 404, url: req.originalUrl})
}

function errorHandler(err, req, res, next) {
    console.error('NOPE, LOL', err)
    const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
    res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

app.listen(port, () => {
    console.log(`I got you on http://localhost:${port}`) 
})