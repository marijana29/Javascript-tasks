let counter = document.querySelector("main");
let count = 0;
let counterLabel = document.getElementById("counter");
let steps = 0;

function updateCounter() {
  count += 1;
  counterLabel.textContent = count;
  steps += 1;

  let counterPercentage = steps % 100;

  counter.style.setProperty("--counter", counterPercentage + "%");

  if (steps === 100) {
    steps = 0;
    counter.style.setProperty("--counter", "0%");
  }
}

counter.addEventListener("click", updateCounter);
document.addEventListener("keypress", function (e) {
  if (["Enter", " "].includes(e.key)) {
    updateCounter();
  }
});

let reset = document.querySelector("button");

reset.addEventListener("click", function () {
  count = 0;
  counterLabel.textContent = count;
  steps = 0;
  counter.style.setProperty("--counter", "0%");
});
