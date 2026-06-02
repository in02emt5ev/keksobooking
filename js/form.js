const adForm = document.querySelector('.ad-form');
const adFormFields = adForm.querySelectorAll('fieldset');
const mapFiltersForm = document.querySelector('.map__filters');
const mapFilters = mapFiltersForm.children;

const disablePage = () => {
  adForm.classList.add('ad-form--disabled');

  for (let field of adFormFields) {
    field.disabled = true;
  }

  mapFiltersForm.classList.add('map__filters--disabled');

  for (let filter of mapFilters) {
    filter.disabled = true;
  }
};

const enablePage = () => {
  adForm.classList.remove('ad-form--disabled');

  for (let field of adFormFields) {
    field.disabled = false;
  }

  mapFiltersForm.classList.remove('map__filters--disabled');

  for (let filter of mapFilters) {
    filter.disabled = false;
  }
};

export { disablePage, enablePage };
