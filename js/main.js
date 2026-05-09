const getRandomPositiveInt = (a, b = 0) => {

  if (a === undefined) {
    throw new Error('Некорректный диапазон');
  }

  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomPositiveFloat = (a, b = 0, decim = 0) => {

  if (a === undefined) {
    throw new Error('Некорректный диапазон');
  }

  const min = Math.min(Math.abs(a), Math.abs(b));
  const max = Math.max(Math.abs(a), Math.abs(b));

  const result = (Math.random() * (max - min)) + min;

  return Number(result.toFixed(decim));
};

const shuffleArray = (arr) => {
  const shuffledArray = arr.slice();

  for (let i = 0; i < shuffledArray.length; i++) {
    let randomIndex = getRandomPositiveInt(0, shuffleArray.length - 1);

    [ shuffleArray[i], shuffledArray[randomIndex] ] = [ shuffledArray[randomIndex], shuffledArray[i] ];
  };

  return shuffledArray;
};

getRandomPositiveInt(0, 1);
getRandomPositiveFloat(0.78, 1.33, 3);
