import { Comment } from "../config/database";

export const createComment=async (req,res)=>{
    try{
    const post = await Comment.create(req.body);
    post.save();
    res.status(200).json(post);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}

export const getComment=async(req,res)=>{
    try {
        const {id} = req.params;
        const comment = await Comment.findById(id);
        if (!comment ) {
          return res.status(404).json("Comment not found");
        }
        res.status(200).json(comment);
      } catch (error) {
        console.log(error.message);
        res.status(500).json({ message: error.message });
      }
}

export const UpdateComments=async(req,res)=>{
    try{
        const {id}=req.params;
        const comment =await Comment.findOneAndUpdate({ post_id:id},{ $inc: { number : 1 } },{new: true});
        if(!comment){
          res.status(400).send('Not Found');
        }
        res.status(200).json(comment);
    }
    catch(error){
      res.status(500).send('Server error');
    }
}
export const DeleteComment =async (req,res)=>{
  try{
    const {id,number1}=req.body;
    const comment=await Comment.findOneAndDelete({post_id:id,number:number1});
    if(!comment){
      res.status(400).send('Not Found');
    }
    res.status(500).json(comment);
  }
  catch(error){
    res.status(500).send('Server error');
  }
}