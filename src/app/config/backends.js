import datetime from '../utils/datetime';

export default {
  main: {
    endpoint: process.env.BACKEND_MAIN_ENDPOINT || 'http://localhost:3000',
  },
  news: {
    endpoint: process.env.BACKEND_NEWS_ENDPOINT || 'http://newsapi.org/v2',
    token: process.env.BACKEND_NEWS_APITOKEN || '',
    params: {
      language: process.env.BACKEND_NEWS_LANGUAGE || 'ru',
      from() {
        return datetime.toISO(-7);
      },
      sortBy: 'publishedAt',
      pageSize: process.env.BACKEND_NEWS_PAGESIZE || 100,
    },
  },
};
