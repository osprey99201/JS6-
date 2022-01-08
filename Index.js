//let word1 = 'saad'
//let word2 = '99201'
//let num1 = 3
//let num2 = 3
//const fullname = `${num1 + num2} ${word2}`
//let example = `${word1} ${word2}`
//console.log(fullname)
//console.log(example);
//document.getElementById('example').innerText = example;

// -----------DESTRUCTURING OBJECTS-----------//
/* 
 const personalInformation = 
   firstName:'saad',
    lastName:'Osama' ,
    city:'Austin',
    state:'NY',
    zipCode:'5005'
 }

 const {firstName: fn, lastName: ln} = personalInformation;
 console.log(`${fn} ${ln}`) */
 
 //------------DESTRUCTURING ARRAYS-----------//

 /*let [firstName, middleName, lastName] = ['Saad' ,'Coding god','Osama'];

lastName = 'Clements';


 console.log(firstName + lastName) */

 //------------------OBJECT LITERAL---------------/
/*function addressMaker(city, state) {
     const newAdress = {city ,state};
 
 console.log(newAdress)
    }
    addressMaker('Austin', 'Maker')*/
 /* function addressMaker(address) {
        const{city,state} = address;

        const newAddress = {
    
            city,
            state,
            country: 'United states'
        };
console.log(`${newAddress.city},${newAddress.state},${newAddress.country} `)

    }

addressMaker({city: 'saad', state: 'Texas'}) */

//------------------FOR LOOP

/*
let fullName = ["saad is cool"];
let total = 0;

for (const char of fullName) {
    console.log(char);

} */

//----------------------SPREAD OPREATOR

/* let example1 = [1,2,3,4,5,6]
let example2 = [...example1]
example2.push(true)

console.log(example2); */

//let example1 = {
//    firstname: 'Dylan'
//};

/*function add(...nums) {

    console.log(nums)
}
add(5,3,5)*/

//=======================REST OPREATOR/ARROW FUNCTIOS

//function add(...nums) {

  //  let total = nums.reduce((x, y) => x*y )
   // console.log(total)
//}

//add(4,4,)
//-------------------DEFAULT PARAMAS

/* function add(numArray = []) {
    let total = 0;
    numArray.forEach((element) => {
        total+= element;
    });
    console.log(total);
} */

//========================INCLUDES
/*
let numArray = [1,2,3,4,5,6];

console.log(numArray.includes(2))
*/
//--------------------LET/const
/*
const example = {};
example.firstName = 'Saad'

console.log(example) 


importexport */ /*

import { data } from './example.js'
let updateddata = data;

updateddata.push(5)
console.log(data) */

//========================================padstarts 
/*
let example = 'Saad'



console.log(example.padEnd(10, 'a')) */

/*

import { Animal } from './animal.js';

let cat = new Animal (cat, 4)

console.log(cat.legs)

