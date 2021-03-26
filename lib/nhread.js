const needle = require('needle')

const Nhonline = (code) => new Promise((resolve, reject) => {
    needle(`https://cin.cin.pw/v/${code}`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = Nhonline