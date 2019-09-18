// const square = function (x) {
//     return x * x
// };

// // const squareArrow = (x) => {
// //     return x * x
// // };

// const squareArrow = (x) => x * x;


// console.log(squareArrow(4));

const getFirstName = (fullName) => {
    return fullName.split(' ')[0];
}

console.log(getFirstName('Evelyn Lugo'));

const getFirstNameArrowTwo = (fullName) => fullName.split(' ')[0];

console.log(getFirstNameArrowTwo('Audrey Hepburn'));
