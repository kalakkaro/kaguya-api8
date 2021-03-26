const needle = require('needle')

const manga = (query) => new Promise((resolve, reject) => {
    needle(`https://docs-api-zahirrr.herokuapp.com/api/manga?keyword=${query}`, (err, resp, body) => {
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

module.exports = manga