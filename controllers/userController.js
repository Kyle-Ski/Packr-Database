const knex = require('../db/connection')
const reformat = require('../db/reformat')
const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: `General handler in controller ${err}`})
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

const getOne = (req, res, next) => {
    const id = req.params.id
    if(!Number(id)){
        res.json({error: 'Please enter a valid id'})
    } else {
        return knex('user')
            .select('id', 'first_name', 'last_name')
            .where({id: id})
            .then(user => {
                if(!user.length){
                    res.json({error: 'That user doesn\'t exist yet.'})
                } else {
                    res.json({user})
                }
            })
            .catch(generalError)
    }
}

const postUser = (req, res, next) => {
    const body = req.body
    return knex('user')
        .insert(body)
        .returning('*')
        .then(user => {
            if(user.length === 1){
                return res.json({user: user[0]})
            } else {
                return res.json({user: user})
            }
        })
        .catch(generalError)
}
module.exports = {
    getAll,
    getBackpacks,
    getOne,
    postUser
}