const fetch = require('node-fetch')
async function Random() {
    let c;
	let result = [
			'https://raw.githubusercontent.com/VideFrelan/words/main/dare.txt'
			
	]
    let a = result[Math.floor(Math.random() * result.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\r")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const perintah = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	})
})

module.exports = perintah
