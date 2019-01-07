const reformatUsers = (packs) => {
    const reformatted = []
    const packById = {}

    packs.forEach(pack => {
        const currentId = pack.user_id

        if(packById[currentId]!==undefined){
            packById[currentId].backpacks.push({
                backpack_id: pack.backpack_id,
                backpack_name: pack.backpack_name
            })
        } else {
            packById[currentId] = {
                user_id: pack.user_id,
                first_name: pack.first_name,
                last_name: pack.last_name,
                backpacks: [{
                    backpack_id: pack.backpack_id,
                    backpack_name: pack.backpack_name
                }]
            }
            reformatted.push(packById[currentId])
        }
    })
    return reformatted
}

const reformatBackpacks = (packs) => {
    const reformatted = []
    const packById = {}

    packs.forEach(pack => {
        const currentId = pack.pack_id

        if(packById[currentId]!==undefined){
            packById[currentId].items.push({
                item_id: pack.item_id,
                item_name: pack.item_name,
                nfc: pack.nfc
            })
        } else {
            packById[currentId] = {
                backpack_id: pack.pack_id,
                backpack_name: pack.pack_name,
                items: [{
                    item_id: pack.item_id,
                    item_name: pack.item_name,
                    nfc: pack.nfc
                }]
            }
            reformatted.push(packById[currentId])
        }
    })
    return reformatted

}

module.exports = {
    reformatUsers,
    reformatBackpacks
}