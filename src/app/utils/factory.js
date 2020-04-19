import merge from './merge';

export default (proto) => (
  (...args) => {
    const { constructor } = proto;
    const instance = new constructor(...args);
    const protoProps = Object.keys(proto).reduce(
      (acc, key) => ({
        ...acc,
        [key]: proto[key],
      }),
      {},
    );

    const instanceProps = Object.keys(instance).reduce(
      (acc, key) => ({
        ...acc,
        [key]: instance[key],
      }),
      {},
    );

    return Object.assign(
      instance,
      merge(
        protoProps,
        instanceProps,
      ),
    );
  }
);
