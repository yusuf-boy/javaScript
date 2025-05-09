// eski usul
// const box = document.getElementById('box')
// const box = document.getElementsByClassName('box');
// const buttons = document.getElementsByTagName('button');

// Yangi usul
// const wrapper = document.querySelector('.wrapper')
// const heart = wrapper.querySelectorAll('.heart')
//
// const buttons = document.querySelectorAll('button')
//
// console.log(wrapper)
// console.log(heart)
//
// console.log(buttons)

// ikkichi qisim
const box = document.querySelector('#box'),
    button = document.querySelectorAll('button'),
    circles = document.getElementsByClassName('circle'),
    wrapper = document.querySelector('.wrapper'),
    hearts = wrapper.querySelectorAll('.heart')

// box.style.backgroundColor = 'red'
// box.style.width = '400px'

// button[1].style.width = '200px'
// circles[0].style.borderRadius = '0'

// circles[1].style.cssText = 'background-color: red'
//
// console.log(button)
// console.log(circles)

// for (let i = 0:; i < circles.length; i++) {
//     circles[i].style.borderRadius = '0'
// }

// buttons.forEach(item => {
//     item.style.borderRadius = '100%'
// })
//
// const div = document.createElement('div')
// div.classList.add('heart')
// div.style.backgroundColor = 'black'
// wrapper.append(div)
// wrapper.prepend(div)
// document.body.append(div)
//
// circles[0].remove()
//
// hearts[0].replaceWith(circles[1])

const div = document.createElement('div')
div.style.width = '400px'
div.style.height = '200px'
div.style.backgroundColor = 'red'

document.querySelector('.app').append(div)

// div.innerHTML = '<h1>Hello World!</h1>'
// div.innerContent = '<h1>Hello World!</h1>'

div.insertAdjacentHTML('afterbegin','<h1>Hello World!</h1>')
