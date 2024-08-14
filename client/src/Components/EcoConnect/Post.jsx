import React, { useState, useEffect } from "react";
import img from "../../assets/delete.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

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
    try {
      await axios.delete(`https://ecovate-nqq4.onrender.com/dposts/${post._id}`);
      alert("Post deleted!");
      fetchData();
    } catch (error) {
      console.error(error);
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
    <div className="post bg-white rounded-lg shadow-md p-4 mb-6 mx-2 sm:mx-4 md:mx-6 lg:mx-8">
      <div className="post-header flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4">
        <div className="flex">
          <img
            src={post.image_url}
            alt={post.username}
            className="profile-picture rounded-full cursor-pointer postimg"
            onClick={() => onProfileClick(post.username)}
          />
          <div className="post-user-info ml-4">
            <div className="user-name font-semibold cursor-pointer" onClick={() => onProfileClick(post.username)} >
              {post.username}
            </div>
            <div className="post-location text-gray-700">
              {post.location && <span className="text-slate-700">{post.location}</span>}
            </div>
            <div className="post-timestamp text-gray-500 text-sm">
              {new Date(post.createdAt).toLocaleString()}
            </div>
          </div>
        </div>
        {currentUser === post.username && (
          <button onClick={handleDeletePost} className="text-white px-4 py-2">
            <img src={img} height={30} width={30} alt="Delete Post" />
          </button>
        )}
      </div>
      <div className="post-content mb-4">
        <h3 className="text-xl font-bold mb-2 text-slate-700">{post.title}</h3>
        {post.image && <img src={post.image} alt="Post content" className="w-full h-auto rounded-lg" />}
      </div>
      <p className="mb-2">{post.description}</p>
      <div className="post-engagement flex flex-row space-x-4 mb-4">
        <button
          onClick={liked ? handleDLike : handleLike}
          className={`like-button ${liked ? "text-red-500" : "text-blue-500"}`}
        >
          {liked ? "Unlike " : "Like "}
          <span>({likes})</span>
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="comment-button text-blue-500 mt-0"
        >
          Comment
        </button>
        {post.status === "Ongoing" && (
          <Link to="/Ecofund" className="donate-button text-blue-500 mt-0">
            Donate
          </Link>
        )}
      </div>
      {showCommentBox && (
        <div className="comment-box mt-4">
          <textarea
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            placeholder="Write a comment..."
            className="w-full p-2 border rounded-lg mb-2"
          />
          <button
            onClick={handleAddComment}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
          >
            Add Comment
          </button>
        </div>
      )}
      <div className="comments mt-4">
        {comments.map((comment, index) => (
          <div
            key={index}
            className="comment bg-gray-100 p-2 rounded-lg mb-2 flex flex-col sm:flex-row items-start sm:items-center"
          >
            <div className="comment-user font-semibold mr-2">{comment.username}:</div>
            <div className="comment-text flex-1">{comment.content}</div>
            {currentUser === comment.username && (
              <button
                onClick={() => handleDeleteComment(comment._id)}
                className="text-red-500 mt-2 sm:mt-0"
              >
                <img src={img} alt="Delete Comment" height={20} width={20} />
              </button>
            )}
          </div>
        ))}
      </div>
      {post.status === "Ongoing" && (
        <div className="post-call-to-action mb-4 lg:block">
          <p className="hidden md:block">Be Part of This Impactful Change!</p>
          <button onClick={handleJoinTeam} className="text-green-700">
            Join the team
          </button>
        </div>
      )}
      <div className="post-tags flex flex-wrap">
        {post.tags.map((tag) => (
          <button
            key={tag}
            className="post-tag bg-teal-100 text-teal-800 px-2 py-1 rounded-lg mr-2 mb-2"
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
