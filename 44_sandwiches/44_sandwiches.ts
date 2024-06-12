function makeSandwich(...items: string[]): void {
  console.log("Making a sandwich with the following items:");
  for (let item of items) {
    console.log(item);
  }
  console.log("Enjoy your sandwich!");
}

// Call the function with different sets of arguments
makeSandwich("Ham", "Cheese", "Lettuce", "Tomato");
makeSandwich("Turkey", "Swiss cheese", "Pickles");
makeSandwich("Peanut butter", "Jelly");
