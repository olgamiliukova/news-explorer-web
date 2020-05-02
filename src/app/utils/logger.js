const logger = (message, level = logger.INFO) => (
  process.env.NODE_ENV === 'development' ? console[level](message) : message
);

logger.DEBUG = 'debug';
logger.ERROR = 'error';
logger.WARN = 'warn';
logger.INFO = 'info';

export default logger;
