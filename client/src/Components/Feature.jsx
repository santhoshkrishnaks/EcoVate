import React from 'react';
import StatsSection from './Counter';

const Feature = () => {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='flex-1 bg-slate-50' >
        <StatsSection />
      </div>

      <div className="flex-1 bg-green-100 flex flex-col lg:flex-row items-center lg:items-start justify-between p-4" id="connect">
        {/* Content */}
        <div className="flex flex-col items-center text-center space-y-4 lg:space-y-6 lg:w-1/2">
  <h1 className="text-2xl lg:text-6xl font-bold">
    <span className="text-green-700">Eco</span>Connect
  </h1>
  <p className="text-lg lg:text-2xl mb-6">
    Ecoconnect is an innovative product that aims to streamline your processes and enhance efficiency. Our solution is designed with cutting-edge technology to provide you with the best experience possible.
  </p>
  <span
onClick={()=>{ if (isSignedIn) {
  window.location.href = '/Ecoconnect';
} else {
  window.location.href = '/signin';
}}}    className="inline-block px-8 py-3  bg-green-700 hover:bg-green-900 text-white rounded-lg font-semibold "
  >
    Join Now !!
  </span>
</div>


        {/* Animated SVG */}
        <div className="flex-shrink-0 lg:w-1/2 flex justify-center lg:justify-end mt-4 lg:mt-0 sm:mr-14">
          <dotlottie-player
            src="https://lottie.host/17eb718b-3798-4226-bdf3-2546136598e0/iYQALYy1BM.json"
            background="transparent"
            speed="1"
            style={{ width: '300px', height: '300px' }}
            loop
            autoplay
          ></dotlottie-player>
        </div>
      </div>
    </div>
  );
};

export default Feature;
