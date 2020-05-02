import { BaseArticle, NewsArticle } from '../../models';
import { delegate } from '../../utils';
import { errorHandler } from '../popup';

export default (app) => (context, component) => delegate(
  context,
  'form',
  'submit',
  (e) => {
    e.preventDefault();

    const {
      component: resultsComponent,
      context: resultsContext,
    } = app.get('searchResults');

    if (!component.getQuery()) {
      return resultsComponent.clear(resultsContext);
    }

    const mainApi = app.get('mainApi');
    const newsApi = app.get('newsApi');

    return resultsComponent.clear(resultsContext)
      .then(
        () => resultsComponent.renderLoading({
          context: resultsContext,
          position: resultsComponent.constructor.RENDER_PREPEND,
        }),
      )
      .then(
        () => Promise.all([
          newsApi.getNews({
            q: component.getQuery(),
          }).then(
            ({ articles }) => articles.map(
              (article) => new NewsArticle({
                ...article,
                keyword: component.getQuery(),
              }),
            ),
          ),
          Promise.resolve(
            mainApi.getToken()
              ? mainApi.getArticles()
              : [],
          ).then(
            (articles) => articles.map(
              (article) => new BaseArticle(article),
            ),
          ).catch(
            () => [],
          ),
        ]),
      )
      .then(
        ([newsArticles, baseArticles]) => newsArticles.map(
          (newsArticle) => {
            const baseArticle = baseArticles.find(
              (ba) => newsArticle.equals(ba),
            );

            return !baseArticle ? newsArticle : baseArticle;
          },
        ),
      )
      .then(
        (articles) => resultsComponent.clear(resultsContext)
          .then(
            () => {
              resultsComponent.setProps({
                results: articles,
              });

              if (!articles.length) {
                return resultsComponent.renderNoResults({
                  context: resultsContext,
                  position: resultsComponent.constructor.RENDER_PREPEND,
                });
              }

              return resultsComponent.renderResults({
                context: resultsContext,
                position: resultsComponent.constructor.RENDER_PREPEND,
              });
            },
          ),
      )
      .then(
        () => resultsComponent.handle(resultsContext),
      )
      .catch(
        errorHandler(app, context, component),
      );
  },
);
