// create an object - contains properties
// properties are name: value pairs

// [] = array // {} = object

let user = { username: 'Loki', password: 'Spock'}

// two ways to print the username
console.log(user.username) 
console.log(user['username'])  

console.log(user.password)
console.log(user['password'])


let whatProperty = 'password'
console.log(user[whatProperty])

let usernameProperty = 'username'
console.log(user[usernameProperty])


// change passsword
user.password = 'elephant'
console.log(user)

user['password'] = 'alligator'
console.log(user)

user.email = 'loki@minneapolis.edu'
console.log(user)
console.log(user.email)


let user2 = {
    username: 'Loki',
    email: 'loki@starfleet.nss',
    password: 'spock',
    roles: ['Developer', 'Programmer'],
    contact: {
        location: 'Iowa',
        phone: '5545558'
    }

}

user2.salary = 54444
user2.roles.push('security analyst')
user2.contact.city = 'Minneapolis'

console.log(user2)
