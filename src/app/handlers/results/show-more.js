import { delegate } from '../../utils';

export default (app, Article, cardType) => (context, component) => delegate(
  context,
  'results__button',
  'click',
  (e) => {
    e.preventDefault();

    const { results = [], showMore: { limit } } = component.getProps();
    const sliced = results.splice(0, limit);
    if (!sliced.length) {
      return;
    }

    if (!results.length) {
      e.target.remove();
    }

    const { component: cardListComponent } = app.get('cardList');

    sliced.forEach(
      (item) => {
        const { component: cardComponent } = app.create(cardType, {
          article: new Article(item),
        });

        cardListComponent.addCard(cardComponent);
      },
    );

    cardListComponent.renderCards({
      context,
      shift: limit,
    });
  },
);
