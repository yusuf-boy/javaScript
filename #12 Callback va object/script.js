// Collbock - bu bitta function bajarilgandan so'ng jayin ishlaydigan function

// function greeting(callback) {
//     console.log('Hello students!')
//
//     callback()
// }
//
// function callback() {
//     console.log('Are you ready today!')
// }
//
// greeting(callback)

// Object va  dastruktizotsiya

const person = {
    name: 'Samar',
    year: 2001,
    job: 'Full Stack Developer',
    hobbies: {
        sport: 'Football',
        games: 'UFC',
    },
    sayHello: function () {
        console.log(`Hello`);
    },
}

const {
    job,
    year,
    name,
    sayHello,
    hobbies: { games,sport},
} = person
console.log()


// console.log(Object.keys(person).length)
//
// // for in - faqat object uchun
// // for of - faqat massiv ya'ni array uchun
//
// for (let key in person) {
//     if (typeof person[key] === 'object') {
//         for (let i in person[key]) {
//             console.log(`Property: ${i}: Value: ${person[key][i]}`)
//         }
//     } else {
//         console.log(`Property: ${key}: Value: ${person[key]}`)
//     }
// }
