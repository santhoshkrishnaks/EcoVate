import { EcoVision } from "../config/database.js";

//create ecovision
const postvision = async (req,res)=>{
    try {
        const project=await EcoVision(req.body);
        project.save();
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}

//get ecovision
const getvision=async(req,res)=>{
    try {
       const getpro=await EcoVision.find({});
       res.status(200).json(getpro);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


export{
    postvision,
    getvision,
}