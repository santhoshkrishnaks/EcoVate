import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";

const VolunteerSubmissions = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true); // Loading state for fetching data
  const [error, setError] = useState(""); // Error state for fetching data
  const [admin,setAdmin]=useState("");
  const {user}=useUser();
  useEffect(() => {
    const log = async () => {
        if (user) {
            setAdmin(user.publicMetadata.role);
          }
        };
        
        log();
      }, [user]);
  useEffect(() => {
    // Fetch data from the API
    axios.get('https://ecovate-nqq4.onrender.com/volunteer')
      .then(response => {
        setSubmissions(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError("Error fetching data");
        setLoading(false);
      });
  }, []);

  const handleAccept = async (id, email) => {
    try {
      // Send the acceptance request
      await axios.post("https://ecovate-nqq4.onrender.com/volunteer/decision", {
        id,
        action: "accept",
      });

      console.log("Accepted:", id);

      // Fetch the updated data
      const response = await axios.get(
        "https://ecovate-nqq4.onrender.com/volunteer"
      );
      setSubmissions(response.data); // Update the state with the new data

      window.alert("Volunteer accepted and email sent.");
    } catch (error) {
      console.error("Error accepting submission:", error);
      window.alert("Failed to accept volunteer. Please try again.");
    }
  };


 const handleReject = async (id, email) => {
   try {
     // Send the rejection request
     await axios.post("https://ecovate-nqq4.onrender.com/volunteer/decision", {
       id,
       action: "reject",
     });

     console.log("Rejected:", id);

     // Fetch the updated data
     const response = await axios.get(
       "https://ecovate-nqq4.onrender.com/volunteer"
     );
     setSubmissions(response.data); // Update the state with the new data

     window.alert("Volunteer rejected and email sent.");
   } catch (error) {
     console.error("Error rejecting submission:", error);
     window.alert("Failed to reject volunteer. Please try again.");
   }
 };


  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  if ( admin !== "admin") {
    return <div>Access Denied</div>;
  }
  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-8 text-gray-800">Volunteer Submissions</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {submissions.map((submission) => (
          <div key={submission._id} className="bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200">
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">{submission.username}</h2>
              <p className="text-gray-600 mb-1"><strong>Email:</strong> {submission.email_address}</p>
              <p className="text-gray-600 mb-1"><strong>Phone:</strong> {submission.phone}</p>
              <p className="text-gray-600 mb-1"><strong>Address:</strong> {submission.address}</p>
              <p className="text-gray-600 mb-1"><strong>Age:</strong> {submission.age}</p>
              <p className="text-gray-600 mb-1">
                <strong>Preferred Activities:</strong> 
                {(submission.preferred_activities || []).join(', ')}
              </p>
              <p className="text-gray-600 mb-1"><strong>Availability:</strong> {submission.availability}</p>
              <p className="text-gray-600 mb-4"><strong>Motivation:</strong> {submission.motivation}</p>
            </div>
            <div className="flex justify-between bg-gray-100 p-4 border-t border-gray-200">
              <button 
                onClick={() => handleAccept(submission._id, submission.email_address)} 
                className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition duration-300"
              >
                Accept
              </button>
              <button 
                onClick={() => handleReject(submission._id, submission.email_address)} 
                className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VolunteerSubmissions;
