import React, { useState } from "react";

const JoinVolunteerForm = ({ onClose }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [preferredActivities, setPreferredActivities] = useState([]);
  const [availability, setAvailability] = useState([]);
  const [motivation, setMotivation] = useState("");
  const [showMotivation, setShowMotivation] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with your backend API URL
      const response = await fetch("https://your-backend-url.com/volunteer", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          phone,
          address,
          age,
          preferredActivities,
          availability,
          motivation,
        }),
      });

      if (!response.ok) {
        throw new Error("Something went wrong!");
      }

      // Clear form fields
      setName("");
      setEmail("");
      setPhone("");
      setAddress("");
      setAge("");
      setPreferredActivities([]);
      setAvailability([]);
      setMotivation("");

      alert("Thank you for joining our volunteer program!");
      onClose(); // Close the form if provided
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleActivityChange = (e) => {
    const { value, checked } = e.target;
    setPreferredActivities((prev) =>
      checked ? [...prev, value] : prev.filter((activity) => activity !== value)
    );
  };

  const handleAvailabilityChange = (e) => {
    const { value, checked } = e.target;
    setAvailability((prev) =>
      checked ? [...prev, value] : prev.filter((time) => time !== value)
    );
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
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
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
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Beach Clean-Up"
                  checked={preferredActivities.includes("Beach Clean-Up")}
                  onChange={handleActivityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Beach Clean-Up</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Tree Planting"
                  checked={preferredActivities.includes("Tree Planting")}
                  onChange={handleActivityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Tree Planting</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Recycling Programs"
                  checked={preferredActivities.includes("Recycling Programs")}
                  onChange={handleActivityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Recycling Programs</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Wildlife Conservation"
                  checked={preferredActivities.includes(
                    "Wildlife Conservation"
                  )}
                  onChange={handleActivityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Wildlife Conservation</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Other"
                  checked={preferredActivities.includes("Other")}
                  onChange={handleActivityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Other (please specify)</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Availability
            </label>
            <div className="mt-1">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  value="Weekdays"
                  checked={availability.includes("Weekdays")}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Weekdays</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Weekends"
                  checked={availability.includes("Weekends")}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Weekends</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Mornings"
                  checked={availability.includes("Mornings")}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Mornings</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Afternoons"
                  checked={availability.includes("Afternoons")}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Afternoons</span>
              </label>
              <label className="inline-flex items-center ml-4">
                <input
                  type="checkbox"
                  value="Evenings"
                  checked={availability.includes("Evenings")}
                  onChange={handleAvailabilityChange}
                  className="form-checkbox"
                />
                <span className="ml-2">Evenings</span>
              </label>
            </div>
          </div>
          <div className="mb-4">
            <label className="inline-flex items-center">
              <input
                type="checkbox"
                checked={showMotivation}
                onChange={() => setShowMotivation(!showMotivation)}
                className="form-checkbox"
              />
              <span className="ml-2">Why do you want to join us?</span>
            </label>
            {showMotivation && (
              <textarea
                id="motivation"
                value={motivation}
                onChange={(e) => setMotivation(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows="4"
                placeholder="Share your motivation"
              ></textarea>
            )}
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
