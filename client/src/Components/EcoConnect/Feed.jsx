import React, { useState, useEffect } from "react";
import Post from "./Post";
import beach from "../../assets/beach.webp";
import tree from "../../assets/tree.jpg";
import solar from "../../assets/solar.jpg";
import Modal from "./Modal";
import EcoNav from "./EcoNav";
import Footer from "../Footer";

const users = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    profilePicture: "https://via.placeholder.com/50",
    isLoggedIn: false,
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    profilePicture: "https://via.placeholder.com/50",
    isLoggedIn: false,
  },
];

const initialPosts = [
  {
    id: 1,
    userId: 1,
    user: {
      name: "Jane Doe",
      profilePicture: "https://via.placeholder.com/50",
    },
    timestamp: new Date().toISOString(),
    initiativeType: "Tree Planting",
    title: "Green City Initiative",
    description: "We planted 500 new trees in our local park...",
    image: tree,
    tags: ["GoGreen", "TreePlanting"],
    location: "Central Park",
    organization: "Green Earth Volunteers",
    status: "Ongoing",
    callToAction: "Join our next planting event...",
    donationLink: "https://example.com/donate-trees",
    contactEmail: "greenearth@gmail.com",
  },
  {
    id: 2,
    userId: 2,
    user: {
      name: "John Smith",
      profilePicture: "https://via.placeholder.com/50",
    },
    timestamp: new Date().toISOString(),
    initiativeType: "Beach Cleanup",
    title: "Clean Beaches Project",
    description: "Our team cleaned up over 200 pounds of trash...",
    image: beach,
    tags: ["BeachCleanup", "Oceans"],
    location: "Santa Monica Beach",
    organization: "Ocean Protectors",
    status: "Completed",
    callToAction: "Thank you for your support...",
    donationLink: null,
  },
  {
    id: 3,
    userId: 2,
    user: {
      name: "John Smith",
      profilePicture: "https://via.placeholder.com/50",
    },
    timestamp: new Date().toISOString(),
    initiativeType: "Solar Energy",
    title: "Solar Energy for All",
    description:
      "Installed solar panels across 50 homes to promote renewable energy use.",
    image: solar,
    tags: ["SolarEnergy", "Renewables"],
    location: "Los Angeles",
    organization: "Solar Solutions",
    status: "Ongoing",
    callToAction:
      "Learn how you can install solar panels at a discounted rate by contacting us.",
    donationLink: "https://example.com/donate-solar",
  },
];

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [posts, setPosts] = useState(initialPosts);
  const [newPost, setNewPost] = useState({
    initiativeType: "",
    title: "",
    description: "",
    image: "",
    tags: [],
    location: "",
    organization: "",
    status: "",
    donationLink: "",
    contactEmail: "",
  });

  // Function to get top 5 hashtags
  const getTopHashtags = () => {
    const hashtagCount = {};

    // Count hashtags
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        hashtagCount[tag] = (hashtagCount[tag] || 0) + 1;
      });
    });

    // Convert object to array and sort by count
    const sortedHashtags = Object.entries(hashtagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag]) => tag);

    return sortedHashtags;
  };

  const topHashtags = getTopHashtags();

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleSearchSubmit = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCreatePost = () => {
    setIsModalVisible(true);
  };

  const handleProfileClick = (userId) => {
    setSelectedUserId(userId);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const postWithId = {
      ...newPost,
      id: posts.length + 1,
      timestamp: new Date().toISOString(),
      userId: 1,
      user: users[0],
    };
    setPosts([postWithId, ...posts]);
    alert("New initiative submitted!");
    setIsModalVisible(false);
  };

  const filteredPosts = posts
    .filter((post) =>
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    )
    .filter((post) => (selectedUserId ? post.userId === selectedUserId : true));

  return (
    <div>
      <EcoNav
        searchTerm={searchTerm}
        onSearchChange={handleSearch}
        onSearchSubmit={handleSearchSubmit}
        setSearchTerm={setSearchTerm}
      />

      <div className="feed-container flex justify-center bg-green-100 px-6">
        <div className="left-sidebar hidden lg:block w-1/4 p-4 h-screen sticky top-20">
          <h2 className="text-xl font-bold mb-4">Popular Initiatives</h2>
          <ul>
            {topHashtags.map((hashtag) => (
              <li key={hashtag} className="mb-2">
                <button
                  onClick={() => handleSearch(hashtag)}
                  className="text-blue-500"
                >
                  #{hashtag}
                </button>
              </li>
            ))}
          </ul>

          {/* New Section: Upcoming Events */}
          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="text-blue-500">
                  Tree Planting Day at Central Park - August 20, 2024
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500">
                  Beach Cleanup Drive at Santa Monica - August 25, 2024
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-blue-500">
                  Solar Panel Installation Workshop - August 30, 2024
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-lg font-bold mb-4">
              Join Our Volunteer Program
            </h3>
            <p className="mb-4">
              Interested in making a difference? Join our volunteer program and
              be part of our impactful initiatives!
            </p>
            <a
              href="https://example.com/volunteer-signup"
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
            >
              Join Us
            </a>
          </div>
        </div>

        <div className="feed mx-auto max-w-2xl w-full p-4 min-h-screen">
          <div className="hidden md:flex flex-col mb-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-4">
              <h1 className="text-4xl font-bold md:mb-0 mb-6">
                <span className="text-green-700">Eco</span>Connect
              </h1>
              <button
                onClick={handleCreatePost}
                className="bg-slate-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
              >
                Post New Initiative
              </button>
            </div>
          </div>

          {/* Feed Posts */}

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onProfileClick={handleProfileClick}
                handleSearch={handleSearch}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p>No initiatives found for your search.</p>
            </div>
          )}
        </div>

        {/* Right side */}

        <div className="right-sidebar hidden lg:block w-1/4 p-4 sticky top-20 h-screen">
          <h2 className="text-xl font-bold mb-4">Recent News</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                New tree planting record set in Central Park!
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Volunteers clean up over 500 pounds of trash from local beaches.
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Community solar energy project reaches new milestone.
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Community solar energy project reaches new milestone.
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Community solar energy project reaches new milestone.
              </a>
            </li>
            <li className="mb-2 mt-10 ">
              <iframe
                width="300"
                height="200"
                src="https://www.youtube.com/embed/W5bh1JFo43U?si=zLDv3o7ApAzlV43o"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </li>
          </ul>
        </div>
      </div>

      <Modal
        isVisible={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        onSubmit={handleFormSubmit}
        formData={newPost}
        onChange={handleFormChange}
      />
      <Footer/>
    </div>
  );
};

export default Feed;
