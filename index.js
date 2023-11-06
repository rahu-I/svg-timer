const durationInp = document.getElementById("duration");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");

const circle = document.querySelector("circle");
const perimeter = 2 * Math.PI * circle.getAttribute("r");
circle.setAttribute("stroke-dasharray", perimeter);
let duration;

const timer = new Timer(durationInp, startBtn, pauseBtn, {
  onStart(totalDuration) {
    duration = totalDuration;
  },
  onTick(timeRemaining) {
    circle.setAttribute(
      "stroke-dashoffset",
      (perimeter * timeRemaining) / duration - perimeter
    );
  },
  onComplete() {
    console.log("Timer completed");
  },
});
