const numberOfSeries = +prompt('nechta serial kordingiz?','')

console.log(numberOfSeries)
const seriesDB = {
    count: numberOfSeries,
    series: {},
    actors: {},
    genres: [],
    private: false,
}


const firstQuestion1 = prompt('Oxirgi korgan serialingiz?','')
const secondQuestion1 = prompt('nechi baxo berasiz?', '')
const firstQuestion2 = prompt('Oxirgi korgan serialingiz?', '')
const secondQuestion2 = prompt('nechi baxo berasiz?', '')

seriesDB.series[firstQuestion1] = secondQuestion1
seriesDB.series[firstQuestion2] = secondQuestion2

console.log(seriesDB)
