import nodemailer from 'nodemailer';
import { EcoVision } from '../config/database.js';

// Configure nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || "info.ecovate@gmail.com",
    pass: process.env.EMAIL_PASS || "njqm czvf lkbs wlne", // Replace with your actual password or use an environment variable
  },
});

// Function to send email
const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: process.env.EMAIL_USER || 'info.ecovate@gmail.com',
    to,
    subject,
    text,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (error) {
    throw new Error(`Failed to send email: ${error.message}`);
  }
};

// Create EcoVision project
const postvision = async (req, res) => {
  try {
    const project = new EcoVision(req.body);
    await project.save();

    const subject = 'Project Submission Received';
    const text = `Dear ${project.project_lead_name},\n\nThank you for your submission titled "${project.project_title}". Your project has been successfully received and is under review.\n\nBest regards,\nYour Company Name`;

    await sendEmail(project.contact_email, subject, text);

    res.status(200).json(project);
  } catch (error) {
    console.error('Error creating project:', error); // Log the error
    res.status(400).json({ error: error.message });
  }
};

// Get all EcoVision projects
const getvision = async (req, res) => {
  try {
    const projects = await EcoVision.find({});
    res.status(200).json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error); // Log the error
    res.status(400).json({ error: error.message });
  }
};

// Approve EcoVision project
const approveVision = async (req, res) => {
  try {
    const { id } = req.body;
    const project = await EcoVision.findById(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const subject = 'Congratulations! Your Project Has Been Selected by EcoVision';
    const text = `Dear ${project.username},\n\nWe are excited to inform you that your project, "${project.project_title}", has been selected by EcoVision for further development and funding! Your innovative approach to addressing ${project.problem_statement} has impressed our review committee, and we believe it holds great potential to make a positive impact.\n\nAs the next step, we would like to request additional details regarding your project. Please find attached a document outlining the information we need. Once we receive these details, our team will work closely with you to finalize the funding and support structure.\n\nBest regards,\ninfo.ecovate@gmail.com\nEcoVate Global Website`;

    await sendEmail(project.contact_email, subject, text);

    res.status(200).json({ message: 'Approval email sent' });
  } catch (error) {
    console.error('Error approving project:', error); // Log the error
    res.status(400).json({ error: error.message });
  }
};

// Reject EcoVision project
const rejectVision = async (req, res) => {
  try {
    const { id } = req.body;
    const project = await EcoVision.findById(id);

    if (!project) {
      return res.status(404).json({ error: 'Project not found' });
    }

    const subject = 'EcoVision Project Application - Rejection Notification';
    const text = `Dear ${project.username},\n\nThank you for your interest in EcoVision and for submitting your project proposal, "${project.project_title}". After careful consideration, we regret to inform you that we are unable to select your project for development and funding at this time.\n\nWe appreciate the effort you put into your application and encourage you to apply again in the future. Your dedication to addressing ${project.problem_statement} is commendable, and we hope to have the opportunity to work with you on another project.\n\nThank you for your understanding.\n\nBest regards,\ninfo.ecovate@gmail.com\nEcoVate Global Website`;

    await sendEmail(project.contact_email, subject, text);

    res.status(200).json({ message: 'Rejection email sent' });
  } catch (error) {
    console.error('Error rejecting project:', error); // Log the error
    res.status(400).json({ error: error.message });
  }
};

export {
  postvision,
  getvision,
  approveVision,
  rejectVision,
};
