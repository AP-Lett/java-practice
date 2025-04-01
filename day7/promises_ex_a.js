function coinFlip() {
  return new Promise((resolve, reject) => {
    const random = Math.random();
    if (random < 0.5) {
      resolve("Heads");
    } else {
      reject("Tails");
    }
  });
}

coinFlip()
  .then((result) => {
    console.log("It is:", result);
  })
  .catch((error) => {
    console.error("It is:", error);
  });

console.log("The coin has been tossed.")