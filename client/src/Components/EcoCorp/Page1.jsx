import "@dotlottie/player-component/dist/dotlottie-player.mjs";
import Footer from "../Footer";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import Nav from "../Nav";

export const Page1 = () => {
  return (
    <div>
      <Nav />
      <div className="bg-green-50 min-h-screen">
        <div className="text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-neutral-700">
            <span className="text-green-700">Eco</span> Corp
          </h1>
          <h2 className="text-xl sm:text-2xl md:text-3xl mt-4 mb-6 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300">
            Greening Corporate Practices
          </h2>
        </div>

        <div className="flex flex-col gap-6 px-4 py-6 sm:flex-row sm:justify-center sm:gap-8">
          <div className="bg-green-100 flex flex-col w-full sm:w-1/2 lg:w-1/3 rounded transition-all duration-500 transform hover:scale-105 hover:border-2 border-slate-400">
            <div className="flex justify-center p-4">
              <dotlottie-player
                src="https://lottie.host/dd577fb1-4fd6-4ecc-bdbc-2415d99ed9d0/CGhcqAYysw.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "200px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-700 font-bold mb-4 text-center px-4">
              What Made Us Create <span className="text-green-700">Eco</span>{" "}
              Corp
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center px-4 mb-6">
              EcoCorp was created with a focused mission: to drive corporate
              sustainability. Our vision is to inspire and support companies in
              adopting eco-friendly practices, making a positive impact on the
              environment and paving the way for a greener future. Together, we
              can achieve lasting environmental responsibility.
            </p>
          </div>

          <div className="bg-green-100 flex flex-col w-full sm:w-1/2 lg:w-1/3 rounded transition-all duration-500 transform hover:scale-105 hover:border-2 border-slate-400">
            <div className="flex justify-center p-4">
              <dotlottie-player
                src="https://lottie.host/e04db8a9-0ad6-4c20-9693-da4dfa2765d7/ZSu6dtczDH.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "250px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-neutral-700 font-bold mb-4 text-center px-4">
              Why Choose <span className="text-green-700">Eco</span> Corp?
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-center px-4 mb-6">
              Choose EcoCorp to advance your CSR efforts and support global
              sustainability goals. Our green credit program rewards
              eco-friendly practices, helping you make a positive environmental
              impact and drive meaningful change in your industry. Join us to
              lead in corporate responsibility and contribute to a greener
              future.
            </p>
          </div>
        </div>
      </div>
      <Page2 />
      <Page3 />
      <Footer />
    </div>
  );
};
