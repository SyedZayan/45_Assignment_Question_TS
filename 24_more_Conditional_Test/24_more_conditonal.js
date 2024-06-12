//Equality test with string:
console.log("Equality test with string:", "Banana" === "Banana");
console.log("Equality test with string:", "Apartment" === "Apartment");
//Inequality test with string:
console.log("Inequality test with string:", "Banana" != "banana");
console.log("Inequality test with string:", "Apartment" != "House");
//Test for using Lower case Function:
let name = "Agha Faseeh";
console.log("Test for using lower case function:", name.toLowerCase() == name);
console.log("Test for using lower case function:", name.toLowerCase() == name.toLowerCase());
// Numerical tests involving equality and inequality:
let a = 56;
let b = 65;
let c = 45;
//Greater than:
console.log("'a' is greater than 'b'", a > b);
//less than:
console.log("'c' is less than 'a'", c < a);
//Greater than and equal to:
console.log("'a' is greater than and equal 'b'", a >= b);
//less than and equal to:
console.log("'c' is less than and equal to 'a'", c <= a);
// Tests using "and" and "or" operators:
// 'And' Operator:
let carName = "Toyota Corolla";
let carName2 = "Honda Civic";
if (carName == "Toyota Corolla" && carName2 == "Honda Civic") {
    console.log("You have two car ", true);
}
else {
    console.log("You don't have a car", false);
}
// Or Operator:
let yourClass = 8;
if (yourClass == 5 || yourClass == 7 || yourClass == 8) {
    console.log("Come to Room Number C8:", true);
}
else {
    console.log("Come to Room Number C7");
}
// Test whether an item is in a array:
let rollNo = [46, 47, 48, 49, 50];
console.log("Is Roll Number 46 present in Class :", rollNo.includes(46));
console.log("Is Roll Number 47 present in Class :", rollNo.includes(47));
console.log("Is Roll Number 48 present in Class :", rollNo.includes(48));
console.log("Is Roll Number 49 present in Class :", rollNo.includes(49));
console.log("Is Roll Number 50 present in Class :", rollNo.includes(50));
// Test whether an item is in a array:
console.log("Is Roll Number 51 present in Class :", rollNo.includes(51));
console.log("Is Roll Number 52 present in Class :", rollNo.includes(52));
console.log("Is Roll Number 53 present in Class :", rollNo.includes(53));
console.log("Is Roll Number 54 present in Class :", rollNo.includes(54));
console.log("Is Roll Number 55 present in Class :", rollNo.includes(55));
export {};
