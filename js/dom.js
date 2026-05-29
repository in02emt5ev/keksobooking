const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const adTypeMap = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

const createAdCard = (cardData) => {
  const card = adCardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = cardData.offer.title;
  card.querySelector('.popup__text--address').textContent = cardData.offer.address;
  card.querySelector('.popup__text--price').textContent = cardData.offer.price + ' ₽/ночь';
  card.querySelector('.popup__text--capacity').textContent = `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;
  card.querySelector('.popup__description').textContent = cardData.offer.description;
  card.querySelector('.popup__type').textContent = adTypeMap[cardData.offer.type];

  card.querySelector('.popup__avatar').src = cardData.author.avatar;

  const cardFeatures = card.querySelector('.popup__features');

  cardFeatures.innerHTML = '';

  const featuresNodeList = cardData.offer.features.map( (feature) => {
    return `<li class="popup__feature popup__feature--${feature}"></li>`;
  } );

  cardFeatures.append(...featuresNodeList);

  const cardPhotos = card.querySelector('.popup__photos');

  cardPhotos.innerHTML = '';

  const photosNodeList = cardData.offer.photos.map( (photo) => {
    return `<img src="${photo}" class="popup__photo" width="45" height="40" alt="Фотография жилья">`;
  } );

  cardPhotos.append(...photosNodeList);

  return card;
};

export {createAdCard};
