let animals = ["Dolphins", "Bats", "Whales"];
for (let k = 0; k < animals.length; k++) {
    if (animals[k] === "Dolphins") {
        console.log(`${animals[k]} are highly intelligent marine mammals known for their playful behavior and social structures. They use echolocation to navigate and hunt in murky waters.`);
    }
    else if (animals[k] === "Bats") {
        console.log(`${animals[k]} are the only mammals capable of sustained flight. They are nocturnal and play a crucial role in ecosystems by pollinating plants and controlling insect populations.`);
    }
    else if (animals[k] === "Whales") {
        console.log(`${animals[k]} are large marine mammals. Toothed whales, like sperm whales, have teeth and are known for their deep diving capabilities to hunt squid and fish.`);
    }
}
export {};
