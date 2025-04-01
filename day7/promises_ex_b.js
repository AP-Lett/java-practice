function fetchScores() {
  return new Promise((resolve, reject) => {
    setTimeout (() => {
      const scores = [60, 70, 80, 90, 100]
      resolve(scores)
    }, 2000);
  });
}

console.log("Fetching scores");
fetchScores()
  .then((scores) => {
    const average = scores.reduce((sum, score) => sum + score, 0 ) / scores.length;
    return average;
  })
  .then((average) => {
    console.log("Average score:", average);
  })
  .catch((error) => {
    console.error("Error:", error);
  });