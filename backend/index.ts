import express, { Express, Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

import usersRouter from "./routes/usersRouter";

dotenv.config({
  path: ".env",
});

const port = process.env.PORT || 3001;
const app: Express = express();

app.use(express.json());

app.use("/users", usersRouter);

app.listen(port, () => {
  console.log(`[+] Application listenning on port: ${port}`);
});

export default app;
