import express, { json, urlencoded, Request, Response } from "express";
import exam from './exam.router';

const appRouters = express();

appRouters.use('/exam', exam);

export default appRouters;