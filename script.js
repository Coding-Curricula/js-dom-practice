// first element created
const firstH1Element = document.createElement('h1')
document.body.prepend(firstH1Element)
firstH1Element.innerText = 'My Dev Portfolio'

// DOM traversal
const h2 = document.getElementsByTagName('h2')
console.log('h2', h2) // collection
console.log('h2[1]', h2[1]) // the actual element

const p1 = document.getElementById('first-paragraph')
console.log('first paragraph', p1)

const button = document.getElementsByClassName("btn")
console.log('button', button[0].innerText)

const p2 = document.querySelector('#second-paragraph')
console.log('second paragraph', p2)

const p2Again = document.querySelector('.class-second-paragraph')
console.log('second paragraph again', p2Again)

const selectBtn = document.querySelector('.btn')
console.log('select button', selectBtn)