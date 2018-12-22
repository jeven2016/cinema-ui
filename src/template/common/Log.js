import debug from 'debug';

export const PREFIX = 'cinema-ui';

const COLORS = {
  trace: 'lightblue',
  info: 'blue',
  warn: 'pink',
  error: 'red'
};

/**
 * Global log manager
 */
class Log {
  showMsg(level, message, source) {
    const namespace = `${PREFIX}:${level}`;
    const debugInstance = debug(namespace);

    debugInstance.color = COLORS[level];

    if (source) {
      debugInstance(source, message);
    } else {
      debugInstance(message);
    }
  }

  debug(message, source) {
    this.showMsg('trace', message, source);
  }

  info(message, source) {
    this.showMsg('info', message, source);
  }

  info(visable, message, source) {
    if (visable) {
      this.showMsg('info', message, source);
    }
  }

  warn(message, source) {
    this.showMsg('warn', message, source);
  }

  error(message, source) {
    this.showMsg('error', message, source);
  }
}

export default new Log();