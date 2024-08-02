import React, { useState, useEffect } from "react";
import img from "../../assets/delete.svg";

const Post = ({ post, onProfileClick }) => {
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [comments, setComments] = useState(post.comments || []);
  const [commentText, setCommentText] = useState("");
  const [showCommentBox, setShowCommentBox] = useState(false);

  useEffect(() => {
    if (post.comments) {
      setComments(post.comments);
    }
  }, [post.comments]);

  const handleLike = () => {
    setLiked(!liked);
    setLikes((prevLikes) => (liked ? prevLikes - 1 : prevLikes + 1));
    // Backend update for like status can be added here
  };

  const handleAddComment = () => {
    if (commentText.trim()) {
      const newComment = {
        text: commentText,
        user: {
          name: "Current User", // Placeholder for actual user data
        },
      };
      setComments([...comments, newComment]);
      setCommentText("");
      setShowCommentBox(false);
      // Optionally, send the new comment to the backend here
    } else {
      console.error("Comment text is empty");
    }
  };

  const handleDeleteComment = (index) => {
    // Removing user ID check for now
    setComments(comments.filter((_, i) => i !== index));
    // Optionally, inform the backend to delete the comment
  };


  const handleJoinTeam = () => {
    const subject = `Interested in joining your team for: ${post.title}`;
    const body = `Hi ${post.user.name},\n\nI'm interested in joining your team for the initiative titled "${post.title}". Please let me know how I can get involved.\n\nThank you!`;
    const mailtoLink = `mailto:${
      post.contactEmail || ""
    }?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  };
  
  return (
    <div className="post bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="post-header flex items-center mb-4">
        <img
          src={post.user.profilePicture}
          alt={post.user.name}
          className="profile-picture w-12 h-12 rounded-full cursor-pointer"
          onClick={() => onProfileClick(post.userId)} // Call the profile click handler
        />
        <div className="post-user-info ml-4">
          <div
            className="user-name font-semibold cursor-pointer"
            onClick={() => onProfileClick(post.userId)} // Call the profile click handler
          >
            {post.user.name}
          </div>
          <div className="post-timestamp text-gray-500 text-sm">
            {new Date(post.timestamp).toLocaleString()}
          </div>
        </div>
      </div>
      <div className="post-content mb-4">
        <h3 className="text-xl font-bold mb-2">{post.title}</h3>
        <p className="mb-2">{post.description}</p>
        {post.image && (
          <img
            src={post.image}
            alt="Post content"
            height="200"
            width="600"
            className="post-image rounded-lg"
          />
        )}
      </div>
      <div className="post-tags mb-4">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="post-tag bg-teal-100 text-teal-800 px-2 py-1 rounded-lg mr-2"
          >
            #{tag}
          </span>
        ))}
      </div>
      <div className="post-location mb-4 text-gray-700">
        {post.location && <span>Location: {post.location}</span>}
      </div>
      <div className="post-status mb-4 text-green-500 font-semibold">
        Status: {post.status}
      </div>
      {post.status === "Ongoing" && (
        <div className="post-call-to-action mb-4">
          <p>Be Part of This Impactful Change!</p>
          <button onClick={handleJoinTeam} className="text-green-700">Join the team</button>
        </div>
      )}
      <div className="post-engagement flex space-x-4">
        <button
          onClick={handleLike}
          className={`like-button ${liked ? "text-red-500" : "text-blue-500"}`}
        >
          {liked ? "Unlike" : "Like"} ({likes})
        </button>
        <button
          onClick={() => setShowCommentBox(!showCommentBox)}
          className="comment-button text-blue-500"
        >
          Comment
        </button>
        {post.status === "Ongoing" && (
          <a href={post.donationLink} className="donate-button text-blue-500">
            Donate
          </a>
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
            className="comment bg-gray-100 p-2 rounded-lg mb-2 flex items-center"
          >
            <div className="comment-user font-semibold mr-2">
              {comment.user?.name || "Anonymous"}:
            </div>
            <div className="comment-text flex-1">{comment.text}</div>
            <button
              onClick={() => handleDeleteComment(index)}
              className="text-red-500 ml-4"
            >
              <img src={img} alt="delete" height={20} width={20} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
