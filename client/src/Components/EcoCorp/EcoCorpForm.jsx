import React, { useState } from 'react';
import Footer from '../Header_Footer/Footer';
import Nav from '../Header_Footer/Nav';
import {Link} from "react-router-dom"

const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    organizationName: '',
    industrySector: '',
    numberOfEmployees: '',
    headquartersAddress: '',
    websiteURL: '',
    fullName: '',
    jobTitle: '',
    emailAddress: '',
    phoneNumber: '',
    currentEnvironmentalInitiatives: '',
    primarySustainabilityGoals: '',
    whyJoinEcoCorp: '',
    expectationsFromEcoCorp: '',
    authorization: false,
    termsAndConditions: false,
  });

  // Handle changes in the input fields
  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Store or submit the form data here
    console.log('Form data submitted:', formData);
    // Example: Send data to an API or a backend service here

    // Optionally reset form after submission
    setFormData({
      organizationName: '',
      industrySector: '',
      numberOfEmployees: '',
      headquartersAddress: '',
      websiteURL: '',
      fullName: '',
      jobTitle: '',
      emailAddress: '',
      phoneNumber: '',
      currentEnvironmentalInitiatives: '',
      primarySustainabilityGoals: '',
      whyJoinEcoCorp: '',
      expectationsFromEcoCorp: '',
      authorization: false,
      termsAndConditions: false,
    });
  };

  return (
    <div>
    <Nav/>
    <form className="bg-white p-8 rounded-lg shadow-lg" onSubmit={handleFormSubmit}>
      <div className="space-y-8">
        {/* Organization Details Section */}
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Organization Details</h2>
          <p className="mt-1 text-sm text-gray-600">Provide details about your organization.</p>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div className="sm:col-span-1">
              <label htmlFor="organization-name" className="block text-sm font-semibold leading-6 text-gray-900">Organization Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="organizationName"
                  id="organization-name"
                  value={formData.organizationName}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Your Organization"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="industry-sector" className="block text-sm font-semibold leading-6 text-gray-900">Industry/Sector</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="industrySector"
                  id="industry-sector"
                  value={formData.industrySector}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Industry/Sector"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="number-of-employees" className="block text-sm font-semibold leading-6 text-gray-900">Number of Employees</label>
              <div className="mt-2">
                <input
                  type="number"
                  name="numberOfEmployees"
                  id="number-of-employees"
                  value={formData.numberOfEmployees}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Number of Employees"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="headquarters-address" className="block text-sm font-semibold leading-6 text-gray-900">Headquarters Address</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="headquartersAddress"
                  id="headquarters-address"
                  value={formData.headquartersAddress}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Headquarters Address"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="website-url" className="block text-sm font-semibold leading-6 text-gray-900">Website URL</label>
              <div className="mt-2">
                <input
                  type="url"
                  name="websiteURL"
                  id="website-url"
                  value={formData.websiteURL}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="https://your-website.com"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Person Details Section */}
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Contact Person Details</h2>
          <p className="mt-1 text-sm text-gray-600">Provide contact details of the person representing the organization.</p>

          <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
            <div className="sm:col-span-1">
              <label htmlFor="full-name" className="block text-sm font-semibold leading-6 text-gray-900">Full Name</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="fullName"
                  id="full-name"
                  value={formData.fullName}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="job-title" className="block text-sm font-semibold leading-6 text-gray-900">Job Title/Position</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="jobTitle"
                  id="job-title"
                  value={formData.jobTitle}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Job Title/Position"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="email-address" className="block text-sm font-semibold leading-6 text-gray-900">Email Address</label>
              <div className="mt-2">
                <input
                  type="email"
                  name="emailAddress"
                  id="email-address"
                  value={formData.emailAddress}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            <div className="sm:col-span-1">
              <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">Phone Number</label>
              <div className="mt-2">
                <input
                  type="text"
                  name="phoneNumber"
                  id="phone-number"
                  value={formData.phoneNumber}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Phone Number"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Sustainability Information Section */}
        <div className="border-b border-gray-200 pb-8">
          <h2 className="text-lg font-semibold leading-6 text-gray-900">Sustainability Information</h2>
          <p className="mt-1 text-sm text-gray-600">Provide details on your current environmental initiatives and goals.</p>

          <div className="mt-6 space-y-6">
            <div>
              <label htmlFor="current-environmental-initiatives" className="block text-sm font-semibold leading-6 text-gray-900">Current Environmental Initiatives</label>
              <div className="mt-2">
                <textarea
                  name="currentEnvironmentalInitiatives"
                  id="current-environmental-initiatives"
                  value={formData.currentEnvironmentalInitiatives}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Describe your current environmental initiatives"
                  rows="4"
                />
              </div>
            </div>

            <div>
              <label htmlFor="primary-sustainability-goals" className="block text-sm font-semibold leading-6 text-gray-900">Primary Sustainability Goals</label>
              <div className="mt-2">
                <textarea
                  name="primarySustainabilityGoals"
                  id="primary-sustainability-goals"
                  value={formData.primarySustainabilityGoals}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Describe your primary sustainability goals"
                  rows="4"
                />
              </div>
            </div>

            <div>
              <label htmlFor="why-join-ecocorp" className="block text-sm font-semibold leading-6 text-gray-900">Why Join EcoCorp?</label>
              <div className="mt-2">
                <textarea
                  name="whyJoinEcoCorp"
                  id="why-join-ecocorp"
                  value={formData.whyJoinEcoCorp}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="Why are you interested in joining EcoCorp?"
                  rows="4"
                />
              </div>
            </div>

            <div>
              <label htmlFor="expectations-from-ecocorp" className="block text-sm font-semibold leading-6 text-gray-900">Expectations from EcoCorp</label>
              <div className="mt-2">
                <textarea
                  name="expectationsFromEcoCorp"
                  id="expectations-from-ecocorp"
                  value={formData.expectationsFromEcoCorp}
                  onChange={handleFormChange}
                  className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                  placeholder="What are your expectations from EcoCorp?"
                  rows="4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Terms and Conditions Section */}
        <div className="pt-8">
          <div className="flex items-start">
            <div className="flex h-6 items-center">
              <input
                id="authorization"
                name="authorization"
                type="checkbox"
                checked={formData.authorization}
                onChange={handleFormChange}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="authorization" className="font-medium text-gray-900">Authorization</label>
              <p className="text-gray-600">I authorize EcoCorp to contact me regarding this application.</p>
            </div>
          </div>

          <div className="flex items-start mt-4">
            <div className="flex h-6 items-center">
              <input
                id="terms-and-conditions"
                name="termsAndConditions"
                type="checkbox"
                checked={formData.termsAndConditions}
                onChange={handleFormChange}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
              />
            </div>
            <div className="ml-3 text-sm">
              <label htmlFor="terms-and-conditions" className="font-medium text-gray-900">Terms and Conditions</label>
              <p className="text-gray-600">I agree to the <Link to="#" className="font-semibold text-green-600">Terms and Conditions</Link>.</p>
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <div className="pt-8">
          <button
            type="submit"
            className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            Submit Application
          </button>
        </div>
      </div>
    </form>
    <Footer/>
    </div>
  );
};

export default Form;
