import { logger } from '../../utils';

export default (_, context, component) => (err) => (
  err.json
    ? err.json().then(
      (res) => (
        res
          ? component.clear(context)
            .then(
              () => component.render({
                context: context.querySelector('.popup__title'),
                position: component.constructor.RENDER_AFTER,
                formError: res.message ? res.message : res,
              }),
            )
          : res
      ),
    )
    : logger(err, logger.ERROR)
);
