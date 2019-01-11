require('dotenv').config()
const Clarifai = require('clarifai')
const app = new Clarifai.App({apiKey: process.env.API_KEY})
const knex = require('../db/connection')

const addItem = (response) => {
    if(response.inputs > 1){
        const body = {name: req.body.name, nfc: response.inputs[0].id}
        return knex('item')
            .insert(body)
            .returning('*') 
            .then(item => res.json({item: item[0]}))  
    }
}

const train = (req, res, next) => {

}

const addConceptsWithImages = (req, res, next) => {
    // console.log('hey')
    app.models.initModel('packr')
    .then(packr=>{
        console.log(packr)
        return packr.inputs.create({
            url: 'https://i.imgur.com/rUjAgch.jpg',
            id: 'creator',
            concepts:[{
                id: 'creator',
                value: true
            }]
            }
        )
    })
        // .then(packr => {
        //     console.log(packr)
            // if(req.body.length === 1){
                 
                .then(response => res.json({response}))
        //     } else {
        //         const array = req.body.img.reduce((accum, item, i) => {
        //             let newObject = new Object()
        //             newObject['base64'] = item
        //             newObject['id'] = req.body.name
        //             accum.push(newObject)
        //             return accum
        //         },[])
        //         return packr.inputs.create({array})
        //         .then(response => console.log(response))
        //     }
        // // })
        // .then(response => console.log(response))
        .catch(err => {
            console.log('add concepts with images err:',err)
            return res.json({error: err})
        })
    

    
}

const addConcepts = (req, res, next) => {

}


module.exports = {
    addConceptsWithImages
}