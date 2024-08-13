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

export const deletenews=async (req,res)=>{
  try {
    const {id}=req.params
    const news= await News.findByIdAndDelete(id)  
    if(!news){
      return res.status(404).json({error:"News Not Found"})
    }  
    res.status(200).json({message:"News Deleted Successfully",news})
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
