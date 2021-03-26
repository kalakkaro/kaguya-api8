const needle = require('needle')

const drakor = (query) => new Promise((resolve, reject) => {
    needle(`http://docs-api-zahirrr.herokuapp.com/api/drakorasia?search=${query}`, (err, resp, body) => {
        if (!err) {
            let ress = ({
                status: true,
                creator: "Tanaka-Kun",
                result: body
                })
            resolve(ress)
        }
    })
})

module.exports = drakor