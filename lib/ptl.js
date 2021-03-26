const fetch = require('node-fetch')
async function Random() {
    let c;
	let url = [
			'https://raw.githubusercontent.com/fawwaz37/random/main/ptlmp4.txt'	
	]
    let a = url[Math.floor(Math.random() * url.length)]
    await fetch(a).then(res => res.text()).then(body => {
            let b = body.split("\n")
            c = b[Math.floor(Math.random() * b.length)]
        });
    return c;
}

const rptl = () => new Promise((resolve, reject) => {
    Random().then(url => {
		resolve({
			url
		})
	}).catch(err => { reject(err) })
})

module.exports = rptl