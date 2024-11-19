import './style.css';

const themeToggleBtn = document.querySelector('.theme-toggle');
themeToggleBtn.onclick = () => {
  document.body.classList.toggle('light-theme');
  themeToggleBtn.textContent = document.body.classList.contains('light-theme') ? '🌞' : '🌙';
};

let num1 = '';
let num2 = '';
let sign = '';
let finish = false;

const digit = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
const action = ['–', '+', 'x', '/'];

const out = document.querySelector('.calc-screen');

function clearAll() {
  num1 = '';
  num2 = '';
  sign = '';
  finish = false;
  out.textContent = 0;
}

document.querySelector('.ac').onclick = clearAll;

document.querySelector('.buttons').onclick = (event) => {
  if (!event.target.classList.contains('btn')) return;
  if (event.target.classList.contains('ac')) return;

  if (out.textContent === 'Error') {
    clearAll();
  }

  const key = event.target.textContent;

  if (digit.includes(key)) {
    if (key === '.' && ((num2 === '' && sign === '' && num1.includes('.')) || (num2 !== '' && num2.includes('.')))) {
      return;
    }

    if (finish) {
      clearAll();
    }

    if (!sign) {
      num1 += key;
      out.textContent = num1 || 0;
    } else {
      num2 += key;
      out.textContent = num2;
    }
    return;
  }

  if (action.includes(key)) {
    if (finish) {
      finish = false;
    }

    if (num1 && num2 && !finish) {
      calculate();
    }
    sign = key;
    return;
  }

  if (key === '=') {
    if (!num1 || !sign) return;

    if (finish && num2 === '') {
      num2 = num1;
    }
    calculate();
    return;
  }

  if (key === '+/-') {
    if (finish) {
      num1 = (-parseFloat(num1)).toString();
      out.textContent = num1;
    } else if (num2) {
      num2 = (-parseFloat(num2)).toString();
      out.textContent = num2;
    } else if (num1) {
      num1 = (-parseFloat(num1)).toString();
      out.textContent = num1;
    }
    return;
  }

  if (key === '%') {
    if (!num1 || !sign) return;

    if (num2) {
      num2 = ((parseFloat(num1) * parseFloat(num2)) / 100).toString();
    } else {
      num2 = (parseFloat(num1) / 100).toString();
    }

    out.textContent = num2;
    finish = false;
    return;
  }
};

function calculate() {
  if (!num2) num2 = num1;

  let result;
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);

  switch (sign) {
    case '+':
      result = n1 + n2;
      break;
    case '–':
      result = n1 - n2;
      break;
    case 'x':
      result = n1 * n2;
      break;
    case '/':
      if (n2 === 0) {
        out.textContent = 'Error';
        num1 = '';
        num2 = '';
        sign = '';
        finish = true;
        return;
      }
      result = n1 / n2;
      break;
    default:
      return;
  }

  finish = true;
  num1 = result.toString();
  num2 = '';
  sign = '';
  out.textContent = num1;
}
