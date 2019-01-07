const knex = require('../db/connection')

const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: err})
}

const getAll = (req, res, next) => {
    return knex('user')
        .select('id', 'first_name', 'last_name')
        .orderBy('id', 'asc')
        .then(users => res.json({users}))
        .catch(generalError)
}

module.exports = {
    getAll,
}