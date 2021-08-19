const secondsEl = document.getElementById('seconds')

const inCroatia = '1 May 2022';

function countDown() {
  const endDate = new Date(inCroatia)
  const currentDate = new Date();

  const totalSeconds = (endDate - currentDate) / 1000;
  const seconds = Math.floor(totalSeconds) % 60;

  secondsEl.innerHTML = seconds;

  console.log(seconds)
}


countDown()

// setInterval(() => {
//   countDown()
// }, 1000)