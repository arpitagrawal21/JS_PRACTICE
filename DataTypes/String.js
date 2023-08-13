let str = "  I am a Web Developer";

console.log(str.length)
//22

console.log(str.substring(0,4));
//  I 

console.log(str.slice(-9,str.length));
//Developer

console.log(str.trim());
//I am a Web Developer

console.log(str.charAt(4));
//a

console.log(str.indexOf("a"));
//4

console.log(str.toUpperCase());
//  I AM A WEB DEVELOPER

console.log(str.toLowerCase());
//  i am a web developer

console.log(str.includes("Developer"));
//true

console.log(str.split(" "));
// [ '', '', 'I', 'am', 'a', 'Web', 'Developer' ]

console.log(str.replace("Web","Software"));
//  I am a Software Developer













