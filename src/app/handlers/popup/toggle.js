import { delegate } from '../../utils';

export default (app, popupType) => (context, component) => delegate(
  context.querySelector(`.${component.baseClass}`),
  'popup__link',
  'click',
  (e) => {
    e.preventDefault();

    const { component: popupComponent } = app.get(popupType);

    // Switch to another popup
    component.clear()
      .then(
        () => popupComponent.render(),
      )
      .then(
        (ctx) => popupComponent.handle(ctx),
      );
  },
);
