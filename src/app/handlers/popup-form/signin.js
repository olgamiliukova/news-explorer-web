import errorHandler from './error';
import { delegate, observer } from '../../utils';

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
      },
    } = e.target;

    component.setValues({
      email,
      password,
    });

    const {
      component: popupFormSignIn,
    } = app.get('popupFormSignIn');

    const mainApi = app.get('mainApi');
    // Sign In process...
    mainApi
      .signin(email, password)
      .then(
        () => mainApi.getUserData(),
      )
      .then(
        (user) => {
          observer.notify(['signin', 'refresh'], user);
          // Close popup
          component.setValues();
          popupFormSignIn.clear();
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
