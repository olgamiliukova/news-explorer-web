import { toggleHandler } from '../handlers/popup';
import { signupHandler } from '../handlers/popup-form';

export default ({ ProxyComponent }, app) => (
  new ProxyComponent({
    name: 'popupFormSignUp',
    context: document.querySelector('.page'),
    factory: () => {
      const { component: popupFormComponent } = app.create('popupForm', {
        type: 'signup',
      }, [
        signupHandler(app),
      ]);

      // Create sign up form popup
      const { component: popupComponent } = app.create('popup', {
        type: 'signup',
        content: () => popupFormComponent.toHtml(),
      }, [
        // Handle sub-components
        (context) => popupFormComponent.setValues().handle(
          context.querySelector(`.${popupComponent.baseClass}`),
        ),
        toggleHandler(app, 'popupFormSignIn'),
      ]);

      return popupComponent;
    },
  })
);
