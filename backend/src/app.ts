import express, { Application, Request } from "express";

const app: Application = express();
const port = 12345;
app.listen(port, () => { console.log("Listen on port " + port)});