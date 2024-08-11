import Create from "../Context";
import Footer from "../Header_Footer/Footer";
import Form from "./Form";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import Nav from "../Header_Footer/Nav";
export const ProjectPop = () => {
  const {showForm,setShowForm}=useContext(Create);
const handleFormClick = () => {
    setShowForm(true);
  };
  const handleCloseForm = () => {
    setShowForm(false);
  }
  
  return (
    <div>
      <Nav />
      <div className="min-h-screen bg-green-50">
        <div
          className="flex-1 flex flex-col lg:flex-row items-center lg:items-start justify-between p-4"
          id="form"
        >
          {/* Content */}
          <div className="flex-shrink-0 lg:w-1/2 flex justify-center mt-4 lg:mt-0 md:-ml-[110px] sm:mr-14 order-1">
            <dotlottie-player
              src="https://lottie.host/5f5e5c71-77ce-46d7-b038-456deca189cd/qYVIpZWP7X.json"
              background="transparent"
              speed="1"
              style={{ width: "400px", height: "400px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 lg:space-y-6 lg:mt-[40px] lg:mr-20 lg:w-1/2 order-2">
            <h1 className="text-2xl lg:text-6xl font-bold">
              <span className="text-green-700">Eco</span>Vision
            </h1>
            <p className="text-lg lg:text-2xl mb-6">
              We're on the lookout for innovative eco-friendly projects! Share
              your ideas with us and collaborate on initiatives that can
              transform our world. Together, let's drive sustainable change and
              protect our planet.
            </p>
            <Link
              onClick={handleFormClick}
              to="#form"
              className="inline-block px-8 py-3 bg-green-700 hover:bg-green-900 text-white rounded-lg font-semibold"
            >
              Share Yours
            </Link>
          </div>
        </div>

        <section className="py-10  sm:py-16 lg:py-9">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 text-center sm:grid-cols-2 gap-y-8 lg:grid-cols-4 sm:gap-12">
              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <img
                    width="48"
                    height="48"
                    src="https://img.icons8.com/color/48/fill-in-form.png"
                    alt="fill-in-form"
                  />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-black">
                  Fill Out the Form
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Complete the online form with detailed information about your
                  project, including its purpose, solution, impact, and
                  implementation plan.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto  rounded-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="100"
                    height="100"
                    viewBox="0 0 48 48"
                  >
                    <path
                      fill="#f2ca00"
                      d="M29.313,6.112c-4.197-1.802-8.757-1.415-12.51,1.059C13.17,9.566,11,13.51,11,17.72	c0,4.334,1.764,6.612,3.47,8.815c1.475,1.904,2.867,3.703,3.35,6.944C18.033,34.916,19.306,36,20.779,36h6.397	c1.495,0,2.788-1.093,3.008-2.543c0.485-3.228,1.875-5.022,3.347-6.922c1.561-2.016,3.174-4.1,3.433-7.769	C37.348,13.324,34.273,8.239,29.313,6.112z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M46,20h-5c-0.553,0-1-0.447-1-1s0.447-1,1-1h5c0.553,0,1,0.447,1,1S46.553,20,46,20z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M25,45h-2c-2.757,0-5-2.243-5-5v-4c0-0.553,0.447-1,1-1s1,0.447,1,1v4c0,1.654,1.346,3,3,3h2	c1.654,0,3-1.346,3-3v-4c0-0.553,0.447-1,1-1s1,0.447,1,1v4C30,42.757,27.757,45,25,45z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M38.565,8.206c-0.292,0-0.58-0.127-0.778-0.371c-0.348-0.429-0.281-1.059,0.148-1.406l3.886-3.146	c0.429-0.348,1.058-0.28,1.406,0.148c0.348,0.429,0.281,1.059-0.148,1.406l-3.886,3.146C39.009,8.133,38.786,8.206,38.565,8.206z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M42.449,34.94c-0.221,0-0.443-0.073-0.628-0.223l-3.886-3.146c-0.43-0.348-0.496-0.978-0.148-1.406	s0.978-0.495,1.406-0.148l3.886,3.146c0.43,0.348,0.496,0.978,0.148,1.406C43.029,34.813,42.741,34.94,42.449,34.94z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M7,20H2c-0.553,0-1-0.447-1-1s0.447-1,1-1h5c0.553,0,1,0.447,1,1S7.553,20,7,20z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M9.435,8.206c-0.221,0-0.443-0.073-0.628-0.223L4.921,4.837c-0.43-0.348-0.496-0.978-0.148-1.406	S5.75,2.935,6.179,3.282l3.886,3.146c0.43,0.348,0.496,0.978,0.148,1.406C10.015,8.079,9.727,8.206,9.435,8.206z"
                    ></path>
                    <path
                      fill="#324561"
                      d="M5.551,34.94c-0.292,0-0.58-0.127-0.778-0.371c-0.348-0.429-0.281-1.059,0.148-1.406l3.886-3.146	c0.429-0.347,1.058-0.28,1.406,0.148c0.348,0.429,0.281,1.059-0.148,1.406l-3.886,3.146C5.994,34.867,5.771,34.94,5.551,34.94z"
                    ></path>
                  </svg>
                </div>
                <h3 className="mt-8 text-xl font-semibold text-black">
                  Submit Your Idea
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Click the submit button and receive a confirmation email.
                  Ensure all required fields are accurately completed.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto  rounded-full">
                  <img
                    width="80"
                    height="80"
                    src="https://img.icons8.com/?size=100&id=Cia7r3FKUAl2&format=png&color=000000"
                    alt="review"
                  />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-black">
                  Review and Shortlisting
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Our expert panel will review submissions. If shortlisted, you
                  will be contacted for further discussions or presentations.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-20 h-20 mx-auto rounded-full">
                  <img
                    width="64"
                    height="64"
                    src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/external-funding-funeral-service-flaticons-lineal-color-flat-icons.png"
                    alt="external-funding-funeral-service-flaticons-lineal-color-flat-icons"
                  />
                </div>
                <h3 className="mt-8 text-xl font-semibold text-black">
                  Selection and Funding{" "}
                </h3>
                <p className="mt-4 text-sm text-gray-600">
                  Final selections are based on innovation and impact. Selected
                  projects will receive funding and further instructions for
                  implementation.
                </p>
              </div>
            </div>
          </div>
        </section>
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center ">
            <div className="overflow-y-auto bg-green-50 p-1 rounded shadow-lg w-[600px] h-[600px]">
              <div className="flex">
                <button
                  className=" ml-5 align-right text-xl font-bold text-black-600"
                  onClick={handleCloseForm}
                >
                  &times;
                </button>
                <h2
                  className=" mt-10 ml-[110px]
               lg:text-4xl font-bold mb-2 text-neutral-700"
                >
                  <span className="text-green-700">Eco</span>Vision Form
                </h2>
              </div>
              <Form />
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
