const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const adTypeMap = {
  'flat': 'Квартира',
  'bungalow': 'Бунгало',
  'house': 'Дом',
  'palace': 'Дворец',
  'hotel': 'Отель'
};

const createAdCard = (cardData) => {
  const card = adCardTemplate.cloneNode(true);

  if (!card) {
    throw new Error('Не найден шаблон .popup внутри #card');
  }

  if (cardData.offer.title) {
    card.querySelector('.popup__title').textContent = cardData.offer.title;
  } else {
    card.querySelector('.popup__title').remove();
  }

  if (cardData.offer.address) {
    card.querySelector('.popup__text--address').textContent = cardData.offer.address;
  } else {
    card.querySelector('.popup__text--address').remove();
  }

  if (cardData.offer.price) {
    card.querySelector('.popup__text--price').textContent = `${cardData.offer.price} ₽/ночь`;
  } else {
    card.querySelector('.popup__text--price').remove();
  }

  if (cardData.offer.rooms && cardData.offer.guests) {
    card.querySelector('.popup__text--capacity').textContent = `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;
  } else {
    card.querySelector('.popup__text--capacity').remove();
  }

  if (cardData.offer.checkin && cardData.offer.checkout) {
    card.querySelector('.popup__text--time').textContent = `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;
  } else {
    card.querySelector('.popup__text--time').remove();
  }

  if (cardData.offer.description) {
    card.querySelector('.popup__description').textContent = cardData.offer.description;
  } else {
    card.querySelector('.popup__description').remove();
  }

  card.querySelector('.popup__type').textContent = adTypeMap[cardData.offer.type];

  card.querySelector('.popup__avatar').src = cardData.author.avatar;

  const photosCardsContainer = card.querySelector('.popup__photos');
  const photoCardTemplate = card.querySelector('.popup__photo');

  photosCardsContainer.innerHTML = '';

  if (cardData.offer.photos && cardData.offer.photos.length > 0) {
    cardData.offer.photos.forEach( (photoSrc) => {
      const photoCard = photoCardTemplate.cloneNode(true);

      photoCard.src = photoSrc;

      photosCardsContainer.append(photoCard);
    });
  } else {
    photosCardsContainer.remove();
  }

  if (cardData.offer.features && cardData.offer.features.length > 0) {

    const featureCardsList = card.querySelectorAll('.popup__feature');

    featureCardsList.forEach( (featureCard) => {
      const isExist = cardData.offer.features.some(
        (feature) => featureCard.classList.contains(`popup__feature--${feature}`)
      );

      if (!isExist) {
        featureCard.remove();
      }
    });
  } else {
    card.querySelector('.popup__features').remove();
  }

  return card;
};

const renderAdCard = (card) => {
  mapCanvas.append(card);
};

export {createAdCard, renderAdCard};
