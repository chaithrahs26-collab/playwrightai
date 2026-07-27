let n=5;
let fact = 1;

if (n < 0) {
    console.log("Enter the positive number greater than zero");
} else {
    while(n>1){
        fact = fact*n;
        n--;
    }
    console.log("Factorial of given number is " + fact);
}