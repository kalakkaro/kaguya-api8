const needle = require('needle')

const drakor = (query) => new Promise((resolve, reject) => {
    needle(`https://rest.farzain.com/api/cuaca.php?id=${query}&apikey=O8mUD3YrHIy9KM1fMRjamw8eg`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = drakor