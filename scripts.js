
// COUNTDOWN WITH LOCALSTORAGE (To save the number and if you refresh the Page, the countdown is still at the same time)

let date = localStorage.getItem('date');

if (!date) {
  const currentDate = new Date();
  currentDate.setDate(currentDate.getDate() + 30);
  date = currentDate.toISOString();
  localStorage.setItem('date', date);
} else {

  date = new Date(date);
}

const daysP = document.getElementById('days')
const hoursP = document.getElementById('hours')
const minutesP = document.getElementById('minutes')
const secondsP= document.getElementById('seconds')

const updateCountdown = () => {
  const currentDate = new Date();
  const timeRemaining = date - currentDate;

  if (timeRemaining <= 0) {
    clearInterval(interval);
    document.getElementById('countdown').innerHTML = 'Countdown has ended!';
  } else {
    const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

    daysP.innerHTML = `${days}`
    hoursP.innerHTML = `${hours}`
    minutesP.innerHTML = `${minutes}`
    secondsP.innerHTML = `${seconds}`

  }
}

updateCountdown();
const interval = setInterval(updateCountdown, 1000);


// ANSWERS AND QUESTIONS HIDDEN/SHOW

const questions = document.querySelectorAll('.question');
const answers = document.querySelectorAll('.answer');

questions.forEach((question, index) => {
  question.addEventListener('click', () => {

    question.classList.toggle('active');


    const answer = answers[index];1
    if (answer.style.display === 'block') {
      answer.style.display = 'none';
    } else {

      answers.forEach((otherAnswer) => {
        if (otherAnswer !== answer) {
          otherAnswer.style.display = 'none';
        }
      });
      answer.style.display = 'block';
    }
  });
});


// MOBILE BTN

const mobileBtn = document.getElementById('mobileBtn');
const mobileNavDiv = document.getElementById('mobileNav');

mobileBtn.addEventListener('click', function() {
    
    if(mobileNavDiv.style.display == '' || mobileNavDiv.style.display == 'none'){
            mobileNavDiv.style.display = 'flex'
            }
})


// MOBILE MENU ANIMATION AND CLOSE

const closeBtn = document.getElementById('closeBtn')

closeBtn.addEventListener('click', function(){

    mobileNavDiv.classList.add('upwards');
    setTimeout(() => {
        mobileNavDiv.style.display = 'none'
        mobileNavDiv.classList.remove('upwards');
    },500)

})

