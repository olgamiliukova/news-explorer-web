import { observer } from '../../utils';

export default () => (_, component) => {
  observer.subscribe(
    [
      'signin',
      'logout',
    ],
    () => component.search(),
  );
};
