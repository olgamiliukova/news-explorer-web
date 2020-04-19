const resolver = (data = {}) => Object.keys(data).reduce(
  (d, k) => {
    if (typeof d[k] === 'function') {
      return {
        ...d,
        [k]: d[k].call(),
      };
    }

    if (typeof d[k] === 'object') {
      return {
        ...d,
        [k]: resolver(d[k]),
      };
    }

    return d;
  },
  data,
);

export default resolver;
