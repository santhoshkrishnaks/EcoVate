import { useAuth, useUser } from '@clerk/clerk-react';
import '@dotlottie/player-component/dist/dotlottie-player.mjs';
import React, { useEffect, useRef } from 'react';
import toast from 'react-hot-toast';

const Hero = () => {
  const { user } = useUser();
  const { isSignedIn } = useAuth();

  const hasMounted = useRef(false); 
  const hasShownToast = useRef(false); 

  useEffect(() => {
  
    if (isSignedIn && !hasShownToast.current) {
 
      if (!sessionStorage.getItem('toastShown')) {
        toast.success(`Welcome back ${user.username}`, {
          duration: 4000,
        });

        sessionStorage.setItem('toastShown', 'true'); 
        hasShownToast.current = true; 
      }
    }
  }, [isSignedIn, user]); 

  useEffect(() => {
    
    if (!hasMounted.current) {
      hasMounted.current = true;
    }
  }, []); 

  const lottiePlayerSrc =
    'https://lottie.host/575d36dd-4d87-421f-ae2f-4600b6e9215f/JJWwJ87e6Z.json';

  return (
    <div className='min-h-screen bg-green-100'>
      <section className='sm:mt-6 lg:-mt-[112px] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-screen '>
        <div className='mb-10 mx-auto max-w-7xl px-4 sm:-mt-[24px] sm:px-6 lg:mt-20 lg:px-3 xl:mt-28 flex gap-3 flex-col lg:flex-row'>
          <div className='mt-10 text-left lg:py-14 sm:py-8'>
            <h1 className='text-4xl font-extrabold tracking-tight text-neutral-700 sm:text-5xl md:text-6xl lg:text-7xl'>
              <span className='block text-neutral-700 xl:inline'>
                Redefining{' '}
                <span className='block text-green-900 xl:inline'>Sustainability</span> with Every Choice
              </span>
            </h1>
            <p className='mt-3 text-base text-neutral-700 sm:mt-5 sm:text-lg sm:max-w-xl md:mt-5 md:text-xl'>
              EcoVate provides innovative solutions for environmental sustainability, with EcoConnect for environmentalist communities, EcoCorp for corporate green credits, and much more.
            </p>
            <div className='mt-5 sm:mt-8 sm:flex lg:justify-start'>
              <div className='rounded-md shadow'>
                <a
                  href='#connect'
                  className='flex items-center justify-center w-full px-8 py-3 text-base font-medium text-white bg-gray-800 border border-transparent rounded-md hover:bg-gray-600 md:py-4 md:text-lg md:px-10'
                >
                  Explore Now !!
                </a>
              </div>
            </div>
          </div>

          <div className='lg:inset-y-0 lg:right-0 lg:w-1/2 lg:py-12 sm:mt-8 '>
            <div className='hidden sm:block'>
              <dotlottie-player
                src={lottiePlayerSrc}
                background='transparent'
                speed='1'
                style={{ width: '550px', height: '550px' }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <div className='block sm:hidden'>
              <dotlottie-player
                src={lottiePlayerSrc}
                background='transparent'
                speed='1'
                style={{ width: '290px', height: '350px' }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
