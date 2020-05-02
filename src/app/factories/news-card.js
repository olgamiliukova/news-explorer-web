import block from '../../blocks/card/card';
import { bookmarkHandler } from '../handlers/card';

export default ({ CardComponent }, app) => {
  const props = { name: 'newsCard', block };
  const handlers = [
    (_, component) => component._setElements([]),
    bookmarkHandler(app),
  ];

  const cardComponent = new CardComponent(props, handlers);

  cardComponent.addElement(
    cardComponent.getBookmarkElement(),
  );
  cardComponent.addElement(
    cardComponent.getTooltipElement().setProps({
      logged: !!app.get('mainApi').getToken(),
    }),
  );

  return cardComponent;
};
