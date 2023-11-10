let nightMode = false;
const body = document.body;
const brushstroke = document.querySelector(".brushstroke");

brushstroke.addEventListener("click", function () {
  nightMode = !nightMode;
  body.classList.toggle("artwork--night", nightMode);
  brushstroke.classList.toggle("brushstroke--night", nightMode);
  document.title = nightMode ? "Starry Night" : "Sunny Day";
});
