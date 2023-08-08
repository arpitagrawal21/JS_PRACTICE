let text = "321";

let num = Number(text);
console.log(num);

text = "213ab";
num = Number(text);
console.log(num);

text = "arpit";
num = Number(text);
console.log(num);

text = true;
num = Number(text);
console.log(num);

text = null;
num = Number(text);
console.log(num);

text = undefined;
num = Number(text);
console.log(num);


// "321"=>321
//"213ab"=>NaN
//"arpit"=>NaN
//true=>1 false=>0
//null=>0
//undefined=>NaN