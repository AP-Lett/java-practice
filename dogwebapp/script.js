console.log('js is connected!!!');

const fetchButton = document.getElementById('fetch-button');
const dogImage = document.getElementById('dog-image');
const trainingLevel = ['Good Dog In Progress', 'Good Dog', 'Great Dog', 'The Bestest Dog'];
const trainingLevelSpan = document.getElementById('training-level');
const dogNameSpan = document.getElementById('dog-name');

function getRandomTrainingLevel() {
  const randomIndex = Math.floor(Math.random() * trainingLevel.length);
  return trainingLevel[randomIndex];
}

fetchButton.addEventListener('click', async () => {
  try {
    fetchButton.disabled = true;
    fetchButton.textContent = 'Loading...';

    const response = await fetch('https://dog.ceo/api/breed/dachshund/images/random');

    if (!response.ok) {
      throw new Error(`HTTP error. Status: ${response.status}`);
    }

    const data = await response.json();
    dogImage.src = data.message;
    dogImage.alt = 'Dachshund';

    const level = getRandomTrainingLevel();
    trainingLevelSpan.textContent = `Training Level: ${level}`;

    const dogName = faker.name.firstName();
    dogNameSpan.textContent = `Name: ${dogName}`;

  } catch (error) {
    console.log('Error', error);
  } finally {
    fetchButton.disabled = false;
    fetchButton.textContent = 'Generate Doxie!';
  }
});