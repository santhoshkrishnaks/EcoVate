import React, { useState } from 'react';
import axios from 'axios';

const NewsPage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [newsList, setNewsList] = useState([]); // This would be populated with data from your backend

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Confirmation dialog
    const confirmPost = window.confirm("The data will be live on the site. Are you sure?");
    
    if (confirmPost) {
      try {
        // API call to submit news data
        await axios.post('http://localhost:5000/econews', { title, content });
        
        // Update the newsList state to include the new news item
        setNewsList([...newsList, { title, content }]);
        
        // Clear the form fields
        setTitle('');
        setContent('');
        
        // Success alert
        window.alert("Successfully posted. Please check the live site.");
      } catch (error) {
        // Handle error
        console.error('Error posting news:', error);
        window.alert("Failed to post news. Please try again.");
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Form Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h1 className="text-3xl font-bold text-green-800 mb-6">Add News</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="title" className="block text-lg font-medium text-gray-700 mb-2">
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
                <label htmlFor="content" className="block text-lg font-medium text-gray-700 mb-2">
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

          {/* News Display Section */}
          <div className="flex-1 bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-3xl font-bold text-green-800 mb-6">News Feed</h2>
            <div className="space-y-4">
              {newsList.map((news, index) => (
                <div key={index} className="p-4 border border-gray-200 rounded-lg shadow-md bg-gray-50">
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{news.title}</h3>
                  <p className="text-gray-700">{news.content}</p>
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
