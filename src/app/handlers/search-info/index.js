import { errorHandler } from '../popup';
import { observer, translate } from '../../utils';

export default (app) => (context, component) => {
  const render = ({ name = 'Anonymous', articles = [] }) => {
    component.setProps({
      title: {
        toString() {
          return translate('BLOCK_SEARCH_INFO_ARTICLES_COUNT', {
            name,
            count: articles.length,
          });
        },
      },
      subtitle: {
        toString() {
          if (!articles.length) {
            return '';
          }

          const counters = articles.reduce(
            (keywords, article) => {
              const counter = keywords[article.keyword] ? keywords[article.keyword] : 0;

              return {
                ...keywords,
                [article.keyword]: counter + 1,
              };
            },
            {},
          );
          const keywords = Object.keys(counters).sort(
            (a, b) => counters[a] - counters[b],
          );

          return translate('BLOCK_SEARCH_INFO_BY_KEYWORDS', {
            keywords: component.keywordsToHtml({ keywords }),
          });
        },
      },
    });

    return component.clear(context).then(
      () => component.render({
        context,
        position: component.constructor.RENDER_PREPEND,
      }),
    );
  };

  observer.subscribe(
    [
      'signin',
      'logout',
    ],
    render,
  );

  observer.subscribe(
    'refresh',
    () => app.create('userData').then(render)
      .catch(
        errorHandler(app, context, component),
      ),
  );

  return app.create('userData').then(render)
    .catch(
      errorHandler(app, context, component),
    );
};
