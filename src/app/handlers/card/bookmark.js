import { BaseArticle } from '../../models';
import { errorHandler } from '../popup';
import { delegate } from '../../utils';

export default (app) => (context, component) => delegate(
  context,
  component.getBookmarkElement().baseClass,
  'click',
  (e) => {
    e.preventDefault();

    const mainApi = app.get('mainApi');

    if (!mainApi.getToken()) {
      return;
    }

    const card = e.target.closest(`.${component.baseClass}`);
    const bookmark = card.querySelector(`.${component.getBookmarkElement().baseClass}`);
    const tooltip = card.querySelector(`.${component.getTooltipElement().baseClass}`);
    const { toogleClass } = component.getBookmarkElement().getProps();
    const baseArticle = BaseArticle.decode(bookmark.value);

    Promise.resolve(
      !baseArticle.id
        ? mainApi.createArticle(baseArticle.getData((key) => key !== 'id')).then(
          (article) => {
            const bArticle = new BaseArticle(article);

            bookmark.value = bArticle.encode();
            bookmark.classList.add(toogleClass);
            tooltip.remove();

            component.getTooltipElement().render({
              context: bookmark,
              position: component.constructor.RENDER_AFTER,
              article: bArticle.getData(),
              logged: !!mainApi.getToken(),
            });
          },
        )
        : mainApi.removeArticle(baseArticle.id).then(
          (article) => {
            const bArticle = new BaseArticle(article);

            bookmark.value = bArticle.encode((key) => key !== 'id');
            bookmark.classList.remove(toogleClass);
            tooltip.remove();

            component.getTooltipElement().render({
              context: bookmark,
              position: component.constructor.RENDER_AFTER,
              article: bArticle.getData((key) => key !== 'id'),
              logged: !!mainApi.getToken(),
            });
          },
        ),
    )
      .catch(
        errorHandler(app, context, component),
      );
  },
);
