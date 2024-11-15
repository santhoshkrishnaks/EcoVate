import React from "react";
import StatsSection from "./Counter";
import { useAuth } from "@clerk/clerk-react";
import {Link, useNavigate} from "react-router-dom"
const Feature = () => {
  const { isSignedIn } = useAuth();
  const navi=useNavigate();
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1 bg-slate-50">
        <StatsSection />
      </div>

      <div
        className="flex flex-col items-center justify-between flex-1 p-4 bg-green-100 lg:flex-row lg:items-start"
        id="connect"
      >
        {/* Content */}
        <div className="flex flex-col items-center space-y-4 text-center lg:space-y-6 lg:w-1/2">
          <h1 className="text-2xl font-bold lg:text-6xl">
            <span className="text-green-700">Eco</span>Connect
          </h1>
          <p className="mb-6 text-lg lg:text-2xl">
            Ecoconnect is an innovative product that aims to streamline your
            processes and enhance efficiency. Our solution is designed with
            cutting-edge technology to provide you with the best experience
            possible.
          </p>
          <span
            onClick={() => {
              if (isSignedIn) {
                navi("/Ecoconnect");
              } else {
                navi("/signin");
              }
            }}
            className="inline-block px-8 py-3 font-semibold text-white bg-green-700 rounded-lg cursor-pointer hover:bg-green-900"
          >
            Join Now !!
          </span>
        </div>

        {/* Animated SVG */}
        <div className="flex justify-center flex-shrink-0 w-64 mt-4 lg:w-1/2 lg:justify-end lg:mt-0 sm:mr-14">
          <dotlottie-player
            src="https://lottie.host/17eb718b-3798-4226-bdf3-2546136598e0/iYQALYy1BM.json"
            background="transparent"
            speed="1"
            style={{ width: "300px", height: "300px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Feature;
