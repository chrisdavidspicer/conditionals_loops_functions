// you can delete this log one you're sure that this file is linked correctly

// 1) Count to 10! Print the numbers between 1 and 10. Do this once with a for loop, then again with a while loop. Beware the infinite while loop!

for (let i = 1; i < 11; i++) {
    console.log(i)
}

let i = 1
while (i < 11) {
    console.log(i)
    i++
}

// 2) Count from 20 to 100 in multiples of 5, one with a for loop and once with a while

for (let i = 20; i < 101; i = i + 5) {
    console.log(i)
}

let x = 0
while (x < 100) {
    console.log(x)
    x++
}

// 3) Make an array that contains your 5 favorite foods, stored as strings. Loop through this array, and print "I love <food>!" for each one.

let favoriteFoods = ["pizza", "burgers", "mac and cheese", "lasagna", "fish tacos"]

for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(`I love ${favoriteFoods[i]}`)
}

// 4) Create a variable called numbers that starts off as an empty array. Use a loop to push the numbers 1 through 5 into this array. 
// You'll need to use the .push method of your array, google it!

let numbers = []

for (let i = 1; i < 6; i++) {
    numbers.push(i)
}
console.log(numbers);


// 5) Create a variable called squaredNumbers that starts off as an empty array. Loop through the numbers variable (from exercise 4),
// and for each one, push that number squared into the squaredNumbers array. (To square a number, multiple it by itself!)

let squaredNumbers = []

for (let i = 1; i <= numbers.length; i++) {
    squaredNumbers.push(i * i)
}
console.log(squaredNumbers);

// 6) Create an object that contains the names of 3 friends as keys, with each key pointing to that friend's age.
// (It is ok to guess your friends' ages.) Assign this object to a variable called friends. Loop through this object, and for each key-value pair, print "<name> is <age> years old"