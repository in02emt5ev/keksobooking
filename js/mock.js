import {getRandomArrayElement, getRandomPositiveInt, getRandomPositiveFloat, shuffleArray} from './utils.js';

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
  'Светлая квартира с видом на парк, полностью меблирована, интернет включён',
  'Современный лофт у набережной: высокие потолки, панорамные окна, открытая планировка',
  'Дом у моря, 3 спальни, терраса, кондиционер, до пляжа 5 минут пешком',
  'Однокомнатная квартира рядом с метро, развитая инфраструктура, тихие соседи',
  'Коттедж за городом, участок 10 соток, баня, мангальная зона, рядом лес',
  'Апартаменты с бассейном и террасой, вид на город, консьерж, охрана 24/7',
];

const createMockRentAd = (index) => {
  const author = {
    avatar: (index < 10) ? `img/avatars/user0${index}.png` : `img/avatars/user${index}.png`
  };

  const location = {
    lat: getRandomPositiveFloat(35.65, 35.7, 5),
    lng: getRandomPositiveFloat(139.7, 139.8, 5)
  };

  const offer = {
    title: getRandomArrayElement(TITLES),
    address: `${location.lat}, ${location.lng}`,
    price: getRandomPositiveInt(1000, 100000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomPositiveInt(1, 5),
    guests: getRandomPositiveInt(1, 5),
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKOUTS),
    features: shuffleArray(FEATURES).slice(getRandomPositiveInt(FEATURES.length)),
    description: getRandomArrayElement(DESCRIPTIONS),
    photos: shuffleArray(PHOTOS).slice(getRandomPositiveInt(PHOTOS.length))
  };

  const mockRentAd = {
    author,
    location,
    offer
  };

  return mockRentAd;
};

const getMockRentAds = () => Array.from({length: 10}, (_, index) => createMockRentAd(index + 1));

export {getMockRentAds};
