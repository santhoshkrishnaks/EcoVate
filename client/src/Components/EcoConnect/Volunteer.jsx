import React, { useState } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const JoinVolunteerForm = ({ onClose }) => {
  const { user } = useUser();
  const [formData, setFormData] = useState({
    username: user.username || "",
    name: "",
    email: "",
    phone: "",
    address: "",
    age: "",
    preferredActivities: [],
    availability: "",
    motivation: "",
    otherActivity: "",
  });
  const [showOtherInput, setShowOtherInput] = useState(false); // State to toggle input visibility
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activityError, setActivityError] = useState(false); // New state for activity error

  // Handle change for all inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleActivityChange = (e) => {
    const { value, checked } = e.target;  // Destructuring `checked` from the event object
  
    if (value === "Other") {
      setShowOtherInput(checked);  // Update the state to show/hide the "Other" input based on `checked`
  
      setFormData((prev) => {
        if (checked) {
          // If checked, add "Other" to preferredActivities
          return {
            ...prev,
            preferredActivities: [...prev.preferredActivities, "Other"],
          };
        } else {
          // If unchecked, remove "Other" from preferredActivities and clear otherActivity
          return {
            ...prev,
            preferredActivities: prev.preferredActivities.filter(
              (activity) => activity !== "Other"
            ),
            otherActivity: "",  // Assuming you want to clear the 'otherActivity' field when "Other" is unchecked
          };
        }
      });
    } else {
      // Handle all other activities
      setFormData((prev) => ({
        ...prev,
       preferredActivities: checked
          ? [...prev.preferredActivities, value]  // Add the activity if checked
          : prev.preferredActivities.filter((activity) => activity !== value),  // Remove the activity if unchecked
      }));
    }
  };
  
  const handleOtherInputChange = (e) => {
    const newActivity = e.target.value;
    setFormData((prev) => ({
      ...prev,
      otherActivity: newActivity,
    }));
    if (newActivity && !formData.preferredActivities.includes("Other")) {
      setFormData((prev) => ({
        ...prev,
        preferredActivities: [...prev.preferredActivities, "Other"],
      }));
    } else if (!newActivity) {
      setFormData((prev) => ({
        ...prev,
        preferredActivities: prev.preferredActivities.filter(
          (activity) => activity !== "Other"
        ),
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setActivityError(false); // Reset activity error

    // Check if at least one preferred activity is selected
    if (formData.preferredActivities.length === 0 && !showOtherInput) {
      setActivityError(true);
      setLoading(false);
      return;
    }

    try {
      // Replace with your backend API URL
      const response = await axios.post("http://localhost:3000/volunteer", {
        ...formData,
      });
      console.log(formData);

      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      // Reset the form
      setFormData({
        username: user.username || "",
        name: "",
        email: "",
        phone: "",
        address: "",
        age: "",
        preferredActivities: [],
        availability: "",
        motivation: "",
        otherActivity: "",
      });
      setShowOtherInput(false);

      onClose(); // Close the form if provided
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md relative w-11/12 md:w-6/12 lg:w-6/12 xl:w-5/12 h-3/4 max-h-[70vh] overflow-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 className="text-2xl font-bold mb-4">Join Our Volunteer Program</h2>
        {error && <div className="text-red-500 mb-4">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="age"
              className="block text-sm font-medium text-gray-700"
            >
              Age
            </label>
            <input
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Volunteer Activities
            </label>
            <div className="mt-1 flex flex-col">
              {[
                "Beach Clean-Up",
                "Tree Planting",
                "Recycling Programs",
                "Wildlife Conservation",
                "Other",
              ].map((activity) => (
                <label key={activity} className="inline-flex items-center ml-4">
                  <input
                    type="checkbox"
                    value={activity}
                    checked={
                      formData.preferredActivities.includes(activity)
                    }
                    onChange={handleActivityChange}
                    className="form-checkbox"
                  />
                  <span className="ml-2">{activity}</span>
                </label>
              ))}
              {showOtherInput && (
                <input
                  type="text"
                  value={formData.otherActivity}
                  onChange={handleOtherInputChange}
                  placeholder="Please specify"
                  className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              {activityError && (
                <div className="text-red-500 mt-2">This field is required.</div>
              )}
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="availability"
              className="block text-sm font-medium text-gray-700"
            >
              Availability
            </label>
            <select
              id="availability"
              name="availability"
              value={formData.availability}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select availability</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <span>
                Why do you want to join us?{" "}
                <span className="text-slate-400">(Optional)</span>
              </span>
            </label>
            <textarea
              id="motivation"
              name="motivation"
              value={formData.motivation}
              onChange={handleInputChange}
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Share your motivation"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinVolunteerForm;
