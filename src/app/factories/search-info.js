import block from '../../blocks/search-info/search-info';
import renderHandler from '../handlers/search-info';

export default ({ SearchInfoComponent }, app) => {
  const props = {
    name: 'searchInfo',
    block,
    heading: 'BLOCK_SEARCH_INFO_SAVED_ARTICLES',
  };
  const handlers = [
    renderHandler(app),
  ];

  return new SearchInfoComponent(props, handlers);
};
