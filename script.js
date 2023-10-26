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

// manipulating elements
document.querySelector('#first-paragraph').innerText = 'Kombucha is yummy'
document.querySelector('#second-paragraph').style.color = 'red'

// add an image from the DOM
const image = document.createElement('img')
image.src = 'https://hbr.org/resources/images/article_assets/2020/05/May20_27_933445788_464881289-2.jpg'
image.width = '200'
image.style.display = 'block'
image.style.marginTop = '10px'
document.querySelector('.btn').append(image)