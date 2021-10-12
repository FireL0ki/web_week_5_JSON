console.log('Hello World!')

// Three ways to create variables
let color = 'blue' 
var size = 'medium'  // not recommended
const language = 'JavaScript'  // cannot change this value
// language = 'C#' this is an error

let quantity = 5
let distance = 4.5

let text = "Hello World"
let message = "Hi Programmers"

console.log('There are ' + ' programmers')

let todayTemp = 75

console.log('Today\'s temperature is ' + todayTemp + 'F')

let tempC = (todayTemp - 32) * 5 / 9
console.log("Today's temperature is " + tempC.toFixed(2) + "C")

// using a template string
console.log(`Today's temperature is ${tempC.toFixed(2)}C which is equivalent to ${todayTemp}F`)


// can you use these variables and a template string to console.log the message
// 'This class is ITEC 2560 Web Programming'

let className = 'Web Programming'
let classCode = 2560
let department = 'ITEC'

console.log(`This class is ${department} ${classCode}: ${className}`)
