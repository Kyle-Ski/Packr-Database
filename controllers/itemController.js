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

module.exports = {
    getAll,
}