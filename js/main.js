import { getMockRentAds } from './mock.js';
import { createAdCard, renderAdCard } from './card.js';
import { disablePage } from './form.js';

const mockData = getMockRentAds();

renderAdCard(createAdCard(mockData[0]));

disablePage();
