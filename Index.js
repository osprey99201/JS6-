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

let example1 = {
    firstname: 'Dylan'
};