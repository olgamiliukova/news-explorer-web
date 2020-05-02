import { delegate, observer } from '../../utils';

export default (app) => (context, component) => delegate(
  context,
  'button__logout',
  'click',
  (e) => {
    e.preventDefault();

    const mainApi = app.get('mainApi');

    mainApi.logout();

    // Update header
    component.setProps({ loggedIn: false });
    component.clear(context).then(
      () => component.render({
        context,
        position: component.constructor.RENDER_PREPEND,
      }),
    );

    observer.notify(['logout', 'refresh']);
  },
);
