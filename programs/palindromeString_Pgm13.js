let str ="Chaithra";
let revStr = "";

for(let i=str.length-1;i>=0;i--){
    revStr = revStr+str[i];
    console.log(revStr);
}
if(str===revStr){
    console.log("String is Palindrome");
}
else{
    console.log("String is not a Palindrome");
}