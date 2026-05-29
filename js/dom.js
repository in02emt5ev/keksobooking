const adCardTemplate = document.querySelector('#card').content.querySelector('.popup');

const createAdCard = (cardData) => {
  const card = adCardTemplate.cloneNode(true);

  console.log(card);
};

createAdCard();
