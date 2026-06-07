import express from "express";
import cors from "cors";
import helmet from "helmet";
import compression from "compression";

import chatRoutes
from "./routes/chat.routes.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use(helmet());

app.use(compression());

app.use(
 "/api/v1/chat",
 chatRoutes
);

export default app;