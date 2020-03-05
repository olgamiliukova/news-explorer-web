const bookmark = require('../bookmark/bookmark');
const deleteEl = require('../delete/delete');

module.exports = (context) => {
  context.querySelectorAll('.card').forEach(
    (card) => {
      bookmark(card);
      deleteEl(card);
    },
  );
};
