const needle = require('needle')

const Covid = (negara) => new Promise((resolve, reject) => {
    needle(`https://api.terhambar.com/negara/${negara}`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = Covid
