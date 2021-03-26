const fetch = require('node-fetch')

async function Random() {
    let c;
	let result = [
        {
        judul: "Saimin Ryoujoku Gakuen (2008)",
        gendre: "Anal, Big, Oppai, Blowjob, Forced, Harem, Hentai, Loli, MILF, Oral, Paizuri, Schoolgirl, Stocking",
        sinopsis: "Seorang dokter ahli psikologis menjadi Guru Pembimbing di sekolah untuk membantu para murid yang sedang ada masalah atau yang ingin menyelesaikan masalah. Dibalik aksinya sebagai Guru Pembimbing, ia melakukan hipnotis kepada semua murid perempuan yang melakukan bimbingan. Dan memanfaatkan sebagai pelampiasan nafsu birahinya.",
        link: "https://tinyurl.com/ya46p6ne",
        image: "http://i3.wp.com/209.126.6.6/wp-content/uploads/2020/05/1589276188-29394.jpg"
        },
        {
        judul: "Idol☆Sister (2014)",
        gendre: "Blowjob, Creampie, Harem, Hentai, Incest, Music, Paizuri, Yuri",
        sinopsis: "Platinum Kiss adalah grup idola baru yang terdiri dari tiga gadis: Takano Ayaka, Kamii Maki, dan Ooizumi Maina. Kakak Ayaka adalah manajer mereka. Dia juga cabul besar! Ketika ia pergi hilang sebelum acara live besar, namun, mereka semua merasa benar-benar tidak nyaman. Pada saat dia ditemukan, ada kurang dari satu jam sebelum mereka pergi keluar … tapi dia punya hanya solusi untuk membuat semua orang merasa jauh lebih baik!",
        Link: "https://tinyurl.com/y8bap5zb",
        image: "http://i0.wp.com/209.126.6.6/wp-content/uploads/2020/04/1586807784-70015.jpg"
        },
        {
        judul: "Gakuen no Ikenie: Nagusami Mono to Kashita Kyonyuu Furyou Shoujo (2015)",
        gendre: "Anal, Big, Oppai, Blowjob, Creampie, Forced, Gangbang, Paizuri, Rape, Schoolgirl, Yuri",
        sinopsis: "Seorang pendeta menculik seorang gadis dan ingin dia meninggalkan teman-temannya dan bergabung dengan kultus agamanya. Ketika dia menolak, anggota kultus memberikan hukuman ilahi dengan memperkosanya. Temannya datang untuk menyelamatkannya, tapi malah ikut diperkosa juga.",
        link: "https://tinyurl.com/ya7as6fc",
        image: "http://i1.wp.com/209.126.6.6/wp-content/uploads/2020/12/1495735936_gakuen-no-ikenie-nagusami-mono-to-kashita-kyonyuu-furyou-shoujo.jpg"
        },
        {
        judul: "Ano Ko no Kawari ni Suki na Dake (2020)",
        gendre: "Big, Oppai, Blowjob, Creampie, MILF, Netorare, Oral",
        sinopsis:"Akio telah satu bulan tidak berhubungan seks dengan Reina karena kehamilannya. Karena nafsu yang terkumpul selama satu bulan tak terlampiaskan, Akio sampai salah menyangka ibunya Reina adalah Reina ketika ibunya mencoba memakai pakaian Reina yang lama. Setelah ibunya Reina mengetahui suami anaknya merasa tidak terpuaskan karena tidak bisa berhubungan seks, ia siap menggantikan anaknya…",
        link: "https://tinyurl.com/yax5pkj9",
        image: "http://i0.wp.com/209.126.6.6/wp-content/uploads/2020/12/254581.jpg"
        },
        {
        judul: "300 Yen no Otsukiai (2016)",
        gendre: "Blowjob, Hentai, Loli, Oral, Schoolgirl, Virgin",
        sinopsis: "Manami-chan gadis loli yang berumur 18 tahun sangat menyukai cemilan jajanan dan bersikap seperti anak kecil. Si Protagonis bertemu dengannya di supermarket dengan keadaan mengenaskan :v Karena kasihan, si protagonis membantunya untuk membelikan cemilan yang ia mau seharga 300 yen, tapi dengan satu syarat. Kejadian ini terus berulang sehingga terjadi hal yang benar-benar maksiat <(“).",
        link: "https://tinyurl.com/y9l6s8qm",
        image: "http://i2.wp.com/209.126.6.6/wp-content/uploads/2020/05/1590146098-103788.jpg"
        },
        {
        judul: "Ano Ko to Ii Koto (2015)",
        gendre: "Big Oppai, Creampie, Footjob, Hentai, Incest, Oral, Paizuri, Schoolgirl",
        sinopsis: "Yang bermulai dari teman rahasia yang melakukan paizuri setiap hari dan setiap kali di belakang sekolah dan di manapun. Sampai pada akhirnya oppai si wanita tambah besar karna melakukan paizuri setiap hari. Dan akhirnya mereka menikmatin masa mudanya.",
        link: "https://tinyurl.com/ydxooxxr",
        image: "http://i1.wp.com/209.126.6.6/wp-content/uploads/2020/04/1585944855-78665.jpg"
        },
        {
        judul: "Yuutousei Ayaka no Uraomote (2020)",
        gendre: "Big Oppai, Blowjob, Creampie, Femdom, Hentai, Masturbation, Schoolgirl",
        sinopsis: "Ayaka seorang murid teladan yang merasa terganggu karena disebut murid teladan yang belum pernah mencoba begituan oleh temannya. Berawal yang tidak sengaja merasakan kenikmatan karena pantat kesenggol meja, Ayaka mencoba melakukan colmek untuk pertama kalinya. Lalu, ia mencoba mengubah penampilannya menjadi orang yang berbeda dan membuat akun sosial media untuk mencari penis pria. Ini cerita tentang seorang murid teladan yang menjadi liar ketika menjadi orang yang berbeda…",
        link: "https://tinyurl.com/y9wk8ylt",
        image: "http://i2.wp.com/209.126.6.6/wp-content/uploads/2020/11/1604222053-106369.jpg"
        },
        {
        judul: "Zecchou Rocket (2013)",
        gendre: "Big Oppai, Blowjob, Creampie, Forced, Schoolgirl",
        sinopsis:"Adaptasi dari manga milik Taropun, yang menceritakan beberapa cerita ditiap episodenya.",
        link:"https://tinyurl.com/y8eetash",
        image: "http://i3.wp.com/209.126.6.6/wp-content/uploads/2020/11/1500806820_zecchou-rocket.jpg"
        },
        {
        judul: "Yokujou Bazooka The Animation (2013)",
        gendre: "Big Oppai, Blowjob, Hentai, Masturbation, Oral, Rape, Schoolgirl, Supranatural",
        sinopsis:"Seorang cowok yang mendapatkan Cermin Ajaib yang bisa melihat suatu tempat di mana pun, bahkan dapat menyentuhnya langsung. Cermin itu disalah gunakan oleh cowok mesum untuk memuaskan hasratnya ke semua cewek.",
        link:"https://tinyurl.com/y9cwjy96",
        image: "http://i0.wp.com/209.126.6.6/wp-content/uploads/2020/05/1589617348-53255.jpg"
        },
        {
        judul: "Kanojo ga Yatsu ni Idakareta Hi (2020)",
        gendre:"Big Oppai, Blowjob, Forced, Hentai, MILF, Netorare",
        sinopsis:"Menceritakan tentang pengancaman dari seorang bawahan di perusahaan terhadap atasannya dengan video skandal yang dilakukan dengan suaminya di tempat perusahaan.",
        link:"https://tinyurl.com/ycjv988y",
        image: "http://i2.wp.com/209.126.6.6/wp-content/uploads/2020/04/1586811182-105660.jpg"
        },
        {
        judul: "Inmou (2020)",
        gendre:"Armpit, Big Oppai, Blowjob, Creampie, Dark Skin, Femdom, Hentai, Masturbation, MILF, Romance, Schoolgirl, Tsundere",
        sinopsis:"Menceritakan tentang kisah cinta antara cowok pendek dengan cewek tinggi.",
        link:"https://tinyurl.com/yyqahmyn",
        image: "http://i2.wp.com/209.126.6.6/wp-content/uploads/2020/09/Kanojo-ga-Yatsu-ni-Idakareta-hi.jpg"
        },
        {
        judul: "Isekai Harem Monogatari (2020)",
        gendre:"Big Oppai, Blowjob, Creampie, Elf, Fantasy, Harem, Hentai, MILF, Paizuri, Virgin",
        sinopsis:"Protagonis tujuan hidupnya hanya untuk coli, ia bahkan bisa sampai 10 kali coli. Ketika ia sedang coli menggunakan majalah porno, tiba-tiba majalahnya mengeluarkan cahaya dewa dan menyedotnya ke dunia lain. Dipanggil dengan sihir pemanggilan, ia tiba di dunia lain sebagai pahlawan yang memiliki kekuatan spesial. Kekuatan spesial yang ia miliki adalah spermanya yang dapat meningkatkan kekuatan wanita hingga ke titik maksimal. Demi menyelamatkan dunia dari raja iblis, pahlawan harus membantu meminjamkan kekuatannya dengan memberikan sperma untuk para pejuang wanita",
        link:"tinyurl.com/5yfe2lxh",
        image: "http://i0.wp.com/209.126.6.6/wp-content/uploads/2020/08/1596310047-107872.jpg"
        },
        {
        judul: "Amanee!: Tomodachinchi de Konna Koto ni Naru Nante! (2013)",
        gendre:"Big Oppai, Blowjob, Creampie, Hentai, Housewife, Masturbation, MILF, Oral, Paizuri, Uncensored",
        sinopsis:"Ryouichi sedang bermain Video Game di rumah Yuu. Ketika Ryouichi melihat bibinya Yuu si Yui di kamar mandi sedang pipis. Dan itu membuat si Yui tertarik dengan Ryouichi, dan ingin mengajarkan hal mesum pertama bagi Ryouichi.",
        link:"https://tinyurl.com/3bf7ovsn",
        image: "http://i3.wp.com/209.126.6.6/wp-content/uploads/2020/04/1585939159-90758.jpg"
        }
    ]

let a = result[Math.floor(Math.random() * result.length)]
return a;
}

const rhentai = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = rhentai;