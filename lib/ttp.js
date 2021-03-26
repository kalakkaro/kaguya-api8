const needle = require('needle')

const ttp = (teks) => new Promise((resolve, reject) => {
    needle(`https://api.areltiyan.site/sticker_maker?text=${teks}`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = ttp