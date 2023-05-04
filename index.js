const inputEl = document.querySelector('input');
const buttonEl = document.querySelector('button');
const timerEl = document.querySelector('span');

// Напишите реализацию createTimerAnimator
// который будет анимировать timerEl
let timerId;
timerEl.innerHTML = '0:0:00'
const createTimerAnimator = (value1) => {
     count = value1; 
          seconds = count%60
          minuts = count/60%60
          hour = count/60/60%60
          let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;       
          timerEl.innerHTML = strTimer;
    let timerId = setInterval(function() {
        count--;
        if (count <= 0){  
          clearInterval(timerId)
          timerEl.innerHTML = '0:0:00'
          }
        else if (count > 0) {   
          seconds = count%60
          minuts = count/60%60
          hour = count/60/60%60
          strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;       
          timerEl.innerHTML = strTimer;
        }
          
      }, 1000);
    
      
};

// const animateTimer = createTimerAnimator();

inputEl.addEventListener('input', () => {
  
  inputEl.value = inputEl.value.replace(/[^\d.]*/g, '')
  .replace(/([.])[.]+/g, '$1')
  .replace(/^[^\d]*(\d+([.]\d{0,5})?).*$/g, '$1');
});


buttonEl.addEventListener('click', () => {
  const seconds = Number(inputEl.value);
  clearInterval(timerId)
  
  createTimerAnimator(seconds);
  
  inputEl.value = '';
});
