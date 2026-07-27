let arr=[1,2,4,6,8,9,10,12,14,15,16,18,20,21,25,27];
let evenNumber=[];
let oddNumber=[];

for(let i=0;i<arr.length;i++){
    if(arr[i] %2==0){
        evenNumber.push(arr[i]);
    }
    else{
        oddNumber.push(arr[i]);
    }
}

console.log(evenNumber);
console.log(oddNumber);

console.log(evenNumber.length);
console.log(oddNumber.length);

if(evenNumber.length>oddNumber.length){
    console.log("Even Number array has more number of elements than odd numbers");
}
else{
    console.log("Odd Number array has more number of elements than even numbers");
}