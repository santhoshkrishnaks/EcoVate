import { useAuth } from "@clerk/clerk-react";
import { DotLottiePlayer } from "@dotlottie/player-component";
import React from "react";
import {Link, useNavigate} from "react-router-dom"
export const EcoCorpHero = () => {
  const { isSignedIn } = useAuth();
  const login=isSignedIn;
  const navi=useNavigate();
  return (
    <div>
      <div className="flex flex-col items-center justify-between flex-1 p-4 bg-green-50 lg:flex-row lg:items-start">
        <div className="flex flex-col items-center text-center space-y-4 lg:ml-[100px]  lg:mt-[70px] lg:space-y-6 lg:w-1/2">
          <h1 className="text-2xl font-bold lg:text-6xl ">
            <span className="text-green-700">Eco</span>Corp
          </h1>
          <p className="mb-6 text-lg lg:text-2xl">
            Empowering corporate companies with sustainable development
            solutions for a greener future.Ecovate provide tailored strategies
            and innovative solutions to help corporate organization reduce their
            environmental footprint.
          </p>
          <span
          onClick={()=>{ if (isSignedIn) {
            navi('/Ecocorp');
          } else {
            navi('/signin');
          }}}
            className="inline-block px-8 py-3 font-semibold text-white bg-green-700 rounded-lg cursor-pointer hover:bg-green-900"
          >
            Visit Now !!
          </span>
        </div>

        {/* Animated SVG */}
        <div className="flex-shrink-0 w-64 lg:w-1/3 flex justify-center lg:justify-end  lg:mt-0 lg:mr-[100px] sm:mr-14">
          <dotlottie-player
            src="https://lottie.host/de37be2f-82b6-426f-9903-483972a46b42/L7ahoLkSO2.json"
            background="transparent"
            speed="1"
            style={{ width: "450px", height: "360px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>

      {/* //2nd */}
      <div className="flex flex-col items-center justify-between flex-1 p-4 bg-green-100 lg:flex-row lg:items-start">
        {/* animated */}
        <div className="flex-shrink-0 w-64 lg:w-1/3 flex justify-center lg:justify-end  lg:mt-0 lg:mr-[100px] sm:mr-14">
          <dotlottie-player
            src="https://lottie.host/1e607e9a-fffa-4e38-bfa0-30ee19c44d52/2NE04IrLpu.json"
            background="transparent"
            speed="1"
            style={{ width: "450px", height: "370px" }}
            loop
            autoplay
          ></dotlottie-player>
        </div>

        <div className="flex flex-col items-center text-center space-y-4 lg:ml-[100px] lg:mr-[100px] lg:mt-[20px] lg:space-y-6 lg:w-1/2">
          <h1 className="text-2xl font-bold lg:text-6xl ">
            <span className="text-green-700">Eco</span>Calc
          </h1>
          <p className="mb-6 text-lg lg:text-2xl">
            Calculate your carbon footprint with precision. Understand your
            environmental impact and get actionable insights to reduce emissions
            for a more sustainable future.Start your journey towards
            sustainability with precise and actionable data.
          </p>
          <Link
            to="/Ecocalc"
            className="inline-block px-8 py-3 font-semibold text-white bg-green-700 rounded-lg hover:bg-green-900 "
          >
            Try Now !!
          </Link>
        </div>
      </div>
    </div>
  );
};
 