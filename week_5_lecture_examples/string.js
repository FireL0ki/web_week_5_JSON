// example of replace 

let text = 'The classes are itec 1150, itec 1250, itec 2560'

// replace will only change the first instance
let replaced = text.replace('itec', 'ITEC')
console.log(replaced)


// to replace all -- wrap in // ; g - for globally replace
let replacedAll = text.replace(/itec/g, 'ITEC')
console.log(replacedAll)

// Regular expression
// put the description of what is to be replaced inside / /, backslack d (\d) for numbers, 
// then the # of #s {#}, g for globally, comma, the string '$&'
let message = 'The classes are 1150, 1250, 2560'
let replaceRegex = message.replace(/\d{4}/g, 'ITEC $&')
console.log(replaceRegex)