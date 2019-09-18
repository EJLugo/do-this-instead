// const add = (a, b) => {
//     console.log(arguments)
//     return a + b;
// };

// console.log(add(2, 3, 1001));

// this keyword -  no longer bound

const user = {
    name: 'Evelyn',
    cities: ['Denver', 'San Francisco', 'New York'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};
console.log(user.printPlacesLived());

//challenge!

const multiplier = {
    numbers: [2, 4, 6],
    multiplyBy: 5,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
};

console.log(multiplier.multiply());