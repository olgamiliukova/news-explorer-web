export default class Observer {
  constructor(event) {
    this._event = event;
    this._handlers = new Set();
  }

  static subscribe(event, handler) {
    if (Array.isArray(event)) {
      event.forEach(
        (e) => Observer.subscribe(e, handler),
      );

      return;
    }

    if (!Observer.eventMap.has(event)) {
      Observer.eventMap.set(event, new Observer(event));
    }

    Observer.eventMap.get(event).addHandler(handler);
  }

  static notify(event, data = {}) {
    if (Array.isArray(event)) {
      event.forEach(
        (e) => Observer.notify(e, data),
      );

      return;
    }

    if (Observer.eventMap.has(event)) {
      Observer.eventMap.get(event).execute(data);
    }
  }

  get event() {
    return this._event;
  }

  addHandler(handler) {
    this._handlers.add(handler);
  }

  execute(data) {
    this._handlers.forEach(
      (handler) => handler.call(this, data),
    );
  }
}

Observer.eventMap = new Map();
