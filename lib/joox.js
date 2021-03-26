const { default: Axios } = require("axios");
const { result } = require("lodash");

function joox(query) {
     return new Promise((resolve, reject) => {
          const time = Math.floor(new Date() / 1000)
          Axios.get('http://api.joox.com/web-fcgi-bin//web_search?lang=id&country=id&type=0&search_input=' + query + '&pn=1&sin=0&ein=29&_='+time)
          .then(({ data }) => {
               let promoses = []
               let ids = []
               data.itemlist.forEach(result => {
                    ids.push(result.songid)
               });
               for (let i = 0; i < data.itemlist.length; i++) {
                    const get = 'http://api.joox.com/web-fcgi-bin/web_get_songinfo?songid='+ids[i]
                    promoses.push(
                         Axios.get(get, { headers: {
                              Cookie:'wmid=142420656; user_type=1; country=id; session_key=2a5d97d05dc8fe238150184eaf3519ad;'
                         } })
                         .then(({ data }) => {
                              const res = JSON.parse(data.replace('MusicInfoCallback(','').replace('\n)',''))
                                   Promise.all(promoses).then(() => resolve({
                                            lagu: res.msong,
                                            album: res.malbum,
                                            penyanyi: res.msinger,
                                            publish: res.public_time,
                                            img: res.imgSrc,
                                            mp3: res.mp3Url
                                        }))
                         }).catch(reject)    
                    )
               }
          }).catch(reject)
     })
}

const jooxdl = (query) => new Promise((resolve, reject) => {
    joox(query).then(result => {
		resolve({
            status: true,
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = jooxdl