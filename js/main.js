import { getMockRentAds } from './mock.js';
import { createAdCard, renderAdCard } from './card.js';

const mockData = getMockRentAds();

renderAdCard(createAdCard(mockData[0]));
