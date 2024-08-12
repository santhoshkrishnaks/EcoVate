import { getvision,postvision,approveVision } from "../Controllers/ecovision.controller.js";
import express from "express";

const ecovisionrouter=express.Router();

ecovisionrouter.get('/ecovision',getvision);
ecovisionrouter.post('/ecovision',postvision);
ecovisionrouter.post('/approvevision',approveVision);


export default ecovisionrouter;
