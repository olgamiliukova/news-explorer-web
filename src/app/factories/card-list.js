import block from '../../blocks/cards-container/cards-container';

export default ({ CardListComponent }) => {
  const props = { name: 'cardList', block };
  const handlers = [];

  return new CardListComponent(props, handlers);
};
