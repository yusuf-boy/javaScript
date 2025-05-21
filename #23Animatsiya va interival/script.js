const btn = document.querySelector('#btn')

const moveCar = () => {
    const car = document.querySelector('.img')
    let position = 0

    const animationId = setInterval(moving,10)

    function moving() {
        if (position === 1000) {
            clearInterval(animationId)
        } else {
            position++
            car.style.left = position + 'px'
        }
    }
}

btn.addEventListener('click', moveCar)

// let timerId,
// index = 0

// setTimeout bu bitta function necha dur sekunddan keyi bit marotaba ishga tushadi
// SetInterval bu bitta function har necha dur sekunda ishga tushadi

// btn.addEventListener('click', () => {
//     timerId = setInterval(logger, 500)
// })
//
// function logger () {
//     if (index === 5) {
//         clearInterval(timerId)
//     }
//     console.log('Hello world')
//     index++
// }
//
// let id = setTimeout(function log() {
//     console.log('Hello world')
//     id = setTimeout(log, 1000)
// }, 1000)
