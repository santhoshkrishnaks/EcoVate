import { DotLottiePlayer } from "@dotlottie/player-component";
import React from "react";

export const EcoCorpHero = () => {
  return (
    <div>
      <div className="flex-1 bg-green-50 flex flex-col lg:flex-row items-center lg:items-start justify-between p-4">
        <div className="flex flex-col items-center text-center space-y-4 lg:ml-[100px]  lg:mt-[70px] lg:space-y-6 lg:w-1/2">
          <h1 className="text-2xl lg:text-6xl font-bold ">
            <span className="text-green-700">Eco</span>Corp
          </h1>
          <p className="text-lg lg:text-2xl mb-6">
            Empowering corporate companies with sustainable development
            solutions for a greener future.Ecovate provide tailored strategies
            and innovative solutions to help corporate organization reduce their
            environmental footprint.
          </p>
          <a
            href="/Ecocorp"
            className="inline-block px-8 py-3  bg-green-700 hover:bg-green-900 text-white rounded-lg font-semibold "
          >
            Visit Now !!
          </a>
        </div>

        {/* Animated SVG */}
        <div className="flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end  lg:mt-0 lg:mr-[100px] sm:mr-14">
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
      <div className="flex-1 bg-green-100 flex flex-col lg:flex-row items-center lg:items-start justify-between p-4">
        {/* animated */}
        <div className="flex-shrink-0 lg:w-1/3 flex justify-center lg:justify-end  lg:mt-0 lg:mr-[100px] sm:mr-14">
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
          <h1 className="text-2xl lg:text-6xl font-bold ">
            <span className="text-green-700">Eco</span>Calc
          </h1>
          <p className="text-lg lg:text-2xl mb-6">
            Calculate your carbon footprint with precision. Understand your
            environmental impact and get actionable insights to reduce emissions
            for a more sustainable future.Start your journey towards
            sustainability with precise and actionable data.
          </p>
          <a
            href="/Ecocalc"
            className="inline-block px-8 py-3  bg-green-700 hover:bg-green-900 text-white rounded-lg font-semibold "
          >
            Try Now !!
          </a>
        </div>
      </div>
    </div>
  );
};
