import BlockComponent from './BlockComponent';

export default class CardListComponent extends BlockComponent {
  constructor(...args) {
    super(...args);
    this._cards = [];
  }

  addCard(card) {
    this._cards.push(card);

    return this;
  }

  clearCards() {
    this._cards.forEach(
      (card) => {
        if (card.isRendered()) {
          card.clear();
        }
      },
    );
    this._cards = [];

    return this;
  }

  clear(context) {
    this.clearCards();

    return super.clear(context);
  }

  toHtml(props = {}) {
    return super.toHtml({
      ...props,
      cards: () => (
        this._cards.map(
          (card) => card.toHtml(),
        ).join('')
      ),
    });
  }

  renderCards({ context, shift = 0 }) {
    this._cards.slice(shift).forEach(
      (card) => {
        if (!card.isRendered()) {
          card.render({
            context: context.querySelector(`.${this.baseClass}`),
            position: card.constructor.RENDER_APPEND,
          });
        }
      },
    );
  }
}
