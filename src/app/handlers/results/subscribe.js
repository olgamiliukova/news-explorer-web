import { errorHandler } from '../popup';
import { observer } from '../../utils';

export default (app, Article) => (context, component) => {
  const reloadList = ({ articles = [] }) => (
    component.clear(context).then(
      () => {
        component.setProps({
          title: '',
          results: articles.map(
            (article) => new Article(article),
          ),
        });

        return component.renderResults({
          context,
          position: component.constructor.RENDER_APPEND,
        });
      },
    )
      .catch(
        errorHandler(app, context, component),
      )
  );

  observer.subscribe(
    [
      'signin',
      'logout',
    ],
    reloadList,
  );

  observer.subscribe(
    'refresh',
    () => app.create('userData').then(
      reloadList,
    )
      .catch(
        errorHandler(app, context, component),
      ),
  );
};
