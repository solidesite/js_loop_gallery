const box = document.querySelector('.box').cloneNode(true);
const gall = document.querySelector('.gall');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');

gall.append(box)

let num = 0;
let speed = 1;

function motion() {
  num -= 2*speed;
  gall.style.left = num + 'px';
  if (num < -1200) {
    num = 0;
  } else if (num > 0) {
    num = -1200;
  }
}

function play() {
  setInterval(motion, 10);
}
play();

leftBtn.addEventListener('click', ()=>{
  speed *= -1;
})