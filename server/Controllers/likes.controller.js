import { likes } from "../config/database.js";
export const getlik=async(req,res)=>{
    try{
        const like=await likes.find({});
        res.status(200).json(like)
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
export const getLikes=async(req,res)=>{
    try{
        const { post_id, username } = req.query;
        const like = await likes.findOne({ post_id, username });
        if(!like){
            return res.status(404).json({ message: "Post not found" });
        }
    res.status(200).json(like);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
export const postLike=async(req,res)=>{
    try{
        const like=await new likes(req.body);
        like.save();
        res.status(200).json(like);
    }
    catch(error){
        res.status(400).json({error:error.message});
    }
}
export const UpdateLike=async(req,res)=>{
    try {
        // First, attempt to find the like document based on post_id and username
        let like = await likes.findOne({
            post_id: new RegExp(`^${req.body.post_id}$`, "i"),
            username: new RegExp(`^${req.body.username}$`, "i")
        });
        
        if (like) {
            // If the document is found, toggle the liked value and save the document
            like.liked = !like.liked;
            await like.save();
            res.status(200).json(like);
        } else {
            // If the document is not found, create a new one
            like = new likes(req.body);
            await like.save();
            res.status(200).json(like);
        }
    } catch (error) {
        // Handle any errors
        res.status(400).json({ error: error.message });
    }
    
}