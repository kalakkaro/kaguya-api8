const needle = require('needle')

const url = 'https://api.myip.com'

const MyIP = () => new Promise((resolve, reject) => {
    needle(url, (err, resp, body) => {
        if (!err) {
            resolve(body)
        }
    })
})


MyIP()

module.exports = MyIP
