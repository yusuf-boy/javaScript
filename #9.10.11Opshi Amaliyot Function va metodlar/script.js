// Function bu cods qayta - qayta takrorlanishini oldihga oladi
// Function decloration

const numberOfSeries = +prompt('Nechata serial koripsiz', '')

startApp()

const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
}

setFavouriteSeries()
detectingLevel()
writeGenres()
showDb(seriesDB.private)

const isMarried = false
const isChild = true

console.log(isMarried || isChild)

function startApp() {
    numberOfSeries +prompt('Nechata serial koripsiz?', '')

    while (numberOfSeries == '' || numberOfSeries === null || isNaN(numberOfSeries))
    {      numberOfSeries  +prompt('Nechata serial koripsiz?', '')
    }
}

function setFavouriteSeries() {
    for (let i = 0; i < 2; i++) {
        const a = prompt(`oxirgi korgan seyiyangiz ${i + 1}?`, '')
        const b = prompt(`Nechi baxo berasiz? ${i + 1}`, '')

        if (a !== null && b !== null && a !== '' && b !== '') {
            seriesDB.series[a] = b
        } else {
            i--
        }
    }
}

function detectingLevel() {
    if (seriesDB.count < 5) {
        console.log("Kam serial koripsiz")
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
        console.log('siz classik tamoshabin ekansiz')
    } else if (seriesDB.count >= 5 && seriesDB.count < 10) {
        console.log('siz serialchi zvezda ekansiz')
    }
}

function writeGenres() {
    for (let i = 0; i < 3; i++) {
        const genre = prompt(`Yaxshi korgan janringiz ${i + 1}`,'')
        seriesDB.genres[i] = genre
    }
}

function showDb(isPrivate) {
    if (!isPrivate) {
        console.log(seriesDB)
    }else {
        console.log("Malumot mahfiy saql")
    }
}
console.log(seriesDB)
