import mitt from 'mitt';

export default class Countdown {
  constructor() {
    const m = mitt();
    Object.assign(this, m);
  }

  decrement(totalSeconds) {
    this.getminutes(totalSeconds);
    this.getseconds(totalSeconds, this.minutesLeft);
  }

  start(secondsToGo, showMinutes) {
    this.seconds = secondsToGo;
    this.secondsLeft = secondsToGo;
    this.currentTime = Math.ceil(Date.now() / 1000);
    this.startTime = Math.ceil(Date.now() / 1000);
    this.interval = setInterval(() => this.reduceSecondsLeft(showMinutes), 1000);
  }

  get timeDifference() {
    return this.currentTime - this.startTime;
  }

  reduceSecondsLeft(showMinutes) {
    this.currentTime = Math.ceil(Date.now() / 1000);
    this.totalSeconds = this.seconds - this.timeDifference;
    this.secondsLeft = this.totalSeconds;

    if (showMinutes) {
      this.decrement(this.totalSeconds);
      this.emit('minutes-updated', this.minutesLeft);
    }

    this.emit('seconds-updated', this.secondsLeft);
    if (this.totalSeconds <= 0) {
      this.stop();
      this.emit('time-expired');
    }
  }

  stop() {
    clearInterval(this.interval);
  }

  getminutes(totalSeconds) {
    this.minutesLeft = Math.floor(totalSeconds / 60);
  }

  getseconds(totalSeconds, minutes) {
    // take mins remaining (as seconds) away from total seconds remaining
    this.secondsLeft = totalSeconds - Math.round(minutes * 60);
  }
}
