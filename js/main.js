import { getMockRentAds } from './mock.js';
import { createAdCard, renderAdCard } from './card.js';

const mockData = getMockRentAds();

const adCard = createAdCard(mockData[0]);

renderAdCard(adCard);
