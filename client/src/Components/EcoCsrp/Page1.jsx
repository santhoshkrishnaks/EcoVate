import '@dotlottie/player-component/dist/dotlottie-player.mjs';

export const Page1 = () => {
  return (
    
    <div className=' bg-green-50  min-h-screen'>
<div className=" pt-[50px]  items-center">
    
    <h1 className='lg:text-5xl font-bold text-center items-center text-neutral-700'><span className='lg:text-5xl text-green-700 font-bold'>Eco</span>Corp</h1>
 
    <h2 className='lg:text-3xl lg:mt-[20px] mb-[20px] font-bold text-center items-center text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300  '>Greening Corporate Practices</h2>
    </div>
<div className=" min-h-screen flex  justify-center p-6">

  <div className=" bg-green-100 flex-col w-1/3 rounded transition-all duration-500 transform hover:scale-105 hover:border-t-2 hover:border-b-2 hover:border-l-2 hover:border-r-2 lg:w-[600px] lg:h-[530px]  border-slate-400">
  <div className="w-full flex justify-center">
                <div className="w-full mt-10 mb-5  max-w-lg">
                    <dotlottie-player 
                        src="https://lottie.host/dd577fb1-4fd6-4ecc-bdbc-2415d99ed9d0/CGhcqAYysw.json" 
                        background="transparent" 
                        speed="1" 
                        style={{ width: '100%', height: '200px' }} 
                        loop 
                        autoplay>
                    </dotlottie-player>
                </div>
            </div>

            <h1 className="text-4xl text-neutral-700 font-bold mb-4 text-center">What Made Us Create  <span className='text-green-700'>Eco</span> 
            Corp</h1>
            <p className="text-xl text-center ml-[50px] w-[500px]">
                EcoCorp was created with a focused mission: to drive corporate sustainability. 
                Our vision is to inspire and support companies in adopting eco-friendly practices, 
                making a positive impact on the environment and paving the way for a greener future. 
                Together, we can achieve lasting environmental responsibility.
            </p>
            
            </div>

            <div className=' bg-green-100  w-1/3 lg:ml-[100px] rounded transition-all duration-500 transform hover:scale-105 hover:border-t-2 hover:border-b-2 hover:border-l-2 hover:border-r-2 lg:w-[600px] lg:h-[530px]  border-slate-400'>
<div className="w-full max-w-lg">
                    <dotlottie-player 
                        src="https://lottie.host/e04db8a9-0ad6-4c20-9693-da4dfa2765d7/ZSu6dtczDH.json" 
                        background="transparent" 
                        speed="1" 
                        style={{ width: '100%', height: '250px' }} 
                        loop 
                        autoplay>
                    </dotlottie-player>
                </div>
           
                <h1 className="text-4xl text-neutral-700 font-bold mb-4 text-center">Why Choose <span className='text-green-700'>Eco</span> 
            Corp?</h1>
            <p className="text-xl text-center mb-0 ml-[50px] w-[500px]">
            Choose EcoCorp to advance your CSR efforts and support global sustainability goals. 
                Our green credit program rewards eco-friendly practices, helping you make a positive 
                environmental impact and drive meaningful change in your industry. Join us to lead in 
                corporate responsibility and contribute to a greener future.
            </p>
            </div>
        </div>



      



    </div>
   
  )
}
