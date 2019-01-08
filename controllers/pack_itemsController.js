const knex = require('../db/connection')
const reformat = require('../db/reformat')

const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: `General handler in controller ${err}`})
}

const getAll = (req, res, next) => {
    return knex('pack_items')
        .orderBy('id', 'asc')
        .then(items => res.json({items}))
        .catch(generalError)

}

const getPackItems = (req, res, next) => {
    const id = req.params.id
    return knex('backpack')
    .where('backpack.id', id)
        .select(
            'item.name as item_name',
            'item.nfc',
            'item.id as item_id',
            'backpack.name as pack_name',
            'backpack.id as pack_id',
            'backpack.complete',
            'backpack.check'
        )
        .join('pack_items', 'pack_items.backpack_id', 'backpack.id')
        .join('item', 'item.id', 'pack_items.item_id')
        .then(packs => {
            const reformatted = reformat.reformatBackpacks(packs)
            return res.json({backpacks: reformatted})
        })
        .catch(generalError)
}

const addPackItem = (req, res, next) => {
    if(!Number(req.body.backpack_id) || !Number(req.body.item_id)) return res.json({error: 'Please make sure the inputs are numbers'})
    return knex('pack_items')
        .insert({backpack_id: req.body.backpack_id, item_id: req.body.item_id})
        .returning('*')
        .then(item => res.json({item: item[0]}))
        .catch(generalError)
}

const deletePackItems = (req, res, next) => {
    const packId = req.params.packId
    const itemId = req.params.itemId
    return knex('pack_items')
        .where('backpack_id', packId)
        .andWhere('item_id', itemId)
        .then(response => {
            if(!response.length) return res.json({error: 'The item you are trying to delete doesn\'t exist'})
            if(response.length === 1){
                return knex('pack_items')
                    .where('backpack_id', packId)
                    .andWhere('item_id', itemId)
                    .delete()
                    .returning('*')
                    .then(item => res.json({item}))
            } else {
                return knex('pack_items')
                    .where('backpack_id', packId)
                    .andWhere('item_id', itemId)
                    .andWhere('id', '<',response[1].id)
                    .delete()
                    .returning('*')
                    .then(item => res.json({item}))
            }
            
        })
        
        .catch(generalError)
}

const editPackItems = (req, res, next) => {
    const packId = req.params.packId
    const itemId = req.params.itemId
    if(!Number(req.body.item_id) || !Number(req.body.backpack_id)) return res.json({error: 'Please make sure you entered the correct IDs'})
    return knex('pack_items')
        .where('backpack_id', packId)
        .andWhere('item_id', itemId)
        .then(response => {
            if(!response.length) return res.json({error: 'That item doesn\'t exist'})
            else {
                return knex('pack_items')
                    .where('backpack_id', packId)
                    .andWhere('item_id', itemId)
                    .update(req.body)
                    .returning('*')
                    .then(item => res.json({item: item[0]}))
            }
        })
        .catch(generalError)
        
}

module.exports = {
    getPackItems,
    deletePackItems,
    editPackItems,
    getAll,
    addPackItem,
}