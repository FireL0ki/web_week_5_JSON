let animals = ['lion', 'tiger', 'cheetah']

console.log(animals)
console.log(animals[1])
console.log(animals[1000])  // js will return undefined

animals[6] = 'giraffe' // js will make the array bigger, and fill in the other items as undefined
// ['lion', 'tiger', 'cheetah', <3 empty items>, 'giraffe']

animals[1] = 'zebra' // will replace the element at index one

animals.push('elephant')  // adds to the end of the array
animals.unshift('deer')  // adds to the beginning

animals.shift()  // removes first item in the array
animals.pop() // removes the last item in the array

// END: push (add) pop (remove)  BEGINNING: unshift(add) shift (remove)

// .length, .reverse
// if something is not found in the array, .indexOf will return -1

if (animals.includes('cheetah')) {
    console.log('cheetah is in the array')
}

console.log(animals.join(' * '))

// Use a loop with your animals array, can you print the length of each animal name?

console.log('PRINT ANIMAL NAME LENGTHS')

// for (x = 0; x < animals.length; x++) {
//     console.log(`Animal 1 is named: ${animals[x]}, and has ${animals[x].length} letters`)
// }

animals.forEach( function(animal) {
    console.log(`Animal name: ${animal} Name Length: ${animal.length}`)
})

let animalNameLength = []
animals.forEach( function(animal) {
    let length = animal.length
    animalNameLength.push(length)
})

console.log(animalNameLength)