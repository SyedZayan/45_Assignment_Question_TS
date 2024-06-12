let personAge: number = 17;
if (personAge < 2) {
  console.log("The person is a baby");
} else if (personAge === 2 || personAge < 4) {
  console.log("The person is toddler");
} else if (personAge < 4 || personAge < 13) {
  console.log("The person is a kid");
} else if (personAge === 13 || personAge < 20) {
  console.log("The person is teenager");
} else if (personAge === 20 || personAge < 65) {
  console.log("The person is adult");
} else {
  console.log("The person is elder");
}
