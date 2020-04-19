import { toggleHandler } from '../handlers/popup';
import { signinHandler } from '../handlers/popup-form';

export default ({ ProxyComponent }, app) => (
  new ProxyComponent({
    name: 'popupFormSignIn',
    context: document.querySelector('.page'),
    factory: () => {
      const { component: popupFormComponent } = app.create('popupForm', {
        type: 'signin',
      }, [
        signinHandler(app),
      ]);

      const { component: popupComponent } = app.create('popup', {
        type: 'signin',
        content: () => popupFormComponent.toHtml(),
      }, [
        // Handle sub-components
        (context) => popupFormComponent.setValues().handle(
          context.querySelector(`.${popupComponent.baseClass}`),
        ),
        toggleHandler(app, 'popupFormSignUp'),
      ]);

      return popupComponent;
    },
  })
);
