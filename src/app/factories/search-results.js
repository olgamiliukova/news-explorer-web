import block from '../../blocks/results/results';
import { NewsArticle } from '../models';
import { results as config } from '../config';
import setPropsHandler, { showMoreHandler } from '../handlers/results';

export default ({ ResultsComponent }, app) => {
  const props = { name: 'searchResults', block, ...config };
  const handlers = [
    setPropsHandler(app, NewsArticle, 'newsCard'),
    showMoreHandler(app, NewsArticle, 'newsCard'),
    (context) => {
      const { component: cardComponent } = app.get('newsCard');

      cardComponent.handle(context);
    },
  ];

  return new ResultsComponent(props, handlers);
};
