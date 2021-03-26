const needle = require('needle')

const Faker = () => new Promise((resolve, reject) => {
    needle(`https://fakeid.now.sh/api/random`, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})

module.exports = Faker

