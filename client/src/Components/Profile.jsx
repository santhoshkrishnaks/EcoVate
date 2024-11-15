import React, { useState, useEffect } from "react";
import axios from "axios";
import Nav from "./Header_Footer/Nav";
import { useNavigate } from "react-router-dom";
import Loader from "./Loader/Loader";

const UserProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const [donations, setDonations] = useState([]);
  const [postDetails, setPostDetails] = useState({});
  const [showDonations, setShowDonations] = useState(false);
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const [user1, setUser1] = useState({});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const nav=useNavigate();
  const profileuser = localStorage.getItem("profileuser");

  // Ensure that profileuser is available
  if (!profileuser) {
    return <div>Please log in again.</div>;
  }

  // Fetch user data
  const getuser = async () => {
    try {
      const response = await axios.get(
        `https://ecovate-nqq4.onrender.com/user/${profileuser}`
      );
      setUser1(response.data);
    } catch (error) {
      setError("Failed to fetch user data.");
    }
  };

  // Fetch user posts
  const getposts = async () => {
    try {
      const response = await axios.get(
        `https://ecovate-nqq4.onrender.com/getposts/${profileuser}`
      );
      setPosts(response.data || []);
    } catch (error) {
      setError("Failed to fetch posts.");
    }
  };

  // Fetch donations and associated post details
  const getdonation = async () => {
    try {
      const response = await axios.get(
        `https://ecovate-nqq4.onrender.com/ecofund/${profileuser}`
      );
      const donationsData = response.data || [];
      setDonations(donationsData);
      calculateTotalDonations(donationsData);

      // Fetch post details for donations
      const details = await Promise.all(
        donationsData.slice(0, 10).map((donation) => {
          if (!donation.post_id) return Promise.resolve({});
          return axios
            .get(`https://ecovate-nqq4.onrender.com/posts/${donation.post_id}`)
            .then((res) => ({ [donation.post_id]: res.data }))
            .catch(() => ({})); // Handle error gracefully
        })
      );
      setPostDetails(details.reduce((acc, curr) => ({ ...acc, ...curr }), {}));
    } catch (error) {
      setError("Failed to fetch donations.");
    }
  };

  // Calculate total donation amount
  const calculateTotalDonations = (donations) => {
    const total = donations.reduce(
      (acc, donation) => acc + (donation.amount || 0),
      0
    );
    setTotalDonationAmount(total);
  };
const handleprofile=()=>{
nav('/Ecoconnect');
}
  // Fetch all data on mount
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        await getuser();
        await getposts();
        await getdonation();
      } catch (error) {
        setError("Error fetching data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [profileuser]);


  return (
    <div>{
      loading?<Loader/>:
    <div>
      <Nav />
      <div className="user-profile-page p-4 flex flex-col items-center bg-green-50 w-screen">
        {/* Error Message */}
        {error && <p className="text-red-600">{error}</p>}

        {/* User Profile Section */}
        <div className="mt-5 user-info flex items-center mb-6 w-full max-w-2xl">
          <img
            src={user1.profileImg || "https://via.placeholder.com/150"}
            alt={user1.userName || "User"}
            className="profile-picture w-20 h-20 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-green-700">
              {user1.firstName} {user1.lastName}
            </h2>
            <p className="text-green-700 text-lg lg:text-xl">
              {user1.userName}
            </p>
            <p className="text-green-700 font-semibold mt-2 text-lg">
              Total Donated: ${totalDonationAmount}
            </p>
          </div>
        </div>

        {/* Toggle Buttons */}
        <div className="flex justify-center mb-6">
          <button
            className={`px-8 py-3 mx-2 rounded-lg font-semibold ${
              !showDonations
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700"
            }`}
            onClick={() => setShowDonations(false)}
          >
            My Posts
          </button>
          <button
            className={`px-8 py-3 mx-2 rounded-lg font-semibold ${
              showDonations
                ? "bg-green-700 text-white"
                : "bg-green-100 text-green-700"
            }`}
            onClick={() => setShowDonations(true)}
          >
            Donations
          </button>
        </div>

        {/* User's Posts Section */}
        {!showDonations && (
          <div className="user-posts w-full max-w-2xl cursor-pointer"  onClick={handleprofile}>
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="post bg-white rounded-lg shadow-md p-6 mb-6"
                >
                  <div className="post-header flex items-start justify-between mb-4">
                    <div className="flex">
                      <img
                        src={
                          post.image_url || "https://via.placeholder.com/150"
                        }
                        alt={post.title}
                        className="profile-picture w-12 h-12 rounded-full"
                      />
                      <div className="post-user-info ml-4">
                        <div className="user-name font-semibold text-green-700 text-xl">
                          {post.username}
                        </div>
                        <div className="post-location text-gray-700">
                          {post.location}
                        </div>
                        <div className="post-timestamp text-gray-500 text-sm">
                          {new Date(post.createdAt).toLocaleString()}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="post-content mb-4">
                    <h3 className="text-xl font-bold text-green-700">
                      {post.title}
                    </h3>
                    <p className="text-gray-700">{post.description}</p>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-lg">No posts available.</p>
            )}
          </div>
        )}

        {/* Donations Section */}
        {showDonations && (
          <div className="user-donations w-full max-w-2xl" >
            {donations.length > 0 ? (
              donations.map((donation) => {
                const post = postDetails[donation.post_id] || {};
                return (
                  <div
                    key={donation.transaction_id}
                    className="donation bg-white rounded-lg shadow-md p-6 mb-6"
                  >
                    <div className="donation-header flex items-start justify-between mb-4">
                      <div>
                        <div className="donation-amount text-gray-700">
                          Amount: ${donation.amount}
                        </div>
                        <div className="donation-timestamp text-gray-500 text-sm">
                          {new Date(donation.createdAt).toLocaleString()}
                        </div>
                      </div>
                      <div className="donation-method text-green-700 font-semibold">
                        Payment Method: {donation.payment_method}
                      </div>
                    </div>
                    {post.title && (
                      <div className="donation-details">
                        <h4 className="font-bold text-green-700">
                          Post Title: {post.title}
                        </h4>
                        <p className="text-gray-700">{post.description}</p>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <p className="text-gray-700 text-lg">No donations available.</p>
            )}
          </div>
        )}
      </div>
    </div>
      }
    </div>
  );
};

export default UserProfilePage;
