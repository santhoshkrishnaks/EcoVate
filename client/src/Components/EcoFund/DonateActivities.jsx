import React, { useEffect, useState } from "react";
import axios from "axios";
import DonateForms from "./DonateForms";
const DonateActivities = () => {
   const [showPopup, setShowPopup] = useState(false);
  const [activities, setActivities] = useState([]);
  useEffect(() => {
    const fetchActivities = async () => {
      try {
        const response = await axios.get("https://ecovate-nqq4.onrender.com/gposts");
        setActivities(response.data);
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
    </div>
  );
};

export default DonateActivities;
