function isMinnesotaZip(code) {
    // All MN zipcodes are between these: 55001 and 56763
    if (code >= 55001 && code <= 56763) {
        return true 
    } else {
        return false 
    }
}

console.log(isMinnesotaZip('55403'))
console.log(isMinnesotaZip('55000'))
console.log(isMinnesotaZip('56764'))
console.log(isMinnesotaZip('-1'))

console.log("BREAK -- GPA Program is Next")


function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true 
    } else {
        return false
    }
}

console.log(validGPA(3.5))
console.log(validGPA(4.3))

console.log("BREAK -- City, State Program is Next")

function cityState(city, state) {
  //  let address = city + ', ' + state.toUpperCase()
  let address = `${city}, ${state.toUpperCase()}`
    return address
}

console.log(cityState('Minneapolis', 'mn'))
