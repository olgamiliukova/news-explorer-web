const contextMap = new Map();
const listenerMap = new Map();

const addEventHandler = (
  context,
  className,
  event,
  handler,
  options = {},
) => {
  if (!contextMap.has(context)) {
    contextMap.set(context, new Map());
  }

  const eventMap = contextMap.get(context);

  if (!eventMap.has(event)) {
    eventMap.set(event, new Map());
  }

  const classMap = eventMap.get(event);

  if (!classMap.has(className)) {
    classMap.set(className, new Map());
  }

  const handlerMap = classMap.get(className);

  handlerMap.set(handler, options);
};

const removeEventHandler = (
  context,
  className,
  event,
  handler,
) => {
  if (contextMap.has(context)) {
    const eventMap = contextMap.get(context);
    if (eventMap.has(event)) {
      const classMap = eventMap.get(event);
      if (classMap.has(className)) {
        const handlerMap = classMap.get(className);
        if (handlerMap.has(handler)) {
          handlerMap.delete(handler);
        }

        if (!handlerMap.size) {
          classMap.delete(className);
        }
      }

      if (!classMap.size) {
        if (listenerMap.has(context) && listenerMap.get(context).has(event)) {
          context.removeEventListener(
            event,
            listenerMap.get(context).get(event),
            false,
          );

          listenerMap.get(context).delete(event);
          if (!listenerMap.get(context).size) {
            listenerMap.delete(context);
          }
        }

        eventMap.delete(event);
      }
    }

    if (!eventMap.size) {
      contextMap.delete(context);
    }
  }
};

export default (
  context,
  className,
  event,
  handler,
  options = {},
) => {
  addEventHandler(
    context,
    className,
    event,
    handler,
    options,
  );

  const eventMap = contextMap.get(context);
  const classMap = eventMap.get(event);

  if (classMap.get(className).size > 1) {
    return;
  }

  function eventListener(e) {
    const element = e.target;

    classMap.forEach(
      (handlers, classKey) => {
        if (element.classList.contains(classKey) || element.closest(`.${classKey}`)) {
          handlers.forEach(
            (o, h) => {
              if (!e.defaultPrevented) {
                h.call(element, e, o);
                if (o.once) {
                  removeEventHandler(
                    context,
                    className,
                    event,
                    h,
                  );
                }
              }
            },
          );
        }
      },
    );
  }

  context.addEventListener(
    event,
    eventListener,
    false,
  );

  if (!listenerMap.has(context)) {
    listenerMap.set(context, new Map());
  }

  listenerMap.get(context).set(event, eventListener);
};
