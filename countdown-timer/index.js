const monthsEl = document.getElementById('months')
const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

const inCroatia = '1 May 2022';

function countDown() {
  const endDate = new Date(inCroatia)
  const currentDate = new Date();

  const totalSeconds = (endDate - currentDate) / 1000;
  const seconds = Math.floor(totalSeconds) % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600) % 24;
  const days = Math.floor(totalSeconds / 3600 / 24);
  const months = Math.floor(totalSeconds / 3600 / 24 * 0.032855);


  monthsEl.innerHTML = months;
  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds;


}


countDown()

setInterval(() => {
  countDown()
}, 1000)