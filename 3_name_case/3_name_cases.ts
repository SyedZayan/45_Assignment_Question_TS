//Task No-03:Names Cases:Store a person's name in variable,and then print that person's name in lowercase,uppercase and title case.

let peronName: string = "aghA FaSeeh";
console.log(peronName.toLowerCase()); //toLowerCase
console.log(peronName.toUpperCase()); //toUpperCase
console.log(
  peronName.charAt(0).toUpperCase() + peronName.slice(1).toLowerCase()
); //totitleCase
console.log(
  peronName.charAt(0).toUpperCase() +
    peronName.slice(1, 4).toLowerCase() +
    " " +
    peronName.charAt(5).toUpperCase() +
    peronName.slice(6).toLowerCase()
); //If you want your first and last name first letter capital.
