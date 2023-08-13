//There are two types of Datatypes.
//Primitive Datatypes And Non-Primitive(Reference) Datatypes


// Primitive Datatypes
// 1.String
// 2.Number
// 3.Boolean
// 4.Undefined
// 5.Null
// 6.Symbol
// 7.BigInt

//store in Stack Memory

// NoN-Primitive Or Reference Datatypes
// Array
// Object
// Function

// store in Heap Memory


let userName = "arpit";
let NameofUser= userName;

NameofUser = "Yuvraj";

console.log(userName); //arpit 
console.log(NameofUser); //yuvraj 

//(not changing orignal value)


const studentData = ["arpit","aman","akshay","honey"];

let mySchoolStudents = studentData;

mySchoolStudents.push("sourabh");

console.log(studentData);   //[ 'arpit', 'aman', 'akshay', 'honey', 'sourabh' ]
console.log(mySchoolStudents);  //[ 'arpit', 'aman', 'akshay', 'honey', 'sourabh' ]

// (original Array also change )




