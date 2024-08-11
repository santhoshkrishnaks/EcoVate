import { EcoConnect } from "../config/database";

//create post

const createPost=async (req,res)=>{

  try{
    const posst=await new EcoConnect(req.body);
    posst.save();
    res.status(200).json(posst);
  }
  catch(error){
    res.status(400).json({error:error.message})
  }
}

//get post all

const getPostAll= async(req,res)=>{
  try{
    const posstAll=await EcoConnect.find({});
    res.status(200).json(posstAll);
  }
  catch(error)
  {
    res.status(400).json({error:error.message});
  }
}



//get post by username

const getPostbyUser =async(req,res)=>{
  try{
    const username = req.body;
    const posstuser=await EcoConnect.findbyuser({username});
  if(!posstuser)
  {
    return res.status(404).json("user not found")
  }
  res.status(200).json(posstuser);
  }
  catch(error){
    console.log(error.message);
    res.status(500).json({message:error.message});
  }
}


// delete post

const deletebyId=async(req,res)=>{
  

}






