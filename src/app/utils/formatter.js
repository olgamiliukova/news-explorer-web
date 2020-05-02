import messages from '../config/messages';

const lang = process.env.BACKEND_NEWS_LANGUAGE || 'ru';

export default {
  formatMonth(month) {
    const replaces = messages[lang].MONTHS_WITH_POSTFIX.split('|').map((p) => p.split('-'));
    const replace = replaces.find(
      ([pattern]) => new RegExp(pattern).test(month),
    );
    const [pattern, postfix] = replace;

    return month.replace(new RegExp(`${pattern}.*`), `$1${postfix}`);
  },
};
