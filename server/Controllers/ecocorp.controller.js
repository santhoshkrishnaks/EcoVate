import { EcoCorp } from "../config/database.js";

const postcorp = async (req, res) => {
  try {
    const corp = await new EcoCorp(req.body);
    corp.save();
    res.status(200).json(corp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getcorp = async (req, res) => {
  try {
    const corpp = await EcoCorp.find();
    res.status(200).json(corpp);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export { postcorp, getcorp };
