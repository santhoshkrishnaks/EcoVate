import React, { useState, useEffect } from "react";
import axios from "axios";
import { useUser } from "@clerk/clerk-react";

const NewsPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [newsList, setNewsList] = useState([]);
  const [admin, setAdmin] = useState("");
  const { user } = useUser();
  useEffect(() => {
    const log = async () => {
      if (user) {
        setAdmin(user.publicMetadata.role);
      }
    };

    log();
  }, [user]);
  // Fetch news from the database when the component mounts
  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(
          "https://ecovate-nqq4.onrender.com/econews"
        );
        setNewsList(response.data);
      } catch (error) {
        console.error("Error fetching news:", error);
        window.alert("Failed to fetch news. Please try again.");
      }
    };

    fetchNews();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const confirmPost = window.confirm(
      "The data will be live on the site. Are you sure?"
    );

    if (confirmPost) {
      try {
        // Post the new news item to the server
        await axios.post("https://ecovate-nqq4.onrender.com/econews", {
          title,
          content,
        });

        // Fetch the updated news list after posting
        const response = await axios.get(
          "https://ecovate-nqq4.onrender.com/econews"
        );
        setNewsList(response.data);

        // Clear the input fields
        setTitle("");
        setContent("");

        window.alert("Successfully posted. Please check the live site.");
      } catch (error) {
        console.error("Error posting news:", error);
        window.alert("Failed to post news. Please try again.");
      }
    }
  };

  const handleDelete = async (id) => {
    const deletePost = window.confirm(
      "Are you sure you want to delete this news item?"
    );

    if (deletePost) {
      try {
        await axios.delete(`https://ecovate-nqq4.onrender.com/econews/${id}`);
        const response = await axios.get(
          "https://ecovate-nqq4.onrender.com/econews"
        );
        setNewsList(response.data);
        window.alert("News item deleted successfully.");
      } catch (error) {
        console.error("Error deleting news:", error);
        window.alert("Failed to delete news. Please try again.");
      }
    }
  };
  if (admin !== "admin") {
    return <div>Access Denied</div>;
  }
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-6">Add News</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="title"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Title
                </label>
                <input
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  required
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label
                  htmlFor="content"
                  className="block text-lg font-medium text-gray-700 mb-2"
                >
                  Content
                </label>
                <textarea
                  id="content"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  required
                  rows="5"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                />
              </div>
              <button
                type="submit"
                className="inline-block px-6 py-3 bg-green-700 hover:bg-green-800 text-white font-semibold rounded-lg"
              >
                Submit News
              </button>
            </form>
          </div>

          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              News Feed
            </h2>
            <div className="space-y-4">
              {newsList.map((news) => (
                <div
                  key={news._id}
                  className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50"
                >
                  <h3 className="text-xl font-semibold text-green-800 mb-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-700">{news.content}</p>
                  <button
                    onClick={() => handleDelete(news._id)}
                    className="mt-4 inline-block px-4 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg"
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsPage;
