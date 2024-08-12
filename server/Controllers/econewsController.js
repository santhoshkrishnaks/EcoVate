import { News } from "../config/database.js";

export const postnews = async (req, res) => {
  try {
    const news = await new News(req.body);
    news.save();
    res.status(200).json(news);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
export const getnews = async (req, res) => {
  try {
    const news2 = await News.find();
    res.status(200).json(news2);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
