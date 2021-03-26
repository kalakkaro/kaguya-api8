const gis = require('g-i-s')

const gimg = (query) => new Promise((resolve, reject) => {
        gis(query, logResults)
        function logResults(error, results) {
            if (error) {
                reject(error)
            }
            else {
                let url = []
                for (let i = 0; i < results.length; i++) {
                    url.push(decodeURIComponent(JSON.parse(`"${results[i].url}"`)))
                }
                let ress = ({
                    status: true,
                    creator: "Tanaka-Kun",
                    url
                    })
                resolve(ress)
            }
        }
    })

module.exports = gimg;