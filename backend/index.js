const express = require("express");

const app = express();

import mainRouter from "./routes/index";
import userRouter from "./routes/user";

app.use("/api/v1", mainRouter);

app.use("/api/v1/user", userRouter);
