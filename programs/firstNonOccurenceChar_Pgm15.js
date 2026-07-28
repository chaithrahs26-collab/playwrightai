//Program 15 : WAP to find first non occurrence character in a given string

let string = "hariharabrahma";

for(let char of string){
    if(string.indexOf(char) === string.lastIndexOf(char)){
        console.log(char +" is the first non repeating character")
        break;
    }
}