// Massivlar

const colors = ['green', 'yellow', 'blue', 'red', 'black']

console.log('massiv uzunligi:', colors.length)
console.log('massiv uzunligi:', colors[2])
console.log('oxirgi elemetni ochir:', colors.pop())
console.log('oxirgi yangi elemet qoshildi', colors.push('brown'))
console.log('oldidagi elemetni ochir:', colors.shift())
console.log('oldidagi yangi elemet qoshildi', colors.unshift('gray'))

// pop va push
// pop - bu massivni oxiridagi elementi o'chiradi
// push - bu massivni oxiriga yangi elemet qo'shadi

// shift va unshift
// pop - bu massivni oldidagi elementi o'chiradi
// push - bu massivni oldidagi yangi elemet qo'shadi

console.log(colors)

const cars = ['BMW', 'Merc', 'Audi', 'Suzuki', 'Subaru']
// Sort method

cars.sort()
console.log(cars)

const n = [23, 34, 7, 12, 74, 5]
n.sort()

function compareNumber(a, b) {
    return a - b
}

console.log(n)

// Itteratsiya

// for (let i = 0; i < cars.length; i++) {
//     console.log(`cars ${cars[i]}`)
// }
//
// for(let img of cars){
//     console.log(`img ${img}`)
// }

// bu bizda medid deyiladi
// colors.forEach((item, index, arr) => {
//     console.log(`${index}: ${item} in array ${arr}`)
// })

const numbers = [1, 2, 3, 4, 5]
numbers[99] = 100
console.log(numbers.length)
console.log(numbers)

// split

const socialMedia = 'youtbe, Telegiram, Instagaram'
const arr = socialMedia.split(', ')
const text = arr.join('-')
console.log(arr)
console.log(text)
