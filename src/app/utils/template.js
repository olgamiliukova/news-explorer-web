/* eslint-disable */
const compile = (content, $ = '$') => Function($, 'return `' + content + '`;');
/* eslint-enable */
export default (tmpl) => (
  (data) => compile(tmpl, Object.keys(data))(...Object.values(data))
);
