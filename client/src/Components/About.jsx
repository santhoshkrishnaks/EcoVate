import Stats from "./Stats";
import img from "../assets/about1.png";
import { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import "@dotlottie/player-component";

const About = () => {
  useEffect(() => {
    // Initialize ScrollReveal
    ScrollReveal().reveal(".reveal1", {
      origin: "top",
      distance: "20px",
      duration: 500,
      easing: "ease-out",
      reset: true,
      delay: 200,
    });
  }, []);

  return (
    <div>
      <section className="bg-green-50 min-h-screen">
        <div className="container mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8 justify-center">
            <div className="max-w-lg">
              <h1 className="text-3xl font-extrabold text-slate-500 sm:text-4xl">
                About Us
              </h1>
              <p className="mt-4 text-gray-600 text-lg">
                Welcome to Ecovate, the premier platform for environmental
                activists dedicated to making a positive impact on our planet.
                Our community is a vibrant space where passionate individuals
                and groups come together to share initiatives, collaborate on
                projects, and amplify their voices for a more sustainable
                future.
              </p>
            </div>

            <div className="mt-12 md:mt-0">
              <dotlottie-player
                src="https://lottie.host/52467f1c-00ef-41a5-942c-6ce9f174d2d2/QHQxoZSTse.json"
                background="transparent"
                speed="1"
                style={{ width: "300px", height: "300px" }}
                loop
                autoplay
              ></dotlottie-player>
            </div>
          </div>
        </div>
      </section>
      <Stats />

      <section className="py-12 bg-green-50 relative min-h-screen">
        <div className="container mx-auto flex flex-col lg:flex-row items-center px-4 sm:px-6 lg:px-8 gap-5 mt-10">
          <div className="lg:w-1/2 mb-8 lg:mb-0 lg:mr-8">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="Environmental Activism"
              className="object-cover w-full h-full rounded-lg shadow-md"
              height={500}
              width={700}
            />
          </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Mission
            </h2>
            <p className="reveal1 text-lg text-gray-700">
              Our mission is to empower environmental activists by providing a
              space where ideas can flourish, actions can be coordinated, and
              change can be accelerated. We believe that by uniting diverse
              voices and efforts, we can create a powerful movement that drives
              meaningful environmental progress.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
