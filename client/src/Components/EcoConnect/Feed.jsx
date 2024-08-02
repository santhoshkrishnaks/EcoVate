import React, { useState } from "react";
import Post from "./Post";
import beach from "../../assets/beach.webp";
import tree from "../../assets/tree.jpg";
import solar from "../../assets/solar.jpg";
// Assuming images and other imports are here...
const users = [
  {
    id: 1,
    name: "Jane Doe",
    email: "jane@example.com",
    profilePicture: "https://via.placeholder.com/50",
    isLoggedIn: false, // to simulate authentication state
  },
  {
    id: 2,
    name: "John Smith",
    email: "john@example.com",
    profilePicture: "https://via.placeholder.com/50",
    isLoggedIn: false, // to simulate authentication state
  },
  // More users...
];

// Sample post data
const samplePosts = [
  {
    id: 1,
    userId: 1, // Links to user ID
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
    contactEmail:"greenearth@gmail.com"
  },
  {
    id: 2,
    userId: 2, // Links to user ID
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
    userId: 2, // Ensure unique post IDs
    user: {
      name: "John Smith",
      profilePicture: "https://via.placeholder.com/50",
    },
    timestamp: new Date().toISOString(),
    initiativeType: "Solar Energy",
    title: "Solar Energy for All",
    description:
      "Installed solar panels across 50 homes to promote renewable energy use. This initiative aims to reduce carbon footprints in our community.",
    image: solar,
    tags: ["SolarEnergy", "Renewables"],
    location: "Los Angeles",
    organization: "Solar Solutions",
    status: "Ongoing",
    callToAction:
      "Learn how you can install solar panels at a discounted rate by contacting us.",
    donationLink: "https://example.com/donate-solar",
  },
  // More posts...
];
// Sample user and post data, assuming it's already defined...

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedUserId, setSelectedUserId] = useState(null);

  const handleSearch = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCreatePost = () => {
    alert("Redirecting to post creation form...");
  };

  const handleProfileClick = (userId) => {
    setSelectedUserId(userId);
  };

  const filteredPosts = samplePosts
    .filter((post) =>
      post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
    )
    .filter((post) => (selectedUserId ? post.userId === selectedUserId : true));

  return (
    <div>
      <header className="w-full bg-green-200 p-6 text-slate-700 text-center">
        <h1 className="text-4xl font-bold">EcoConnect</h1>
        <p className="text-lg mt-2">
          Connecting Communities for a Sustainable Future
        </p>
      </header>

      <div className="feed-container flex justify-center bg-slate-700">
        <div className="left-sidebar hidden lg:block w-1/4 p-4">
          <h2 className="text-xl font-bold mb-4">Popular Initiatives</h2>
          <ul>
            <li className="mb-2">
              <button
                onClick={() => handleSearch("CleanBeaches")}
                className="text-blue-500"
              >
                #CleanBeaches
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleSearch("TreePlanting")}
                className="text-blue-500"
              >
                #TreePlanting
              </button>
            </li>
            <li className="mb-2">
              <button
                onClick={() => handleSearch("SaveRivers")}
                className="text-blue-500"
              >
                #SaveRivers
              </button>
            </li>
          </ul>

          <h2 className="text-xl font-bold mt-6 mb-4">Partner Organizations</h2>
          <ul>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Green Earth Volunteers
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Ocean Protectors
              </a>
            </li>
            <li className="mb-2">
              <a href="#" className="text-blue-500">
                Solar Solutions
              </a>
            </li>
          </ul>
        </div>

        <div className="feed mx-auto max-w-2xl w-full p-4 min-h-screen">
          <div className="flex flex-col mb-6">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-2xl font-bold">Initiatives Feed</h1>
              <button
                onClick={handleCreatePost}
                className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
              >
                Post New Initiative
              </button>
            </div>

            <div className="mb-4">
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search by hashtag..."
                className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <Post
                key={post.id}
                post={post}
                onProfileClick={handleProfileClick}
              />
            ))
          ) : (
            <div className="text-center text-gray-500 py-10">
              <p>No initiatives found for your search.</p>
            </div>
          )}
        </div>

        <div className="right-sidebar hidden lg:block w-1/4 p-4">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Feed;
