import block from '../../blocks/search-form/search-form';
import {
  searchHandler,
  subscribeHandler,
} from '../handlers/search-form';

export default ({ SearchFormComponent }, app) => {
  const props = {
    name: 'searchForm',
    block,
    placeholder: 'BLOCK_SEARCH_FORM_INPUT_PLACEHOLDER',
    buttonText: 'BLOCK_SEARCH_FORM_BUTTON_TEXT',
  };
  const handlers = [
    searchHandler(app),
    subscribeHandler(),
  ];

  return new SearchFormComponent(props, handlers);
};
