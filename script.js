const name = document.getElementById("name").value.trim();
const age = document.getElementById("age").value.trim();

/* Validation */
if (name === "" || age === "") {
  alert("Please enter valid details.");
  return;
}

/* Convert age to number */
const ageNumber = Number(age);

/* Create Promise */
const myAgePromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (ageNumber > 18) {
      resolve(name);
    } else {
      reject(name);
    }
  }, 4000);
});

/* Handle Promise */
myAgePromise
  .then((userName) => {
    alert(`Welcome, ${userName}. You can vote.`);
  })
  .catch((userName) => {
    alert(`Oh sorry ${userName}. You aren't old enough.`);
  });
