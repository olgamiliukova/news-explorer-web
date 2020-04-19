import block from '../../blocks/header/header';
import { navigations } from '../config';
import renderHandler, {
  signinHandler,
  logoutHandler,
  subscribeHandler,
} from '../handlers/header';

export default ({ HeaderComponent }, app) => {
  const props = { name: 'header', block, navigations };
  const handlers = [
    renderHandler(app),
    signinHandler(app),
    logoutHandler(app),
    subscribeHandler(),
  ];

  return new HeaderComponent(props, handlers);
};
