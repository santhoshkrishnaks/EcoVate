import { EcoVision } from "../config/database.js";
import nodemailer from "nodemailer";

// Create EcoVision
const postvision = async (req, res) => {
    try {
        const project = new EcoVision(req.body);
        await project.save();
        const transporter=nodemailer.createTransport({
            service:'gmail',
            auth:{
                user:'info.ecovate@gmail.com',
                pass:"njqm czvf lkbs wlne",
            },
        })

        const mailOptions={
            from:"info.ecovate@gmail.com",
            to:project.contact_email,
            subject:"Project Submission Received",
            text: `Dear ${project.project_lead_name},\n\nThank you for your submission titled "${project.project_title}". Your project has been successfully received and is under review.\n\nBest regards,\nYour Company Name`
        };

        await transporter.sendMail(mailOptions);

        
        res.status(200).json(project);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Get all EcoVision projects
const getvision = async (req, res) => {
    try {
        const projects = await EcoVision.find({});
        res.status(200).json(projects);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Approve EcoVision project
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
Dear ${project.username},

We are excited to inform you that your project, "${project.project_title}", has been selected by EcoVision for further development and funding! Your innovative approach to addressing ${project.problem_statement} has impressed our review committee, and we believe it holds great potential to make a positive impact.

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

// Reject EcoVision project
const rejectVision = async (req, res) => {
    try {
        const { id, userEmail } = req.body;

        // Validate that id and userEmail are provided
        if (!id || !userEmail) {
            return res.status(400).json({ error: "ID and userEmail are required" });
        }

        // Update the project status to 'rejected'
        const project = await EcoVision.findByIdAndUpdate(id, { status: "rejected" }, { new: true });

        if (!project) {
            return res.status(404).json({ error: "Project not found" });
        }

        // Send a rejection email to the user
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: userEmail,
            subject: "EcoVision Project Application - Rejection Notification",
            text: `
Dear ${project.username},

Thank you for your interest in EcoVision and for submitting your project proposal, "${project.project_title}". After careful consideration, we regret to inform you that we are unable to select your project for development and funding at this time.

We appreciate the effort you put into your application and encourage you to apply again in the future. Your dedication to addressing ${project.problem_statement} is commendable, and we hope to have the opportunity to work with you on another project.

Thank you for your understanding.

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
                console.error("Error sending email:", error); // Log email errors
                return res.status(500).json({ error: "Failed to send rejection email" });
            } else {
                res.status(200).json({ message: "Project rejected and email sent", project });
            }
        });
    } catch (error) {
        console.error("Error rejecting project:", error); // Log the server-side error
        res.status(500).json({ error: error.message });
    }
};

export {
    postvision,
    getvision,
    approveVision,
    rejectVision,
};
