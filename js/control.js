const box = document.querySelector('.box').cloneNode(true);
const gall = document.querySelector('.gall');

gall.append(box)

let num = 0;

function motion() {
  num -= 2;
  gall.style.left = num + 'px';
  if (num < -1200) {
    num = 0;
  }
}

function play() {
  setInterval(motion, 10);
}
play();