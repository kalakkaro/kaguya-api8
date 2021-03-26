const needle = require('needle')

const drakor = (query) => new Promise((resolve, reject) => {
    needle(`https://kodepos-api-zhirrr.vercel.app/?q=${query}`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = drakor