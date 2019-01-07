const knex = require('../db/connection')

const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: `General handler in controller ${err}`})
}

const getAll = (req, res, next) => {
    return knex('item')
        .orderBy('id', 'asc')
        .then(items => res.json({items}))
        .catch(generalError)
}

const addItem = (req, res, next) => {
    const body = req.body
    if(!body.name) return res.json({error: 'Please make sure the item has a name'})
    return knex('item')
        .insert(body)
        .returning('*') 
        .then(item => res.json({item: item[0]}))  
        .catch(generalError) 
}

module.exports = {
    getAll,
    addItem
}