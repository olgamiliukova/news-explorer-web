import block from '../../blocks/card/card';
import { deleteHandler } from '../handlers/card';

export default ({ CardComponent }, app) => {
  const props = { name: 'savedCard', block };
  const handlers = [
    (_, component) => component._setElements([]),
    deleteHandler(app),
  ];

  const cardComponent = new CardComponent(props, handlers);

  cardComponent.addElement(
    cardComponent.getKeywordElement(),
  );
  cardComponent.addElement(
    cardComponent.getDeleterElement(),
  );
  cardComponent.addElement(
    cardComponent.getTooltipElement().setProps({
      logged: !!app.get('mainApi').getToken(),
      text: () => 'BLOCK_TOOLTIP_DROP',
    }),
  );

  return cardComponent;
};
