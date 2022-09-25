let numContainer = document.getElementById("num");
let value = 0;
// initializing variables to button values with the help of Document Object Model(DOM) [DOM IMPLEMENTATION]
let IncreementButton = document.querySelector(".inc");
let DecreementButton = document.querySelector(".dec");
let ResetButton = document.querySelector(".reset");

// Implementing Event listeners for the operations along with arrow functions

// increeement operation using arrow function
IncreementButton.addEventListener("click", () => {
  value++;
  numContainer.textContent = value;
});
// decreement operation with conditional statement to stop the counter value from reducing below 0 (as asked in the question)
DecreementButton.addEventListener("click", () => {
  value--;
  
  if (value<1)
  {
    value = 0;
  }
  numContainer.textContent = value;
});
// reset operation using arrow function
ResetButton.addEventListener("click", () => {
  value = 0;
  numContainer.textContent = value;
});
