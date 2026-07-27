let num = [75,87,55,48,67,87,99,120,37,258];

let max=num[0];
let min=num[0];

for(let i=1;i<num.length;i++){
    if(num[i]>max){
        max=num[i];
    }
}
for(let i=1;i<num.length;i++){
    if(num[i]<min){
        min=num[i];
    }
}
console.log("Maximum value is: ",+max);
console.log("Minimum value is: ",+min);