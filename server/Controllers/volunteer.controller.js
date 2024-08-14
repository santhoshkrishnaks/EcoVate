import { Volunteer } from "../config/database.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "info.ecovate@gmail.com",
    pass: "njqm czvf lkbs wlne", // Consider using environment variables for sensitive information
  },
});

const sendEmail = async (to, subject, text) => {
  const mailOptions = {
    from: "info.ecovate@gmail.com",
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

const postvolunteer = async (req, res) => {
  try {
    const volunt = new Volunteer.create(req.body);
    await volunt.save();



    res.status(200).json(volunt);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getvolunteer = async (req, res) => {
  try {
    const vol = await Volunteer.find({});
    res.status(200).json(vol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const decideApplication = async (req, res) => {
  const { id, action } = req.body;

  if (!id || !action) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    const volunteer = await Volunteer.findById(id);

    if (!volunteer) {
      return res.status(404).json({ error: "Volunteer not found" });
    }

    let subject, text;

    if (action === "accept") {
      subject =
        "Congratulations! Your Application to Join EcoVate Has Been Accepted";
      text = `
Dear ${volunteer.username},

Congratulations! We are pleased to inform you that your application to join EcoVate has been accepted. We are excited to have you on board and look forward to working together on our sustainability initiatives.

As the next step, we will provide you with further details on how to get started. Please keep an eye on your inbox for additional information and instructions.

Thank you for your commitment to environmental sustainability. We are thrilled to welcome you to our team!

Best regards,

Vimal C
Founder, CEO
EcoVate Team
info.ecovate@gmail.com
EcoVate Global Website
            `;
    } else if (action === "reject") {
      subject = "Application Rejection Notification from EcoVate";
      text = `
Dear ${volunteer.username},

Thank you for your interest in joining EcoVate. After careful consideration, we regret to inform you that we are unable to accept your application at this time.

We appreciate the effort you put into your application and encourage you to apply again in the future. Your passion for environmental sustainability is commendable, and we hope to have the opportunity to work with you at another time.

Thank you for your understanding.

Best regards,

Vimal C
Founder, CEO
EcoVate Team
info.ecovate@gmail.com
EcoVate Global Website
            `;
    } else {
      return res.status(400).json({ error: "Invalid action" });
    }

    await sendEmail(volunteer.email_address, subject, text);
    res.status(200).json({ message: `Application ${action}ed successfully` });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { postvolunteer, getvolunteer, decideApplication };
