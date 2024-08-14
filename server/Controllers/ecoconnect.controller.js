import { EcoConnect } from "../config/database.js";

//create post

export const createPost = async (req, res) => {
  try {
    const posst = await new EcoConnect(req.body);
    posst.save();
    res.status(200).json(posst);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
//get post all
export const getPostAll = async (req, res) => {
  try {
    const posstAll = await EcoConnect.find({});
    res.status(200).json(posstAll);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//get post by username

export const getPostbyUser = async (req, res) => {
  try {
    const { username } = req.params;
    const posstuser = await EcoConnect.findbyuser(username);
    console.log(req.body);
    if (!posstuser) {
      return res.status(404).json("user not found");
    }
    res.status(200).json(posstuser);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

// delete post

export const deletebyId = async (req, res) => {
  try {
    const { title } = req.params;
    const deletepost = await EcoConnect.findOneAndDelete({
      title: new RegExp(`^${title}$`, "i"),
    });
    if (!deletepost) {
      return res.status(404).json({ message: "post not found" });
    }
    res.status(200).json({ message: "post deleted successfully" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

export const DeleteLike = async (req, res) => {
  try {
    const { id1 } = req.params;
    const comment = await EcoConnect.findByIdAndUpdate(
      id1, // Directly using id1 as the ObjectId
      { $inc: { likes: -1 } },
      { new: true, runValidators: true }
    );
    if (!comment) {
      res.status(400).send("Not Found");
    }
    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

export const UpdateLike = async (req, res) => {
  try {
    const { id1 } = req.params;

    // Ensure the id is a valid ObjectId

    // Find and update the document by _id
    const comment = await EcoConnect.findByIdAndUpdate(
      id1, // Directly using id as the ObjectId
      { $inc: { likes: 1 } },
      { new: true }
    );
    if (!comment) {
      return res.status(404).send("Not Found");
    }

    res.status(200).json(comment);
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
};

//get post by id
export const getpostbyid = async (req, res) => {
  try {
    const { id } = req.params;
    const posttt = await EcoConnect.findById(id);
    if (!posttt) {
      return res.status(404).json("Post not found");
    }
    res.status(200).json(posttt);
  } catch (error) {}
};
