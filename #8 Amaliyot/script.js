const numberOfCommas = +prompt('Nechta serial kordingiz?', '')

const seriesDB = {
    count: numberOfCommas,
    series: {},
    actors: {},
    genres: {},
    private: false,
}

for (let i = 0; i < 2; i++) {
    const a = prompt(`Oxirgi korgan serialingiz ${i}?`, '')
    const b = prompt(`Necha baxo berasiz? ${i}`, '')

    if (a !== null && b !== null && a !== '' && b !== '') {
        seriesDB.series[a] = b
    console.log('DONE')
    } else {
        i--
    }
}
if (seriesDB.count < 5) {
    console.log("Kam serial koripsiz")
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
    console.log('siz classik tamoshabin ekansiz')
} else if (seriesDB.count >= 10) {
    console.log('siz serialchi zvezda ekansiz')
}

console.log(seriesDB)
