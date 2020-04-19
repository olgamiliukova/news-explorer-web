import errorHandler from './error';
import toggleHandler from '../popup/toggle';
import { delegate } from '../../utils';

export default (app) => (context, component) => delegate(
  context,
  'form',
  'submit',
  (e) => {
    e.preventDefault();

    const {
      elements: {
        email: {
          value: email,
        },
        password: {
          value: password,
        },
        name: {
          value: name,
        },
      },
    } = e.target;

    component.setValues({
      email,
      password,
      name,
    });

    const {
      component: popupFormSignUp,
    } = app.get('popupFormSignUp');

    const mainApi = app.get('mainApi');
    // Sign Up process...
    mainApi
      .signup(email, password, name)
      .then(
        () => {
          component.setValues();

          return popupFormSignUp.clear(popupFormSignUp.context);
        },
      )
      .then(
        () => {
          // Create sign up success popup
          const { component: popupComponent } = app.create('popup', {
            type: 'success',
          }, [
            toggleHandler(app, 'popupFormSignIn'),
          ]);

          popupComponent.render({
            context: popupFormSignUp.context,
          })
            .then(
              (ctx) => popupComponent.handle(ctx),
            );
        },
      )
      .catch(
        errorHandler(app, context, component),
      )
      .then(
        () => component.handle(context),
      );
  },
);
