console.log("Hello World");
/* Multi line comment
which spans accross multiple lines
and gives more explanation to the user.
*/

//Message on ATM machine

console.log("You are not supposed to withdraw more than 20k");
console.log("Daily limit is 10k");
console.log("We are good with first program");

//Variable : is used to store the value
//let,var, const are the keywords

let name ="Chaithra";
let petrolprice=108;
let status=true;
let marks=[75,60,83,75];
let nextbatch;
let abc=null;

console.log("----------------------------");
console.log(typeof(name));
console.log(typeof(petrolprice));
console.log(typeof(status));
console.log(typeof(marks));
console.log(typeof(nextbatch));
console.log(typeof(abc));

//data types - primitive data types - string, number,boolean,undefined,symbol.biginit
//non primitive data type - objects, arrays, null

let basic =50000;
let pf=10000;
let taxAmount =20000;
let performanceRating =3*3;
let joyFund=2000/10;

let salary=basic+pf;
console.log(salary);

let deduction=basic+pf-taxAmount;
console.log(deduction);

console.log(performanceRating);

console.log(joyFund);

let number = 20;
let divider =3;
let remainder = number%divider;
console.log(remainder);

//number ---- divided by 2--- reminder 1 --- odd
//number ---- divided by 2 --- reminder 0 --- even

//comparion operators -- >,<,>=,<=,==, ===, !=

let x=20;
let y=30;

console.log(x>y);
console.log(x<y);
console.log(x>=y);
console.log(x<=y);
console.log(x==y);
console.log(x===y);
console.log(x!=y);

//if else statement
let myCetPercentage = 999;

if(myCetPercentage<1000){
    //this will execute if the above statement is true
    console.log("You are eligible for medical seat");
}
else{
    console.log("You are not eligible for medical seat.!");
}