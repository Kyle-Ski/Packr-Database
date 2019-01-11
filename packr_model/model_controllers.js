const Clarifai = require('clarifai')
const app = new Clarifai.App({apiKey: process.env.API_KEY})

const train = (req, res, next) => {

}

const addConceptsWithImages = (req, res, next) => {

}

const addConcepts = (req, res, next) => {

}

const create = (req, res, next) => {
    app.models.create('packr')
        .then(response => {
            console.log(response)
            return res.json({Clarifai: response})
        })
        .catch(err => {
            console.warn('clarifai error:', err)
            return res.json({error: 'clarifai error:', err})
        })
}

module.exports = {
    create
}