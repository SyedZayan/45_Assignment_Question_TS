function make_Tshirts(
  size: string = "Large",
  message: string = "I love Typescript"
) {
  console.log(`The shirts size is ${size} and the message is ${message}.`);
}
//With Default Message:
make_Tshirts();
//With Medium Size and differnt message:
make_Tshirts("Medium", "Typescript is Easy to learn for Beginner");
