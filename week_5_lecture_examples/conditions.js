
// In order to be a setnator, there are 3 requirements:
// You must be at least 30 years old
// You must have been a US citizen for 9 or more years
// You must live in the state you want to represent

let age = 35
let usCitizenTime = 35
let stateOfResidence = 'Wisconsin'
let stateWantToRepresent = 'Minnesota'

// triple equals will also check if the type is the same. double equal (==) only checks if the value is the same; it treats them both as the same data type
if (age >= 30 && usCitizenTime >= 9 && stateOfResidence === stateWantToRepresent) {
    console.log("Congratulations, you meet the requirements!")
} else {
    console.log("Sorry, you do not meet all the requirements.")
}

// falsy values - undefined, null, empty lists, empty objects, 0, false
if ('' == 0) {  // [] (empty list) is equal (==) to 0; {} (empty object) is not equal (!==) to 0
    // better to use === triple equals! It will check type as well as value
    console.log('the same!')
} else {
    console.log('not the same!')
}
