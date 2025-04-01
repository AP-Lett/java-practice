function loadUserData(callback) {
  setTimeout(() => {
    const userData = { firstName: "Ruger", lastName: "Booger" };
    console.log("The following user data has been loaded:");
    callback(userData);
  }, 5000);
}

function formatUserData(userData, callback) {
  setTimeout(() => {
    const formattedData = `User: ${userData.firstName} ${userData.lastName}`;
    console.log("User data has been formatted.")
    callback(formattedData);
  }, 2500);
}

console.log("Now loading user data");
loadUserData((userData) => {
  formatUserData(userData, (finalString) => {
    console.log(finalString);
  });
});