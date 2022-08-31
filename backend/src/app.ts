import express, { Request, Response } from "express";
import responseTime from "response-time";
import connect from "./utils/connect"
import logger from "./utils/logger"
import routes from "./routes"
import { restResponseTimeHistogram, startMetricsServer } from "./utils/metrics";
import * as dotenv from 'dotenv';
import config from "./config/default"

dotenv.config();
const port = config.port;

const app = express();

app.use(express.json());

app.use(
    responseTime((req: Request, res: Response, time: number) => {
      if (req?.route?.path) {
        restResponseTimeHistogram.observe(
          {
            method: req.method,
            route: req.route.path,
            status_code: res.statusCode,
          },
          time * 1000
        );
      }
    })
  );
app.listen(port, async () => { 
    await connect();
    
    startMetricsServer();

    routes(app)
});