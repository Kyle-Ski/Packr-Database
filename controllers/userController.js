const knex = require('../db/connection')
const reformat = require('../db/reformat')
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

const getBackpacks = (req, res, next) => {
    return knex('backpack')
        .select('backpack.id as backpack_id',
                'backpack.name as backpack_name',
                'user.id as user_id', 
                'user.first_name',
                'user.last_name'
        )
        .join('user', 'user.id', 'backpack.user_id')
        .then(user => {
            const reformatted = reformat.reformatBackpacks(user)
            res.json({user: reformatted})
        })
        // .then(items => res.json({items}))
        .catch(generalError)
}
module.exports = {
    getAll,
    getBackpacks,
}