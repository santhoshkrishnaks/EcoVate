import { getvision,postvision } from "../Controllers/ecovision.controller.js";
import express from "express";

const ecovisionrouter=express.Router();

ecovisionrouter.get('/ecovision',getvision);
ecovisionrouter.post('/ecovision',postvision);

export default ecovisionrouter;
