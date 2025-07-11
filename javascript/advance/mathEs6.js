export function add(a, b) {
  return a + b;
}
export function subtract(a, b) {
  return a - b;
}

export default function mult(a, b) {
  return a * b;
}

//named Export

function div(a, b) {
  return a / b;
}

function mod(a, b) {
  return a % b;
}

module.exports = {
  div,
  mod,
};
