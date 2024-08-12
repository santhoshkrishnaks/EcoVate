import React, { useState } from "react";
import axios from "axios";
import Footer from "../Header_Footer/Footer";
import Nav from "../Header_Footer/Nav";

const Form = () => {
  // State to store form data
  const [formData, setFormData] = useState({
    email_address: "",
    org_name: "",
    no_of_employees: "",
    sector: "",
    headquarters: "",
    website_url: "",
    full_name: "",
    job_title: "",
    phone_number: "",
    current_initiative: "",
    goals: "",
    why_join: "",
    expectations: "",
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
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:5000/ecocorp", formData);
      console.log("Form data submitted successfully.");
      // Optionally reset form after submission
      setFormData({
        email_address: "",
        org_name: "",
        no_of_employees: "",
        sector: "",
        headquarters: "",
        website_url: "",
        full_name: "",
        job_title: "",
        phone_number: "",
        current_initiative: "",
        goals: "",
        why_join: "",
        expectations: "",
      });
    } catch (error) {
      console.error("Error submitting form data:", error);
    }
  };

  return (
    <div>
      <Nav />
      <form
        className="bg-white p-8 rounded-lg shadow-lg"
        onSubmit={handleFormSubmit}
      >
        <div className="space-y-8">
          {/* Organization Details Section */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Organization Details
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Provide details about your organization.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div className="sm:col-span-1">
                <label
                  htmlFor="org_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Organization Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="org_name"
                    id="org_name"
                    value={formData.org_name}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Your Organization"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="sector"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Sector
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="sector"
                    id="sector"
                    value={formData.sector}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Industry/Sector"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="no_of_employees"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Number of Employees
                </label>
                <div className="mt-2">
                  <input
                    type="number"
                    name="no_of_employees"
                    id="no_of_employees"
                    value={formData.no_of_employees}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Number of Employees"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="headquarters"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Headquarters Address
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="headquarters"
                    id="headquarters"
                    value={formData.headquarters}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Headquarters Address"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="website_url"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Website URL
                </label>
                <div className="mt-2">
                  <input
                    type="url"
                    name="website_url"
                    id="website_url"
                    value={formData.website_url}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="https://your-website.com"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Person Details Section */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Contact Person Details
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Provide contact details of the person representing the
              organization.
            </p>

            <div className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-6">
              <div className="sm:col-span-1">
                <label
                  htmlFor="full_name"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    value={formData.full_name}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="John Doe"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="job_title"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Job Title/Position
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="job_title"
                    id="job_title"
                    value={formData.job_title}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Job Title/Position"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="email_address"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <div className="mt-2">
                  <input
                    type="email"
                    name="email_address"
                    id="email_address"
                    value={formData.email_address}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="email@example.com"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-1">
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    type="text"
                    name="phone_number"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Phone Number"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Sustainability Information Section */}
          <div className="border-b border-gray-200 pb-8">
            <h2 className="text-lg font-semibold leading-6 text-gray-900">
              Sustainability Information
            </h2>
            <p className="mt-1 text-sm text-gray-600">
              Provide details on your current environmental initiatives and
              goals.
            </p>

            <div className="mt-6 space-y-6">
              <div>
                <label
                  htmlFor="current_initiative"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Current Environmental Initiatives
                </label>
                <div className="mt-2">
                  <textarea
                    name="current_initiative"
                    id="current_initiative"
                    value={formData.current_initiative}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Describe your current environmental initiatives"
                    rows="4"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="goals"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Primary Sustainability Goals
                </label>
                <div className="mt-2">
                  <textarea
                    name="goals"
                    id="goals"
                    value={formData.goals}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Describe your primary sustainability goals"
                    rows="4"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="why_join"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Why Join EcoCorp?
                </label>
                <div className="mt-2">
                  <textarea
                    name="why_join"
                    id="why_join"
                    value={formData.why_join}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="Why are you interested in joining EcoCorp?"
                    rows="4"
                    required
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="expectations"
                  className="block text-sm font-semibold leading-6 text-gray-900"
                >
                  Expectations from EcoCorp
                </label>
                <div className="mt-2">
                  <textarea
                    name="expectations"
                    id="expectations"
                    value={formData.expectations}
                    onChange={handleFormChange}
                    className="block w-full rounded-lg border border-gray-300 bg-white py-2 px-3 text-gray-900 shadow-sm placeholder-gray-400 focus:border-green-600 focus:ring-1 focus:ring-green-600"
                    placeholder="What are your expectations from EcoCorp?"
                    rows="4"
                    required
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="pt-8">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className="inline-flex justify-center rounded-md border border-transparent bg-green-600 py-2 px-4 text-base font-medium text-white shadow-sm hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Submit Application
            </button>
          </div>
        </div>
      </form>
      <Footer />
    </div>
  );
};

export default Form;
