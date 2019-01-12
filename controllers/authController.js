const knex = require('../db/connection')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: `General handler in controller ${err}`})
}

const newUser = (req, res, next) => {
    if (req.body.email.includes(';') || req.body.first_name.includes(';') || req.body.last_name.includes(';') || req.body.password.includes(';')){
        return res.json({error: 'Please enter a email in the format: yourEmail@domian.com'})
    } else {
        return knex('user')
            .where('email', body.email)
            .then(user => {
                if(!user.length){
                    const hashPass = bcrypt.hashSync(req.body.password, saltRounds)
                    req.body.password =  hashPass
                    return knex('user')
                        .insert(req.body)
                        .returning('*')
                        .then(newUser => {
                            const payload = JSON.parse(JSON.stringify(newUser[0]))
                            delete payload.password
                            const token = jwt.sign(payload, process.env.TOKEN_SECRET)
                            return res.json({token})
                        })
                        .catch(err => {
                            console.error('Error in returning token', err)
                            return res.json({error:'Error in returning token', err })
                        })
                } else {
                    return res.json({error: 'Email already registered, please enter a different email and try again.'})
                }
            })
            .catch(generalError)
    }
    // if(!body.first_name || !body.last_name || !body.email || !body.password){
    //     res.json({error: 'Please make sure all fields are filled out'})
    // } else {
        
    // }
}

const logIn = (req, res, next) => {
    if(req.body.password.includes(';')) return res.json({error: 'Please enter a valid email'})
    if(req.body.email.includes(';'))return res.json({error: 'Please enter a valid password'})
    return knex('user') 
        .where('user.email', req.body.email)
        .then(user => {
            if(!user.length) return res.json({error: 'That email doesn\'t exist, please enter a valid email'})
            // const hashPass = user[0].password
            // const match= bcrypt.compareSync(req.body.password, hashPass)
            // if(match){
            //     const payload = JSON.parse(JSON.stringify(user[0]))
            //     delete payload.password
            //     const token = jwt.sign(payload, process.env.TOKEN_SECRET)
            //     res.json({ 
            //         token: token,
            //         user: payload
            //     })
            // } else {
            //     res.json({error: 'Incorrect password, please try again'})
            // }
            return res.json({
                id: user[0].id,
                first_name: user[0].first_name,
                last_name: user[0].last_name
            })
                
            
        })
        .catch(generalError)
}

module.exports = {
    newUser,
    logIn
}