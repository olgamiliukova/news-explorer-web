import block from '../../blocks/results/results';
import { BaseArticle } from '../models';
import { results as config } from '../config';
import setPropsHandler, {
  loadListHandler,
  showMoreHandler,
  subscribeHandler,
} from '../handlers/results';

export default ({ ResultsComponent }, app) => {
  const props = { name: 'savedResults', block, ...config };
  const handlers = [
    setPropsHandler(app, BaseArticle, 'savedCard'),
    showMoreHandler(app, BaseArticle, 'savedCard'),
    loadListHandler(app, BaseArticle),
    subscribeHandler(app, BaseArticle),
    (context) => {
      const { component: cardComponent } = app.get('savedCard');

      cardComponent.handle(context);
    },
  ];

  return new ResultsComponent(props, handlers);
};
