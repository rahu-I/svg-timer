class Timer {
  constructor(durationInp, startBtn, pauseBtn, callbacks) {
    this.durationInp = durationInp;
    this.startBtn = startBtn;
    this.pauseBtn = pauseBtn;

    if (callbacks) {
      this.onStart = callbacks.onStart;
      this.onTick = callbacks.onTick;
      this.onComplete = callbacks.onComplete;
    }

    this.startBtn.addEventListener("click", this.start.bind(this));
    this.pauseBtn.addEventListener("click", this.pause.bind(this));
  }

  start() {
    if (this.onStart) {
      this.onStart(this.timeRemaining); //total time
    }
    this.tick(); //for the first time
    this.intervalId = setInterval(this.tick.bind(this), 50);
  }

  pause() {
    clearInterval(this.intervalId);
  }

  tick() {
    if (this.timeRemaining === 0) {
      this.pause();
      if (this.onComplete) {
        this.onComplete();
      }
    } else {
      this.timeRemaining = this.timeRemaining - 0.05; //to correspond to 50 ms in setInterval
      if (this.onTick) {
        this.onTick(this.timeRemaining);
      }
    }
  }

  get timeRemaining() {
    return parseFloat(this.durationInp.value);
  }

  set timeRemaining(time) {
    this.durationInp.value = time.toFixed(2); //round the decimal to two decimal places
  }
}
