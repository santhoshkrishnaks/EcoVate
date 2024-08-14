import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useUser } from "@clerk/clerk-react";

const EcoVisionSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    // Fetch data from the API
    axios.get('https://ecovate-nqq4.onrender.com/ecovision')
      .then((response) => setSubmissions(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  const handleApprove = (id) => {
    axios.post('https://ecovate-nqq4.onrender.com/approvevision', { id })
      .then(() => {
        console.log('Approval email sent:', id);
        // Optionally update the UI or show a notification
      })
      .catch((error) => console.error('Error sending approval email:', error));
  };

  const handleReject = (id) => {
    axios.post('https://ecovate-nqq4.onrender.com/rejectvision', { id })
      .then(() => {
        console.log('Rejection email sent:', id);
        // Optionally update the UI or show a notification
      })
      .catch((error) => console.error('Error sending rejection email:', error));
  };

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };
  
  return (
    <div className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">EcoVision Project Submissions</h1>
      <div className="space-y-4">
        {submissions.map((submission, index) => (
          <div
            key={submission._id}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <div
              onClick={() => toggleExpand(index)}
              className="cursor-pointer p-4 bg-gray-200 hover:bg-gray-300 transition-colors duration-200"
            >
              <h2 className="text-xl font-semibold text-gray-800">
                {submission.project_title}
              </h2>
              <p className="text-gray-600">
                Lead: {submission.project_lead_name} | Organization:{" "}
                {submission.organisation_name}
              </p>
            </div>
            {expanded === index && (
              <div className="p-4 bg-white border-t border-gray-200">
                <p className="text-gray-700 mb-2">
                  <strong>Description:</strong> {submission.project_description}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Problem Statement:</strong>{" "}
                  {submission.problem_statement}
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Drive Link:</strong>{" "}
                  <a
                    href={submission.drivelink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {submission.drivelink}
                  </a>
                </p>
                <p className="text-gray-700 mb-2">
                  <strong>Contact:</strong> {submission.contact_email} |{" "}
                  {submission.contact_phone}
                </p>
                <div className="mt-4 flex space-x-4">
                  <button
                    onClick={() => handleApprove(submission._id)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
                  >
                    Approve
                  </button>
                  <button
                    onClick={() => handleReject(submission._id)}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
                  >
                    Reject
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EcoVisionSubmissions;
