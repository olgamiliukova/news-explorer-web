import formatter from './formatter';

const lang = process.env.BACKEND_NEWS_LANGUAGE || 'ru';

export default {
  toISO(days = 0) {
    const date = new Date();
    date.setDate(date.getDate() + days);

    return date.toISOString();
  },
  format(d) {
    const date = new Date(d);
    const day = date.getDate();
    const month = date.toLocaleString(
      lang,
      {
        month: 'long',
      },
    );
    const year = date.getFullYear();

    return `${day} ${formatter.formatMonth(month)}, ${year}`;
  },
};
