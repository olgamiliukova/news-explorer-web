import block from '../../blocks/popup/popup';
import { popups } from '../config';

export default ({ PopupComponent }) => {
  const props = { name: 'popup', block, popups };
  const handlers = [];

  return new PopupComponent(props, handlers);
};
