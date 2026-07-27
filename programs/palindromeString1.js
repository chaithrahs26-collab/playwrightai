let str="gadag is a beautiful place to live in";
let splitoutput=str.split(' ');

let revStr=str.split('').reverse().join('');
console.log(revStr);
console.log(splitoutput);

if(str===revStr){
    console.log("String is palindrome");
}
else{
    console.log("String is not a palindrome")
}