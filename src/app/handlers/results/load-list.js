import { errorHandler } from '../popup';

export default (app, Article) => (context, component) => (
  app.create('userData').then(
    ({ articles }) => articles.map(
      (article) => new Article(article),
    ),
  )
    .then(
      (articles) => component.clear(context)
        .then(
          () => {
            component.setProps({
              title: '',
              results: articles,
            });

            return component.renderResults({
              context,
              position: component.constructor.RENDER_APPEND,
            });
          },
        ),
    )
    .catch(
      errorHandler(app, context, component),
    )
);
