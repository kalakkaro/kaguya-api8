const needle = require('needle')

const wall = (query) => new Promise((resolve, reject) => {
    needle(`https://wall.alphacoders.com/api2.0/get.php?auth=3e7756c85df54b78f934a284c11abe4e&method=search&term=${query}`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = wall