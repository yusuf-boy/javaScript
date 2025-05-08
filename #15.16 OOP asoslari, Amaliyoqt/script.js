// const suvCars = {
//     weight: 1000,
//     length: 3,
//     speed: function () {
//         console.log('100km/h')
//     },
// }
//
// const nexia = Object.create(suvCars)
// const matiz = Object.create(suvCars)
//
// // nexia.__proto__ = suvCars
//
// // Object.setPrototypeOf(nexia, suvCars)
//
// console.log(nexia)
// console.log(matiz)


const seriesDB = {
    count: 0,
    series: {},
    actors: {},
    genres: [],
    private: false,
    start: function(){
        seriesDB.count = +prompt('Nechata serial koripsiz?', '')

        while (seriesDB.count === '' || seriesDB.count === null || isNaN(seriesDB.count)){
            seriesDB.count = +prompt('Nechata serial koripsiz?', '')
        }
    },
    setSeries: function(){
        for (let i = 0; i < 2; i++) {
            const a = prompt(`oxirgi korgan seyiyangiz ${i + 1}?`, '')
            const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '')

            if (a !== null && b !== null && a !== '' && b !== '') {
                seriesDB.series[a] = b
            } else {
                i--
            }
        }
    },
    detectingLeval: function(){
        if (seriesDB.count < 5) {
            console.log("Kam serial koripsiz")
        } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
            console.log('siz classik tamoshabin ekansiz')
        } else if (seriesDB.count >= 10) {
            console.log('siz serialchi zvezda ekansiz')
        }
    },
    visibleDB: function(){
        if (seriesDB.private) {
            seriesDB.private = false
        } else {
            seriesDB.private = true
        }
    },
    showDB: function(){
        if (!seriesDB.private) {
            console.log(seriesDB)
        } else {
            console.log("Malumot mahfiy saqlanmoqda")
        }
    },
    writeGenres: function(){
        // for (let i = 0; i < 3; i++) {
        //     const genre = prompt(`Yaxshi korgan janringiz ${i + 1}`,'')
        //     if (genre === '' || genre === null) {
        //         i--
        //     } else {
        //         seriesDB.genres[i] = genre
        //     }
        // }

        let genres = prompt("Yaxshi korgan janringizni vergul yordamida yozing", '')


        while (genres === '' || genres === null){
           genres = prompt("Yaxshi korgan janringizni vergul yordamida yozing", '')
        }
        if (genres) {
            seriesDB.genres = genres.split(', ')
            seriesDB.genres.sort()
        }
    },
}
