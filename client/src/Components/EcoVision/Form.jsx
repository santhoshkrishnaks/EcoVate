import React, { useContext, useState } from 'react';
import Create from '../Context';

const Form = () => {
  const { showForm, setShowForm } = useContext(Create);

  // State to store form data
  const [formData, setFormData] = useState({
    projectleadname: '',
    contactemail: '',
    contactphone: '',
    organizationname: '',
    projecttitle: '',
    projectdescription: '',
    problemstatement: '',
    drivelink: '',
  });

  // Handle changes in the input fields
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Store or submit the form data here
    console.log('Form data submitted:', formData);
    // Example: Send data to an API or a backend service here

    // Hide the form after submission
    setShowForm(false);
  };

  // Handle form cancellation
  const handleFormClick = () => {
    setShowForm(false);
  };

  return (
    <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleFormSubmit}>
      <div className="space-y-8">
        {/* Personal Information Section */}
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Personal Information</h2>
          <p className="mt-1 text-sm text-gray-600">Please provide your contact details.</p>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div className="sm:col-span-1">
              <label htmlFor="project-lead-name" className="block text-sm font-semibold leading-6 text-gray-900">Project Lead Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="projectLeadName"
                  id="project-lead-name"
                  autoComplete="name"
                  value={formData.projectleadname}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
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
                  value={formData.contactemail}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="sm:col-span-1 mt-6">
              <label htmlFor="contact-phone" className="block text-sm font-semibold leading-6 text-gray-900">Contact Phone Number</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="contactPhone"
                  id="contact-phone"
                  autoComplete="tel"
                  value={formData.contactphone}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
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
                  value={formData.organizationname}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Your Organization/Team"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Project Details Section */}
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Project Details</h2>
          <p className="mt-1 text-sm text-gray-600">Provide information about your project.</p>

          <div className="mt-6 grid grid-cols-1 gap-y-6">
            <div>
              <label htmlFor="problem-statement" className="block text-sm font-semibold leading-6 text-gray-900">Problem Statement</label>
              <div className="mt-2">
                <textarea
                  id="problem-statement"
                  name="problemStatement"
                  rows="4"
                  value={formData.problemstatement}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
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
                  value={formData.projecttitle}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
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
                  value={formData.projectdescription}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
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
                  value={formData.drivelink}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="https://drive.google.com/your-file-link"
                />
                <p className="text-xs leading-5 text-gray-600 mt-1">Enter the Google Drive link (PDF, DOC, DOCX, PPT accepted)</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex items-center justify-end gap-x-6">
        <button type="button" onClick={handleFormClick} className="text-sm font-semibold leading-6 text-gray-900 hover:text-green-700">Cancel</button>
        <button type="submit" className="rounded-lg bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">Submit</button>
      </div>
    </form>
  );
};

export default Form;
