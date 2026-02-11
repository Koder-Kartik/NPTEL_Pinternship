/*import http from "http";

http
  .createServer((req, res) => {
    if (req.url === "/") {
      res.writeHead(200);
      res.end(JSON.stringify({ message: "Hello" }));
    }
  })
  .listen(3000, () => {
    console.log("server is running");
  });*/

  import express from "express";
  import authRouter from "./routes/authRouter.ts";
  import {connectDB} from "./config/database.ts";
  import morgan from "morgan";
  import cors from "cors";
  const app = express();
  const port = 3000;

  app.use(express.json());
  app.use("/api/auth", authRouter);
  app.use(morgan("dev"));
  app.use(cors());


  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
  });

  connectDB().catch((err) => {
    console.log("error", err);
  });
