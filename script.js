
  document.getElementById("votingForm").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const age = document.getElementById("age").value.trim();

    if (name === "" || age === "") {
      alert("Please enter valid details.");
      return; // ✅ Valid: inside a function
    }

    const ageNumber = Number(age);

    const myAgePromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (ageNumber > 18) {
          resolve(name);
        } else {
          reject(name);
        }
      }, 4000);
    });

    myAgePromise
      .then((userName) => {
        alert(`Welcome, ${userName}. You can vote.`);
      })
      .catch((userName) => {
        alert(`Oh sorry ${userName}. You aren't old enough.`);
      });
  });

