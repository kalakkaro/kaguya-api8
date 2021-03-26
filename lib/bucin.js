const fetch = require('node-fetch')
async function Random() {
    let c;
	let result = [
			'https://raw.githubusercontent.com/fawwaz37/random/main/cinta.txt'	
	]
    let a = result[Math.floor(Math.random() * result.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\n")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const rbucin = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = rbucin
