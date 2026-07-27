let age=17;
let drivingLicense = true;

if(age>=18 && drivingLicense==true){
    console.log("Person is eligible to drive");
}
else{
    console.log("Person is not eligible to drive");
}

//making use of || operator
if(age>=18 || drivingLicense == true){
    console.log("Person is eligible for driving");
}
else{
    console.log("Person is not eligible for driving")
}
