import React, { useState, useEffect } from "react";
import { DonateStats } from "./DonateStats";
import DonateForms from "./DonateForms";
import DonateActivities from "./DonateActivities";
import Nav from "../Header_Footer/Nav";
import Footer from "../Header_Footer/Footer";

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
      <div className="  bg-green-50  lg:min-h-screen flex flex-col ">
        <h1 className="text-center lg:text-6xl font-bold  mt-4 text-transparent bg-clip-text bg-gradient-to-r from-slate-950 to-green-300  text-[20px]   ">
          EcoFund
        </h1>
        <div className="mt-[10px]">
          <p className="mb-8 text-center text-3xl font-bold text-slate-600">
            Donate-Impact-Sustain
          </p>
        </div>


        <div className="flex flex-col gap-20 md:flex-row bg-green-50 mt-[10px] ">

          {/* Section 1: Donate to Eco */}

      <div className="flex flex-col justify-center items-center gap-5 rounded transition-all duration-500 transform md:hover:scale-105 md:hover:border-2 border-slate-400 md:ml-10">
        
      <h2 className=" text-2xl mt-5 lg:text-center lg:text-4xl font-bold mb-4 text-neutral-700">
              Donate to <span className="text-green-700">Eco</span>vate
            </h2>

            <p className="px-20 ">
            Your contribution helps us drive sustainable initiatives and
              spread environmental awareness through our company, Ecovate.
              Together, we can make a significant impact on preserving our
              planet.

            </p>
            <button
              onClick={handleDonateNowClick}
              className=" my-7 ml-0 px-4 py-4 bg-green-700 text-white lg:px-6 lg:py-3 rounded hover:bg-green-800"
            >
              Donate Now
            </button>


      </div>


      <div className="flex flex-col justify-center items-center gap-5  rounded transition-all duration-500 transform md:hover:scale-105 md:hover:border-2  border-slate-400 md:mr-10">
      <h2 className=" mt-5 text-2xl lg:text-center lg:text-4xl font-bold mb-4 text-neutral-700">
              Donate to <span className="text-green-700">Eco</span>Activities
            </h2>
            <p className="px-16">
            Support our hands-on environmental projects and voluntary
              activities. Your donation will directly fund initiatives that aim
              to create a greener and more sustainable future.

            </p>
            <button
              onClick={handleDonateActivityClick}
              className="my-7 ml-0 px-4 bg-green-700 text-white lg:px-6 py-4 lg:py-3 rounded hover:bg-green-800"
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
            <div className="bg-green-100 overflow-y-scroll p-1 rounded shadow-lg md:w-[900px]  md:h-[600px] w-96 h-[70%] mt-10 mb-[100px] ">
              <div className="flex">
                <button
                  className=" ml-5 align-right text-xl font-bold text-black-600"
                  onClick={handleClosePopup}
                >
                  &times;
                </button>
                <h2
                  className=" ml-20 mt-10 lg:ml-[210px]
             lg:text-4xl font-bold mb-2 text-neutral-700"
                >
                  Donate to <span className="text-green-700">Eco</span>{" "}
                  Activities
                </h2>
              </div>
              <DonateActivities />

              <button
                onClick={handleDonateActivityClick}
                className="ml-[100px] lg:ml-[400px] mt-10 mb-10  px-4 bg-green-700 text-white lg:px-6 lg:py-3 rounded hover:bg-green-800"
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
