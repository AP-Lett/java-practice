function loadNames(namesArray, callback) {
  setTimeout(() => {
    console.log("The following names have been loaded:");
    callback(namesArray);
  }, 5000);
}
const names = ["Hop", "Skip", "Jump"]

loadNames(names, (loadedNames) => {
  loadedNames.forEach((name) => {
    console.log(name);
  });
});

console.log("Now loading names");