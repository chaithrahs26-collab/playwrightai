let arr = [10,20,30,10,40,50,30,20,70];
let newArr =[];

for(let i=0;i<arr.length;i++){
    if(!newArr.includes(arr[i])){
        newArr.push(arr[i]);
    }
}
console.log("After removing duplicates, the array is: " + newArr);