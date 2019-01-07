const knex = require('../db/connection')
const reformat = require('../db/reformat')

const generalError = (err) => {
    console.error('Error:', err)
    return res.json({error: `General handler in controller ${err}`})
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
            'backpack.id as pack_id'
        )
        .join('pack_items', 'pack_items.backpack_id', 'backpack.id')
        .join('item', 'item.id', 'pack_items.item_id')
        .then(packs => {
            const reformatted = reformat.reformatBackpacks(packs)
            return res.json({backpacks: reformatted})
        })
        .catch(generalError)
}

module.exports = {
    getPackItems,
}