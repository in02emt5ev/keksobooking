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

// Создание временных данных для объявлений

// Структура объекта

// const mockRentAd = {
//   author: {
//     avatar
//   },

//   offer: {
//     title, address, price, type, rooms, guests, checkin, checkout, features, description, photos
//   },

//   location: {
//     lat, lng
//   }
// };


const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel'];
const CHECKINS = ['12:00', '13:00', '14:00'];
const CHECKOUTS = ['12:00', '13:00', '14:00'];
const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner'];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
const TITLES = [
  'Уютная студия в центре города',
  'Просторная 2‑комнатная квартира',
  'Квартира с видом на парк',
  'Современный лофт у набережной',
  'Дом у моря',
  'Однокомнатная квартира рядом с метро',
  'Коттедж за городом, участок 10 соток',
  'Апартаменты с бассейном и террасой',
  'Мини‑студия для студента'
];
const DESCRIPTIONS = [
  'Уютная студия в центре города с новым ремонтом, мебелью и техникой',
  'Просторная 2‑комнатная квартира рядом с парком, есть балкон',
  'Светлая квартира с видом на парк, полностью меблирована, интернет включён',
  'Современный лофт у набережной: высокие потолки, панорамные окна, открытая планировка',
  'Дом у моря, 3 спальни, терраса, кондиционер, до пляжа 5 минут пешком',
  'Комфортабельный офис в БЦ в деловом районе: охрана, парковка, Wi‑Fi',
  'Однокомнатная квартира рядом с метро, развитая инфраструктура, тихие соседи',
  'Коттедж за городом, участок 10 соток, баня, мангальная зона, рядом лес',
  'Апартаменты с бассейном и террасой, вид на город, консьерж, охрана 24/7',
  'Мини‑студия для студента: компактная, светлая, всё необходимое в шаговой доступности'
];
