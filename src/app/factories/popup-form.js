import block from '../../blocks/popup-form/popup-form';
import { forms } from '../config';

export default ({ FormComponent }) => {
  const props = { name: 'popupForm', block, forms };
  const handlers = [];

  return new FormComponent(props, handlers);
};
