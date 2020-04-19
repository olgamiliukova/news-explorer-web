import block from '../../blocks/footer/footer';
import { navigations } from '../config';

export default ({ FooterComponent }) => {
  const props = {
    name: 'footer',
    block,
    navigations,
    copyright: 'BLOCK_FOOTER_COPYRIGHT',
  };
  const handlers = [];

  return new FooterComponent(props, handlers);
};
