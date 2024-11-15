import React, { useContext, useState } from 'react';
import axios from 'axios';
import Create from '../Context';
import { useUser } from '@clerk/clerk-react';
import {toast} from 'react-hot-toast';

const Form = () => {
  const { showForm, setShowForm } = useContext(Create);
  const { user } = useUser();
  const [formData, setFormData] = useState({
    username: user.username || "",
    projectLeadName: '',
    contactEmail: '',
    contactPhone: '',
    organizationName: '',
    projectTitle: '',
    projectDescription: '',
    problemStatement: '',
    detailedProjectPlanLink: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    // Mapping form data to match schema field names
    const mappedData = {
      username: formData.username, // Include username
      project_lead_name: formData.projectLeadName,
      contact_email: formData.contactEmail,
      contact_phone: formData.contactPhone,
      organisation_name: formData.organizationName,
      project_title: formData.projectTitle,
      project_description: formData.projectDescription,
      problem_statement: formData.problemStatement,
      drivelink: formData.detailedProjectPlanLink, // Changed to drivelink
    };

    try {
      const response = await axios.post('https://ecovate-nqq4.onrender.com/ecovision', mappedData);
      console.log('Form data submitted:', response.data);
      setShowForm(false);
      toast.success('Your Application has been received. We will get back to you soon.',{
        duration: 3000
      });
      
    } catch (error) {
      toast.error('Error submitting form. Please try again.',{
        duration: 3000
      });
      console.error('Error submitting form:', error);
    }
  };

  const handleFormClick = () => {
    setShowForm(false);
  };

  return (
    <form className="p-8 bg-white rounded-lg shadow-lg" onSubmit={handleFormSubmit}>
      <div className="space-y-8">
        {/* Personal Information Section */}
        <div className="pb-8 border-b border-gray-200">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-600">Please provide your contact details.</p>

          <div className="grid grid-cols-1 mt-6 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div className="sm:col-span-1">
              <label htmlFor="project-lead-name" className="block text-sm font-semibold leading-6 text-gray-900">Project Lead Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="projectLeadName"
                  id="project-lead-name"
                  autoComplete="name"
                  value={formData.projectLeadName}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="contact-email" className="block text-sm font-semibold leading-6 text-gray-900">Contact Email</label>
              <div className="mt-2">
                <input
                  type="email"
                  name="contactEmail"
                  id="contact-email"
                  autoComplete="email"
                  value={formData.contactEmail}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="mt-6 sm:col-span-1">
              <label htmlFor="contact-phone" className="block text-sm font-semibold leading-6 text-gray-900">Contact Phone Number</label>
              <div className="mt-2">
                <input
                  type="tel"
                  name="contactPhone"
                  id="contact-phone"
                  autoComplete="tel"
                  value={formData.contactPhone}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="(123) 456-7890"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="organization-name" className="block text-sm font-semibold leading-6 text-gray-900">Organization/Team Name (if applicable)</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="organizationName"
                  id="organization-name"
                  autoComplete="organization"
                  value={formData.organizationName}
                  onChange={handleFormChange}
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Your Organization/Team"
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="pb-8 border-b border-gray-200">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Project Details</h2>
          <p className="mt-1 text-sm text-gray-600">Provide information about your project.</p>

          <div className="grid grid-cols-1 mt-6 gap-y-6">
            <div>
              <label htmlFor="problem-statement" className="block text-sm font-semibold leading-6 text-gray-900">Problem Statement</label>
              <div className="mt-2">
                <textarea
                  id="problem-statement"
                  name="problemStatement"
                  rows="4"
                  value={formData.problemStatement}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="What environmental issue does the project address?"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project-title" className="block text-sm font-semibold leading-6 text-gray-900">Project Title</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="projectTitle"
                  id="project-title"
                  autoComplete="title"
                  value={formData.projectTitle}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Project Title"
                />
              </div>
            </div>

            <div>
              <label htmlFor="project-description" className="block text-sm font-semibold leading-6 text-gray-900">Project Description</label>
              <div className="mt-2">
                <textarea
                  id="project-description"
                  name="projectDescription"
                  rows="4"
                  value={formData.projectDescription}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Describe your project in detail"
                />
              </div>
            </div>

            <div>
              <label htmlFor="detailed-project-plan" className="block text-sm font-semibold leading-6 text-gray-900">Detailed Project Plan (Google Drive Link)</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="detailedProjectPlanLink"
                  id="detailed-project-plan"
                  value={formData.detailedProjectPlanLink}
                  onChange={handleFormChange}
                  required
                  className="block w-full px-3 py-2 text-gray-900 placeholder-gray-400 bg-white border border-gray-300 rounded-lg shadow-sm focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="https://drive.google.com/your-file-link"
                />
                <p className="mt-1 text-xs leading-5 text-gray-600">Enter the Google Drive link (PDF, DOC, DOCX, PPT accepted)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end mt-8 gap-x-6">
        <button type="button" onClick={handleFormClick} className="text-sm font-semibold leading-6 text-gray-900 hover:text-gray-600">Cancel</button>
        <button type="submit" className="inline-flex items-center justify-center rounded-md border border-transparent bg-green-600 px-3 py-1.5 text-sm font-semibold text-white shadow-sm ring-1 ring-gray-900/10 hover:bg-green-500 focus:ring-2 focus:ring-green-600">Submit</button>
      </div>
    </form>
  );
};

export default Form;
