import App from '../App';
import * as components from '../components';
import * as factories from '../factories';

const app = new App();

export const toHtml = (
  name,
  props = {},
) => factories[name](components, app).toHtml(props);

export default (
  name,
  {
    context,
    position = BlockComponent.RENDER_APPEND,
    ...props
  },
) => factories[name](components, app).render({
  context,
  position,
  ...props,
});
