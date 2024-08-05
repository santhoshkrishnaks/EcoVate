import React from 'react'
import '@dotlottie/player-component/dist/dotlottie-player.mjs';

const Hero = () => {
    const lottiePlayerSrc="https://lottie.host/575d36dd-4d87-421f-ae2f-4600b6e9215f/JJWwJ87e6Z.json"
  return (
    <div className='min-h-screen bg-green-100'>
    <section className="sm:mt-6 lg:-mt-[112px]  max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen ">
        <div className="mb-10 mx-auto max-w-7xl px-4 sm:-mt-[24px] sm:px-6 lg:mt-20 lg:px-3 xl:mt-28 flex gap-3 flex-col lg:flex-row">
          <div className="text-left lg:py-14 sm:py-8 sm:mt-10">
            <h1 className="text-4xl tracking-tight font-extrabold text-neutral-700 sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="block xl:inline text-green-900">Hello </span>
              <span className="block text-neutral-700 xl:inline">The Perfect Platform for Environment </span>
              <span className="block xl:inline text-green-900">Sustainability</span>
            </h1>
            <p className="mt-3 text-base text-neutral-700 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl">
              Hello World
            </p>
            
            <div className="mt-5 sm:mt-8 sm:flex lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href='#'
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gray-800 hover:bg-gray-600 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              <div className="mt-3 sm:mt-0 sm:ml-3">
                <a
                  href='#'
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-800 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div>
            </div>
            
          </div>
         
          <div className="lg:inset-y-0 lg:right-0 lg:w-1/2 lg:py-12 sm:mt-8  ">
            <div className="hidden sm:block">
              <dotlottie-player
                src={lottiePlayerSrc}
                background="transparent"
                speed="1"
                style={{ width: '550px', height: '550px' }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className="block sm:hidden">
              <dotlottie-player
               src={lottiePlayerSrc}
                background="transparent"
                speed="1"
                style={{ width: '290px', height: '350px' }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
          {/* End of Image Section */}
        </div>
      </section>
      </div>
  )
}

export default Hero