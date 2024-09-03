import React, { useContext, useEffect, useState } from "react";
import Post from "./Post";
import Modal from "./Modal";
import Footer from "../Header_Footer/Footer";
import EcoNav from "./EcoNav";
import JoinVolunteerForm from "./Volunteer";
import { Link, useNavigate, useNavigation } from "react-router-dom";
import newpost from "../../assets/newpost.svg";
import Loader from "../Loader/Loader.jsx";
import Create from "../Context";
import { useUser, useAuth } from "@clerk/clerk-react";
import axios from "axios";

const Feed = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { load, setLoad } = useContext(Create);
  const [posts, setPosts] = useState([]);
  const [username,setUsername] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [userimage,setUserimage] =useState();
  const { user } = useUser();
  const { getToken } = useAuth();
  const navi =useNavigate();
  const [news,setNews]=useState([]);
  const getnews = async() =>{
    try {
      const token = await getToken();

      if (!token) {
        throw new Error('Failed to acquire token');
      }

      console.log('Acquired token successfully:',);
      const response = await axios.get("https://ecovate-nqq4.onrender.com/econews", {
        headers: {
          Authorization: `Bearer ${token}`, 
        }
      });
      console.log(response.data);
      setNews(response.data);
    } catch (error) {
      console.log("===",error);
    }
  }

  useEffect(() => {
    setNewPost((prevPost) => ({
      ...prevPost,
      username: username,
      image_url: userimage,
    }));
  }, [username, userimage]);
  useEffect(() => {
      const log = async () => {
          if (user) {
              setUsername(user.username);
              setUserimage(user.imageUrl);
            }
          };
          
          log();
        }, [user]);
        
        const fetchData = async () => {
          try {
            const token = await getToken();

      if (!token) {
        throw new Error('Failed to acquire token');
      }

      console.log('Acquired token successfully:',);
            setIsLoading(true)
            const response = await axios.get("https://ecovate-nqq4.onrender.com/gposts", {
              headers: {
                Authorization: `Bearer ${token}`, // Add the Authorization header with the token
              }
            });
            setPosts(response.data);
          } catch (error) {
            console.error("Error in fetch posts", error);
          } finally {
            setIsLoading(false);
          }
        };
        
        useEffect(() => {
          setLoad(true);
          setTimeout(() => {
            setLoad(false);
          }, 300);
          fetchData();
          getnews()
        },[]);
        
        const [isModalVisible, setIsModalVisible] = useState(false);
        console.log(username);
        console.log(userimage);
        const [newPost, setNewPost] = useState({
          username:"",
          image_url:"",
          title: "",
          description: "",
    image: "",
    tags: [],
    location: "",
    organization: "",
    status: "",
    contactEmail: "",
  });
  const [showVolunteerForm, setShowVolunteerForm] = useState(false);
  const currentUser = username;
  const getTopHashtags = () => {
    const hashtagCount = {};
    posts.forEach((post) => {
      post.tags.forEach((tag) => {
        hashtagCount[tag] = (hashtagCount[tag] || 0) + 1;
      });
    });
    return Object.entries(hashtagCount)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5)
      .map(([tag]) => tag);
  };

  const topHashtags = getTopHashtags();
  const onProfileClick = (user) => {
    localStorage.setItem("profileuser",user);
    navi('/profile');
  }  
  const handleSearch = (term) => {
    setIsLoading(true);

    setTimeout(() => {
      setSearchTerm(term.toLowerCase());
      setIsLoading(false);
    }, 800);
  };
  const handleSearchSubmit = (term) => {
    setSearchTerm(term.toLowerCase());
  };

  const handleCreatePost = () => {
    setIsModalVisible(true);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setNewPost((prevPost) => ({ ...prevPost, [name]: value }));
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = await getToken();

      if (!token) {
        throw new Error('Failed to acquire token');
      }

      console.log('Acquired token successfully:',);
      const response = await axios.post("https://ecovate-nqq4.onrender.com/posts", newPost, {
        headers: {
          Authorization: `Bearer ${token}`, // Add the Authorization header with the token
        }
      });
      alert("New initiative submitted!");
      setIsModalVisible(false);
    } catch (error) {
      console.log(error);
    } finally {
      fetchData();
    }
  };

  const handleJoinNowClick = () => {
    setShowVolunteerForm(true);
  };

  const recentPosts = posts.sort(
    (a, b) => new Date(b.timestamp) - new Date(a.timestamp)
  );

  const filteredPosts = recentPosts.filter((post) =>
    post.tags.some((tag) => tag.toLowerCase().includes(searchTerm))
  );
  return (
    <div>
      {load ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen bg-green-50">
          <EcoNav
            searchTerm={searchTerm}
            onSearchChange={handleSearch}
            onSearchSubmit={handleSearchSubmit}
            setSearchTerm={setSearchTerm}
          />

          <div className="flex flex-col md:flex-row flex-grow">
            {/* Left Sidebar */}
            <div className="md:w-1/4 p-4 hidden md:block sticky top-20 h-screen overflow-y-auto">
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

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">Upcoming Events</h3>
                <ul>
                  <li className="mb-2">
                    <Link to="#" className="text-blue-500">
                      Tree Planting Day at Central Park - August 20, 2024
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-blue-500">
                      Beach Cleanup Drive at Santa Monica - August 25, 2024
                    </Link>
                  </li>
                  <li className="mb-2">
                    <Link to="#" className="text-blue-500">
                      Solar Panel Installation Workshop - August 30, 2024
                    </Link>
                  </li>
                </ul>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-bold mb-4">
                  Join Our Volunteer Program
                </h3>
                <p className="mb-4">
                  Interested in making a difference? Join our volunteer program
                  and be part of our impactful initiatives!
                </p>
                <button
                  onClick={handleJoinNowClick}
                  className="bg-slate-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
                >
                  Join Us
                </button>
              </div>
            </div>

            {/* Main Feed Content */}
            <div className="flex-1 p-4">
              <div className="flex flex-col mb-6">
                <div className="flex flex-row justify-between items-center mb-4">
                  <h1 className="text-4xl font-bold mb-6 cursor-pointer"onClick={()=>{
                    setIsLoading(true)
                    setTimeout(() => {
                    setSearchTerm('');
                    setIsLoading(false);
                  }, 800);}}>
                    <a>
                      <span className="text-green-700">Eco</span>Connect
                    </a>
                  </h1>
                  <button
                    onClick={handleCreatePost}
                    className="bg-slate-700 text-white px-4 py-2 hidden sm:block rounded-lg shadow hover:bg-green-700 transition duration-200"
                  >
                    Post New Initiative
                  </button>
                  <div className="block sm:hidden mb-3">
                    <img
                      src={newpost}
                      height={40}
                      width={40}
                      onClick={handleCreatePost}
                    />
                  </div>
                </div>
              </div>

              {/* Hashtags */}
              <div className="flex md:hidden mb-4">
                <ul className="flex flex-row flex-wrap">
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
              </div>

              {/* Posts */}
              {isLoading ? (
                <div className="flex min-h-screen flex-col bg-green-100 py-12 px-4">
                  <div className="relative bg-white p-4 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:max-w-lg rounded-lg">
                    <div className="m-2 max-w-sm animate-pulse">
                      <div className="flex items-center justify-center h-52 w-full bg-green-400 dark:bg-green-300 sm:w-96">
                        <svg
                          className="h-12 w-12 text-gray-200"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 640 512"
                          aria-hidden="true"
                          fill="currentColor"
                          aria-label="Loading Icon"
                        >
                          <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                        </svg>
                      </div>
                      <div className="h-8 w-48 mb-4 mt-2 rounded-full bg-green-400 dark:bg-green-300"></div>
                      <div className="h-2 max-w-[360px] mb-2.5 rounded-full bg-green-400 dark:bg-green-300"></div>
                      <div className="h-6 rounded-full mb-2.5 bg-green-400 dark:bg-green-300"></div>
                      <div className="h-6 max-w-[330px] rounded-full mb-2.5 bg-green-400 dark:bg-green-300"></div>
                      <div className="h-7 max-w-[50px] rounded-full mb-2.5 bg-green-400 dark:bg-green-300"></div>
                    </div>
                    <div className="flex items-center">
                      <svg
                        className="h-16 w-16 mr-1 animate-pulse text-green-400 dark:text-green-300"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        aria-hidden="true"
                        aria-label="User Icon"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                        />
                      </svg>
                      <div className="flex flex-col gap-2 animate-pulse">
                        <div className="h-3 w-48 rounded-full bg-green-400 dark:bg-green-300"></div>
                        <div className="h-2 w-46 rounded-full bg-green-400 dark:bg-green-300"></div>
                      </div>
                    </div>
                  </div>
                  <style jsx>{`
                    .mask {
                      mask-image: linear-gradient(
                        180deg,
                        white,
                        rgba(255, 255, 255, 0)
                      );
                    }
                  `}</style>
                </div>
              ) : filteredPosts.length > 0 ? (
                filteredPosts.map((post) => (
                  <div key={post.id}>
                    <Post
                      post={post}
                      handleSearch={handleSearch}
                      fetchData={fetchData}
                      currentUser={currentUser}
                      onProfileClick={onProfileClick}
                    />
                  </div>
                ))
              ) : (
                <div className="text-center text-gray-500 py-10">
                  <p>No initiatives found for your search.</p>
                </div>
              )}

              {/* Volunteer Form */}
              <div className="mt-6 flex-col md:hidden">
                <h3 className="text-lg font-bold mb-4">
                  Join Our Volunteer Program
                </h3>
                <p className="mb-4">
                  Interested in making a difference? Join our volunteer program
                  and be part of our impactful initiatives!
                </p>
                <button
                  onClick={handleJoinNowClick}
                  className="bg-slate-700 text-white px-4 py-2 rounded-lg shadow hover:bg-green-700 transition duration-200"
                >
                  Join Us
                </button>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="md:w-1/4 p-4 hidden md:block sticky top-20 h-screen overflow-y-auto">
              <h2 className="text-xl font-bold mb-4">Recent News</h2>
              <ul>
                <li className="mb-2">
                <a href="https://www.energy.gov/eere/solar/solar-energy-wildlife-and-environment#:~:text=How%20Does%20Solar%20Energy%20Interact,humans%2C%20wildlife%2C%20and%20ecosystems.">
                {news.map((newsItem) => (
                  <li key={newsItem.id} className="mb-2">
                    {newsItem.title}
                  </li>
                ))}
   </a>

                </li>
                <li className="mb-2 mt-10">
                  <iframe
                    width="90%"
                    height="100%"
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

          {/* Post form */}
          <Modal
            isVisible={isModalVisible}
            onClose={() => setIsModalVisible(false)}
            onSubmit={handleFormSubmit}
            formData={newPost}
            onChange={handleFormChange}
          />

          {/* Volunteer form */}
          {showVolunteerForm && (
            <div className="">
              <JoinVolunteerForm onClose={() => setShowVolunteerForm(false)} />
            </div>
          )}

          <Footer />
        </div>
      )}
    </div>
  );
};

export default Feed;
