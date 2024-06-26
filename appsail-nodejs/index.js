import Express from "express";
import router from "./routes/index.js";
import { errorHandler } from "./middlewares/errorHandlers.js";
const app = Express();
const port = process.env.X_ZOHO_CATALYST_LISTEN_PORT || 9000;

//connectDB();
app.use(Express.json())
app.use("/jeometry", router);
app.use(errorHandler);

app.get('/', req => {
  console.log("request --->",req.headers);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(`http://localhost:${port}/`);
});
