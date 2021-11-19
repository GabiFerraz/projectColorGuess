const rgb = document.querySelector('#rgb-color');
const childrenBalls = document.querySelectorAll('.ball');
const dadColorsBall = document.querySelector('#colors');
const text = document.querySelector('#answer');
const buttonStartRestart = document.querySelector('#reset-game');
const score = document.querySelector('#score');
score.innerHTML = 0;
let count = 0;

// requisito 2 (adicionar um código rgb a ser adivinhado):
function createNumberColor() {
  const firstNumberColor = Math.floor(Math.random() * 250);
  const secondNumberColor = Math.floor(Math.random() * 250);
  const thirdNumberColor = Math.floor(Math.random() * 250);
  const rgbNumber = `(${firstNumberColor}, ${secondNumberColor}, ${thirdNumberColor})`;
  rgb.innerHTML = rgbNumber;
}
createNumberColor();
// Math.floor arredonda o número para baixo e remove a fração.
// https://www.w3schools.com/jsref/jsref_floor.asp

// requisito 4 (adicionar cores nas bolas, elas devem ser geradas dinâmicamente):
function createColor() {
  for (let index = 0; index < childrenBalls.length; index += 1) {
    const color1 = Math.floor(Math.random() * 250);
    const color2 = Math.floor(Math.random() * 250);
    const color3 = Math.floor(Math.random() * 250);
    childrenBalls[
      index
    ].style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;
  }
  const randomBall = Math.floor(Math.random() * 6);
  childrenBalls[randomBall].style.backgroundColor = `rgb${rgb.innerHTML}`;
}
createColor();

// requisito 5 (clicar em um circulo colorido, deve mostrar um texto indicando se está correto):
dadColorsBall.addEventListener('click', (e) => {
  if (text.innerHTML !== 'Escolha uma cor') {
    alert('Você só tem uma chance!');
    return false;
  }
  if (e.target.style.backgroundColor === `rgb${rgb.innerHTML}`) {
    text.innerHTML = 'Acertou!';
    count += 3;
    score.innerHTML = count;
  } else {
    text.innerHTML = 'Errou! Tente novamente!';
  }
});

// requisito 6 (criar um botão para iniciar/reiniciar o jogo):
buttonStartRestart.addEventListener('click', () => {
  createNumberColor();
  createColor();
  text.innerHTML = 'Escolha uma cor';
});
