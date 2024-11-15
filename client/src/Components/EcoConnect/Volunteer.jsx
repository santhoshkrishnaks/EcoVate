import React, { useState } from "react";
import axios from "axios";
import { useUser } from '@clerk/clerk-react';
import {toast} from 'react-hot-toast';

const JoinVolunteerForm = ({ onClose }) => {
  const { user } = useUser();
  const [username, setUsername] = useState(user.username || "");
  const [email_address, setEmail] = useState(user.email || "");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [preferredActivities, setPreferredActivities] = useState([]);
  const [availability, setAvailability] = useState("");
  const [motivation, setMotivation] = useState("");
  const [otherActivity, setOtherActivity] = useState("");
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [activityError, setActivityError] = useState(false);

  const isOtherChecked = preferredActivities.includes("Other");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setActivityError(false);

    if (preferredActivities.length === 0 && !showOtherInput) {
      setActivityError(true);
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post("https://ecovate-nqq4.onrender.com/volunteer", {
        email_address,
        username,
        phone,
        address,
        age: Number(age),
        preferredActivities,
        availability,
        motivation,
      });

      if (response.status !== 200) {
        toast.error("Error submitting form. Please try again later.");
        throw new Error("Something went wrong!");
      }

      toast.success("Thank you for your interest in volunteering with us! we will get back to you soon.",{
        duration: 3000
      });
      setUsername("");
      setEmail("");
      setPhone("");
      setAddress("");
      setAge("");
      setPreferredActivities([]);
      setAvailability("");
      setMotivation("");
      setOtherActivity("");
      setShowOtherInput(false);

      onClose();
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleActivityChange = (e) => {
    const { value, checked } = e.target;

    if (value === "Other") {
      setShowOtherInput(checked);
      if (checked) {
        setPreferredActivities((prev) => [...prev, otherActivity]);
      } else {
        setPreferredActivities((prev) =>
          prev.filter((activity) => activity !== otherActivity)
        );
        setOtherActivity("");
      }
    } else {
      setPreferredActivities((prev) =>
        checked
          ? [...prev, value]
          : prev.filter((activity) => activity !== value)
      );
    }
  };

  const handleOtherInputChange = (e) => {
    const newActivity = e.target.value;
    setOtherActivity(newActivity);
    if (newActivity && !preferredActivities.includes("Other")) {
      setPreferredActivities((prev) => [...prev, "Other"]);
    } else if (!newActivity) {
      setPreferredActivities((prev) =>
        prev.filter((activity) => activity !== "Other")
      );
    }
  };

  const handleAvailabilityChange = (e) => {
    const { value } = e.target;
    setAvailability(value);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-md relative w-11/12 md:w-6/12 lg:w-6/12 xl:w-5/12 h-3/4 max-h-[70vh] overflow-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute text-gray-500 top-4 right-4 hover:text-gray-700"
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
        <h2 className="mb-4 text-2xl font-bold">Join Our Volunteer Program</h2>
        {error && <div className="mb-4 text-red-500">{error}</div>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="username"
              className="block text-sm font-medium text-gray-700"
            >
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="email_address"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email_address"
              value={email_address}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Preferred Volunteer Activities
            </label>
            <div className="flex flex-col mt-1">
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
                      activity === "Other"
                        ? isOtherChecked
                        : preferredActivities.includes(activity)
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
                  value={otherActivity}
                  onChange={handleOtherInputChange}
                  placeholder="Please specify"
                  className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              )}
              {activityError && (
                <div className="mt-2 text-red-500">This field is required.</div>
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
              value={availability}
              onChange={handleAvailabilityChange}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="">Select availability</option>
              <option value="Weekdays">Weekdays</option>
              <option value="Weekends">Weekends</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="inline-flex items-center">
              <span className="">
                Why do you want to join us?{" "}
                <span className="text-slate-400">(Optional)</span>
              </span>
            </label>
            <textarea
              id="motivation"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
              className="block w-full px-3 py-2 mt-1 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="4"
              placeholder="Share your motivation"
            ></textarea>
          </div>
          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 mr-2 text-white bg-gray-500 rounded-lg shadow"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-lg shadow hover:bg-blue-700"
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
