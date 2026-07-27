let marks = [75,60,83,75]
console.log(typeof(marks));
console.log("Length of an array is:", marks.length); // length of an array

let length = marks.length;

// console.log(marks[0]);
// console.log(marks[1]);
// console.log(marks[2]);
// console.log(marks[3]);

// for(let i=0;i<length;i++){
//     console.log(marks[i]);
// }

//add the array elements using push

marks.push(85);
marks.push(81);

console.log(marks.length);
console.log(marks);
marks.pop(); // removes last element in an array
console.log(marks);
marks.unshift(100); // unshift function will add the element to the first place
console.log(marks);
console.log(marks.length);


let fruits = ['Apple','Banana','Orange','Grapes']
console.log(fruits);
console.log(typeof(fruits));
console.log("******************************");
fruits.sort();
console.log(fruits);
console.log("******************************");
fruits.sort().reverse();
console.log(fruits);
