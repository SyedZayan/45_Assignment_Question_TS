let current_users: string[] = ["Kamran", "Asif", "Asim", "raheel", "Raahim"];
let new_users: string[] = ["Huzaifa", "asif", "ASim", "Aslam", "Saad"];
let current_users_lower = current_users.map((user) => user.toLowerCase());
for (let new_user of new_users) {
  if (current_users_lower.includes(new_user.toLowerCase())) {
    console.log(
      `The username '${new_user}' is already taken. Please enter a new username.`
    );
  } else {
    console.log(`The username '${new_user}' is available.`);
  }
}
