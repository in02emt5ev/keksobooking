const adCardTemplate = document
  .querySelector('#card')
  .content.querySelector('.popup');
const mapCanvas = document.querySelector('#map-canvas');

const adTypeMap = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const createAdCard = (cardData) => {
  const card = adCardTemplate.cloneNode(true);

  if (!card) {
    throw new Error('Не найден шаблон .popup внутри #card');
  }

  card.querySelector('.popup__avatar').src = cardData.author.avatar;

  card.querySelector('.popup__title').textContent = cardData.offer.title;

  card.querySelector('.popup__text--address').textContent =
    cardData.offer.address;

  card.querySelector('.popup__type').textContent =
    adTypeMap[cardData.offer.type];

  card.querySelector('.popup__text--price').textContent =
    `${cardData.offer.price} ₽/ночь`;

  card.querySelector('.popup__text--time').textContent =
    `Заезд после ${cardData.offer.checkin}, выезд до ${cardData.offer.checkout}`;

  card.querySelector('.popup__text--capacity').textContent =
    `${cardData.offer.rooms} комнаты для ${cardData.offer.guests} гостей`;

  if (cardData.offer.features && cardData.offer.features.length > 0) {
    const featureCardsList = card.querySelectorAll('.popup__feature');

    featureCardsList.forEach((featureCard) => {
      const isExist = cardData.offer.features.some((feature) =>
        featureCard.classList.contains(`popup__feature--${feature}`)
      );

      if (!isExist) {
        featureCard.remove();
      }
    });
  } else {
    card.querySelector('.popup__features').remove();
  }

  if (cardData.offer.description) {
    card.querySelector('.popup__description').textContent =
      cardData.offer.description;
  } else {
    card.querySelector('.popup__description').remove();
  }

  const photosCardsContainer = card.querySelector('.popup__photos');

  if (cardData.offer.photos && cardData.offer.photos.length > 0) {
    const photosFragment = document.createDocumentFragment();
    photosCardsContainer.innerHTML = '';

    cardData.offer.photos.forEach((photoSrc) => {
      const photoCard = document.createElement('img');

      photoCard.classList.add('popup__photo');
      photoCard.src = photoSrc;
      photoCard.width = 45;
      photoCard.height = 40;
      photoCard.alt = 'Фотография жилья';

      photosFragment.append(photoCard);
    });

    photosCardsContainer.append(photosFragment);
  } else {
    photosCardsContainer.remove();
  }

  return card;
};

const renderAdCard = (card) => {
  mapCanvas.append(card);
};

export { createAdCard, renderAdCard };
