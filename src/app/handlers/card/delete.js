import { errorHandler } from '../popup';
import { delegate, observer } from '../../utils';

export default (app) => (context, component) => delegate(
  context,
  component.getDeleterElement().baseClass,
  'click',
  (e) => {
    e.preventDefault();

    const mainApi = app.get('mainApi');

    if (!mainApi.getToken()) {
      return;
    }

    const card = e.target.closest(`.${component.baseClass}`);
    const deleter = card.querySelector(`.${component.getDeleterElement().baseClass}`);

    mainApi.removeArticle(deleter.value)
      .then(
        () => card.remove(),
      )
      .then(
        () => observer.notify(['refresh', 'card_delete']),
      )
      .catch(
        errorHandler(app, context, component),
      );
  },
);
