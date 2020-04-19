const presets = [
  [
    '@babel/env',
    {
      targets: {
        esmodules: true,
        ie: '11',
        edge: '15',
        firefox: '60',
        chrome: '64',
        safari: '11.1',
        yandex: '1.0',
      },
      useBuiltIns: 'usage',
      corejs: '3.0.0',
    },
  ],
];

const plugins = [
  [
    '@babel/plugin-transform-runtime',
    {
      regenerator: true,
    },
  ],
];

module.exports = {
  presets,
  plugins,
};
