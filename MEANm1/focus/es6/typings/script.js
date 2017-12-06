// Templating ES6 : backquote
let name = `Abdel`
const birthDate = 1979

document.querySelector(`h1`). innerHTML = `
    Bonjour ${name}, votre âge est ${2017 - birthDate}
`

// Les variables non-modifiables
const birthYear = 1997
// birthYear = 2000

// Fonctions fléchées
const twice = (param = 7) => console.log(param * 2)
twice()
twice(2)

// Rest Parameter
let restFunction = (x, y, ...rest) => {
    console.log(rest)
    console.log( x + y + rest.length )
}
restFunction(5, 10, `Julien`, true, 55, `Lorem`, 34, false)

// Spread operator
let spread = [true, 14]
let myArray = [`Sophia`, ...spread]
console.log(myArray)