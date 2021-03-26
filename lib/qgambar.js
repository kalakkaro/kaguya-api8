const fetch = require('node-fetch')

async function Random() {
    let c;
	let result = [
        {
          quote: "https://i.pinimg.com/originals/7f/2f/be/7f2fbed7e1322362f39839e4a60acdb4.jpg"
        },
        {
          quote: "https://em.wattpad.com/068acc5093dcb5aac0244a23bda9b467a390636c/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6878647747646b707a517a7339773d3d2d3539343338313433322e3135336237343762613030396638663432323136323832303430312e6a7067?s=fit&w=720&h=720"
        },
        {
          quote: "https://2.bp.blogspot.com/-_YSG4FbgOFQ/WhlyDO5uXNI/AAAAAAAAACE/QXzNBjftWeQLr_uIy8DZ4266D1V9pCv6ACLcBGAs/s1600/IMG_20170917_063152_215.jpg"
        },
        {
          quote: "https://i.pinimg.com/originals/f3/38/c5/f338c5ef187429cc333b42ff4e3c6831.png"
        },
        {
          quote: "https://i.pinimg.com/736x/fe/57/8e/fe578ee6322c2d0f05758abb3052ec43.jpg"
        },
        {
          quote: "https://pbs.twimg.com/media/CHVei3yUEAAVCk6.jpg"
        },
        {
          quote: "https://em.wattpad.com/37da5a3e0c61edcd47e3f697c8f0bec92f995b90/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f5577303461526941594e747978773d3d2d36352e313533616436663137306334653931663534393934323239393633382e6a7067?s=fit&w=720&h=720"
        },
        {
          quote: "https://i.pinimg.com/236x/56/63/ac/5663acd12e3f7acea29a727ae8bce714.jpg"
        },
        {
          quote: "https://i.pinimg.com/originals/56/63/ac/5663acd12e3f7acea29a727ae8bce714.jpg"
        },  
        {
          quote: "https://3.bp.blogspot.com/-ZN6fhkAR5cs/VbQYjKPOKlI/AAAAAAAAHYQ/hcGMWsR4qZM/s1600/quotes%2Bluffy.jpg"
        },  
        {
          quote: "https://4.bp.blogspot.com/-HGui1oEaHyI/VqTN6bJndNI/AAAAAAAADLE/MdrMu8QrCNA/s1600/kata-kata-bijak-film-anime.jpg"
        },  
        {
          quote: "https://em.wattpad.com/eea9a4dd8aad294eead6b7d9ca9d06887d562707/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f716152796967455943594d5858773d3d2d3539343338313433322e313533623734376534653064386537383932313435393536393434382e6a7067?s=fit&w=720&h=720"
        },  
        {
          quote: "https://d.wattpad.com/story_parts/7/images/14ba57b07fa135e680970617007.jpg"
        },  
        {
          quote: "https://d.wattpad.com/story_parts/10/images/14ba57b4b8af11ee91257740440.jpg"
        },  
        {
          quote: "https://4.bp.blogspot.com/-lQOslV0r2H0/Woi6sBB6VaI/AAAAAAAALX0/4hQFQ8jB9507ofYP5B6uRIArBiLY0g8pwCLcBGAs/s1600/Astaorenomahou.jpg"
        },  
        {
          quote: "https://2.bp.blogspot.com/-d_8rC02jWPI/WooH4kmNcJI/AAAAAAAALYQ/xoLjpk94u7ozLJi3nKdsJmx-DrkCnkCVwCLcBGAs/s1600/houtarouyuurei.jpg"
        },  
        {
          quote: "https://em.wattpad.com/962260776a09ef4a35d38927c86bb603d4699160/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f48627a4b75504d2d3266524745673d3d2d36352e313533616436653063633035623433303738353336313432373730302e6a7067?s=fit&w=720&h=720"
        },  
        {
          quote: "https://i.ytimg.com/vi/bIFIuibTOg0/maxresdefault.jpg"
        },  
        {
          quote: "https://cdn.en.wtf/wp-content/uploads/2019/07/tanaka-1.jpg"
        },  
        {
          quote: "https://cdn.en.wtf/wp-content/uploads/2019/07/17076041_234828996988115_3361556982866640896_n.jpg"
        },  
        {
          quote: "https://cdn.en.wtf/wp-content/uploads/2019/07/21149875_1920346524919382_1301142204676308992_n.jpg"
        },  
        {
          quote: "https://cdn.en.wtf/wp-content/uploads/2019/07/14723149_626135764244702_3376678682247561216_n.jpg"
        },  
        {
          quote: "https://cdn.en.wtf/wp-content/uploads/2019/07/20184359_1741815479181050_2720787904283541504_n.jpg"
        },  
        {
          quote: "https://1.bp.blogspot.com/-7wLEzWB6Hg4/XYHOjXdt5KI/AAAAAAAABe4/m4j4wqAIeL4Qi3N_LIAl4J8LxGKLvEghQCLcBGAsYHQ/s1600/dazai-osamu-bungou-stray-dogs.jpg"
        },
        {
          quote: "https://i.pinimg.com/originals/51/18/f0/5118f050ff9d1f460edae565c2e233c7.jpg"
        },
        {
          quote: "https://i.pinimg.com/originals/4b/a6/4c/4ba64c9ca5347a89419a9f142dc64dcf.jpg"
        },
        {
          quote: "https://1.bp.blogspot.com/-NRpqDLVCSYQ/Ulf6cgPrj7I/AAAAAAAAAR8/DlAKbCU9Sxs/s1600/603094_446668965449412_1726567296_n.jpg"
        },
        {
          quote: "https://i.pinimg.com/originals/c2/a7/44/c2a74454de8a3805a095a5e8cf30ace1.jpg"
        },
        {
          quote: "https://i.pinimg.com/originals/c6/38/3e/c6383e86a977a9be144d07578bc0c5cb.jpg"
        },
        {
          quote: "https://cdn.en.wtf/wp-content/uploads/2019/07/20184359_1741815479181050_2720787904283541504_n.jpg"
        }
    ]

let a = result[Math.floor(Math.random() * result.length)]
return a;
}

const qanimeg = () => new Promise((resolve, reject) => {
    Random().then(result => {
		resolve({
			result
		})
	}).catch(err => { reject(err) })
})

module.exports = qanimeg;