const resultsLoading = require('./results-loading.html');
const notFoundResults = require('./results-no.html');

const searchForm = document.querySelector('.search__input-container');
if (searchForm) {
  searchForm.addEventListener(
    'submit',
    (e) => {
      e.preventDefault();

      const results = document.querySelector('.results');
      results.innerHTML = resultsLoading;

      // TODO: remove after review
      setTimeout(
        () => {
          results.innerHTML = notFoundResults;
        },
        1000,
      );
    },
  );
}
