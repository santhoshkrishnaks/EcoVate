import { EcoVision } from "../config/database.js";
import nodemailer from "nodemailer";

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

const approveVision = async (req, res) => {
    try {
        const { id, userEmail } = req.body;

        // Update the project status to 'approved'
        const project = await EcoVision.findByIdAndUpdate(id, { status: "approved" }, { new: true });

        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Send an email notification to the user
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "info.ecovate@gmail.com",
                pass: "njqm czvf lkbs wlne",
            },
        });

        const mailOptions = {
            from: "info.ecovate@gmail.com",
            to: userEmail,
            subject: "Congratulations! Your Project Has Been Selected by EcoVision",
            text: `
Dear ${project.username || "Recipient"},

I hope this message finds you well.

We are excited to inform you that your project, "${project.project_title || "Your Project"}", has been selected by EcoVision for further development and funding! Your innovative approach to addressing ${project.problem_statement || "the environmental issue"} has impressed our review committee, and we believe it holds great potential to make a positive impact.

As the next step, we would like to request additional details regarding your project. Please find attached a document outlining the information we need. Once we receive these details, our team will work closely with you to finalize the funding and support structure.

Thank you for your dedication to environmental sustainability. We look forward to collaborating with you and supporting your project as it progresses.

If you have any questions or need further assistance, please don’t hesitate to reach out.

Congratulations once again!

Best regards,

Vishnu Rohith B
CEO, Founder
EcoVate Global
info.ecovate@gmail.com
EcoVate Global Website
`,
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return res.status(500).json({ error: error.message });
            } else {
                res.status(200).json({ message: "Project approved and email sent", project });
            }
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

export{
    postvision,
    getvision,
    approveVision
}