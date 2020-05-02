export { default as loadListHandler } from './load-list';
export { default as showMoreHandler } from './show-more';
export { default as subscribeHandler } from './subscribe';

export default (app, Article, cardType) => (_, component) => component.setProps({
  content: () => {
    const { results = [], showMore: { limit } } = component.getProps();
    const sliced = results.splice(0, limit);

    if (!sliced.length) {
      return '';
    }

    const { component: cardListComponent } = app.get('cardList');

    cardListComponent.clearCards();

    sliced.forEach(
      (item) => {
        const { component: cardComponent } = app.create(cardType, {
          article: new Article(item),
        });

        cardListComponent.addCard(cardComponent);
      },
    );

    return cardListComponent.toHtml();
  },
});
