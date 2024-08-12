import { Volunteer } from "../config/database.js"

// post volunteer
const postvolunteer=async (req,res)=>{
    try {
        const volunt= await Volunteer(req.body);
        volunt.save();
        res.status(200).json(volunt)     ;
    } catch (error) {
        res.status(400).json({error:error.vision});
    }
}

// get colunteer

const getvolunteer=async (req,res)=>{
    try {
        const vol=await Volunteer.find({});
        res.status(200).json(vol);
    } catch (error) {
        res.status(400).json({error:error.message});
    }
}


export{
    postvolunteer,
    getvolunteer,
}