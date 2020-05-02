import { logger } from '../../utils';

export { default as signinHandler } from './signin';
export { default as logoutHandler } from './logout';
export { default as subscribeHandler } from './subscribe';

export default (app) => (context, component) => {
  const { theme, page } = app.get('config');

  component.setProps({
    theme,
    page,
  });

  const mainApi = app.get('mainApi');

  if (!mainApi.getToken()) {
    return;
  }

  mainApi.getUser().then(
    ({ name: userName }) => {
      component.setProps({
        loggedIn: !!userName,
        userName,
      });

      return component.clear(context).then(
        () => component.render({
          context,
          position: component.constructor.RENDER_PREPEND,
        }),
      );
    },
  )
    .catch(
      (err) => logger(err, logger.ERROR),
    );
};
