const express = require('express')
const app = express()
const PORT = process.env.PORT || 9531
const dir = process.cwd();
//let APIkey

//***********// NODE MODULE \\***********\\

const tinyurl = require("tinyurl-api")
const fs = require('fs')
const http = require("http");
const puppeteer = require("puppeteer")
const htmlToText = require('html-to-text')
const bodyParser = require('body-parser')
const cheerio = require('cheerio')
const { default: Axios } = require('axios')
const fetch = require('node-fetch')
const ig = require('instagram-scraping')
const scrapeYt = require("scrape-yt")
const request = require('request')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const TikTokScraper = require('tiktok-scraper')
const ytdl = require('ytdl-core')
const SoundCloud = require('soundcloud-scraper')
const client = new SoundCloud.Client()

//***********// END \\***********\\

//***********// OTHER \\***********\\

const KEY = 'Kagami'
const owner = 'Tanaka-kun'

const {
	IGStalk,
	KBBI,
	Lirik,
	Cuaca,
	IG,
	FB,
	IpLookup,
	jooxdl,
	Tiktok,
    Vokal,
	drakor,
    Headers,
    Covid,
    Simi,
    Github,
    Shortlink,
    WPUser,
    RandomP,
    RandomH,
	otakumeme,
    //Nhentai,
	Nhonline,
    Pornhub,
	perintah,
	kebenaran,
    Proxy,
    Hilih,
    Faker,
    Nulis,
    Cekresi,
	Gempa,
	qotaku,
	tebakgambar,
	caklontong,
	rhentai,
	gimg,
	qanimeg,
	//Chentai,
	rbucin,
	rfakta,
	rplt,
	wiki,
	motivasi,
	pinterest
} = require('./lib')

//***********// END \\***********\\

//var eventsRouter = require('./events-router');
//const { query, response } = require('express')
//const { result } = require('lodash')

app.use(logger('dev'));
app.use(express.static('client'));

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,recording-session");
    next();
});

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

const sleep = async (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

//***********// GENERATED KEY SC \\***********\\

/*SoundCloud.keygen().then(key => {
    app.listen(PORT, () => console.log(`👂 listening on ${PORT}`))
    console.log("🔑 key generated:", key)
    APIkey = key
})*/

//***********// END KEY SC \\***********\\

//***********// SOUNDCLOUD API \\***********\\
/**
     * Returns object from the soundcloud WidgetAPI (e.g. passing the URL of a playlist, retuns a playlist object)
     * @param {string} url full SoundCloud URL (e.g. https://soundcloud.com/shelter12kollektiv/dariush-mjs-kassette)
     * @returns {object} object from soundcloud
     */
 async function getJsonFromWidgetAPI(url) {
    try {
        const response = await fetch(
            "https://api-widget.soundcloud.com/resolve?url=" + url + "&format=json&client_id=v0C9kDEyULvWF0Ggb1vMnimjMDxtYX4B"
        )
        const data = await response.json()
        return data
}
    catch (e) {
        console.error(e)
    }
}
//***********// END SC API \\***********\\

//***********// START RANDOM \\***********\\
var len = 15
        var arr = '1234567890abcdefghijklmnopqrstuvwxyz'
        var random = '';

        for (var i = len; i > 0; i--) {
            random += arr[Math.floor(Math.random() * arr.length)];
        }

        var lenn = 5
        var randomlagi = '';

        for (var i = lenn; i > 0; i--) {
            randomlagi += arr[Math.floor(Math.random() * arr.length)];
        }

        var randomTextNumber = random+randomlagi+'---------Kagami'+'Shinomiya--Kaguya';
//***********// END RANDOM \\***********\\

app.get('/api', (req, res) => {
	return res.status(200)
	.send({
		message : "Ih... Nyasar Maau Ngapain Hayo...",
		creator : `${owner}`,
		info : "Keynya Bisa Tanya Ownernya :)"
	})
})

app.get('/api/nekopoi', (req, res) => {
	let q = req.query.q;
	if(!q || q == undefined)
	return res.send({
		status: false,
		message: "Require Parameter q"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
function foreach(arr, func){
    for(var i in arr){
    func(i, arr[i]);
  }
}
var url = "http://209.126.6.6/?s="+ q;
    request.get({
            headers: {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'},
            url: url,
        },
function(error, response, body){
	if (error) {
		console.error('Someting Error');
		return res.send({
			status: false,
			massage: "Maaf query Seperti Itu Tidak Ada Di Database"
		})
	  }
    let $ = cheerio.load(body);
    let neko = [];
    $('div[class="bsx"] > a').each(function (i, e) {
        neko[i] = $(this).attr("href")
    })
    var Nekolink = Math.floor(Math.random() * 10);
    var url = neko[Nekolink];
        request.get({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url: url
            },
function(error, response, body){
	if (error) {
		console.error('Someting Error');
		return res.send({
			status: false,
			massage: "Maaf query Seperti Itu Tidak Ada Di Database"
		})
	  }
    let $ = cheerio.load(body);
	let poi = []
	$('div[class="eplister"] > ul > li > a').each(function (i, e) {
        poi[i] = $(this).attr("href")
    })
	var url = poi[Math.floor(Math.random() * (poi.length))]
        request.get({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url: url
            },
function(error, response, body){
	if (error) {
		console.error('Someting Error');
		return res.send({
			status: false,
			massage: "Maaf query Seperti Itu Tidak Ada Di Database"
		})
	  }
    let $ = cheerio.load(body);
	const title = $('h1[class="entry-title"]').text()
	const jptitle = $('span[class="alter"]').text()
	const released = $('span[class="updated"]').text()
	const rating = $('div[class="rating"] > strong').text()
	const gendre = $('div[class="genxed"]').text()
	const gambar = htmlToText.fromString($('div[class="thumb"] > img').attr('src'), {
		noLinkBrackets: true,
		ignoreHref: true,
		ignoreImage:true
    })
	const link = htmlToText.fromString($('div[class="player-embed"] > iframe').attr('src'), {
		noLinkBrackets: true,
		ignoreHref: true,
		ignoreImage:true
    })
	fetch(encodeURI(`https://api.imgbb.com/1/upload?key=28dd175b555860ab2b5cdfedf125fe38&image=${gambar}&name=${randomTextNumber}`))
	.then(response => response.json())
	.then(data => {
		var image = data.data.url
    res.json({
	    title,
        jptitle,
		rating,
	    gendre,
	    released,
		image,
        link
	    })
      })
    })
  })
})
})

app.get('/api/komiku', (req, res) => {
	let q = req.query.query;
	if(!q || q == undefined)
	return res.send({
		status: false,
		message: "Require Parameter query"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
function foreach(arr, func){
    for(var i in arr){
    func(i, arr[i]);
  }
}
var url = "https://data1.komiku.id/cari/?post_type=manga&s="+ q;
    request.get({
            headers: {'User-Agent':'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_6) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36'},
            url: url,
        },
function(error, response, body){
	if (error) {
		console.error('Someting Error');
		return res.send({
			status: false,
			massage: "Maaf query Seperti Itu Tidak Ada Di Database"
		})
	  }
    let $ = cheerio.load(body);
    let komik = [];
    $('div[class="bgei"] > a').each(function (i, e) {
        komik[i] = $(this).attr("href")
    })
    var manga = Math.floor(Math.random() * 10);
    var ran = komik[manga];
	var url = "https://komiku.id"+ ran 
        request.get({
                headers: {'content-type' : 'application/x-www-form-urlencoded'},
                url: url
            },
function(error, response, body){
	if (error) {
		console.error('Someting Error');
		return res.send({
			status: false,
			massage: "Maaf query Seperti Itu Tidak Ada Di Database"
		})
	  }
    let $ = cheerio.load(body);
	let link = [];
	$('tbody[class="_3Rsjq"] > tr > td > a').each(function (i, e) {
        link[i] = $(this).attr("href")
    })
	const eps = [];
	for (let i = 0; i < link.length; i++) {
	eps.push("https://komiku.id"+ link[i])
	}
	const title = $('td[width="65%"]').text()
	const jenis = $('a[title="Baca Manga"] > b').text()
	const komikus = $('td[itemprop="creator"]').text()
	const gendre = $('li[class="genre"] > a').text()
	const thumb = htmlToText.fromString($('div[class="ims"] > img').attr('src'), {
		noLinkBrackets: true,
		ignoreHref: true,
		ignoreImage:true
    })
    res.json({
	    title,
		jenis,
		komikus,
		gendre,
		thumb,
		eps
	    })
      })
    })
  })

app.get("/api/cerpen", (req, res, next) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
    function foreach(arr, func){
    for(var i in arr){
    func(i, arr[i]);
  }
}
var items = ["cerpen-jepang", "cerpen-cinta" ,"cerpen-cinta-dalam-hati-terpendam","cerpen-cinta-islami"];
var kategori =  items[Math.floor(Math.random() * items.length)];
var hal = Math.floor(Math.random() * 30)
var url = "http://cerpenmu.com/category/"+ kategori +"/page/"+ hal;
    request.get({
                headers: {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'},
                url: url,
            },
function(error, response, body){
    let $ = cheerio.load(body)
    //var bodi = body.replace("}1", "}");
    //var d = JSON.parse(bodi);
    let cerpen = [];
    $('article[class="post"] > h2 > a').each(function (i, e) {
        cerpen[i] = $(this).attr("href")
    })
    var nomorlink = Math.floor(Math.random() * 10);
    var url = cerpen[nomorlink];
        request.get({
                    headers: {'content-type' : 'application/x-www-form-urlencoded'},
                    url: url
                },
function(error, response, body){
    let $ = cheerio.load(body);
    //var h  = $.html().replace(/<[^>]*>?/gm, '');
    const text = htmlToText.fromString($.html(), {
    noLinkBrackets: true,
    ignoreHref: true,
    ignoreImage:true
    })
	const isicerpennye = text.split("kamu dapat")[0].split("Kontak Kami")[1]
        res.json({
			status: true,
			creator: `${owner}`,
			result: {
				ceritanya: isicerpennye
			}
		    })
        })
    })
})

app.get("/api/cersex", (req, res, next) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
    function foreach(arr, func){
    for(var i in arr){
    func(i, arr[i]);
  }
}
var items = ["cerita-dewasa-perawan", "cerita-dewasa-abg" ,"cerita-dewasa-selingkuh","cerita-dewasa-tante"];
var kategori =  items[Math.floor(Math.random() * items.length)];
var hal = Math.floor(Math.random() * 5)
var url = "http://162.213.249.120/category/"+ kategori +"/page/"+ hal;
    request.get({
                headers: {'User-Agent':'Mozilla/5.0 (X11; Linux x86_64; rv:74.0) Gecko/20100101 Firefox/74.0'},
                url: url,
            },
function(error, response, body){
    let $ = cheerio.load(body)
    //var bodi = body.replace("}1", "}");
    //var d = JSON.parse(bodi);
    let cerpen = [];
    $('a[class="sticky-tag"]').each(function (i, e) {
        cerpen[i] = $(this).attr("href")
    })
    var nomorlink = Math.floor(Math.random() * 10);
    var url = cerpen[nomorlink];
        request.get({
                    headers: {'content-type' : 'application/x-www-form-urlencoded'},
                    url: url
                },
function(error, response, body){
    let $ = cheerio.load(body);
	const title = $('h1[class="post-title"]').text()
	const image = htmlToText.fromString($('figure[class="post-image"] > img').attr('src'), {
	noLinkBrackets: true,
	ignoreHref: true,
	ignoreImage:true
	})
	const post = $('span[class="post-meta-date"]').text().replace(/on /gi, '')
	const category = $('p[class="post-categories"]').text()
    const text = htmlToText.fromString($('div[class="post-content entry-content"]').html(), {
    noLinkBrackets: true,
    ignoreHref: true,
    ignoreImage:true
    })
	const result = text
        res.json({
			status: true,
			creator: `${owner}`,
			title,
			image,
			post,
			category,
			result
		    })
        })
    })
})

app.get('/api/igs', (req, res) => {
	var url = req.query.u || req.query.username
	if(!url || url == undefined)
		return res.status(200)
		.send({
			status: false,
			message : "Masukkan parameter username atau u"
		})
		let key = req.query.key;
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.status(500).send({
			status: false,
			message: "the key is invalid"
		})
	IGStalk(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

/*app.get('/api/igs', (req, res) => {
	var username = req.query.u || req.query.username
	if(!username || username == undefined)
	return res.send({
		status: false,
		message : "Masukkan parameter username atau u"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
	  status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
	var ig = require('instagram-scraping');
	ig.scrapeUserPage(username).then(result => {
	  res.send(result);
	})
})*/

app.get('/api/kbbi', (req, res) => {
	const kata = req.query.text || req.query.kata
	if(!kata || kata == undefined)
	  return res.status(200)
		.send({
			status: false,
			message : 'Masukkan Parameter kata atau text.'
			})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	KBBI(kata)
		.then(data => {
			res.send(data)
		})
		.catch(err => {
			res.send(err)
		})
})

app.get('/api/lirik', (req, res) => {
	var musik = req.query.musik || req.query.lirik
	if(!musik || musik == undefined)
	  return res.status(200)
		.send({
        status: false,
        message : 'Tolong masukkan parameter lagu atau lirik'
      })
	  let key = req.query.key;
	  if(!key || key == undefined)
	  return res.status(500).send({
		  status: false,
		  message: "Require Parameter key"
	  })
	  if (key !== `${KEY}`) return res.status(500).send({
		  status: false,
		  message: "the key is invalid"
	  })
	Lirik(musik)
			.then(data => {
				res.send(data)
			})
			.catch(err  => {
				res.send({
					status: false,
					massage: 'Mungkin Lagi Di Perbaiki'
				})
			})
})

app.get('/api/ytmp4', async (req, res) => {
	let playlistregex = /\/playlist\?list=/;
	let url = req.query.url;
	let key = req.query.key;
	if(!url || url == undefined)
	return res.status(500).json({
		status: false,
		creator: `${owner}`,
		message: 'masukan parameter url'
	})
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	const short = await tinyurl(`http://kagami-api.herokuapp.com/api/ytv?url=${url}`)
	try {
	  if (playlistregex.test(url)) {
		ytpl(url)
		  .then(info => info.items)
		  .then(info => {
			let video
			for (video of info) {
			res.json({
				result: {
					status: true,
					title: video.title,
					id: video.id,
					duration: video.duration
			      }
				})
			   }
			})
		  .catch(err => { 
			res.statusMessage = "can't download video(s) data. probably wrong url : "+err
			res.sendStatus(400)
			res.status(400).send({
				error: "can't download video(s) data. probably wrong url : "+err
			  })
		  })
	  } else {
		ytdl.getInfo(url)
		.then(info => {
			let duration = (info.lengthSeconds/60).toString()
			duration = duration.substring(0, duration.indexOf('.'))+':'+Math.floor((info.lengthSeconds%60).toString())
      /*const max = info
	  .videoDetails
	  .thumbnail
	  .thumbnails.reduce((prev, current) => ((prev.height > current.height) ? prev : current)).url;*/
				 res.json({
					result: {
						status: true,
						id: info.videoDetails.videoId.replace(/\n/gi, ''),
						title: info.videoDetails.title.replace(/\n/gi, ''),
						length: info.videoDetails.lengthSeconds.replace(/\n/gi, ''),
						view: info.videoDetails.viewCount.replace(/\n/gi, ''),
						date: info.videoDetails.publishDate.replace(/\n/gi, ''),
						thumbnail: `https://i.ytimg.com/vi/${info.videoDetails.videoId.replace(/\n/gi, '')}/hqdefault.jpg`,
						link: short
		     	 }
			 })
		  })
		  .catch(err => { 
			res.statusMessage = "can't download video(s) data. probably wrong url : "+err
			res.sendStatus(400)
			res.status(400).send({
				error: "can't download video(s) data. probably wrong url : "+err
			  })
		  })
	  }
	} catch(err) {
	  res.statusMessage = "can't download video(s) data. probably wrong url : "+err
	  res.sendStatus(400)
	  res.status(400).send({
		error: "can't download video(s) data. probably wrong url : "+err
	  })
	}
  })

app.get('/api/ytmp3', async (req, res) => {
	let playlistregex = /\/playlist\?list=/;
	let url = req.query.url;
	let key = req.query.key;
	if(!url || url == undefined)
	return res.status(500).json({
		status: false,
		creator: `${owner}`,
		message: 'masukan parameter url'
	})
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	const short = await tinyurl(`http://kagami-api.herokuapp.com/api/yta?url=${url}`)
	try {
	  if (playlistregex.test(url)) {
		ytpl(url)
		  .then(info => info.items)
		  .then(info => {
			let video
			for (video of info) {
			res.json({
				result: {
					status: true,
					title: video.title,
					id: video.id,
					duration: video.duration
			      }
				})
			   }
			})
		  .catch(err => { 
			res.statusMessage = "can't download video(s) data. probably wrong url : "+err
			res.sendStatus(400)
			res.status(400).send({
				error: "can't download video(s) data. probably wrong url : "+err
			  })
		  })
	  } else {
		ytdl.getInfo(url)
		.then(info => {
			let duration = (info.lengthSeconds/60).toString()
			duration = duration.substring(0, duration.indexOf('.'))+':'+Math.floor((info.lengthSeconds%60).toString())
      /*const max = info
	  .videoDetails
	  .thumbnail
	  .thumbnails.reduce((prev, current) => ((prev.height > current.height) ? prev : current)).url;*/
				 res.json({
					result: {
						status: true,
						id: info.videoDetails.videoId.replace(/\n/gi, ''),
						title: info.videoDetails.title.replace(/\n/gi, ''),
						length: info.videoDetails.lengthSeconds.replace(/\n/gi, ''),
						view: info.videoDetails.viewCount.replace(/\n/gi, ''),
						date: info.videoDetails.publishDate.replace(/\n/gi, ''),
						thumbnail: `https://i.ytimg.com/vi/${info.videoDetails.videoId.replace(/\n/gi, '')}/hqdefault.jpg`,
						link: short
		     	 }
			 })
		  })
		  .catch(err => { 
			res.statusMessage = "can't download video(s) data. probably wrong url : "+err
			res.sendStatus(400)
			res.status(400).send({
				error: "can't download video(s) data. probably wrong url : "+err
			  })
		  })
	  }
	} catch(err) {
	  res.statusMessage = "can't download video(s) data. probably wrong url : "+err
	  res.sendStatus(400)
	  res.status(400).send({
		error: "can't download video(s) data. probably wrong url : "+err
	  })
	}
  })

app.get('/api/yta', (req, res) => {
	var id = req.query.url || req.query.link
  if(id.includes("youtube")){
		urls = id
		var r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    	r = urls.match(rx)
		id = r[1]
  }
	res.header('Content-Disposition', `attachment; filename="audio.mp3"`)
	ytdl(id, {
      format: 'mp3',
      filter: 'audioonly'
     }).pipe(res)
})

app.get('/api/ytv', (req, res) => {
	var id = req.query.url || req.query.link
  if(id.includes("youtube")){
		urls = id
		var r, rx = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|\&v(?:i)?=))([^#\&\?]*).*/
    	r = urls.match(rx)
		id = r[1]
  }
	res.header('Content-Disposition', `attachment; filename="video.mp4"`)
	ytdl(id, {
      format: 'mp4',
     }).pipe(res)
})

app.get('/api/jadwaltv', async (req, res) => {
	var channel = req.query.channel
	if(!channel || channel == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter channel"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	try {
		Axios.get('https://www.jadwaltv.net/channel/' + channel)
			.then(({ data }) => {
				const $ = cheerio.load(data)
				const isitable1 = []
				const isitable2 = []
				$('div > div > table:nth-child(3) > tbody > tr').each(function(i, result) {
					isitable1.push({
						jam: result.children[0].children[0].data,
						tayang: result.children[1].children[0].data
					})
				})
				$('div > div > table:nth-child(5) > tbody > tr').each(function(i, result) {
					isitable2.push({
						jam: result.children[0].children[0].data,
						tayang: result.children[1].children[0].data
					})
				})
				const semuatable = []
				for (let i = 0; i < isitable1.length; i++) {
					semuatable.push(isitable1[i])                    
				}
				for (let i = 0; i < isitable2.length; i++) {
					semuatable.push(isitable2[i])
				}	
				res.json({
					result:semuatable
				})
		    })
			.catch(async (err) => {
				console.error(err)
				res.send({
					error: "Maaf Channel Itu Tidak Ada"
				  })
			})
		} catch (e) {
			res.statusMessage = "Maaf Channel Itu Tidak Ada"
			res.sendStatus(400)
			res.status(400).send({
				error: "Maaf Channel Itu Tidak Ada"+e
			  })
		}
    })

app.get('/api/infonpm', async (req, res, next) => {
	var query = req.query.query
	if(!query || query == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter query"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
   fetch(encodeURI(`https://registry.npmjs.org/${query}`))
	.then(response => response.json())
	.then(data => {
	var result = data;
		 res.json({
			 status : true,
			 creator : `${owner}`,
			 result
		 })
	 })
	 .catch(e => {
		 res.json({message: 'Mungkin Lagi Di Perbaiki'})
})
})

app.get('/api/tiktoks', async (req, res, next) => {
	var username = req.query.username
	if(!username || username == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter username"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    TikTokScraper.getUserProfileInfo(username)
        .then(user => {
            res.json({
                status : true,
                creator : `${owner}`,
                result : user
            })
        })
        .catch(e => {
             res.json({
                 status : false,
                 creator : `${owner}`,
                 message : "error, mungkin username anda tidak valid"
             })
         })
})

app.get('/api/artimimpi', async (req, res) => {
	var query = req.query.query
	if(!query || query == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter query"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
		let katakunci = query
		Axios.get('https://www.primbon.com/tafsir_mimpi.php?mimpi=' + katakunci + '&submit=+Submit+')
          .then(({ data }) => {
          const $ = cheerio.load(data)
          const detect = $('#body > font > i').text()
          const isAva = /Tidak ditemukan/g.test(detect) ? false : true
          if (isAva) {
              const isi = $('#body').text().split(`Hasil pencarian untuk kata kunci: ${katakunci}`)[1].replace(/\n\n\n\n\n\n\n\n\n/gi,'\n')
              res.json({
                   status: true,
                   result: isi
			    })
			} else {
			    res.send ({
				    status: false,
				    result: `Data tidak ditemukan! Gunakan kata kunci.`
				})
			}
	    })
    })

app.get('/api/artinama', async (req, res) => {
	var nama = req.query.nama
	if(!nama || nama == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter nama"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	try {
		let name = nama
		Axios.get(`https://www.primbon.com/arti_nama.php?nama1=${name}&proses=+Submit%21+`)
		.then(({ data }) => {
			 const $ = cheerio.load(data)
			 const result = $('#body').text().split('Nama:')[0].replace(/ARTI NAMA|\n/gi, '')
		res.json({
			status: true,
			result:{
				result
	   		    }
		    })
	    })
	} catch (err) {
		res.statusMessage = err
		res.sendStatus(400)
		res.status(400).send({
			error: "Maaf Ada Yang Salah"
		})
	}
})

app.get('/api/play', async (req, res) => {
	var id = req.query.query
	if(!id || id == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter query"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	try {
		let argssearch = id;
		let results = await scrapeYt.search(argssearch);
		let ytsa = await tinyurl(`http://kagami-api.herokuapp.com/api/ytv?url=https://youtu.be/${results[0].id}`)
		let ytsv = await tinyurl(`http://kagami-api.herokuapp.com//api/ytv?url=https://youtu.be/${results[0].id}`)
		res.json({
			status: true,
			result:{
			id: results[0].id,
			title: results[0].title,
			duration: results[0].duration,
			thumbnail: results[0].thumbnail,
			upload: results[0].uploadDate,
			views: results[0].viewCount,
			video_url: `https://youtu.be/${results[0].id}`,
			channel_name: results[0].channel.name,
			channel_id: results[0].channel.id,
			channel_url: `https://www.youtube.com/channel/${results[0].channel.id}`,
			yta: ytsa,
			ytv: ytsv
			}
		})
	} catch (err) {
		res.statusMessage = err
		res.sendStatus(400)
		res.status(400).send({
			error: "Maaf Ada Yang Salah"
		})
	}
})

app.get('/api/drakors', (req, res) => {
	var query = req.query.query
	if(!query || query == undefined)
	return res.send({
		status: false,
		message :"Require Prameter query"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	drakor(query)
		.then(data => {
			res.send(data)
		})
    	.catch(err => {
		res.send(err)
	})
})

app.get('/api/cuaca', (req, res) => {
	var lokasi = req.query.kota
	if(!lokasi || lokasi == undefined)
	return res.send({
		status: false,
		message :"Kota Tidak Di Temukan"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	Cuaca(lokasi)
		.then(data => {
			res.send(data)
		})
    	.catch(err => {
		res.send(err)
	})
})

app.get('/api/ig', (req, res) => {
	var url = req.query.url || req.query.link
	if(!url || url == undefined)
		return res.status(200)
		.send({
			status: false,
			message : "Masukkan parameter url atau link"
		})
		let key = req.query.key;
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.status(500).send({
			status: false,
			message: "the key is invalid"
		})
	IG(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/fb', (req,res) => {
	var url = req.query.url || req.query.link
	if(!url || url == undefined)
		return res.status(200)
		.send({
			status: false,
			message : "Masukkan parameter url atau link"
		})
		let key = req.query.key;
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.status(500).send({
			status: false,
			message: "the key is invalid"
		})
	FB(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/iplookup', (req, res) => {
    const ip = req.query.ip
    if (!ip) {
      res.status(200)
			.send({
        status: false,
        message : 'Masukkan parameter ip.'
      })
	  let key = req.query.key;
	  if(!key || key == undefined)
	  return res.send({
		  status: false,
		  message: "Require Parameter key"
	  })
	  if (key !== `${KEY}`) return res.status(500).send({
		  status: false,
		  message: "the key is invalid"
	  })
    } else {
      IpLookup(ip)
      	.then(data => {
          res.send(data)
        }).catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/tiktok', (req, res) => {
	let url = req.query.url
	if(!url || url == undefined)
	return res.send({
        status: false,
        message : 'Masukkan parameter url.'
    })
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    try {
		async function getVideo(url) {
			const browser = await puppeteer.launch({
				headless: true,
				args: ['--no-sandbox', '--disable-setuid-sandbox']
			});
			const page = await browser.newPage();
			await page.goto('https://snaptik.app/');
		
			await page.type('#url', `${url}`);
			await page.click('#send', { delay: 300 });
		
			await page.waitForSelector('#download-block > div > a:nth-child(3)', {delay: 300});
			let video = await page.$eval("#download-block > div > a:nth-child(3)", (element) => {
				return element.getAttribute("href");
			});
			let image = await page.$eval("#div_download > section > div > div > div > article > div.zhay-left.left > img", (element) => {
				return element.getAttribute("src");
			});
			let info = await page.$eval('#div_download > section > div > div > div > article > div.zhay-middle.center > p:nth-child(2) > span', el => el.innerText);
			let title = await page.$eval('#div_download > section > div > div > div > article > div.zhay-middle.center > h1 > a', el => el.innerText);
			let date = await page.$eval('#div_download > section > div > div > div > article > div.zhay-middle.center > p:nth-child(3) > b', el => el.innerText);
			browser.close();
			return { title, date, info, image, video }
		}
		getVideo(url).then(result => {
			res.json({
				status: true,
				creator: `${owner}`,
				result
			})
		})
    } catch (err) {
	    res.statusMessage = err
	    res.sendStatus(400)
	    res.status(400).send({
		    status: false,
		    error: "Maaf Ada Yang Salah"
	    })
    }
})

/*app.get('/api/webptomp4', (req, res) => {
	let url = req.query.url
	if(!url || url == undefined)
	return res.send({
        status: false,
        message : 'Masukkan parameter url.'
    })
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
function komiku(QUERY) {
	return new Promise((resolve, reject) => {
		fetch('https://komiku.id/cari/?post_type=manga&s='+ encodeURIComponent(QUERY) , {
			method: 'get'
		})
		.then(res => res.text())
		.then(res => {
			const soup = cheerio.load(res)
			const IndTitle = [];
			const thumb = [];
			const hasil = [];
			soup('div.daftar').each(function(a, b) {
				soup(b).find('span.judul2').each(function(c, d) {
					IndTitle.push(soup(d).text())
				})
				soup('div.bgei').each(function(c, d) {
					soup(d).find('a').each(function(e, f) {
						soup(f).find('img').each(function(g, h) {
							thumb.push(soup(h).attr('data-src'))
						})
					})
				})
			})
			for (let i = 0; i < IndTitle.length; i++) {
				hasil.push({
					Judul: IndTitle[i],
					Gambar: thumb[i]
				})
			}
			resolve(hasil)
		})
		.catch(reject)
	})
}

komiku(url)
.then(result => {
	res.json({
		status: true,
		creator: `${owner}`,
		result
	})
})
.catch(err => {
    res.statusMessage = err
    res.sendStatus(400)
    res.send({
	    status: false,
	    error: "Maaf Ada Yang Salah"
        })
    })
})*/

app.get('/api/scdl', (req, res) => {
	let url = req.query.url
	if(!url || url == undefined)
	return res.send({
		status: false,
		  message: "Require Parameter url"
	  })
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
	  status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
    getJsonFromWidgetAPI(url)
	.then(async (song) => {
        res.json({
			status: true,
			creator: `${owner}`,
			result:{
				title: song.title,
				duration: song.duration,
				likesCount: song.likes_count,
				publishDate: song.created_at,
				last_modified: song.last_modified,
				desc: song.description,
				image: song.artwork_url,
				link: song.permalink_url,
				download: 'http://kagami-api.herokuapp.com/api/scdlmp3?url=' + song.permalink_url
			}
		})
    })
	.catch(err => {
		res.send({
			status: false,
			error : "Maaf Url Anda Tidak Valid"
	    })
    })
})

app.get('/api/scdlmp3', (req, res) => {
    client.getSongInfo(req.query.url)
        .then(async (song) => {
            const stream = await song.downloadProgressive()
            res.set('content-disposition', `attachment filename="${song.title}.mp3"`)
            stream.pipe(res)
        })
        .catch(console.error)
})

app.get('/api/scs', (req, res) => {
	let name = req.query.username
	if(!name || name == undefined)
	return res.send({
		status: false,
		  message: "Require Parameter username"
	  })
	let key = req.query.key;
	if(!key || key == undefined)
	return res.send({
	  status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.send({
		status: false,
		message: "the key is invalid"
	})
	client.getUser(name)
	.then(async (playlist) => {
            res.json({
				status: true,
				creator: `${owner}`,
				result:{
					username: playlist.username,
					name: playlist.name,
					created: playlist.createdAt,
					followers: playlist.followers,
					following: playlist.following,
					likesCount: playlist.likesCount,
					tracksCount: playlist.tracksCount,
					verified: playlist.verified,
					avatar: playlist.avatarURL,
					banner: playlist.bannerURL,
					link: playlist.profile
				}
			})
        })
		.catch(err => {
			res.send({
				status: false,
				error : "Username Tidak Ditemukan"
		})
	})
})

app.get('/api/vokal', (req, res) => {
    const vokal = req.query.vokal
    const teks = req.query.teks
    if (!vokal && !teks) {
      res.send({
        status : 400,
        message : 'Masukkan parameter vokal dan teks.'
      })
	  let key = req.query.key;
	  if(!key || key == undefined)
	  return res.send({
		status: false,
		  message: "Require Parameter key"
	  })
	  if (key !== `${KEY}`) return res.send({
		  status: false,
		  message: "the key is invalid"
	  })
    } else {
      Vokal(vokal, teks)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/http-headers', (req, res) => {
    const url = req.query.url || req.query.link
    if (!url) {
      res.status(400).send({
        status : 400,
        message : 'Masukkan parameter url atau link.'
      })
	  let key = req.query.key;
	  if(!key || key == undefined)
	  return res.status(500).send({
		  status: false,
		  message: "Require Parameter key"
	  })
	  if (key !== `${KEY}`) return res.status(500).send({
		  status: false,
		  message: "the key is invalid"
	  })
    } else {
      Headers(url)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/covid', (req, res) => {
	var negara = req.query.negara;
	if( !negara || negara == undefined)
		return res.status(400)
    .send({
			status : 400,
			message : "Masukkan parameter negara"
		})
		let key = req.query.key;
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.status(500).send({
			status: false,
			message: "the key is invalid"
		})
	Covid(negara)
		.then(data => {
			res.send(data);
		})
		.catch(err => {
			res.send(err);
		})
})

app.get('/api/simi', (req, res) => {
    const teks = req.query.teks || req.query.text
    if (!teks) {
      res.status(400)
      .send({
        status : 400,
        message : 'Masukkan parameter teks atau text.'
      })
	  let key = req.query.key;
	  if(!key || key == undefined)
	  return res.status(500).send({
		  status: false,
		  message: "Require Parameter key"
	  })
	  if (key !== `${KEY}`) return res.status(500).send({
		  status: false,
		  message: "the key is invalid"
	  })
    } else {
      Simi(teks)
        .then(data => {
          res.send(data)
        })
        .catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/github', (req, res) => {
    const user = req.query.user || req.query.u
    if (!user) {
      res.status(200)
			.send({
        code : 200,
        message : 'Masukkan parameter user.'
      })
	  let key = req.query.key;
	  if(!key || key == undefined)
	  return res.status(500).send({
		  status: false,
		  message: "Require Parameter key"
	  })
	  if (key !== `${KEY}`) return res.status(500).send({
		  status: false,
		  message: "the key is invalid"
	  })
    } else {
      Github(user)
      	.then(data => {
          res.send(data)
        }).catch(err => {
          res.send(err)
        })
    }
})

app.get('/api/shortlink', (req, res) => {
	const url = req.query.url || req.query.link;
	if(!url || url == undefined)
	return res.send({
        code : 400,
        message : 'Masukkan parameter url atau link.'
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	Shortlink(url)
			.then(ress => {
				res.send({
					url: ress
				})
			})
			.catch(err => {
				res.send(err)
			})
})

app.get('/api/wpusers', (req, res) => {
	var url = req.query.link || req.query.url
	if(!url || url == undefined)
		return res.status(200)
		.send({
			code : 200,
			message : "Masukkan parameter url"
		})
		let key = req.query.key;
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.status(500).send({
			status: false,
			message: "the key is invalid"
		})
	WPUser(url)
	.then(data => {
		res.send(data)
	}).catch(err => {
		res.send(err)
	})
})

app.get('/api/ph', (req, res) => {
	const link = req.query.l || req.query.link
	const pixel = req.query.p
	if(!link || link == undefined)
		return res.send({
            code : 200,
            message : 'Input parameter link /api/ l.'
        })
		let key = req.query.key;
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.status(500).send({
			status: false,
			message: "the key is invalid"
		})
	if(!p || p == undefined)
		return res.send({
            status: false,
            message : 'Input parameter p (Valid PIXEL 240P, 480P, 720P).'
        })
	Pornhub(link, pixel)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send('400\nInternal Server Error');
				})
})

app.get('/api/nulis', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code : 400,
        message : 'Pleasee input parameter kata.'
      })
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    } else {
        Nulis(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

app.get('/api/hilih', (req, res) => {
    const kata = req.query.kata
    if (!kata) {
      res.send({
        code : 400,
        message : 'Pleasee input parameter kata.'
      })
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    } else {
        Hilih(kata)
            .then(data => {
                res.send(data)
            })
            .catch(err => {
                res.send(err)
            })
    }
})

app.get('/api/cekresi', (req, res) => {
	var ekspedisi = req.query.eks;
	var no = req.query.no;
	if(!ekspedisi || ekspedisi == undefined)
		return res.send({
			code : 400,
			message : 'eks params not found'
		})
	if(!no || no == undefined)
		return res.send({
			code : 400,
			message : "no params not found"
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	Cekresi(ekspedisi, no)
				.then(data => {
					res.send(data);
				})
				.catch(err => {
					res.send(err)
				})
})

app.get('/api/joox', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter query"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	jooxdl(query)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})

app.get('/api/wiki', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined)
	return res.status(500).send({
			status: false,
			message: "Require Parameter query"
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	wiki(query)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})

app.get('/api/nhentai', (req, res) => {
	let id = req.query.id;
	if(!id || id == undefined)
	return res.status(500).send({
			status: false,
			message: "Require Parameter id"
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	if (isNaN(Number(id))) 
	return res.send({
		Pesan : "Code Harus Berupa Angka"
	})
	if (id.length > 6) 
	return res.send({
		Pesan : "Maximal 6 Angka"
	})
	fetch(encodeURI(`https://cin.cin.pw/dl/${id}`))
    .then(response => response.json())
    .then(data => {
        var a = data.data.pages
        var b = data.data.title
        var c = data.data.nativeTitle
        var d = data.data.details.tags
        var e = data.data.details.artists
        var f = data.data.details.languages
        var g = data.data.details.categories
        var h = data.data.details.uploaded
        var linkz = data.data.link
        var j = data.id
		var k = data.data.details.parodies
		var l = data.data.details.pages
		//var n = data.pages
		//var o = n.toString()
		//var p = o.replace(/%3A/g,':')
		//var q = p.replace(/%2F%2F/g,'//')
		//var r = q.replace(/%3A%2F%2F|%2F|%2F|%2F1/g,'/')
		//var s = r.replace(/cin.cin.pw\//g,'external-content.duckduckgo.com/iu/?u=')
        res.json({
            id: j,
            judul: b,
            native_title: c,
			parodies: k,
            tags: d,
            character: e,
            bahasa: f,
            kategori: g,
            uploaded: h,
			link: linkz,
			page: l,
			pages: a
			//image: s
        })
    })
})

app.get('/api/nhpdf', (req, res) => {
	let id = req.query.id;
	if(!id || id == undefined)
	return res.status(500).send({
			status: false,
			message: "Require Parameter id"
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	if (isNaN(Number(id))) 
	return res.send({
		Pesan : "Code Harus Berupa Angka"
	})
	if (id.length > 6) 
	return res.send({
		Pesan : "Maximal 6 Angka"
	})
	try {
		(async () => {
		const browser = await puppeteer.launch();
		const page = await browser.newPage();
		await page.goto('https://cin.cin.pw/v/' + id, {
		  waitUntil: 'networkidle2',
		})
		.then(async () => {
		const filename = 'NHENTAI'
		//var filePath = './media/NHENTAI.pdf'
		await page.pdf({ path: dir + `/media/${filename}.pdf`, format: 'a4' })
		//console.log(`SUKSES MENGIRIM FILE DENGAN NAMA : ${filename}`)
		res.sendFile(dir + `/media/${filename}.pdf`)
		//await sleep(1009)
		//console.log(`SUKSES DELETE FILE : ${filePath}`)
		//fs.unlinkSync(filePath)
		await browser.close();
	  })
})();
} catch (e) {
	console.log('Ada Yang Error')
		res.send({
			status: false,
			massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
	    })
	}
})

//app.get('/test', (req, res) => {
	//res.download({'http://zekais-api.herokuapp.com/foliokanan?text=zekais'})
	//res.sendFile(dir + '/media/Nhentai.pdf')
	/*fetch(encodeURI(`https://cin.cin.pw/dl/340863`))
	.then(response => response.json())
	.then(data => {
	  var str = new String (data.pages)
	  var b = str.toString()
	  var c = b.replace(/%3A%2F%2F/gi,'//')
	  var d = c.replace(/%3A%2F%2F|%2F|%2F|%2F1/gi,'/')
	  var e = d.replace(/(https):\/\/cin.cin.pw\//g,'https://external-content.duckduckgo.com/iu/?u=')
	})*/
//})

app.get('/api/gimgs', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined)
	return res.status(500).send({
			status: false,
			message: "Require Parameter query"
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	gimg(query)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})

app.get('/api/pinterest', (req, res) => {
	let query = req.query.query;
	if(!query || query == undefined)
	return res.status(500).send({
			status: false,
			message: "Require Parameter query"
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	pinterest(query)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})

/*app.get('/api/nhentai2', (req, res) => {
	let code = req.query.code;
	if(!code || code == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter code"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	if (isNaN(Number(code))) 
	return res.send({
		Pesan : "Code Harus Berupa Angka"
	})
	if (code.length > 6) 
	return res.send({
		Pesan : "Maximal 6 Angka"
	})
	Chentai(code)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})*/

app.get('/api/nhread', (req, res) => {
	let id = req.query.id;
	if(!id || id == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter id"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	if (isNaN(Number(id))) 
	return res.send({
		Pesan : "Code Harus Berupa Angka"
	})
	if (id.length > 6) 
	return res.send({
		Pesan : "Maximal 6 Angka"
	})
	Nhonline(id)
		 .then(url => {
	     res.send(url);
	 })
	 .catch(err => {
		res.send(err);
	})
})

/*app.get('/api/randomh', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	RandomH()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})*/

app.get('/api/fakeid', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    Faker()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
    })

app.get('/api/randomp', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	RandomP()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/otakumeme', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	otakumeme()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/qanimegr', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	qanimeg()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/qanime', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	qotaku()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/bucin', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	rbucin()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/motivasi', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	motivasi()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/fakta', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	rfakta()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/truth', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	kebenaran()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/dare', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	perintah()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/ptlmp4', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	rplt()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/tebakgambar', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	tebakgambar()
			.then(ress => {
				res.json(ress)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/caklontong', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	caklontong()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/rnekopoi', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	rhentai()
			.then(url => {
				res.send(url)
			})
			.catch(err => {
				res.send(err);
			})
})

app.get('/api/proxy', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    Proxy()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.send(err)
        })
})

app.get('/api/gempa', (req, res) => {
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	Gempa().then(data => {
		res.send(data);
	}).catch(err => {
		res.send(err);
	})
})

//app.get('/api/nekopoi', (req, res) => {
//	res.send("Nekopoi Discontinued, Im Sorry, For Source See On /lib/utils/nekopoi.js, its work with local scraping");
//})

app.get('/api/photooxylist', (req, res) => {
	res.json({
		status:true,
		creator: `${owner}`,
		list: 'glitch dan google-suggestion'
	})
})

app.get('/api/photooxy', async (req, res, next) => {
    var key = req.query.key,
	    theme = req.query.theme,
        text = req.query.text,
        text2 = req.query.text2,
        text3 = req.query.text3
		if (!theme) return res.json({
			status: false,
			creator: `${owner}`,
			message: 'masukan parameter theme'
		})
        if (theme != 'glitch' && theme != 'google-suggestion') return res.json({
			status: false,
			creator: `${owner}`,
			message: 'theme tidak tersedia silahkan masukkan /api/photooxylist atau baca documentasi'
		})
        if (!text) return res.json({
			status: false,
			creator: `${owner}`,
			message: 'masukan parameter text'
		})
		if(!key || key == undefined)
		return res.status(500).send({
			status: false,
			message: "Require Parameter key"
		})
		if (key !== `${KEY}`) return res.json({
			status: false,
			message: "the key is invalid"
		})
        if (theme == 'glitch') {
        	if (!text2) return res.json({
				status: false,
				creator: `${owner}`,
				message: 'masukan parameter text2'
			})
            try {
            request.post({
                url: "https://photooxy.com/logo-and-text-effects/make-tik-tok-text-effect-375.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?key=28dd175b555860ab2b5cdfedf125fe38&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${owner}`,
                                            result:{
                                            	theme: "Glitch",
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
                } catch (e) {
                	console.log(e);
                res.json({
					message: "Maaf Mungkin Api Lagi Error Mungkin Lagi Di Perbaiki"
				})
                }
    } else if (theme == 'google-suggestion') {
        if (!text2) return res.json({
			status: false,
			creator: `${owner}`,
			message: 'masukan parameter text2'
		})
        if (!text3) return res.json({
			status: false,
			creator: `${owner}`,
			message: 'masukan parameter text3'
		})
            request.post({
                url: "https://photooxy.com/other-design/make-google-suggestion-photos-238.html",
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: `text_1=${text}&text_2=${text2}&text_3=${text3}&login=OK`,
                }, (e,r,b) => {
                    if (!e) {
                        $ = cheerio.load(b)
                        $(".thumbnail").find("img").each(function() {
                            h = $(this).attr("src")
                            var result = "https://photooxy.com/"+h
                            fetch(encodeURI(`https://api.imgbb.com/1/upload?key=28dd175b555860ab2b5cdfedf125fe38&image=${result}&name=${randomTextNumber}`))
                                .then(response => response.json())
                                .then(data => {
                                    var urlnya = data.data.url,
                                        delete_url = data.data.delete_url;
                                        res.json({
                                            status : true,
                                            creator : `${owner}`,
                                            result:{
                                            	theme: "Google Suggestion",
                                                url:urlnya,
                                                delete_url: delete_url,
                                                info: 'url akan hilang setelah 2 menit'
                                            }
                                        })
                                })
                        })
                    }
                }) 
        } else {
            res.json({
				status: false,
				creator: `${creator}`,
				message: 'mungkin sedang dilakukan perbaikan'
			})
        }
})

app.get('/api/textprolist', async (req, res) => {
	res.send({
		list_theme: "blackpink, pornhub, neon-light, blood, horror, neon, text3d, thunder, green-neon, glow-text, break-wall"
	})
})

app.get('/api/textpro', async (req, res) => {
	var text = req.query.text
	var text2 = req.query.text2
	var theme = req.query.theme
	if (!theme) return res.json({
		status: false,
		creator: `${owner}`,
		message: 'masukan parameter theme'
	})
	if ( theme != 'blackpink' 
	&& theme != 'pornhub' 
	&& theme != 'neon-light' 
	&& theme != 'blood' 
	&& theme != 'neon' 
	&& theme != 'text3d' 
	&& theme != 'thunder' 
	&& theme != 'horror' 
	&& theme != 'green-neon' 
	&& theme != 'glow-text' 
	&& theme != 'break-wall'
	)
	return res.json({
		status: false,
		creator: `${owner}`,
		message: 'theme tidak tersedia silahkan liat di /textprolist untuk melihat theme yang tersedia'
	})
	if(!text || text == undefined)
	return res.status(200)
	.send({
		status: false,
		message : "Masukkan parameter text"
	})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
	if (theme == 'blackpink') {
	try {
	(async () => {
	  const browser = await puppeteer.launch({
		headless: false,
	  });
	  const page = await browser.newPage();
	
		await page.goto('https://textpro.me/create-blackpink-logo-style-online-1001.html', {
			waitUntil: "networkidle2"
		})
		.then(async () => {
		await page.type('#text-0', text);
		await page.click('#submit')
		//await page.waitForNavigation()
		await new Promise(resolve => setTimeout(resolve, 3000));
		const element = await page.$(
			'div[class="btn-group"] > a'
		);
		const url = await (await element.getProperty("href")).jsonValue();
		res.send({
			status: true,
			creator: `${owner}`,
			url: url
		})
		await browser.close();
	})
	.catch((err =>{
		console.log(err)
	}))
	})();
	} catch (e) {
		console.log('Ada Yang Error')
		res.send({
			status: false,
			massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		})
	   }
	} else if (theme == 'neon-light') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'blood') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/blood-text-on-the-frosted-glass-941.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'neon') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/neon-text-effect-online-879.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'text3d') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/3d-box-text-effect-online-880.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'thunder') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/thunder-text-effect-online-881.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'horror') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/horror-blood-text-effect-online-883.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'green-neon') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/green-neon-text-effect-874.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'glow-text') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/advanced-glow-text-effect-873.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
	} else if (theme == 'break-wall') {
        try {
	        (async () => {
	        const browser = await puppeteer.launch({
		        headless: false,
	        });
	        const page = await browser.newPage();	
		    await page.goto('https://textpro.me/break-wall-text-effect-871.html', {
			    waitUntil: "networkidle2"
		    })
		    .then(async () => {
		    await page.type('#text-0', text);
		    await page.click('#submit')
		    //await page.waitForNavigation()
		    await new Promise(resolve => setTimeout(resolve, 3000));
		    const element = await page.$(
			    'div[class="btn-group"] > a'
		    );
		    const url = await (await element.getProperty("href")).jsonValue();
			res.send({
				status: true,
				creator: `${owner}`,
				url: url
			})
		    await browser.close();
	        })
	        .catch((err =>{
		        console.log(err)
	        }))
	    })();
	} catch (e) {
		console.log('Ada Yang Error')
		    res.send({
			    status: false,
			    massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		    })
	    }
    } else if (theme == 'pornhub') {
		if(!text2 || text2 == undefined)
		return res.send({
			status: false,
			message : "Masukkan parameter text2"
		})
    try {
	    (async () => {
	    const browser = await puppeteer.launch({
		    headless: false,
	    });
	    const page = await browser.newPage();
		await page.goto('https://textpro.me/pornhub-style-logo-online-generator-free-977.html', {
			waitUntil: "networkidle2"
		})
		.then(async () => {
		await page.type('#text-0', text);
		await page.type('#text-1', text2);
		await page.click('#submit')
		//await page.waitForNavigation()
		await new Promise(resolve => setTimeout(resolve, 3000));
		const element = await page.$(
			'div[class="btn-group"] > a'
		);
		const url = await (await element.getProperty("href")).jsonValue();
		res.send({
			status: true,
			creator: `${owner}`,
			url: url
		})
		await browser.close();
	})
	.catch((err =>{
		console.log(err)
	}))
	})();
	} catch (e) {
		console.log('Ada Yang Error')
		res.send({
			status: false,
			massage: 'Maaf Ada Yang Sedang Error Mungkin Lagi Di Perbaiki'
		})
	}
} 
})

app.get('/api/tts', function(req, res) {
	let kata = req.query.text
	if(!kata || kata == undefined)
	return res.status(200).send({
		status: false,
		message : 'Masukkan Parameter text.'
		})
	if (kata.length > 500) 
	return res.send({
		Pesan : "Teks terlalu panjang!"
	})
	let bahasa = req.query.bahasa
	if(!bahasa || bahasa == undefined)
	return res.status(200).send({
		status: false,
		message : 'Masukkan Parameter bahasa.',
		list_bahasa: `
 Automatic: auto,
 Afrikaans: af,
 Albanian: sq,
 Amharic: am,
 Arabic: ar,
 Armenian: hy,
 Azerbaijani: az,
 Basque: eu,
 Belarusian: be,
 Bengali: bn,
 Bosnian: bs,
 Bulgarian: bg,
 Catalan: ca,
 Cebuano: ceb,
 Chichewa: ny,
 Chinese Simplified: zh-cn,
 Chinese Traditional: zh-tw,
 Corsican: co,
 Croatian: hr,
 Czech: cs,
 Danish: da,
 Dutch: nl,
 English: en,
 Esperanto: eo,
 Estonian: et,
 Filipino: tl,
 Finnish: fi,
 French: fr,
 Frisian: fy,
 Galician: gl,
 Georgian: ka,
 German: de,
 Greek: el,
 Gujarati: gu,
 Haitian Creole: ht,
 Hausa: ha,
 Hawaiian: haw,
 Hebrew: iw,
 Hindi: hi,
 Hmong: hmn,
 Hungarian: hu,
 Icelandic: is,
 Igbo: ig,
 Indonesian: id,
 Irish: ga,
 Italian: it,
 Japanese: ja,
 Javanese: jw,
 Kannada: kn,
 Kazakh: kk,
 Khmer: km,
 Korean: ko,
 Kurdish (Kurmanji): ku,
 Kyrgyz: ky,
 Lao: lo,
 Latin: la,
 Latvian: lv,
 Lithuanian: lt,
 Luxembourgish: lb,
 Macedonian: mk,
 Malagasy: mg,
 Malay: ms,
 Malayalam: ml,
 Maltese: mt,
 Maori: mi,
 Marathi: mr,
 Mongolian: mn,
 Myanmar (Burmese): my,
 Nepali: ne,
 Norwegian: no,
 Pashto: ps,
 Persian: fa,
 Polish: pl,
 Portuguese: pt,
 Punjabi: ma,
 Romanian: ro,
 Russian: ru,
 Samoan: sm,
 Scots Gaelic: gd,
 Serbian: sr,
 Sesotho: st,
 Shona: sn,
 Sindhi: sd,
 Sinhala: si,
 Slovak: sk,
 Slovenian: sl,
 Somali: so,
 Spanish: es,
 Sundanese: su,
 Swahili: sw,
 Swedish: sv,
 Tajik: tg,
 Tamil: ta,
 Telugu: te,
 Thai: th,
 Turkish: tr,
 Ukrainian: uk,
 Urdu: ur,
 Uyghur: ug,
 Uzbek: uz,
 Vietnamese: vi,
 Welsh: cy,
 Xhosa: xh,
 Yiddish: yi,
 Yoruba: yo,
 Zulu: zu`.replace(/\n/gi, '')
		})
	let key = req.query.key;
	if(!key || key == undefined)
	return res.status(500).send({
		status: false,
		message: "Require Parameter key"
	})
	if (key !== `${KEY}`) return res.status(500).send({
		status: false,
		message: "the key is invalid"
	})
    const ttsGB = require('node-gtts')(bahasa)
    const dataText = kata
	res.set({'Content-Type': 'audio/mpeg'});
		ttsGB.stream(dataText).pipe(res)
})

app.use(function (req, res, next) {
	res.status(404).set("Content-Type", "text/html")
	.sendFile(dir + "/client/404.html");
});

app.set('json spaces', 4)
app.listen(PORT, () => {
  console.log(`Hai ${owner}, Okaerinasai`)
  console.log(`Sekarang Kamu Berada Di Port ${PORT}`)
})
