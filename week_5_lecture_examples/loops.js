let birds = ['Owl', 'Robin', 'Eagle']  // behaves more like a Python array, can add to it, unlike in Java / C#
console.log(birds)

birds.forEach( function(bird, index) {
    // repeat once for each object in array
    // function will be called for each object in the array
    console.log(index, bird.toUpperCase())
})

// Traditional for loop -- similar to Java
for (let x = 0; x < birds.length; x = x + 1) {  // can write x = x + 1 as x++
    let bird = birds[x]
    console.log(x, bird.toUpperCase())
}