const mergeTo = (props, key, value) => {
  if (value === undefined) {
    return props;
  }

  if (typeof value === 'object') {
    if (Array.isArray(value)) {
      return {
        ...props,
        [key]: [
          ...(props[key] || []),
          ...value,
        ],
      };
    }

    return {
      ...props,
      [key]: {
        ...(props[key] || {}),
        ...value,
      },
    };
  }

  return {
    ...props,
    [key]: value,
  };
};

export default (target, ...sources) => (
  sources.reduce(
    (t, source) => Object.keys(source).reduce(
      (_, key) => mergeTo(_, key, source[key]),
      t,
    ),
    target,
  )
);
