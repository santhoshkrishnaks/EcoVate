import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";
import Nav from "./Header_Footer/Nav";

const UserProfilePage = () => {
  const [posts, setPosts] = useState([]);
  const [donations, setDonations] = useState([]);
  const [postDetails, setPostDetails] = useState({});
  const [showDonations, setShowDonations] = useState(false);
  const [totalDonationAmount, setTotalDonationAmount] = useState(0);
  const [username, setUsername] = useState();
  const [userimage, setUserimage] = useState();
  const [firstname, setFirstname] = useState();
  const [lastname, setLastname] = useState();
  const { user } = useUser();

  //   console.log(user.username); // Static username
   useEffect(() => {
     const log = async () => {
       if (user) {
         setUsername(user.username);
         setUserimage(user.imageUrl);
         setFirstname(user.firstName);
         setLastname(user.lastName);
       }
     };

     log();
   }, [user]);
  useEffect(() => {
    if (username != "") {
      axios
        .get(`https://ecovate-nqq4.onrender.com/getposts/${username}`)
        .then((response) => {
          console.log("Posts API response:", response.data); // Log the posts API response
          if (response.data) {
            setPosts(response.data);
          } else {
            console.error("Unexpected posts data structure:", response.data);
          }
        })
        .catch((error) => {
          console.error("Error fetching user posts:", error.message);
        });

      // Fetch user donations
      axios
        .get(`https://ecovate-nqq4.onrender.com/ecofund/${username}`)
        .then((response) => {
          console.log("Donations API response:", response.data); // Log the donations API response
          if (Array.isArray(response.data)) {
            setDonations(response.data);
            calculateTotalDonations(response.data);
            // Fetch post details for each donation
            response.data.forEach((donation) => {
              if (donation.post_id) {
                axios
                  .get(`http://localhost:5000/posts/${donation.post_id}`)
                  .then((response) => {
                    setPostDetails((prevDetails) => ({
                      ...prevDetails,
                      [donation.post_id]: response.data,
                    }));
                  })
                  .catch((error) => {
                    console.error(
                      "Error fetching post details:",
                      error.message
                    );
                  });
              }
            });
          } else {
            console.error(
              "Unexpected donations data structure:",
              response.data
            );
          }
        })
        .catch((error) => {
          console.error("Error fetching user donations:", error.message);
        });
    }
  },[username]);

  // Calculate total donation amount
  const calculateTotalDonations = (donations) => {
    if (Array.isArray(donations)) {
      const total = donations.reduce(
        (acc, donation) => acc + (donation.amount || 0),
        0
      );
      setTotalDonationAmount(total);
    } else {
      setTotalDonationAmount(0);
    }
  };

  // Toggle between user's posts and donations
  const postsToDisplay = showDonations
    ? posts.filter((post) =>
        donations.some((donation) => donation.post_id === post._id)
      )
    : posts;

  return (
    <div>
        <Nav />
      <div className="user-profile-page p-4 flex flex-col items-center bg-green-50 w-screen">
        {/* User Profile Section */}
        <div className="mt-5 user-info flex items-center mb-6 w-full max-w-2xl">
          <img
            src={userimage} // Placeholder image
            alt={username}
            className="profile-picture w-20 h-20 rounded-full"
          />
          <div className="ml-4">
            <h2 className="text-2xl lg:text-4xl font-bold text-green-700">
              {firstname} {lastname}
            </h2>
            <a href="#" className="text-green-700 text-lg lg:text-xl">
              {username}
            </a>
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
          <div className="user-posts w-full max-w-2xl">
            {posts.length > 0 ? (
              posts.map((post) => (
                <div
                  key={post._id}
                  className="post bg-white rounded-lg shadow-md p-6 mb-6"
                >
                  <div className="post-header flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                    <div className="flex">
                      <img
                        src={
                          post.image_url || "https://via.placeholder.com/150"
                        }
                        alt={post.title}
                        className="profile-picture w-12 h-12 rounded-full"
                      />
                      <div className="post-user-info ml-4">
                        <div className="user-name font-semibold cursor-pointer text-green-700 text-xl lg:text-2xl">
                          {post.username}
                        </div>
                        <div className="post-location text-gray-700 lg:text-lg">
                          {post.location}
                        </div>
                        <div className="post-timestamp text-gray-500 text-sm lg:text-base">
                          {new Date(post.createdAt).toLocaleString()}
                        </div>
                      </div>
                    </div>
                    <div className="post-status text-green-700 font-semibold sm:mr-4 mt-3 text-lg lg:text-xl">
                      {post.status}
                    </div>
                  </div>

                  <div className="post-content mb-4">
                    <h3 className="text-xl lg:text-3xl font-bold mb-2 text-green-700">
                      {post.title}
                    </h3>
                    {post.image && (
                      <img
                        src={post.image}
                        alt="Post content"
                        className="w-full h-auto rounded-lg"
                      />
                    )}
                    <p className="mb-2 text-lg lg:text-xl text-gray-700">
                      {post.description}
                    </p>
                  </div>

                  <div className="post-engagement flex flex-row space-x-4 mb-4">
                    <button className="like-button text-green-700 text-lg lg:text-xl">
                      Like
                    </button>
                    <button className="comment-button text-green-700 text-lg lg:text-xl mt-0">
                      Comment
                    </button>
                    {post.status === "Ongoing" && (
                      <a
                        href={post.donationLink}
                        className="donate-button text-green-700 text-lg lg:text-xl mt-0"
                      >
                        Donate
                      </a>
                    )}
                  </div>

                  {/* <div className="post-tags flex flex-wrap">
                  {post.tags.split(',').map((tag) => (
                    <span
                      key={tag}
                      className="post-tag bg-green-100 text-green-700 px-2 py-1 rounded-lg mr-2 mb-2 text-lg lg:text-xl"
                    >
                      #{tag}
                    </span>
                  ))}
                </div> */}
                </div>
              ))
            ) : (
              <p className="text-gray-700 text-lg">No posts available.</p>
            )}
          </div>
        )}

        {/* Donations Section */}
        {showDonations && (
          <div className="user-donations w-full max-w-2xl">
            {donations.length > 0 ? (
              donations.map((donation) => {
                const post = postDetails[donation.post_id] || {};
                return (
                  <div
                    key={donation.transaction_id}
                    className="donation bg-white rounded-lg shadow-md p-6 mb-6"
                  >
                    <div className="donation-header flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
                      <div className="flex">
                        <div className="donation-info ml-4">
                          <div className="donation-amount text-gray-700 lg:text-lg">
                            Amount: ${donation.amount}
                          </div>
                          <div className="donation-timestamp text-gray-500 text-sm lg:text-base">
                            {new Date(donation.createdAt).toLocaleString()}
                          </div>
                        </div>
                      </div>
                      <div className="donation-method text-green-700 font-semibold sm:mr-4 mt-3 text-lg lg:text-xl">
                        Payment Method: {donation.payment_method}
                      </div>
                    </div>

                    <div className="donation-details mb-4">
                      {post.title && (
                        <div className="donation-post-info mt-4">
                          <h4 className="text-lg lg:text-xl font-bold text-green-700">
                            Post Title: {post.title}
                          </h4>
                          <p className="text-gray-700 text-lg lg:text-xl">
                            {post.description}
                          </p>
                          {post.image && (
                            <img
                              src={post.image}
                              alt="Post content"
                              className="w-full h-auto rounded-lg mt-2"
                            />
                          )}
                        </div>
                      )}
                    </div>
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
  );
};

export default UserProfilePage;
