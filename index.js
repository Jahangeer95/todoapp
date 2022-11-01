import express from "express";
import cors from "cors";
import config from "config";
import router from "./routes/routes.js";
import { prod } from "./routes/prod.js";
import { error } from "./middlewares/error.js";

const app = express();

app.use(cors());
app.use(express.json());

prod(app);
app.use("/", router);
app.use(error);

let port = config.get("port") || 8000;

app.listen(port, () => {
  console.log(`Server has started has on port ${port}....`);
});
