import compreesion from "compression";
import helmet from "helmet";

export function prod(app) {
  app.use(compreesion());
  app.use(helmet());
}