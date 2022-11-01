export function asyncMiddleware(handler) {
    return async (req, res, next) => {
      try {
        await handler(req, res);
      } catch (ex) {
        console.log(ex.message);
        next(ex);
      }
    };
  }