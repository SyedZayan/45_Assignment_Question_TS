//Task No-19:Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
let guestList = ["Shehroz", "shahzaam", "faraz"];
for (let i = 0; i <= 2; i++) {
    console.log(`Salam ,${guestList[i]} are invited to dinner tonight.`);
}
console.log(`${guestList[2]} can't came to dinner due to some Emergency`);
guestList.push("Hamza");
console.log(`${guestList[3]} you are invited to dinner tonight`);
//Adding More guest in the arrays:
guestList.push("Akbar");
guestList.push("fareed");
guestList.push("Ali");
console.log(guestList);
console.log(`Salam ,${guestList[3]} you are also invited to dinner tonight because I have found a bigger dinner table.`);
console.log(`Salam ,${guestList[4]} you are also invited to dinner tonight because I have found a bigger dinner table.`);
console.log(`Salam ,${guestList[5]} you are also invited to dinner tonight because I have found a bigger dinner table.`);
//Adding a new guest in the beginning of the arrays:
guestList.unshift("Aslam");
console.log(guestList);
//Adding a new guest in the middle of the arrays and Again sending invitation to guest:
guestList.splice(Math.floor(guestList.length / 2), 0, "Ajaz ");
for (let i = 0; i < guestList.length; i++) {
    console.log(`Dear ${guestList[i]},you are invited to dinner tonight..`);
}
//Number of the guest:
console.log(`The number of guest invited to dinner are "${guestList.length}".`);
export {};
