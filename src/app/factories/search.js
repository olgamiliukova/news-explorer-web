import block from '../../blocks/search/search';

export default ({ BlockComponent }) => {
  const props = {
    name: 'search',
    block,
    title: 'BLOCK_SEARCH_TITLE',
    subtitle: 'BLOCK_SEARCH_SUBTITLE',
  };
  const handlers = [];

  return new BlockComponent(props, handlers);
};
