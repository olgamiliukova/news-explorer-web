import block from '../../blocks/author/author';
import { author as config } from '../config';

export default ({ BlockComponent }) => {
  const props = { name: 'author', block, ...config };
  const handlers = [];

  return new BlockComponent(props, handlers);
};
