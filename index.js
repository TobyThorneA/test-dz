const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

const createTimerAnimator = (numbers) => {
  
  const time = new Date(numbers * 1000); 
  const seconds = time.getUTCSeconds();  
  const minutes = time.getUTCMinutes();  
  const hours = time.getUTCHours(); 

  return {
      seconds, minutes, hours
  }
  
};

inputEl.addEventListener('input', () => {
  // Очистите input так, чтобы в значении
  // оставались только числа
  inputEl.setAttribute('type', 'number')
});

buttonEl.addEventListener('click', () => {
  let seconds = Number(inputEl.value);
  const animateTimer = createTimerAnimator(seconds)

  timerEl.textContent = `
    ${animateTimer.hours.toString().padStart(2, 0)} 
    : ${animateTimer.minutes.toString().padStart(2, 0)} 
    : ${animateTimer.seconds.toString().padStart(2, 0)} 
  `

  setInterval(() => {
    if(seconds < 1){
      return ''
    }
    const animateTimer = createTimerAnimator(seconds - 1)

    timerEl.textContent = `
      ${animateTimer.hours.toString().padStart(2, 0) } 
      : ${animateTimer.minutes.toString().padStart(2, 0)} 
      : ${animateTimer.seconds.toString().padStart(2, 0)} 
    `
  }, 1000)
  

  inputEl.value = '';
});
