const getRandomPositiveInt = (a, b = 1) => {

  if (a === undefined) {
    throw new Error("Первый параметр должен быть число")
  }

  const min = Math.ceil(Math.min(Math.abs(a), Math.abs(b)));
  const max = Math.floor(Math.max(Math.abs(a), Math.abs(b)));

  return Math.floor(Math.random() * (max - min + 1)) + min;
};

console.log(getRandomPositiveInt(0, 10));
