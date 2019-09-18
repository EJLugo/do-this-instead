var nameVar = 'Evelyn';
var nameVar = 'Mike';
console.log('nameVar', nameVar);

let nameLet = 'Jen';
nameLet = 'Julie';
console.log('nameLet', nameLet);

const nameConst = 'Maria';
console.log('nameConst', nameConst);



function getPetName() {
    const petName = 'Alfie';
    return petName;
}
// block scoping

const fullName = 'Evelyn Lugo';
let firstName;

if (fullName) {
    firstName = fullName.split(' ')[0];
    console.log(firstName);
}

console.log(firstName);