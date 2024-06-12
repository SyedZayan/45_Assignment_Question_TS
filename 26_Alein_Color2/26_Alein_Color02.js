// If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
let alien_Color = "Green";
if (alien_Color === "Green") {
    console.log("You just earned 5 points.");
}
else {
    console.log("you earned nothing");
}
// If the alien’s color isn’t green, print a statement that the player just earned 10 points.
let alien_Color1 = "red";
if (alien_Color1 === "Green") {
    console.log("You just earned 5 points.");
}
else if (alien_Color !== "green") {
    console.log("You earned 10 points");
}
else {
    console.log("you earned nothing");
}
// Write one version of this program that runs the if block and another that runs the else block.
let alien_Color2 = "yellow";
if (alien_Color2 === "yellow") {
    console.log("You shooted the right alein");
}
else {
    console.log("you shoot the wrong alein");
}
let alien_Color3 = "red";
if (alien_Color3 === "yellow") {
    console.log("You shooted the right alein");
}
else {
    console.log("you shooted the right 'yellow' alein");
}
export {};
