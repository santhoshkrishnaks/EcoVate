import React, { useEffect, useState } from "react";
import axios from "axios";
import im1 from "../../assets/treeplanting.jpg";
import DonateForms from "./DonateForms";
// const activities = [
//   {
//     image: im1,
//     title: "Tree Plantation",
//     description:
//       "Join us in our tree plantation drive to help combat climate change.",
//     locationUrl:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.742829029814!2d79.9737779!3d12.863565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f16d49d428e5%3A0x520994f5d1a41cb1!2sSri%20Krishna%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722446324208!5m2!1sen!2sin",
//   },
//   {
//     image: im1,
//     title: "Tree Plantation",
//     description:
//       "Join us in our tree plantation drive to help combat climate change.",
//     locationUrl:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.742829029814!2d79.9737779!3d12.863565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f16d49d428e5%3A0x520994f5d1a41cb1!2sSri%20Krishna%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722446324208!5m2!1sen!2sin",
//   },
//   {
//     image: im1,
//     title: "Tree Plantation",
//     description:
//       "Join us in our tree plantation drive to help combat climate change.",
//     locationUrl:
//       "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15558.742829029814!2d79.9737779!3d12.863565!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52f16d49d428e5%3A0x520994f5d1a41cb1!2sSri%20Krishna%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1722446324208!5m2!1sen!2sin",
//   }
//   // Add more activities as needed
// ];

const DonateActivities = () => {
   const [showPopup, setShowPopup] = useState(false);
  const [activities, setActivities] = useState([]);
  

  useEffect(() => {
    // Fetch data from API when component mounts
    const fetchActivities = async () => {
      try {
        const response = await axios.get("http://localhost:5000/gposts");
        setActivities(response.data);
        // console.log(response.data._id);
      } catch (error) {
        console.error("Error fetching activities:", error);
      }
    };

    fetchActivities();
  }, []);
  const handleClosePopup = () => {
    setShowPopup(false);
  };
  const handleDonateNowClick = () => {
    setShowPopup(true);
  };
  // const [activities, setActivities] = useState([]);
  // const openMap = (url) => {
  //   setSelectedLocation(url);
  // };

  // const closeMap = () => {
  //   setSelectedLocation(null);
  // };

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
              <div className="flex justify-end space-x-4">
                <button className="bg-blue-500 text-white md:px-4 md:py-2 rounded-md">
                  Read More
                </button>
                <button
                  className="bg-green-500 text-white md:px-4 md:py-2 rounded-md"
                  onClick={handleDonateNowClick}
                >
                  Donate Now
                </button>
                {showPopup && (
                  <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
                    <div className="bg-green-100 p-1 rounded shadow-lg w-[600px]">
                      <div className="flex">
                        <button
                          className=" ml-5 align-right text-xl font-bold text-black-600"
                          onClick={handleClosePopup}
                        >
                          &times;
                        </button>
                        <h2
                          className=" mt-10 ml-[110px]
               lg:text-4xl font-bold mb-2 text-neutral-700"
                        >
                          Donate to <span className="text-green-700">Eco</span>
                          vate
                        </h2>
                      </div>
                     
                      <DonateForms postid={activity._id}/>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* {selectedLocation && (
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
      )} */}
    </div>
  );
};

export default DonateActivities;
