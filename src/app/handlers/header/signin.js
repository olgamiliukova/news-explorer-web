import { delegate } from '../../utils';

export default (app) => (context) => delegate(
  context,
  'button__signin',
  'click',
  (e) => {
    e.preventDefault();

    const { component: popupComponent } = app.get('popupFormSignIn');

    popupComponent.render()
      .then(
        (ctx) => popupComponent.handle(ctx),
      );
  },
);
