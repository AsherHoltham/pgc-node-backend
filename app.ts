import express from "express";
import parser from 'body-parser';

const userRouter = require('./routers/user.router').default;

const app = express();

app.use(parser.json());
app.use('/', userRouter);

export default app;