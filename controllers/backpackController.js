const knex = require('../db/connection')
const reformat = require('../db/reformat')

const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: `General handler in controller ${err}`})
}

const injectionCheck = (body) => {
    for(let key in body){
        if(body[key].includes(';')){
            return res.json({error: 'Please make sure there are no \';\' in your inputs'})
        } else {
            return body
        }
    }
}

const getAll = (req, res, next) => {
    return knex('backpack')
        .orderBy('id', 'asc')
        .then(backpacks => res.json({backpacks}))
        .catch(generalError)
}


const getOne = (req, res, next) => {
    const id = req.params.id
    if(!Number(id)) return res.json({error: 'Please make sure the id is correct'})
    return knex('backpack')
        .where('id', id)
        .then(pack => {
            if(!pack.length) return res.json({error: 'That pack doesn\'t exist.'})
            return res.json({pack: pack[0]})
        })
        .catch(generalError)
}

const addPack = (req, res, next) => {
    const body = req.body
    // injectionCheck(body)
        // .then(body => {
            if(!body.user_id){
                return res.json({error: 'please make sure the user is in the database'})
            } else {
                if(body.name !== ''){
                    return knex('backpack')
                        .insert({name: body.name, user_id: body.user_id})
                        .returning('*')
                        .then(pack => res.json({backpack: pack[0]}))
                        .catch(err => {
                            console.error('inside addpack', err)
                            return res.json({error: `inside addpack ${err}`})
                        })
                }
            }
        // })
        // .catch(generalError)
}



module.exports = {
    getAll,
    addPack,
    getOne,
}