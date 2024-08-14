import React, { useState } from "react";
import axios from "axios";
import { useUser } from '@clerk/clerk-react';

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
        throw new Error("Something went wrong!");
      }

      // Clear form fields
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
              className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
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
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
              value={address}
              onChange={(e) => setAddress(e.target.value)}
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
              value={age}
              onChange={(e) => setAge(e.target.value)}
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
              value={availability}
              onChange={handleAvailabilityChange}
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
              <span className="">
                Why do you want to join us?{" "}
                <span className="text-slate-400">(Optional)</span>
              </span>
            </label>
            <textarea
              id="motivation"
              value={motivation}
              onChange={(e) => setMotivation(e.target.value)}
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