import React, { useState } from "react";
import im1 from "../../assets/treeplanting.jpg";
const activities = [
  {
    image: im1,
    title: "Tree Plantation",
    description:
      "Join us in our tree plantation drive to help combat climate change.",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.742829029814!2d79.9737779!3d12.863565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f16d49d428e5%3A0x520994f5d1a41cb1!2sSri%20Krishna%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722446324208!5m2!1sen!2sin",
  },
  {
    image: im1,
    title: "Tree Plantation",
    description:
      "Join us in our tree plantation drive to help combat climate change.",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.742829029814!2d79.9737779!3d12.863565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f16d49d428e5%3A0x520994f5d1a41cb1!2sSri%20Krishna%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722446324208!5m2!1sen!2sin",
  },
  {
    image: im1,
    title: "Tree Plantation",
    description:
      "Join us in our tree plantation drive to help combat climate change.",
    locationUrl:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.742829029814!2d79.9737779!3d12.863565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f16d49d428e5%3A0x520994f5d1a41cb1!2sSri%20Krishna%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722446324208!5m2!1sen!2sin",
  }
  // Add more activities as needed
];

const DonateActivities = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const openMap = (url) => {
    setSelectedLocation(url);
  };

  const closeMap = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="  lg:gap-19 p-6 bg-green-100">
      {activities.map((activity, index) => (
        <div
          key={index}
          className="flex flex-col md:flex-row items-start lg:w-[700px] lg:h-[170px] lg:gap-20 mt-8 bg-slate-100 shadow-md ml-[50px] rounded-lg overflow-hidden"
        >
          <img
            src={activity.image}
            alt={activity.title}
            className="w-full md:w-1/3 h-48 object-cover"
          />
          <div className="p-4 flex-1">
            <h2 className="text-xl font-bold mb-2">{activity.title}</h2>
            <p className="text-gray-700 mb-2">{activity.description}</p>
            <div className="flex items-center mb-4">
              <button
                className="bg-yellow-500 text-white md:px-3 md:py-2 rounded-md mr-4"
                onClick={() => openMap(activity.locationUrl)}
              >
                Location
              </button>
              <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 text-white md:px-4 md:py-2 rounded-md">
                  Read More
                </button>
                <button className="bg-green-500 text-white md:px-4 md:py-2 rounded-md">
                  Donate Now
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
      {selectedLocation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <iframe
              src={selectedLocation}
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
              onClick={closeMap}
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DonateActivities;
