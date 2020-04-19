import { messages } from '../config';

const translate = (
  label,
  data = {},
  lang = (process.env.BACKEND_NEWS_LANGUAGE || 'ru'),
) => Object.keys(data).reduce(
  (message, key) => message.replace(
    `%${key}%`,
    translate(
      typeof data[key] === 'function'
        ? data[key].call()
        : data[key],
    ),
  ),
  (messages[lang] && messages[lang][label]) || label,
);

export default translate;
