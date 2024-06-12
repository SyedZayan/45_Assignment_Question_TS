let magicians = [
    "HARRY HOUDINI",
    "JEAN HUGARD",
    "BURLING HULL",
    "RICKY JAY",
];
function show_magicians(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(magicians[i]);
    }
}
show_magicians(magicians);
// modifing magician:
function make_great(magician) {
    for (let i = 0; i < magicians.length; i++) {
        console.log(`Great ${magicians[i]}`);
    }
}
make_great(magicians);
export {};
