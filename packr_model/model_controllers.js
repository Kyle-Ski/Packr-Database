require('dotenv').config()
const Clarifai = require('clarifai')
const app = new Clarifai.App({apiKey: process.env.API_KEY})

const train = (req, res, next) => {

}

const addConceptsWithImages = (req, res, next) => {
    app.inputs.create({

    })
}

const addConcepts = (req, res, next) => {

}


module.exports = {
}