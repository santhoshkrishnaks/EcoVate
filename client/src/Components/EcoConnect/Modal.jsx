// import axios from "axios";
import React, { useEffect, useState } from "react";
import { UploadButton } from "@bytescale/upload-widget-react";

const Modal = ({ isVisible, onClose, onSubmit, formData, onChange }) => {
  
  const [imagePreview, setImagePreview] = useState("");
  const [upload, setUpload] = useState(false);
  const [showLightbox, setShowLightbox] = useState(false);
  useEffect(() => {
    formData.image = imagePreview;
    console.log(imagePreview);
  }, [imagePreview]);

  if (!isVisible) return null;

  const options = {
    apiKey: "public_W142ikd3ABr1P8zCZjgV9vXhHFZ4",
    maxFileCount: 1,
  };;

  const handleTagsChange = (e) => {
    const { value } = e.target;
    const tagsArray = value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag); // Trim and filter out empty values
    onChange({ target: { name: "tags", value: tagsArray } });
  };
  const handleOpenLightbox = () => {
    setShowLightbox(true);
  };

  const handleCloseLightbox = () => {
    setShowLightbox(false);
  };

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center">
      <div className="relative bg-white p-6 rounded-lg shadow-lg w-11/12 md:w-6/12 lg:w-6/12 xl:w-5/12 h-3/4 max-h-[70vh] overflow-auto">
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
          aria-label="Close"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
        <h2 className="text-xl font-bold mb-4">New Initiative Form</h2>
        <form onSubmit={onSubmit}>
          <div className="grid grid-cols-1 gap-4">
            <input
              type="text"
              name="title"
              value={formData.title}
              onChange={onChange}
              placeholder="Title"
              className="p-2 border rounded-lg"
              required
            />
            <textarea
              name="description"
              value={formData.description}
              onChange={onChange}
              placeholder="Description"
              className="p-2 border rounded-lg"
              required
            />
            <div className="p-2 border rounded-lg">
            <UploadButton
              options={options}
              onComplete={(files) =>{
                setImagePreview(files.map((x) => x.fileUrl).join("\n"))
                setUpload(!upload);
              }
              }
            >
              {({ onClick }) => (
                <div>{upload?<span className="text-gray-400">{"Uploaded"}</span>:<div><span className="text-gray-400">{"Upload    "}</span><button onClick={onClick}>Choose File</button></div>}</div>
                
              )}
            </UploadButton>
            </div>
            {imagePreview && (
              <div className="my-4">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-auto border rounded-lg cursor-pointer"
                  onClick={handleOpenLightbox}
                />
              </div>
            )}
            <input
              type="text"
              name="tags"
              onChange={handleTagsChange}
              placeholder="Tags (comma separated)"
              className="p-2 border rounded-lg"
              required
            />

            <input
              type="text"
              name="location"
              onChange={onChange}
              placeholder="Location"
              className="p-2 border rounded-lg"
              required
            />
            <input
              type="text"
              name="organization"
              onChange={onChange}
              placeholder="Organization"
              className="p-2 border rounded-lg"
              required
            />
            <select
              name="status"
              onChange={onChange}
              className="p-2 border rounded-lg"
              required
            >
              <option value="">Select Status</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
            </select>

            {/* Conditionally render the donation link input field */}
            {formData.status == "Ongoing" && (
              <input
                type="text"
                name="donationLink"
                onChange={onChange}
                placeholder="Donation Link (optional)"
                className="p-2 border rounded-lg"
                // required
              />
            )}
            <input
              type="text"
              name="contactEmail"
              onChange={onChange}
              placeholder="Contact Email"
              className="p-2 border rounded-lg"
              required
            />
          </div>
          <div className="mt-4 flex justify-center">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-500 text-white px-4 py-2 rounded-lg shadow hover:bg-gray-700 transition duration-200 mr-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-200"
            >
              Submit Initiative
            </button>
          </div>
        </form>
        {/* Lightbox for image preview */}
        {showLightbox && (
          <div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
            onClick={handleCloseLightbox}
          >
            <img
              src={imagePreview}
              alt="Preview"
              className="max-w-full max-h-full object-contain cursor-pointer"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
