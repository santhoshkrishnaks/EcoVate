import React, { useState, useEffect } from "react";
import { DonateStats } from "./DonateStats";
import DonateForms from "./DonateForms";
import DonateActivities from "./DonateActivities";
import Nav from "./Nav";
import Footer from "./Footer";

export const Donate = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showActivity, setShowActivity] = useState(false);

  const [buffering, setBuffering] = useState(false);
  const handleDonateNowClick = () => {
    setShowPopup(true);
  };
  const handleDonateActivityClick = () => {
    setShowActivity(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
    setShowActivity(false);
  };

  return (
    <>
    <Nav/>
      <div className=" overflow-hidden bg-green-50  lg:min-h-screen flex flex-col">
        <h1 className="text-center lg:text-6xl font-bold  mt-[100px] text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-green-300  text-[20px]   ">
          EcoFund
        </h1>
        <div className="mt-[10px]">
          <p className="mb-8 text-center text-3xl font-bold text-slate-600">
            Donate-Impact-Sustain
          </p>
        </div>
        <div className=" lg:flex  bg-green-50 mt-[10px]">
          {/* Section 1: Donate to Eco */}

          <div className=" ml-[30px] lg:p-10 lg:flex flex-col lg:items-center rounded transition-all duration-500 transform hover:scale-110 hover:border-t-2 hover:border-b-2 hover:border-l-2 hover:border-r-2 lg:w-[600px] lg:h-[300px]  lg:ml-[120px] border-slate-400">
            <h2 className=" lg:text-center lg:te  lg:text-4xl font-bold mb-4 text-neutral-700">
              Donate to <span className="text-green-700">Eco</span>vate
            </h2>
            <p className="lg:w-[500px] lg:h-[100px] w-[300px] text-center mb-10 lg:text-center text-slate-800">
              Your contribution helps us drive sustainable initiatives and
              spread environmental awareness through our company, Ecovate.
              Together, we can make a significant impact on preserving our
              planet.
            </p>
            <button
              onClick={handleDonateNowClick}
              className=" mb-10 ml-20 lg:ml-9 px-4 bg-green-700 text-white lg:px-6 lg:py-3 rounded hover:bg-green-800"
            >
              Donate Now
            </button>
          </div>

          {/* Section 2: Donate to Ecoprojects */}
          <div className=" ml-[30px] lg:p-10 lg:flex flex-col lg:items-center rounded transition-all duration-500 transform hover:scale-110 hover:border-t-2 hover:border-b-2 hover:border-l-2 hover:border-r-2 w-[600px] lg:h-[300px] lg:ml-[120px] border-slate-400">
            <h2
              className=" ml-[80px]
             lg:text-4xl font-bold mb-4 text-neutral-700"
            >
              Donate to <span className="text-green-700">Eco</span> Activities
            </h2>
            <p className="lg:w-[500px] w-[300px] text-center mb-8 lg:text-center text-slate-800">
              Support our hands-on environmental projects and voluntary
              activities. Your donation will directly fund initiatives that aim
              to create a greener and more sustainable future.
            </p>
            <button
              onClick={handleDonateActivityClick}
              className=" mb-10 ml-20 lg:ml-9 px-4 bg-green-700 text-white lg:px-6 lg:py-3 rounded hover:bg-green-800"
            >
              Donate Now
            </button>
          </div>
        </div>
        <DonateStats />
        <div style={{ display: "flex" }}></div>

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
                  Donate to <span className="text-green-700">Eco</span>vate
                </h2>
              </div>
              <DonateForms />
            </div>
          </div>
        )}
        {showActivity && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
            <div className="bg-green-100 overflow-y-scroll p-1 rounded shadow-lg w-[900px]  h-[600px] mt-10 mb-[100px] ">
              <div className="flex">
                <button
                  className=" ml-5 align-right text-xl font-bold text-black-600"
                  onClick={handleClosePopup}
                >
                  &times;
                </button>
                <h2
                  className=" mt-10 ml-[210px]
             lg:text-4xl font-bold mb-2 text-neutral-700"
                >
                  Donate to <span className="text-green-700">Eco</span>{" "}
                  Activities
                </h2>
              </div>
              <DonateActivities />

              <button
                onClick={handleDonateActivityClick}
                className="ml-[400px] mt-10 mb-10  px-4 bg-green-700 text-white lg:px-6 lg:py-3 rounded hover:bg-green-800"
              >
                Explore More
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer/>
    </>
  );
};
export default Donate;
