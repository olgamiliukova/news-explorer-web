import { delegate, translate, logger } from '../../utils';

export default (app, context, component) => (err) => (
  err.json
    ? err.json().then(
      ({ message }) => {
        const { component: popupComponent } = app.create('popup', {
          type: 'error',
        }, [
          () => delegate(
            context,
            'popup__link',
            'click',
            (event) => {
              event.preventDefault();
              popupComponent.clear(context);
            },
          ),
        ]);

        popupComponent.render({
          context,
          position: component.constructor.RENDER_PREPEND,
          content: () => translate(message),
        })
          .then(
            (ctx) => popupComponent.handle(ctx),
          );
      },
    )
    : logger(err, logger.ERROR)
);
