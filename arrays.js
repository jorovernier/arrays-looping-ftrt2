/// Arrays Demo

const pets = ['gogi', 'Macy'];

// Accessing elements with an index
console.log(pets[1])

// Reassigning items
pets[0] = 'Gogi'
console.log(pets)

// Indexing with a variable works too
let firstIndex = 0
console.log(pets[firstIndex])

// Get the length of an array
console.log(pets.length)

// Get the last element of an array
console.log(pets[pets.length - 1])


// Iterating with for...of

// To format text
const names = ['joely', 'dj', 'scott', 'joseph', 'noah']

for(const name of names){
    let firstLetter = name[0]
    let splitName = name.split(firstLetter)
    firstLetter = firstLetter.toUpperCase()
    console.log(firstLetter + splitName[1])
}

// To increment values
const numbers = [1,2,3,4,5]

for(let num of numbers){
    num += 2
    // ^shorthand for this: num = num + 2
    console.log(num)
}


const fruits = ['apple', 'banana', 'orange']

// Iterating with a while loop
let i = 0
while(i < fruits.length){
    console.log(fruits[i])
    i++
    // ^shorthand for this: i += 1
}


// Iterating with a "generic" for-loop
for(let j = 0; j < fruits.length; j++){
    console.log(fruits[j])
}


// Array methods

// .push() adds an element to the end of an array
pets.push('Strider')
pets.push('Jasper')
pets.push('Goyangi', 'Tokki')

console.log(pets)

// .pop() removes the last element from an array

let scottCat = pets.pop()

console.log(pets, scottCat)

// .unshift() adds an element to the beginning of an array
pets.unshift(scottCat)
console.log(pets)

// .shift() removes the first element from an array
pets.shift()
console.log(pets)

// .includes()
console.log(pets.includes('Macy'))
console.log(pets.includes('Tokki'))

// .indexOf()
console.log(pets.indexOf('Macy'))
console.log(pets.indexOf('Tokki'))

if(pets.indexOf('Tokki') === -1){
    console.log('404 pet not found')
}

// .slice() with a start and end index returns a subarray
let studentPets = pets.slice(2, pets.length)
console.log(studentPets)

// .slice() with no arguments returns a copy of an array
let petsCopy = pets.slice()
console.log(petsCopy)

// .splice() removes elements from an array and optionally adds new elements
let scottOtherCat = pets.splice(4, 1)
pets.splice(4, 0, scottOtherCat[0], scottCat)

console.log(pets)