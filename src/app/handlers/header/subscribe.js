import { observer } from '../../utils';

export default () => (context, component) => {
  observer.subscribe(
    'signin',
    ({ name: userName }) => {
      component.setProps({
        loggedIn: !!userName,
        userName,
      });

      component.clear(context).then(
        () => component.render({
          context,
          position: component.constructor.RENDER_PREPEND,
        }),
      );
    },
  );
};
