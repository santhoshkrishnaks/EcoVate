import React, { useState, useEffect } from "react";
import img from "../../assets/delete.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {toast} from 'react-hot-toast';

const Post = ({ post, onProfileClick, handleSearch, currentUser,fetchData }) => {
  const [liked, setLiked] = useState(false);
  const [likes,setlikes]=useState(post.likes);
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);
  const navi = useNavigate();

  const fetchComment = async () => {
    try {
      const response = await axios.get(
        `https://ecovate-nqq4.onrender.com/gcomment/${post._id}`
      );
      setComments(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchComment();
  });

  const fetchLike = async () => {
    try {
      const responseLike = await axios.get('https://ecovate-nqq4.onrender.com/glike', {
        params: {
          post_id: post._id,
          username: currentUser
        }
      });
      setLiked(responseLike.data.liked);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchLike();
  }, [post._id,currentUser]);

  const handleLike = async () => {
    const body = {
      post_id: post._id,
      username: currentUser
    };
    try {
      await axios.put("https://ecovate-nqq4.onrender.com/ulike", body);
      const response=await axios.put(`https://ecovate-nqq4.onrender.com/ulikes/${post._id}`);
      setlikes(response.data.likes);
      fetchLike();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDLike = async () => {
    const body = {
      post_id: post._id,
      username: currentUser
    };
    try {
      await axios.put("https://ecovate-nqq4.onrender.com/ulike", body);
      const response=await axios.put(`https://ecovate-nqq4.onrender.com/dlikes/${post._id}`);
      setlikes(response.data.likes);
      fetchLike();
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeletePost = async () => {
    const isConfirmed = window.confirm("Are you sure you want to delete this post?");

    if (isConfirmed) {
        try {
            await axios.delete(`https://ecovate-nqq4.onrender.com/dposts/${post._id}`);
            toast.success("Post successfully deleted!"); 
            fetchData(); 
        } catch (error) {
            console.error(error);
            toast.error("An error occurred while deleting the post."); 
        }
    }
};

  const handleAddComment = async () => {
    if (commentText.trim()) {
      const newComment = {
        post_id: post._id,
        username: currentUser,
        content: commentText,
      };
      try {
        await axios.post("https://ecovate-nqq4.onrender.com/comment", newComment);
        setCommentText("");
        setShowCommentBox(false);
        fetchComment();
      } catch (error) {
        console.error("Error adding comment:", error);
      }
    } else {
      console.error("Comment text is empty");
    }
  };

  const handleDeleteComment = async (id) => {
    try {
      await axios.delete(`https://ecovate-nqq4.onrender.com/dcomment/${id}`);
      fetchComment();
    } catch (error) {
      console.error(error);
    }
  };

  const handleJoinTeam = () => {
    const subject = `Interested in joining your team for: ${post.title}`;
    const body = `Hi ${post.username},\n\nI'm interested in joining your team for the initiative titled "${post.title}". Please let me know how I can get involved.\n\nThank you!`;
    const mailtoLink = `mailto:${
      post.contactEmail || ""
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };

  return (
    <div className="p-4 mx-2 mb-6 bg-white rounded-lg shadow-md post sm:mx-4 md:mx-6 lg:mx-8">
      <div className="flex flex-col items-start justify-between mb-4 post-header sm:flex-row sm:items-center">
        <div className="flex">
          <img
            src={post.image_url}
            alt={post.username}
            className="rounded-full cursor-pointer profile-picture postimg"
            onClick={() => onProfileClick(post.username)}
          />
          <div className="ml-4 post-user-info">
            <div className="font-semibold cursor-pointer user-name" onClick={() => onProfileClick(post.username)} >
              {post.username}
            </div>
            <div className="text-gray-700 post-location">
              {post.location && <span className="text-slate-700">{post.location}</span>}
            </div>
            <div className="text-sm text-gray-500 post-timestamp">
              {new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
        {currentUser === post.username && (
          <button onClick={handleDeletePost} className="px-4 py-2 text-white">
            <img src={img} height={30} width={30} alt="Delete Post" />
          </button>
        )}
      </div>
      <div className="mb-4 post-content">
        <h3 className="mb-2 text-xl font-bold text-slate-700">{post.title}</h3>
        {post.image && <img src={post.image} alt="Post content" className="w-full h-auto rounded-lg" />}
      </div>
      <p className="mb-2">{post.description}</p>
      <div className="flex flex-row mb-4 space-x-4 post-engagement">
        <button
          onClick={liked ? handleDLike : handleLike}
          className={`like-button ${liked ? "text-red-500" : "text-blue-500"}`}
        >
          {liked ? "Unlike " : "Like "}
          <span>({likes})</span>
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="mt-0 text-blue-500 comment-button"
        >
          Comment
        </button>
        {post.status === "Ongoing" && (
          <Link to="/Ecofund" className="mt-0 text-blue-500 donate-button">
            Donate
          </Link>
        )}
      </div>
      {showCommentBox && (
        <div className="mt-4 comment-box">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 mb-2 border rounded-lg"
          />
          <button
            onClick={handleAddComment}
            className="px-4 py-2 text-white transition duration-200 bg-blue-500 rounded-lg shadow hover:bg-blue-700"
          >
            Add Comment
          </button>
        </div>
      )}
      <div className="mt-4 comments">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="flex flex-col items-start p-2 mb-2 bg-gray-100 rounded-lg comment sm:flex-row sm:items-center"
          >
            <div className="mr-2 font-semibold comment-user">{comment.username}:</div>
            <div className="flex-1 comment-text">{comment.content}</div>
            {currentUser === comment.username && (
              <button
                onClick={() => handleDeleteComment(comment._id)}
                className="mt-2 text-red-500 sm:mt-0"
              >
                <img src={img} alt="Delete Comment" height={20} width={20} />
              </button>
            )}
          </div>
        ))}
      </div>
      {post.status === "Ongoing" && (
        <div className="mb-4 post-call-to-action lg:block">
          <p className="hidden md:block">Be Part of This Impactful Change!</p>
          <button onClick={handleJoinTeam} className="text-green-700">
            Join the team
          </button>
        </div>
      )}
      <div className="flex flex-wrap post-tags">
        {post.tags.map((tag) => (
          <button
            key={tag}
            className="px-2 py-1 mb-2 mr-2 text-teal-800 bg-teal-100 rounded-lg post-tag"
            onClick={() => handleSearch(tag)}
          >
            #{tag}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Post;
