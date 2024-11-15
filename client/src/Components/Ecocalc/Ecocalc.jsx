import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../Header_Footer/Footer";
import Nav from "../Header_Footer/Nav";
import { useEffect, useContext } from "react";
import Create from "../Context";
import Loader from "../Loader/Loader.jsx";
import { useUser } from "@clerk/clerk-react";
import axios from "axios";
import {toast} from 'react-hot-toast';

// EnergyForm Component
const EnergyForm = ({ formData, handleChange }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Energy Consumption
      </h2>
      <div>
        <label className="block text-gray-600">
          Monthly Electricity Consumption (kWh)
        </label>
        <input
          type="number"
          id="inp"
          name="electricityConsumption"
          value={formData.electricityConsumption || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded remove-arrow"
        />
      </div>
      <div>
        <label className="block text-gray-600">Source of Electricity</label>
        <select
          name="electricitySource"
          value={formData.electricitySource || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="Coal">Coal</option>
          <option value="Natural Gas">Natural Gas</option>
          <option value="Renewable">Renewable</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Type of Heating System</label>
        <input
          type="text"
          name="heatingSystem"
          value={formData.heatingSystem || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Monthly Heating Fuel Consumption
        </label>
        <input
          type="number"
          name="heatingFuelConsumption"
          value={formData.heatingFuelConsumption || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Cooling System Type</label>
        <input
          type="text"
          name="coolingSystem"
          value={formData.coolingSystem || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// TransportationForm Component
const TransportationForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Transportation
      </h2>
      <div>
        <label className="block text-gray-600">Vehicle Type and Model</label>
        <input
          type="text"
          name="vehicleType"
          value={formData.vehicleType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Fuel Type</label>
        <select
          name="fuelType"
          value={formData.fuelType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        >
          <option value="Gasoline">Gasoline</option>
          <option value="Diesel">Diesel</option>
          <option value="Electric">Electric</option>
        </select>
      </div>
      <div>
        <label className="block text-gray-600">Annual Mileage</label>
        <input
          type="number"
          name="annualMileage"
          value={formData.annualMileage || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Public Transport Usage (Monthly)
        </label>
        <input
          type="text"
          name="publicTransport"
          value={formData.publicTransport || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Air Travel Details</label>
        <input
          type="text"
          name="airTravel"
          value={formData.airTravel || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// HousingForm Component
const HousingForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Housing
      </h2>
      <div>
        <label className="block text-gray-600">
          Size of Residence (Square Feet)
        </label>
        <input
          type="number"
          name="residenceSize"
          value={formData.residenceSize || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Type of Housing</label>
        <input
          type="text"
          name="housingType"
          value={formData.housingType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Insulation and Energy Efficiency
        </label>
        <input
          type="text"
          name="insulation"
          value={formData.insulation || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// DietForm Component
const DietForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Diet and Food Consumption
      </h2>
      <div>
        <label className="block text-gray-600">Dietary Preferences</label>
        <input
          type="text"
          name="dietaryPreferences"
          value={formData.dietaryPreferences || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Frequency of Meat and Dairy Consumption
        </label>
        <input
          type="text"
          name="meatDairyConsumption"
          value={formData.meatDairyConsumption || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Food Waste per Week/Month</label>
        <input
          type="number"
          name="foodWaste"
          value={formData.foodWaste || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// WasteForm Component
const WasteForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Waste Production
      </h2>
      <div>
        <label className="block text-gray-600">
          Amount of Household Waste Generated
        </label>
        <input
          type="number"
          name="householdWaste"
          value={formData.householdWaste || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Recycling and Composting Practices
        </label>
        <input
          type="text"
          name="recyclingPractices"
          value={formData.recyclingPractices || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Type of Waste</label>
        <input
          type="text"
          name="wasteType"
          value={formData.wasteType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// WaterForm Component
const WaterForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Water Usage
      </h2>
      <div>
        <label className="block text-gray-600">
          Monthly Water Usage (Gallons/Liters)
        </label>
        <input
          type="number"
          name="waterUsage"
          value={formData.waterUsage || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Water Conservation Practices
        </label>
        <input
          type="text"
          name="waterConservation"
          value={formData.waterConservation || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// GoodsForm Component
const GoodsForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Goods and Services
      </h2>
      <div>
        <label className="block text-gray-600">Annual Spending on Goods</label>
        <input
          type="number"
          name="goodsSpending"
          value={formData.goodsSpending || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Type of Goods Purchased</label>
        <input
          type="text"
          name="goodsType"
          value={formData.goodsType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Frequency of Purchasing New Goods
        </label>
        <input
          type="text"
          name="goodsFrequency"
          value={formData.goodsFrequency || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// LifestyleForm Component
const LifestyleForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Lifestyle Choices
      </h2>
      <div>
        <label className="block text-gray-600">Frequency of Travel</label>
        <input
          type="text"
          name="travelFrequency"
          value={formData.travelFrequency || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">Lifestyle Habits</label>
        <input
          type="text"
          name="lifestyleHabits"
          value={formData.lifestyleHabits || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

// OffsetsForm Component
const OffsetsForm = ({ formData, handleChange }) => {
  document.addEventListener("wheel", function (event) {
    if (document.activeElement.type === "number") {
      document.activeElement.blur();
    }
  });
  return (
    <form className="space-y-4">
      <h2 className="mt-5 mb-10 text-xl text-center text-green-500 md:text-3xl text-bold">
        Carbon Offsets
      </h2>
      <div>
        <label className="block text-gray-600">Amount Spent on Offsets</label>
        <input
          type="number"
          id="inp"
          name="offsetsSpent"
          value={formData.offsetsSpent || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
      <div>
        <label className="block text-gray-600">
          Types of Offsets Purchased
        </label>
        <input
          type="text"
          name="offsetsType"
          value={formData.offsetsType || ""}
          onChange={handleChange}
          className="w-[80%] mt-1 p-2 border border-gray-300 rounded"
        />
      </div>
    </form>
  );
};

const calculateCarbonFootprint = (formData) => {
  const energyScore = formData.electricityConsumption * 0.5; // Simplified example
  const transportationScore = formData.annualMileage * 0.1; // Simplified example
  const housingScore = formData.residenceSize * 0.3; // Simplified example
  const dietScore = formData.meatDairyConsumption * 0.2; // Simplified example
  const wasteScore = formData.householdWaste * 0.1; // Simplified example
  const waterScore = formData.waterUsage * 0.05; // Simplified example
  const goodsScore = formData.goodsSpending * 0.4; // Simplified example
  const lifestyleScore = formData.lifestyleHabits * 0.3; // Simplified example
  const offsetsScore = formData.offsetsSpent * -0.2; // Simplified example

  return {
    energy: energyScore,
    transportation: transportationScore,
    housing: housingScore,
    diet: dietScore,
    waste: wasteScore,
    water: waterScore,
    goods: goodsScore,
    lifestyle: lifestyleScore,
    offsets: offsetsScore,
  };
};

// Main Ecocalc Component
const Ecocalc = () => {
  const [activeTab, setActiveTab] = useState("energy");
  const [formData, setFormData] = useState({
    electricityConsumption: "",
    electricitySource: "",
    heatingSystem: "",
    heatingFuelConsumption: "",
    coolingSystem: "",
    vehicleType: "",
    fuelType: "",
    annualMileage: "",
    publicTransport: "",
    airTravel: "",
    residenceSize: "",
    housingType: "",
    insulation: "",
    dietaryPreferences: "",
    meatDairyConsumption: "",
    foodWaste: "",
    householdWaste: "",
    recyclingPractices: "",
    wasteType: "",
    waterUsage: "",
    waterConservation: "",
    goodsSpending: "",
    goodsType: "",
    goodsFrequency: "",
    travelFrequency: "",
    lifestyleHabits: "",
    offsetsSpent: "",
    offsetsType: "",
  });
  const { load, setLoad } = useContext(Create);
  const [username,setUsername] = useState();
  const { user } = useUser();
  useEffect(() => {
    const log = async () => {
        if (user) {
            setUsername(user.username);
          }
        };
        log();
      }, [user]);
  const [send,setSend]=useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleSubmit = async () => {
  const submittingToastId = toast.loading('Submitting...', { id: 'submit' });

  try {
    setSend(true);

    setTimeout(() => {
      toast.dismiss(submittingToastId);
      
      const analyzingToastId = toast.loading('Analyzing the uses...', { id: 'analyze' });

      setTimeout(() => {
        toast.dismiss(analyzingToastId);
        
        const generatingToastId = toast.loading('Generating report...', { id: 'generate' });

        setTimeout(() => {
          toast.dismiss(generatingToastId);

          const successToastId = toast.success('Successfully generated! Redirecting...', { id: 'success' });

          setTimeout(() => {
            navigate("/result", {
              state: {
                scores: calculateCarbonFootprint(formData),
                user: { username },
                formData,
              },
            });
          }, 3000);

        }, 5000);

      }, 3000);

    }, 4000);

    const scores = calculateCarbonFootprint(formData);
    const totalFootprint = Object.values(scores).reduce((acc, score) => acc + score, 0);

    await axios.post("https://ecovate-nqq4.onrender.com/ecocalc", {
      username: username,
      footprint: totalFootprint,
    });

  } catch (error) {
    toast.error('Error posting data!', { id: 'submit' });
    console.error("Error posting data:", error);
  } finally {
    setSend(false);
  }
};


  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);
  return (
    <div>
      {load ? (
        <Loader />
      ) : (
        <div>
          <Nav />
          <div className="w-screen min-h-screen p-6 bg-green-50 ecocal">
            <div>
              <h1 className="items-center text-5xl font-bold text-center text-neutral-700">
                <span className="text-5xl font-bold text-green-700">Eco</span>
                Calc
              </h1>
              <h2 className="lg:text-3xl lg:mt-[20px] mb-[20px] font-bold text-center items-center text-transparent bg-clip-text bg-gradient-to-r from-green-900 to-green-300 mb-9">
                Greening Corporate Practices
              </h2>
            </div>
            <div className="container w-[60vw] bg-white shadow-md rounded-lg p-8 rounded-[24px] my-[20px]">
              <div className="inline-block text-left">
                <div>
                  <button
                    type="button"
                    className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-green-600 text-white rounded px-3 py-2 text-sm font-semibold"
                    id="menu-button"
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    onClick={toggleMenu}
                  >
                    Select
                    <svg
                      className="w-5 h-5 -mr-1 black"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </div>

                {isOpen && (
                  <div
                    className="absolute z-10 mt-2 origin-top-right bg-white rounded-md shadow-lg w-96 ring-1 ring-black ring-opacity-5 "
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="menu-button"
                    tabIndex="-1"
                  >
                    <div className="py-1 " role="none">
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50 "
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-0"
                        onClick={() => {
                          setActiveTab("energy");
                          setIsOpen(false);
                        }}
                      >
                        Energy
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-1"
                        onClick={() => {
                          setActiveTab("transportation");
                          setIsOpen(false);
                        }}
                      >
                        Transportation
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50 "
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                        onClick={() => {
                          setActiveTab("housing");
                          setIsOpen(false);
                        }}
                      >
                        Housing
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                        onClick={() => {
                          setActiveTab("diet");
                          setIsOpen(false);
                        }}
                      >
                        Diet
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        id="menu-item-2"
                        onClick={() => {
                          setActiveTab("waste");
                          setIsOpen(false);
                        }}
                      >
                        Waste
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => {
                          setActiveTab("water");
                          setIsOpen(false);
                        }}
                        id="menu-item-2"
                      >
                        Water
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => {
                          setActiveTab("goods");
                          setIsOpen(false);
                        }}
                        id="menu-item-2"
                      >
                        Goods
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => {
                          setActiveTab("lifestyle");
                          setIsOpen(false);
                        }}
                        id="menu-item-2"
                      >
                        LifeStyle
                      </span>
                      <span
                        className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-green-50"
                        role="menuitem"
                        tabIndex="-1"
                        onClick={() => {
                          setActiveTab("offsets");
                          setIsOpen(false);
                        }}
                        id="menu-item-2"
                      >
                        Offsets
                      </span>
                    </div>
                  </div>
                )}
              </div>

              <div className="mb-6">
                {activeTab === "energy" && (
                  <EnergyForm formData={formData} handleChange={handleChange} />
                )}
                {activeTab === "transportation" && (
                  <TransportationForm
                    formData={formData}
                    handleChange={handleChange}
                  />
                )}
                {activeTab === "housing" && (
                  <HousingForm
                    formData={formData}
                    handleChange={handleChange}
                  />
                )}
                {activeTab === "diet" && (
                  <DietForm formData={formData} handleChange={handleChange} />
                )}
                {activeTab === "waste" && (
                  <WasteForm formData={formData} handleChange={handleChange} />
                )}
                {activeTab === "water" && (
                  <WaterForm formData={formData} handleChange={handleChange} />
                )}
                {activeTab === "goods" && (
                  <GoodsForm formData={formData} handleChange={handleChange} />
                )}
                {activeTab === "lifestyle" && (
                  <LifestyleForm
                    formData={formData}
                    handleChange={handleChange}
                  />
                )}
                {activeTab === "offsets" && (
                  <OffsetsForm
                    formData={formData}
                    handleChange={handleChange}
                  />
                )}
              </div>

              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-green-600 rounded"
              >
                {send?("Submitting..."):("Submit")}
              </button>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </div>
  );
};

export default Ecocalc;
