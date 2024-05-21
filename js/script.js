//funzione per avere un numero randomico
function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function isInArray(array, number) {
  return array.includes(number);
}

var numberRandom = [];
while (numberRandom.length < 5) {
  var number = getRandomNumber(1, 100);
  if (!isInArray(numberRandom, number)) {
      numberRandom.push(number);
  }
}

console.log(numberRandom);
alert(numberRandom);
