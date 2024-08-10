import { DotLottiePlayer } from '@dotlottie/player-component'
import React from 'react'

export const Page2 = () => {
  return (
    <div>
      <section className="py-12 bg-green-100 text-gray-100 sm:py-12 lg:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className='lg:text-5xl font-bold text-center items-center text-neutral-700'><span className='lg:text-5xl text-green-700 font-bold'>Eco</span>Corp LifeCycle</h1>
       
          <div className="grid max-w-4xl lg:max-w-6xl mx-auto mt-2 text-center    gap-y-[30px] sm:gap-x-8 sm:grid-cols-2 lg:grid-cols-3 sm:mt-12 lg:mt-10 sm:text-left">
            
            {/* First Row */}
            <div className="relative gap-10">
              <div className="absolute -inset-1">
                <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-600 via-neutral-600 to-green-900"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl md:h-[260px] w-64 md:w-full ">
                <div className="p-9">
                  <div className="w-12 h-12 mx-auto bg-green-500 text-gray-100 rounded-full flex items-center justify-center text-xl font-bold">1</div>
                  <h3 className="mt-6 text-xl font-bold text-neutral-700 sm:mt-3">Registration</h3>
                  <p className="mt-3 text-base text-gray-600">
                   Fill out the form on Ecocorp's website with company details.
                 Upload required environmental policy and certifications.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-600 via-neutral-600 to-green-900"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl md:h-[260px] w-64 md:w-full">
              <div className="p-9">
                  <div className="w-12 h-12 mx-auto bg-green-500 text-gray-100 rounded-full flex items-center justify-center text-xl font-bold">2</div>
                  <h3 className="mt-6 text-xl font-bold text-neutral-700 sm:mt-3">Initial Assessment</h3>
                  <p className="mt-3 text-base text-gray-600">
                   Ecocorp reviews the submitted information 
                  and send initial feedback and next step guidelines.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-600 via-neutral-600 to-green-900"></div>
              </div>
              <div className="relative overflow-hidden bg-white shadow-md rounded-xl md:h-[260px] w-64 md:w-full">
              <div className="p-9">
                  <div className="w-12 h-12 mx-auto bg-green-500 text-gray-100 rounded-full flex items-center justify-center text-xl font-bold">3</div>
                  <h3 className="mt-6 text-xl font-bold text-neutral-700 sm:mt-3"> Data Assessment</h3>
                  <p className="mt-3 text-base text-gray-600">
                  Provide comprehensive data on the company's environmental impact. Ecocorp may visit the site to verify data.
                  </p>
                </div>
             
              </div>
            </div>
            {/* Second Row */}
            <div className="lg: relative col-span-1 lg:col-span-1 lg:col-start-1">
            <div className="absolute -inset-1">
              <div className="w-full h-full rotate-180 opacity-30 blur-lg filter bg-gradient-to-r from-green-600 via-neutral-600 to-green-900"></div>
              </div>
              
              <div className="relative  bg-white shadow-md rounded-xl md:h-[270px] md:w-[375px] w-64">
              <div className="p-9 ">
                  <div className="w-12 h-12 mx-auto bg-green-500 text-gray-100 rounded-full flex items-center justify-center text-xl font-bold -mt-5">4</div>
                  <h3 className="mt-1 text-xl font-bold text-neutral-700 sm:mt-3"> Sustainability Audit</h3>
                  <p className="mt-3 text-base text-gray-600">
                  Engage a certified third-party auditor approved by Ecocorp to conduct an in-depth sustainability audit of the company's operations.
                  Submit the audit report to Ecocorp.
                  </p>
             
              </div>
              </div>
            </div>




            
            <div className="w-full mt-1 mb-5  max-w-lg rounded-3xl">
                    <dotlottie-player 
                        src="https://lottie.host/270f0002-db39-4ec4-841b-b0c45970d449/6FGYRc2cJc.json" 
                        background="transparent" 
                        speed="2" 
                        style={{ width: '100%', height: '265px' , }} 
                        loop 
                        autoplay>
                    </dotlottie-player>
                </div>
            <div className="relative col-span-1 lg:col-span-1 lg:col-start-3 ">
           
              <div className="   md:w-[375px] relative bg-white shadow-md rounded-xl md:h-[270px] w-64 ">
              <div className="p-9 ">
                  <div className="w-12 h-12 mx-auto bg-green-500 text-gray-100 rounded-full flex items-center justify-center text-xl font-bold -mt-5">5</div>
                  <h3 className="mt-1 text-xl font-bold text-neutral-700 sm:mt-3">Certification and Participation</h3>
                  <p className="mt-3 text-base text-gray-600">
                  Ecocorp reviews the report and awards certification if standards are met.Commit to regular updates and annual reviews.
                  </p>
             
              </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
