import { EcoCalc } from "../config/database.js";

export const postCalc = async(req,res)=>{
    try {
        const calc=await new EcoCalc(req.body);
        calc.save();
        res.status(200).json(calc);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

export const getCalc = async (req, res) => {
  try {
    const fund = await EcoCalc.find({});
    res.status(200).json(fund);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};