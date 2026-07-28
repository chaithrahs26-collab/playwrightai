//Program 12 - WAP to count number of vowels in given string

let str = "Chaithra";
let count = 0;

str = str.toLowerCase();

for(let i=0;i<str.length;i++){
    if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
        count++;
    }
}
console.log("Number of vowels in the given string is: " + count);
